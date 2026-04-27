import { useCallback, useEffect, useRef, useState } from 'react';

const W = 800, H = 520;
const PAD_W = 100, PAD_H = 8, PAD_Y = H - 50, PAD_SPEED = 6;
const BALL_R = 5, BALL_SPEED = 4.8;
const BRICK_COLS = 10, BRICK_ROWS = 6, BRICK_GAP = 4;
const BRICK_W = (W - 40 - (BRICK_COLS - 1) * BRICK_GAP) / BRICK_COLS;
const BRICK_H = 18;
const BRICK_TOP = 70;
const BRICK_LEFT = 20;
const ROW_COLORS = ['#c040d8','#9b30ac','#7a2090','#6b1e7a','#55186a','#3d0f52'];

interface Ball { x: number; y: number; vx: number; vy: number; }
interface Brick { alive: boolean; flash: number; }
interface GS {
  pad: number;
  ball: Ball | null;
  bricks: Brick[][];
  lives: number;
  score: number;
  launching: boolean;
  launchTimer: number;
}

function makeBricks(): Brick[][] {
  return Array.from({ length: BRICK_ROWS }, () =>
    Array.from({ length: BRICK_COLS }, () => ({ alive: true, flash: 0 }))
  );
}

function launchBall(padX: number): Ball {
  const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.7;
  return {
    x: padX + PAD_W / 2,
    y: PAD_Y - BALL_R - 2,
    vx: BALL_SPEED * Math.cos(angle),
    vy: BALL_SPEED * Math.sin(angle),
  };
}

function initGS(): GS {
  return {
    pad: W / 2 - PAD_W / 2,
    ball: null,
    bricks: makeBricks(),
    lives: 3,
    score: 0,
    launching: true,
    launchTimer: 0,
  };
}

