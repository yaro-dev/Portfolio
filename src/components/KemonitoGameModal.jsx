import { useEffect, useState, useRef } from 'react';

// --- IMPORTACIONES DE ASSETS ---
import bgArena from '../assets/game/bg-arena-2.png';
import kemonitoRun1 from '../assets/game/kemonito-run-1.png';
import kemonitoRun2 from '../assets/game/kemonito-run-2.png';
import kemonitoRun3 from '../assets/game/kemonito-run-3.png';
import kemonitoRun4 from '../assets/game/kemonito-run-4.png';
import kemonitoThrow from '../assets/game/kemonito-throw.png';
import banana from '../assets/game/banana.png';
import cactus1 from '../assets/game/cactus-1.png';
import cactus2 from '../assets/game/cactus-2.png';
import cactus3 from '../assets/game/cactus-3.png';
import chair1 from '../assets/game/chair-1.png';
import chair2 from '../assets/game/chair-2.png';
import chair3 from '../assets/game/chair-3.png';

// --- IMPORTACIÓN DE AUDIO ---
// Sugerencia: Usa .wav o .ogg para que el loop sea impecable
import mainThemeAudio from '../assets/game/main-theme.wav'; 

export default function KemonitoGameModal({ isOpen, onClose }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef({}); 
  const canvasRef = useRef(null); 

  // --- NUEVO: REFERENCIAS PARA WEB AUDIO API ---
  const audioCtxRef = useRef(null);
  const audioBufferRef = useRef(null);
  const sourceNodeRef = useRef(null);

  // --- 1. LÓGICA DE SALIDA RÁPIDA (ESC) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // --- 2. PRECARGA DE IMÁGENES ---
  useEffect(() => {
    if (!isOpen || isLoaded) return;
    const imageUrls = {
      bgArena, kemonitoRun1, kemonitoRun2, kemonitoRun3, kemonitoRun4, kemonitoThrow,
      banana, cactus1, cactus2, cactus3, chair1, chair2, chair3
    };

    let loadedCount = 0;
    const totalImages = Object.keys(imageUrls).length;
    const loadedImages = {};

    Object.keys(imageUrls).forEach((key) => {
      const img = new Image();
      img.src = imageUrls[key];
      img.onload = () => {
        loadedImages[key] = img;
        loadedCount++;
        if (loadedCount === totalImages) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };
    });
  }, [isOpen, isLoaded]);

  // --- 3. PRECARGA DE AUDIO (WEB AUDIO API) ---
  useEffect(() => {
    if (!isOpen) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }

    if (!audioBufferRef.current) {
      console.log("Iniciando descarga del .wav...");
      fetch(mainThemeAudio)
        .then(res => {
          if (!res.ok) throw new Error("Vite no encontró el archivo de audio");
          return res.arrayBuffer();
        })
        .then(data => {
          console.log("Decodificando audio en RAM...");
          return audioCtxRef.current.decodeAudioData(data);
        })
        .then(buffer => {
          audioBufferRef.current = buffer;
          console.log("¡Audio cargado y listo para sonar!");
          // Intentamos reproducir en cuanto cargue
          playMusic();
        })
        .catch(err => console.error("Error crítico de audio:", err));
    }

    return () => {
      stopMusic();
    };
  }, [isOpen]);

  // --- FUNCIONES CONTROLADORAS DE AUDIO ---
  const playMusic = () => {
    if (!audioCtxRef.current || !audioBufferRef.current) return;
    
    // Los navegadores bloquean el audio hasta que el usuario interactúe. Esto lo desbloquea.
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    
    stopMusic(); // Evitar que suenen dos canciones encimadas

    const source = audioCtxRef.current.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.loop = true; // ¡El loop perfecto de la Web Audio API!

    const gainNode = audioCtxRef.current.createGain();
    gainNode.gain.value = 0.4; // Volumen

    source.connect(gainNode);
    gainNode.connect(audioCtxRef.current.destination);

    source.start(0);
    sourceNodeRef.current = source;
  };

  const stopMusic = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
  };

  // --- 4. EL MOTOR DEL JUEGO ---
  useEffect(() => {
    if (!isOpen || !isLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Intentamos iniciar la música. (Si el navegador lo bloquea, se iniciará al presionar Espacio)
    playMusic();

    // --- CONTROLES ---
    const keys = { space: false };
    let spacePressedOnce = false; 

    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault(); 
        if (!keys.space) spacePressedOnce = true;
        keys.space = true;
        
        // Desbloquear audio si el navegador lo pausó por seguridad
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'Space') {
        keys.space = false;
        spacePressedOnce = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp);

    // --- ESTADOS DEL JUEGO ---
    let isGameOver = false;
    let score = 0;
    let highScore = localStorage.getItem('kemonitoHighScore') || 0;

    // --- VARIABLES DEL MUNDO Y ENTIDADES ---
    let bgX = 0;
    const bgSpeed = 3;

    const kemoX = 100;
    const kemoY = 240;
    const kemoSize = 90;
    let frameTimer = 0;           
    const frameInterval = 8;      
    let currentKemoFrame = 1;     
    let isThrowing = false;       
    let throwTimer = 0;           

    let bananas = [];
    const bananaSpeed = 7; 
    const bananaSize = 30; 

    let enemies = [];
    let spawnTimer = 0;

    let particles = [];

    const checkCollision = (rect1, rect2) => {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y
      );
    };

    const resetGame = () => {
      isGameOver = false;
      score = 0;
      bananas = [];
      enemies = [];
      particles = [];
      spawnTimer = 0;
      bgX = 0;
      playMusic(); // Reiniciar música
    };

    // --- EL BUCLE PRINCIPAL ---
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- GAME OVER ---
      if (isGameOver) {
        const bgImg = imagesRef.current['bgArena'];
        ctx.drawImage(bgImg, bgX, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImg, bgX + canvas.width, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.drawImage(imagesRef.current['kemonitoRun1'], kemoX, kemoY, kemoSize, kemoSize);
        ctx.fillRect(kemoX, kemoY, kemoSize, kemoSize);

        enemies.forEach(e => {
          const img = e.isCactus ? imagesRef.current[`cactus${e.animFrame}`] : imagesRef.current[`chair${e.typeId}`];
          ctx.drawImage(img, e.x, e.y, e.width, e.height);
        });

        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#fff';
        ctx.font = '40px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('¡GAME OVER!', canvas.width / 2, canvas.height / 2 - 20);
        
        ctx.font = '20px monospace';
        ctx.fillStyle = '#f1c40f';
        ctx.fillText(`Puntuación: ${Math.floor(score)}`, canvas.width / 2, canvas.height / 2 + 20);
        ctx.fillText(`Récord: ${Math.floor(highScore)}`, canvas.width / 2, canvas.height / 2 + 50);
        
        ctx.fillStyle = '#aaa';
        ctx.font = '16px monospace';
        ctx.fillText('Presiona [ESPACIO] para reiniciar', canvas.width / 2, canvas.height / 2 + 100);

        if (spacePressedOnce) {
          spacePressedOnce = false;
          resetGame();
        }

        animationFrameId = requestAnimationFrame(render);
        return; 
      }

      // --- JUEGO CORRIENDO ---
      score += 0.05;

      // Fondo
      bgX -= bgSpeed;
      if (bgX <= -canvas.width) bgX = 0;
      const bgImg = imagesRef.current['bgArena'];
      ctx.drawImage(bgImg, bgX, 0, canvas.width, canvas.height);
      ctx.drawImage(bgImg, bgX + canvas.width, 0, canvas.width, canvas.height);

      // Disparar
      if (spacePressedOnce && !isThrowing) {
        spacePressedOnce = false;
        isThrowing = true;
        throwTimer = 15; 
        bananas.push({
          x: kemoX + kemoSize - 30, y: kemoY + 30, width: bananaSize, height: bananaSize, angle: 0
        });
      }

      // Animar Kemonito
      let imgToDraw;
      if (isThrowing) {
        imgToDraw = imagesRef.current['kemonitoThrow'];
        throwTimer--;
        if (throwTimer <= 0) isThrowing = false;
      } else {
        frameTimer++;
        if (frameTimer >= frameInterval) {
          frameTimer = 0;
          currentKemoFrame++;
          if (currentKemoFrame > 4) currentKemoFrame = 1;
        }
        imgToDraw = imagesRef.current[`kemonitoRun${currentKemoFrame}`];
      }
      ctx.drawImage(imgToDraw, kemoX, kemoY, kemoSize, kemoSize);
      const kemoHitbox = { x: kemoX + 20, y: kemoY + 10, width: kemoSize - 40, height: kemoSize - 10 };

      // Actualizar Bananas
      const bananaImg = imagesRef.current['banana'];
      for (let i = bananas.length - 1; i >= 0; i--) {
        let b = bananas[i];
        b.x += bananaSpeed;
        
        ctx.save();
        ctx.translate(b.x + b.width / 2, b.y + b.height / 2);
        b.angle += 0.2; 
        ctx.rotate(b.angle);
        ctx.drawImage(bananaImg, -b.width / 2, -b.height / 2, b.width, b.height);
        ctx.restore();
        
        if (b.x > canvas.width) {
          bananas.splice(i, 1);
        }
      }

      // Spawner
      spawnTimer--;
      if (spawnTimer <= 0) {
        const isCactus = Math.random() > 0.5; 
        enemies.push({
          x: canvas.width + 50, y: kemoY + 10, width: 80, height: 80,
          isCactus: isCactus, typeId: Math.floor(Math.random() * 3) + 1,
          animTimer: 0, animFrame: 1, isHit: false, hitTimer: 0
        });
        spawnTimer = Math.floor(Math.random() * 90) + 70;
      }

      // Enemigos y Colisiones
      for (let i = enemies.length - 1; i >= 0; i--) {
        let e = enemies[i];
        
        if (!e.isHit) e.x -= (bgSpeed + 1); 

        let enemyImg;
        if (e.isCactus) {
          e.animTimer++;
          if (e.animTimer >= frameInterval && !e.isHit) {
            e.animTimer = 0;
            e.animFrame++;
            if (e.animFrame > 3) e.animFrame = 1;
          }
          enemyImg = imagesRef.current[`cactus${e.animFrame}`];
        } else {
          enemyImg = imagesRef.current[`chair${e.typeId}`];
        }

        if (e.isHit) {
          ctx.save();
          ctx.globalCompositeOperation = 'source-in';
          ctx.drawImage(enemyImg, e.x, e.y, e.width, e.height);
          ctx.fillStyle = 'white';
          ctx.fillRect(e.x, e.y, e.width, e.height);
          
          ctx.globalCompositeOperation = 'source-over';
          ctx.drawImage(enemyImg, e.x, e.y, e.width, e.height);
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(e.x, e.y, e.width, e.height);
          ctx.restore();

          e.hitTimer--;
          if (e.hitTimer <= 0) {
            enemies.splice(i, 1);
            continue; 
          }
        } else {
          ctx.drawImage(enemyImg, e.x, e.y, e.width, e.height);
        }

        if (!e.isHit) {
          const enemyHitbox = { x: e.x + 15, y: e.y + 15, width: e.width - 30, height: e.height - 15 };

          if (checkCollision(enemyHitbox, kemoHitbox)) {
            isGameOver = true;
            stopMusic(); // Detener música al perder
            if (score > highScore) {
              highScore = score;
              localStorage.setItem('kemonitoHighScore', highScore);
            }
          }

          for (let j = bananas.length - 1; j >= 0; j--) {
            let b = bananas[j];
            if (checkCollision(enemyHitbox, b)) {
              for(let p = 0; p < 12; p++) {
                particles.push({
                  x: e.x + (e.width / 2), y: e.y + (e.height / 2),
                  vx: (Math.random() - 0.5) * 12, vy: (Math.random() - 0.5) * 12, 
                  size: Math.random() * 6 + 4, life: 20,                       
                  color: e.isCactus ? (Math.random() > 0.3 ? '#2ecc71' : '#f1c40f') : (Math.random() > 0.3 ? '#bdc3c7' : '#f1c40f')
                });
              }
              bananas.splice(j, 1); 
              e.isHit = true;       
              e.hitTimer = 6;       
              score += 50; 
              break; 
            }
          }
        }

        if (e.x + e.width < 0 && !e.isHit) {
          enemies.splice(i, 1);
        }
      }

      // Partículas
      for (let p = particles.length - 1; p >= 0; p--) {
        let part = particles[p];
        part.x += part.vx;
        part.y += part.vy;
        part.life--; 
        ctx.fillStyle = part.color;
        ctx.fillRect(part.x, part.y, part.size, part.size);
        if (part.life <= 0) particles.splice(p, 1); 
      }

      // Puntuación
      ctx.fillStyle = '#fff';
      ctx.font = '20px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`Puntos: ${Math.floor(score)}`, 20, 40);
      ctx.textAlign = 'right';
      ctx.fillText(`HI: ${Math.floor(highScore)}`, canvas.width - 20, 40);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      stopMusic(); // Limpiar audio al salir del componente
    };
  }, [isOpen, isLoaded]);

  if (!isOpen) return null;

  return (
    <div style={modalStyle}>
      {!isLoaded ? (
        <div style={{ color: 'white', fontFamily: 'monospace', fontSize: '20px' }}>
          Cargando Lucha Runner...
        </div>
      ) : (
        <div style={gameContainerStyle}>
          <canvas ref={canvasRef} width={800} height={400} style={canvasStyle} />
          <p style={instructionsStyle}>
            [Toque] o [ESPACIO] para lanzar banana<br/>
            (Presiona ESC para salir)
          </p>
        </div>
      )}
    </div>
  );
}

const modalStyle = { position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 10, 25, 0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' };
const gameContainerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px' };
const canvasStyle = { width: '100%', height: 'auto', border: '4px solid #fff', borderRadius: '8px', boxShadow: '0 0 30px rgba(100, 50, 255, 0.5)', backgroundColor: '#000', imageRendering: 'pixelated' };
const instructionsStyle = { marginTop: '1rem', color: '#aaa', fontFamily: 'monospace', fontSize: '1rem', textAlign: 'center', lineHeight: '1.5' };