import { useState } from 'react';

interface StartScreenProps {
  onStart: () => void;
  onStartCardDeck: () => void;
}

// Vaporwave Sunset palette — scoped to the start screen
interface ModeColors {
  glass: string;
  glassHover: string;
  border: string;
  borderHover: string;
  shadow: string;
  shadowHover: string;
  neon: string;
  iconBg: string;
  btnBg: string;
  btnBgHover: string;
  btnShadow: string;
}

const BINGO_COLORS: ModeColors = {
  glass: 'rgba(120, 40, 255, 0.12)',
  glassHover: 'rgba(140, 60, 255, 0.20)',
  border: 'rgba(180, 77, 255, 0.30)',
  borderHover: 'rgba(180, 77, 255, 0.60)',
  shadow: '0 8px 32px rgba(0, 0, 0, 0.40), 0 0 0 1px rgba(180, 77, 255, 0.12)',
  shadowHover: '0 12px 40px rgba(0, 0, 0, 0.50), 0 0 25px rgba(180, 77, 255, 0.22)',
  neon: '#b44dff',
  iconBg: 'rgba(180, 77, 255, 0.14)',
  btnBg: '#7c20d4',
  btnBgHover: '#9332e8',
  btnShadow: '0 4px 20px rgba(180, 77, 255, 0.50)',
};

const DECK_COLORS: ModeColors = {
  glass: 'rgba(255, 80, 80, 0.09)',
  glassHover: 'rgba(255, 100, 100, 0.16)',
  border: 'rgba(255, 107, 107, 0.30)',
  borderHover: 'rgba(255, 107, 107, 0.60)',
  shadow: '0 8px 32px rgba(0, 0, 0, 0.40), 0 0 0 1px rgba(255, 107, 107, 0.12)',
  shadowHover: '0 12px 40px rgba(0, 0, 0, 0.50), 0 0 25px rgba(255, 107, 107, 0.22)',
  neon: '#ff6b6b',
  iconBg: 'rgba(255, 107, 107, 0.12)',
  btnBg: '#c42828',
  btnBgHover: '#d93535',
  btnShadow: '0 4px 20px rgba(255, 107, 107, 0.50)',
};

const BINGO_TAGS = ['Team events', 'Conferences', '10+ people'];
const DECK_TAGS = ['Any group size', 'Quick rounds', 'Casual'];

const BG = 'linear-gradient(160deg, #12021f 0%, #3b1060 45%, #7e2b6b 75%, #c0392b 100%)';
const TEXT = '#f0e6ff';
const TEXT_MUTED = '#b8a8d4';
const TEXT_DIM = 'rgba(184, 168, 212, 0.48)';

interface GameCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
  onClick: () => void;
  colors: ModeColors;
}

function GameCard({ icon, title, description, tags, cta, onClick, colors }: GameCardProps) {
  const [cardHovered, setCardHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  const isButtonActive = btnHovered || btnActive;

  return (
    <article
      className="rounded-2xl p-5 transition-all duration-200"
      style={{
        backgroundColor: cardHovered ? colors.glassHover : colors.glass,
        border: `1px solid ${cardHovered ? colors.borderHover : colors.border}`,
        boxShadow: cardHovered ? colors.shadowHover : colors.shadow,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transform: cardHovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="flex items-center justify-center rounded-xl text-2xl flex-shrink-0"
          style={{ width: 48, height: 48, backgroundColor: colors.iconBg }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h2 className="font-bold text-lg sm:text-xl" style={{ color: TEXT }}>
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_MUTED }}>
        {description}
      </p>

      {/* Context tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-0.5 rounded-full"
            style={{
              color: colors.neon,
              backgroundColor: `${colors.neon}18`,
              border: `1px solid ${colors.neon}3a`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={onClick}
        className="w-full font-semibold py-3 rounded-xl text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{
          backgroundColor: isButtonActive ? colors.btnBgHover : colors.btnBg,
          boxShadow: isButtonActive ? colors.btnShadow : 'none',
          transform: btnActive ? 'scale(0.98)' : 'scale(1)',
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => { setBtnHovered(false); setBtnActive(false); }}
        onMouseDown={() => setBtnActive(true)}
        onMouseUp={() => setBtnActive(false)}
        onFocus={() => setBtnHovered(true)}
        onBlur={() => { setBtnHovered(false); setBtnActive(false); }}
      >
        {cta}
      </button>
    </article>
  );
}

export function StartScreen({ onStart, onStartCardDeck }: StartScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-full p-5 sm:p-8"
      style={{ background: BG }}
    >
      {/* Hero */}
      <header className="text-center mb-8">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: TEXT_DIM }}
        >
          Social Mixer Games
        </p>
        <h1
          className="text-5xl sm:text-6xl font-bold tracking-tight mb-2"
          style={{
            color: TEXT,
            textShadow: '0 0 40px rgba(180, 77, 255, 0.50), 0 2px 10px rgba(0, 0, 0, 0.50)',
          }}
        >
          Soc Ops
        </h1>
        <p className="text-base sm:text-lg" style={{ color: TEXT_MUTED }}>
          Break the ice. Make connections.
        </p>
      </header>

      {/* Mode Cards */}
      <div className="w-full max-w-sm space-y-4">
        <GameCard
          icon="🎯"
          title="Social Bingo"
          description="Hunt for people who match each square. Get five in a row and claim the win."
          tags={BINGO_TAGS}
          cta="Play Bingo"
          onClick={onStart}
          colors={BINGO_COLORS}
        />
        <GameCard
          icon="🎴"
          title="Question Cards"
          description="Draw icebreaker questions one by one. Sparks real conversations fast."
          tags={DECK_TAGS}
          cta="Draw Cards"
          onClick={onStartCardDeck}
          colors={DECK_COLORS}
        />
      </div>

      <p className="mt-7 text-xs" style={{ color: TEXT_DIM }} aria-hidden="true">
        No accounts · No setup · Just people
      </p>
    </div>
  );
}
