interface StartScreenProps {
  onStart: () => void;
  onStartCardDeck: () => void;
}

export function StartScreen({ onStart, onStartCardDeck }: StartScreenProps) {
  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center px-6 pt-12 pb-8">
        <div className="text-5xl mb-4" aria-hidden="true">☕</div>
        <h1
          className="text-4xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Soc Ops
        </h1>
        <p
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Break the ice. Make real connections.
        </p>
        <p
          className="text-base max-w-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Social mixer games designed to spark conversations at in-person events.
        </p>
      </header>

      {/* Mode Selection */}
      <main className="flex-1 flex flex-col items-center px-6 pb-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Choose your game
        </p>

        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 items-stretch">
          {/* Bingo — Primary / Featured */}
          <div
            className="relative flex flex-col rounded-2xl p-6 overflow-hidden sm:flex-[1.4]"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '2px solid var(--color-accent)',
              boxShadow: '0 8px 24px rgba(107, 66, 38, 0.15)',
            }}
          >
            <span
              className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: 'var(--color-bingo)',
                color: 'var(--color-text-primary)',
              }}
            >
              Popular
            </span>
            <div className="text-3xl mb-3" aria-hidden="true">🎯</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Bingo
            </h2>
            <p
              className="text-sm mb-6 flex-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Find people who match the squares. First to get 5 in a row wins!
            </p>
            <button
              onClick={onStart}
              className="w-full font-semibold py-3.5 px-6 rounded-xl transition-all duration-150 active:scale-[0.98]"
              style={{ backgroundColor: 'var(--color-accent)', color: '#ffffff' }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--color-accent-light)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--color-accent)')
              }
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(107, 66, 38, 0.4)')
              }
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              Play Bingo
            </button>
          </div>

          {/* Card Deck — Secondary */}
          <div
            className="flex flex-col rounded-2xl p-6 sm:flex-1"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '2px solid var(--color-border)',
              boxShadow: '0 4px 12px rgba(107, 66, 38, 0.08)',
            }}
          >
            <div className="text-3xl mb-3" aria-hidden="true">🎴</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Card Deck
            </h2>
            <p
              className="text-sm mb-6 flex-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Flip icebreaker cards one at a time. Perfect for quick conversations.
            </p>
            <button
              onClick={onStartCardDeck}
              className="w-full font-semibold py-3.5 px-6 rounded-xl border-2 transition-all duration-150 active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--color-marked)',
                color: 'var(--color-text-primary)',
                borderColor: 'var(--color-marked-border)',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--color-marked-hover)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--color-marked)')
              }
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(107, 66, 38, 0.25)')
              }
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              Draw Cards
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
