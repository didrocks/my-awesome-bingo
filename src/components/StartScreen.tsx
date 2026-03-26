import type React from 'react';

interface StartScreenProps {
  onStart: () => void;
  onStartCardDeck: () => void;
}

/** Returns mouse event handlers that apply a neon lift/press effect to a button. */
function neonButtonHandlers(
  idleGlow: string,
  hoverGlow: string,
): Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onMouseEnter' | 'onMouseLeave' | 'onMouseDown' | 'onMouseUp'
> {
  return {
    onMouseEnter(e) {
      e.currentTarget.style.boxShadow = hoverGlow;
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave(e) {
      e.currentTarget.style.boxShadow = idleGlow;
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseDown(e) {
      e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
    },
    onMouseUp(e) {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
  };
}

const PINK_GLOW_IDLE  = '0 0 22px rgba(255,45,135,0.45)';
const PINK_GLOW_HOVER = '0 0 36px rgba(255,45,135,0.75), 0 0 16px rgba(255,45,135,0.4)';
const CYAN_GLOW_IDLE  = '0 0 22px rgba(0,217,245,0.40)';
const CYAN_GLOW_HOVER = '0 0 36px rgba(0,217,245,0.70), 0 0 16px rgba(0,217,245,0.35)';

export function StartScreen({ onStart, onStartCardDeck }: StartScreenProps) {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-full overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--color-vs-bg-deep) 0%, var(--color-vs-bg-mid) 45%, var(--color-vs-bg-dusk) 100%)',
      }}
    >
      {/* Retro perspective grid */}
      <div
        aria-hidden="true"
        className="vs-animate absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(0,217,245,0.25) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(0,217,245,0.25) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '60px 60px',
          transform: 'perspective(480px) rotateX(58deg)',
          transformOrigin: '50% 100%',
          animation: 'vs-grid-scroll 2.8s linear infinite',
        }}
      />

      {/* Sunset horizon glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(255,119,0,0.28) 0%, rgba(255,45,135,0.14) 55%, transparent 100%)',
        }}
      />

      {/* Main content — staggered entrance */}
      <div
        className="vs-animate relative z-10 flex flex-col items-center w-full max-w-md px-5 py-10"
        style={{ animation: 'vs-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        {/* ── Hero ── */}
        <header className="text-center mb-10">
          <div
            className="vs-animate text-5xl mb-4 select-none"
            style={{ filter: 'drop-shadow(0 0 14px rgba(255,45,135,0.9))' }}
          >
            🌅
          </div>

          <h1
            className="vs-animate text-5xl font-bold tracking-wide mb-3 uppercase"
            style={{
              color: 'var(--color-vs-pink)',
              animation: 'vs-glow-pulse 3.2s ease-in-out infinite',
              letterSpacing: '0.06em',
            }}
          >
            Soc Ops
          </h1>

          <p
            className="text-sm font-semibold tracking-widest uppercase"
            style={{
              color: 'var(--color-vs-cyan)',
              textShadow: '0 0 12px rgba(0,217,245,0.65)',
              letterSpacing: '0.35em',
            }}
          >
            Social Mixer Games
          </p>
        </header>

        {/* ── Game mode cards ── */}
        <div className="w-full flex flex-col gap-4">
          {/* Bingo card */}
          <div
            className="vs-animate rounded-2xl p-6"
            style={{
              background: 'rgba(255,45,135,0.07)',
              border: '1px solid rgba(255,45,135,0.38)',
              boxShadow:
                '0 0 24px rgba(255,45,135,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
              animation: 'vs-card-in 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both',
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <span
                aria-hidden="true"
                className="text-2xl leading-none mt-0.5 select-none"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,45,135,0.9))' }}
              >
                🎯
              </span>
              <div>
                <h2
                  className="font-bold text-xl mb-1"
                  style={{
                    color: 'var(--color-vs-pink)',
                    textShadow: '0 0 10px rgba(255,45,135,0.55)',
                  }}
                >
                  Bingo
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  Find people who match the squares. Get 5 in a row to win!
                </p>
              </div>
            </div>

            <button
              onClick={onStart}
              className="w-full font-semibold py-3 px-6 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: 'linear-gradient(135deg, var(--color-vs-pink-glow), var(--color-vs-pink))',
                color: '#fff',
                boxShadow: PINK_GLOW_IDLE,
                textShadow: '0 1px 3px rgba(0,0,0,0.45)',
                outlineColor: 'var(--color-vs-pink)',
              }}
              {...neonButtonHandlers(PINK_GLOW_IDLE, PINK_GLOW_HOVER)}
            >
              Play Bingo
            </button>
          </div>

          {/* Card Deck card */}
          <div
            className="vs-animate rounded-2xl p-6"
            style={{
              background: 'rgba(0,217,245,0.06)',
              border: '1px solid rgba(0,217,245,0.35)',
              boxShadow:
                '0 0 24px rgba(0,217,245,0.10), inset 0 1px 0 rgba(255,255,255,0.06)',
              animation: 'vs-card-in 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both',
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <span
                aria-hidden="true"
                className="text-2xl leading-none mt-0.5 select-none"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0,217,245,0.9))' }}
              >
                🎴
              </span>
              <div>
                <h2
                  className="font-bold text-xl mb-1"
                  style={{
                    color: 'var(--color-vs-cyan)',
                    textShadow: '0 0 10px rgba(0,217,245,0.55)',
                  }}
                >
                  Card Deck
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  Tap to reveal random icebreaker questions. Perfect for quick conversations!
                </p>
              </div>
            </div>

            <button
              onClick={onStartCardDeck}
              className="w-full font-semibold py-3 px-6 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: 'linear-gradient(135deg, var(--color-vs-cyan-dark), var(--color-vs-cyan))',
                color: '#fff',
                boxShadow: CYAN_GLOW_IDLE,
                textShadow: '0 1px 3px rgba(0,0,0,0.45)',
                outlineColor: 'var(--color-vs-cyan)',
              }}
              {...neonButtonHandlers(CYAN_GLOW_IDLE, CYAN_GLOW_HOVER)}
            >
              Draw Cards
            </button>
          </div>
        </div>

        {/* Footer */}
        <p
          className="mt-8 text-xs tracking-widest uppercase select-none"
          style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.32em' }}
        >
          Connect · Play · Vibe
        </p>
      </div>
    </div>
  );
}
