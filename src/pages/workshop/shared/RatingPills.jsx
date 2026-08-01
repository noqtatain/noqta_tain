export default function RatingPills({ value, onChange }) {
  return (
    <div className="wk-pill-row">
      {[1, 2, 3, 4, 5].map((val) => (
        <button
          key={val}
          type="button"
          onClick={() => onChange(val)}
          className="wk-btn wk-btn-sm"
          style={{
            minWidth: 48,
            background: value === val ? 'var(--wk-violet)' : 'var(--wk-card2)',
            color: value === val ? '#fff' : 'var(--wk-ink)',
            border: '1px solid var(--wk-line)',
          }}
          aria-pressed={value === val}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