function drawGame(ctx: CanvasRenderingContext2D, gs: GS) {
  ctx.fillStyle = '#08060a';
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(107,30,122,0.07)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 48) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += 48) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  ctx.fillStyle = '#6b1e7a';
  ctx.fillRect(0, 0, W, 2);

  for (let row = 0; row < BRICK_ROWS; row++) {
    for (let col = 0; col < BRICK_COLS; col++) {
      const br = gs.bricks[row][col];
      const bx = BRICK_LEFT + col * (BRICK_W + BRICK_GAP);
      const by = BRICK_TOP + row * (BRICK_H + BRICK_GAP);
      if (!br.alive && br.flash === 0) continue;
      if (br.flash > 0 && !br.alive) {
        ctx.fillStyle = `rgba(255,255,255,${(br.flash / 8) * 0.85})`;
      } else {
        ctx.fillStyle = ROW_COLORS[row];
      }
      ctx.fillRect(bx, by, BRICK_W, BRICK_H);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      ctx.strokeRect(bx + 0.5, by + 0.5, BRICK_W - 1, BRICK_H - 1);
    }
  }

  ctx.shadowColor = '#9b30ac';
  ctx.shadowBlur = 14;
  ctx.fillStyle = '#7a2090';
  ctx.fillRect(gs.pad, PAD_Y, PAD_W, PAD_H);
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#c040d8';
  ctx.fillRect(gs.pad, PAD_Y, PAD_W, 2);

  if (gs.ball) {
    ctx.shadowColor = '#c040d8';
    ctx.shadowBlur = 12;
    ctx.fillStyle = '#e8c8f8';
    ctx.beginPath();
    ctx.arc(gs.ball.x, gs.ball.y, BALL_R, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  ctx.fillStyle = 'rgba(8,6,10,0.75)';
  ctx.fillRect(0, H - 28, W, 28);
  ctx.fillStyle = '#9b30ac';
  ctx.font = '11px "JetBrains Mono", monospace';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  const liveStr = '■'.repeat(gs.lives) + '□'.repeat(Math.max(0, 3 - gs.lives));
  ctx.fillText(`LIVES: ${liveStr}`, 20, H - 14);
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(155,48,172,0.5)';
  ctx.fillText('[ ← → ] MOVE PADDLE', W / 2, H - 14);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#9b30ac';
  ctx.fillText(`SCORE: ${String(gs.score).padStart(5, '0')}`, W - 20, H - 14);
  ctx.textAlign = 'left';
}

export default function ArkanoidGame({ onExit }: { onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keysRef = useRef({ left: false, right: false });
  const rafRef = useRef(0);
  const gsRef = useRef<GS>(initGS());
  const [phase, setPhase] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); keysRef.current.left = true; }
      if (e.key === 'ArrowRight') { e.preventDefault(); keysRef.current.right = true; }
    };
    const up = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') keysRef.current.left = false;
      if (e.key === 'ArrowRight') keysRef.current.right = false;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  const retry = useCallback(() => {
    gsRef.current = initGS();
    setScore(0);
    setPhase('playing');
  }, []);

  useEffect(() => {
    if (phase !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const gs = gsRef.current;

    const tick = () => {
      const keys = keysRef.current;

      if (keys.left) gs.pad = Math.max(0, gs.pad - PAD_SPEED);
      if (keys.right) gs.pad = Math.min(W - PAD_W, gs.pad + PAD_SPEED);

      if (gs.launching) {
        gs.launchTimer++;
        gs.ball = { x: gs.pad + PAD_W / 2, y: PAD_Y - BALL_R - 2, vx: 0, vy: 0 };
        if (gs.launchTimer > 90) {
          gs.ball = launchBall(gs.pad);
          gs.launching = false;
          gs.launchTimer = 0;
        }
      }

      if (gs.ball && !gs.launching) {
        const b = gs.ball;
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - BALL_R < 0) { b.x = BALL_R; b.vx = Math.abs(b.vx); }
        if (b.x + BALL_R > W) { b.x = W - BALL_R; b.vx = -Math.abs(b.vx); }
        if (b.y - BALL_R < 0) { b.y = BALL_R; b.vy = Math.abs(b.vy); }

        if (
          b.vy > 0 &&
          b.y + BALL_R >= PAD_Y &&
          b.y - BALL_R <= PAD_Y + PAD_H &&
          b.x + BALL_R >= gs.pad &&
          b.x - BALL_R <= gs.pad + PAD_W
        ) {
          const rel = (b.x - gs.pad) / PAD_W;
          const angle = -Math.PI / 2 + (rel - 0.5) * 1.3;
          const spd = Math.hypot(b.vx, b.vy);
          b.vx = spd * Math.cos(angle);
          b.vy = -Math.abs(spd * Math.sin(angle));
          b.y = PAD_Y - BALL_R - 1;
        }

        outer: for (let row = 0; row < BRICK_ROWS; row++) {
          for (let col = 0; col < BRICK_COLS; col++) {
            const br = gs.bricks[row][col];
            if (!br.alive) continue;
            const bx = BRICK_LEFT + col * (BRICK_W + BRICK_GAP);
            const by = BRICK_TOP + row * (BRICK_H + BRICK_GAP);
            if (
              b.x + BALL_R > bx && b.x - BALL_R < bx + BRICK_W &&
              b.y + BALL_R > by && b.y - BALL_R < by + BRICK_H
            ) {
              br.alive = false;
              br.flash = 8;
              gs.score += (BRICK_ROWS - row) * 10;
              setScore(gs.score);
              const ol = b.x + BALL_R - bx;
              const or2 = bx + BRICK_W - (b.x - BALL_R);
              const ot = b.y + BALL_R - by;
              const ob = by + BRICK_H - (b.y - BALL_R);
              if (Math.min(ol, or2) < Math.min(ot, ob)) b.vx = -b.vx;
              else b.vy = -b.vy;
              break outer;
            }
          }
        }

        if (gs.bricks.every(r => r.every(br => !br.alive))) {
          drawGame(ctx, gs);
          setPhase('won');
          return;
        }

        if (b.y - BALL_R > H) {
          gs.lives--;
          if (gs.lives <= 0) {
            drawGame(ctx, gs);
            setPhase('lost');
            return;
          }
          gs.ball = null;
          gs.launching = true;
          gs.launchTimer = 0;
        }
      }

      gs.bricks.forEach(r => r.forEach(br => { if (br.flash > 0) br.flash--; }));
      drawGame(ctx, gs);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  return (
    <div className="arkanoid-overlay">
      <div className="arkanoid-wrap">
        <div className="arkanoid-header">
          <span className="arkanoid-title">► ARKANOID.EXE</span>
          <button className="arkanoid-back" onClick={onExit}>[ ← back ]</button>
        </div>
        <div className="arkanoid-canvas-wrap">
          <canvas ref={canvasRef} width={W} height={H} className="arkanoid-canvas" />
          {phase === 'won' && (
            <div className="arkanoid-endscreen">
              <div className="arkanoid-end-title">SYSTEM_BREACH.complete</div>
              <div className="arkanoid-end-score">final_score: {String(score).padStart(5, '0')}</div>
              <div className="arkanoid-end-btns">
                <button className="arkanoid-btn" onClick={onExit}>exit_game()</button>
              </div>
            </div>
          )}
          {phase === 'lost' && (
            <div className="arkanoid-endscreen">
              <div className="arkanoid-end-title arkanoid-end-title--lost">CONNECTION_TERMINATED</div>
              <div className="arkanoid-end-score">final_score: {String(score).padStart(5, '0')}</div>
              <div className="arkanoid-end-btns">
                <button className="arkanoid-btn" onClick={retry}>retry()</button>
                <button className="arkanoid-btn" onClick={onExit}>exit_game()</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
