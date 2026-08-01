import { useEffect, useRef, useState } from 'react';
import WorkshopPage from './shared/WorkshopChrome';
import { ROUTES } from './shared/constants';

const DURATION = 7 * 60;

export default function WorkshopScenario() {
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!running) return undefined;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function start() {
    if (secondsLeft === 0) setSecondsLeft(DURATION);
    setRunning(true);
  }
  function pause() { setRunning(false); }
  function reset() {
    setRunning(false);
    setSecondsLeft(DURATION);
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const isDone = secondsLeft === 0;

  return (
    <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub}>
      <section className="wk-section" style={{ paddingTop: 28 }}>
        <div className="wk-wrap-narrow">
          <div className="wk-center" style={{ marginBottom: 24 }}>
            <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>نشاط تفاعلي · ⏱️ ٧ دقائق</div>
            <h1 className="wk-h1" style={{ fontSize: 'clamp(24px,5vw,34px)' }}>📱 سيناريو مبيعات</h1>
          </div>

          <div className="wk-card" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 16, fontWeight: 500 }}>
              تاجر يستقبل ٢٠ استفساراً يومياً عبر واتساب — كيف يتابعها؟
            </p>
            <p className="wk-muted" style={{ marginTop: 10, fontSize: 14.5 }}>
              في مجموعات من ٣: ناقشوا دقيقتين ثم سنعرض حل Bitrix24.
            </p>
          </div>

          <div className="wk-card wk-center">
            <div
              className="mono"
              style={{
                fontSize: 'clamp(48px,14vw,72px)',
                fontWeight: 700,
                color: isDone ? '#FF8A8A' : 'var(--wk-ink)',
                letterSpacing: 2,
              }}
            >
              {mm}:{ss}
            </div>
            {isDone && <p style={{ color: '#FF8A8A', marginTop: 4, fontWeight: 600 }}>انتهى الوقت!</p>}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap' }}>
              {!running ? (
                <button type="button" className="wk-btn wk-btn-primary" onClick={start}>
                  {secondsLeft === DURATION ? 'ابدأ' : 'استكمال'}
                </button>
              ) : (
                <button type="button" className="wk-btn wk-btn-ghost" onClick={pause}>إيقاف مؤقت</button>
              )}
              <button type="button" className="wk-btn wk-btn-ghost" onClick={reset}>إعادة ضبط</button>
            </div>
          </div>

          <div className="wk-card" style={{ marginTop: 20 }}>
            <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, marginBottom: 8 }}>
              ملاحظات المجموعة <span className="wk-muted" style={{ fontWeight: 400 }}>(اختياري)</span>
            </label>
            <textarea
              className="wk-s-textarea"
              style={{ width: '100%', minHeight: 90, background: 'var(--wk-card2)', border: '1px solid var(--wk-line)', borderRadius: 11, padding: 12, color: 'var(--wk-ink)', fontFamily: 'inherit', fontSize: 14.5 }}
              placeholder="اكتبوا أهم فكرة ناقشتها مجموعتكم..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
      </section>
    </WorkshopPage>
  );
}
