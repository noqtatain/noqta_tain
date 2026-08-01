import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import WorkshopPage from './shared/WorkshopChrome';
import PassphraseGate from './shared/PassphraseGate';
import { ROUTES } from './shared/constants';
import { SLIDES } from './data/slides';

const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
function toArabicDigits(n) {
  return String(n).replace(/[0-9]/g, (d) => AR_DIGITS[Number(d)]);
}

function siteUrl(path) {
  if (typeof window === 'undefined') return path;
  return `${window.location.origin}${path}`;
}

function ActivityQR({ link }) {
  if (!link) return null;
  return (
    <div className="wk-s-qr">
      <QRCodeSVG value={siteUrl(link.href)} size={92} bgColor="transparent" fgColor="#F5F3FF" />
      <Link to={link.href} className="wk-btn wk-btn-primary wk-btn-sm">{link.label}</Link>
    </div>
  );
}

function TitleSlide({ slide }) {
  return (
    <div className="wk-s-center">
      <h1 className="wk-s-title">{slide.title}</h1>
      <p className="wk-s-kicker">{slide.kicker}</p>
      <div className="wk-s-chips">
        {slide.chips.map((c) => <span key={c} className="wk-chip mono">{c}</span>)}
      </div>
    </div>
  );
}

function PointsSlide({ slide }) {
  return (
    <div>
      {slide.eyebrow && <div className="wk-eyebrow">{slide.eyebrow}</div>}
      <h2 className="wk-s-h2">{slide.title}</h2>
      {slide.lead && <p className="wk-s-lead">{slide.lead}</p>}
      <ul className="wk-s-bullets">
        {slide.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function AgendaSlide({ slide }) {
  return (
    <div>
      <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>
      <h2 className="wk-s-h2 wk-s-center">{slide.title}</h2>
      <div className="wk-s-agenda">
        {slide.steps.map((s) => (
          <div key={s.n} className="wk-s-agenda-item">
            <span className="mono wk-gold-text">{s.n}</span>
            <span>{s.label}</span>
            <span className="wk-muted mono">{s.min}د</span>
          </div>
        ))}
      </div>
      <p className="wk-s-center wk-s-lead" style={{ marginTop: 18 }}>{slide.footnote}</p>
    </div>
  );
}

function PlainSlide({ slide }) {
  return (
    <div className="wk-s-center">
      <h2 className="wk-s-h1">{slide.title}</h2>
      {slide.lead && <p className="wk-s-lead" style={{ marginTop: 20 }}>{slide.lead}</p>}
    </div>
  );
}

function GridSlide({ slide }) {
  return (
    <div>
      {slide.eyebrow && <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>}
      <h2 className="wk-s-h2 wk-s-center">{slide.title}</h2>
      <div className="wk-grid wk-g2" style={{ marginTop: 22 }}>
        {slide.cards.map((c) => (
          <div key={c.title} className="wk-card wk-s-card">
            <div className="wk-s-card-em">{c.emoji}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
      {slide.caption && <p className="wk-s-caption">{slide.caption}</p>}
    </div>
  );
}

function ActivitySlide({ slide }) {
  return (
    <div className="wk-s-center">
      <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>
      <h2 className="wk-s-h2">{slide.title}</h2>
      {slide.lead && <p className="wk-s-lead">{slide.lead}</p>}
      {slide.body && <p className="wk-s-lead">{slide.body}</p>}
      {slide.steps && (
        <ol className="wk-s-bullets wk-s-steps">
          {slide.steps.map((s, i) => <li key={s}>{toArabicDigits(i + 1)}) {s}</li>)}
        </ol>
      )}
      <span className="wk-chip mono" style={{ marginTop: 14 }}>{slide.time}</span>
      <ActivityQR link={slide.activityLink} />
    </div>
  );
}

function ColumnsSlide({ slide }) {
  return (
    <div>
      {slide.eyebrow && <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>}
      <h2 className="wk-s-h2 wk-s-center">{slide.title}</h2>
      <div className="wk-s-columns">
        {slide.columns.map((col, i) => (
          <Fragment key={col.heading}>
            <div className="wk-card wk-s-column">
              <h3 className="wk-gold-text">{col.heading}</h3>
              <ul>
                {col.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
            {i === 0 && slide.connector && (
              <div className="wk-s-connector mono">{slide.connector}</div>
            )}
          </Fragment>
        ))}
      </div>
      {slide.caption && <p className="wk-s-caption">{slide.caption}</p>}
    </div>
  );
}

function SectionSlide({ slide }) {
  return (
    <div className="wk-s-center">
      <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>
      <h2 className="wk-s-h1">{slide.title}</h2>
      <p className="wk-s-lead" style={{ marginTop: 18 }}>{slide.lead}</p>
    </div>
  );
}

function FlowSlide({ slide }) {
  return (
    <div>
      {slide.eyebrow && <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>}
      <h2 className="wk-s-h2 wk-s-center">{slide.title}</h2>
      <div className="wk-flow wk-s-flow">
        {slide.flow.map((step, i) => (
          <Fragment key={step.label}>
            <div className="wk-flow-item wk-s-flow-item">
              <span className="em">{step.emoji}</span>
              {step.label}
              {step.sub && <span className="sub">{step.sub}</span>}
            </div>
            {i < slide.flow.length - 1 && <div className="wk-flow-arrow">←</div>}
          </Fragment>
        ))}
      </div>
      {slide.extraBullets && (
        <ul className="wk-s-bullets" style={{ marginTop: 22 }}>
          {slide.extraBullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
      {slide.caption && <p className="wk-s-caption">{slide.caption}</p>}
    </div>
  );
}

function RowsSlide({ slide }) {
  return (
    <div>
      <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>
      <h2 className="wk-s-h2 wk-s-center">{slide.title}</h2>
      <div className="wk-s-rows">
        {slide.rows.map((r) => (
          <div key={r.title} className="wk-card wk-s-row">
            <div className="wk-s-card-em">{r.emoji}</div>
            <div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConvergeSlide({ slide }) {
  return (
    <div>
      <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>
      <h2 className="wk-s-h2 wk-s-center">{slide.title}</h2>
      <div className="wk-s-converge">
        <div className="wk-s-converge-sources">
          {slide.sources.map((s) => <div key={s} className="wk-flow-item wk-s-flow-item">{s}</div>)}
        </div>
        <div className="wk-flow-arrow">←</div>
        <div className="wk-flow-item wk-s-flow-item wk-s-hub">{slide.hub}</div>
      </div>
      {slide.caption && <p className="wk-s-caption">{slide.caption}</p>}
    </div>
  );
}

function CtaSlide({ slide }) {
  return (
    <div className="wk-s-center">
      <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>{slide.eyebrow}</div>
      <h2 className="wk-s-h1">{slide.title}</h2>
      <p className="wk-s-lead">{slide.lead}</p>
      <ol className="wk-s-bullets wk-s-steps" style={{ textAlign: 'right', display: 'inline-block' }}>
        {slide.steps.map((s, i) => <li key={s}>{i + 1}️⃣ {s}</li>)}
      </ol>
      <p className="wk-s-lead">{slide.qrNote}</p>
      <ActivityQR link={slide.activityLink} />
    </div>
  );
}

function ThanksSlide({ slide }) {
  return (
    <div className="wk-s-center">
      <h2 className="wk-s-h1">{slide.title}</h2>
      <p className="wk-s-lead">{slide.lead}</p>
      <p className="wk-s-lead wk-gold-text">{slide.reminder}</p>
      <p className="wk-s-lead mono">{slide.whatsapp}</p>
      <ActivityQR link={slide.activityLink} />
    </div>
  );
}

const LAYOUTS = {
  title: TitleSlide,
  points: PointsSlide,
  agenda: AgendaSlide,
  plain: PlainSlide,
  grid: GridSlide,
  activity: ActivitySlide,
  columns: ColumnsSlide,
  section: SectionSlide,
  flow: FlowSlide,
  rows: RowsSlide,
  converge: ConvergeSlide,
  cta: CtaSlide,
  thanks: ThanksSlide,
};

function SlideStyles() {
  return (
    <style>{`
      .wk-slide-shell{height:100dvh;display:flex;flex-direction:column}
      .wk-slide-stage{flex:1;display:flex;align-items:center;justify-content:center;padding:32px 40px;overflow-y:auto}
      .wk-slide-inner{max-width:980px;width:100%}
      .wk-s-center{text-align:center}
      .wk-s-title{font-size:clamp(30px,4.6vw,58px);font-weight:700;line-height:1.25}
      .wk-s-kicker{color:var(--wk-muted);font-size:clamp(15px,1.6vw,20px);margin-top:16px}
      .wk-s-chips{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:26px}
      .wk-s-h1{font-size:clamp(26px,4.2vw,44px);font-weight:700;line-height:1.3}
      .wk-s-h2{font-size:clamp(22px,3.4vw,34px);font-weight:700;margin-bottom:14px;line-height:1.3}
      .wk-s-lead{font-size:clamp(15px,1.9vw,21px);color:var(--wk-muted);margin-top:8px}
      .wk-s-bullets{list-style:none;display:flex;flex-direction:column;gap:14px;margin-top:22px;font-size:clamp(15px,1.8vw,20px)}
      .wk-s-steps{padding-inline-start:0}
      .wk-s-card{padding:24px}
      .wk-s-card-em{font-size:clamp(24px,2.6vw,34px);margin-bottom:10px}
      .wk-s-card h3{font-size:clamp(15px,1.6vw,19px)}
      .wk-s-card p{font-size:clamp(13px,1.4vw,16px)}
      .wk-s-caption{text-align:center;color:var(--wk-gold);margin-top:24px;font-size:clamp(14px,1.6vw,18px)}
      .wk-s-columns{display:flex;align-items:stretch;gap:20px;margin-top:20px;flex-wrap:wrap;justify-content:center}
      .wk-s-column{flex:1 1 280px;max-width:380px}
      .wk-s-column ul{margin-top:12px;display:flex;flex-direction:column;gap:10px;font-size:clamp(13.5px,1.5vw,16px);list-style:none}
      .wk-s-connector{display:flex;align-items:center;color:var(--wk-violet2);font-size:clamp(14px,1.6vw,18px)}
      .wk-s-flow{margin-top:22px}
      .wk-s-flow-item{font-size:clamp(13px,1.5vw,16px);padding:18px 12px}
      .wk-s-flow-item .em{font-size:clamp(20px,2.4vw,30px)}
      .wk-s-rows{display:flex;flex-direction:column;gap:14px;margin-top:20px}
      .wk-s-row{display:flex;align-items:center;gap:16px;text-align:right}
      .wk-s-converge{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:26px;flex-wrap:wrap}
      .wk-s-converge-sources{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;max-width:460px}
      .wk-s-hub{background:linear-gradient(135deg,var(--wk-violet),var(--wk-violet2));border:none;color:#fff;font-weight:600}
      .wk-s-agenda{display:flex;flex-direction:column;gap:8px;margin-top:20px;max-width:640px;margin-inline:auto}
      .wk-s-agenda-item{display:flex;align-items:center;justify-content:space-between;background:var(--wk-card);border:1px solid var(--wk-line);border-radius:12px;padding:12px 18px;font-size:clamp(14px,1.6vw,18px)}
      .wk-s-qr{display:flex;flex-direction:column;align-items:center;gap:10px;margin-top:22px;background:var(--wk-card);border:1px solid var(--wk-line);border-radius:16px;padding:16px;width:fit-content;margin-inline:auto}

      .wk-slide-bar{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;border-top:1px solid var(--wk-line);background:rgba(19,16,43,.7)}
      .wk-slide-nav-btn{background:var(--wk-card);border:1px solid var(--wk-line);color:var(--wk-ink);border-radius:10px;padding:10px 16px;cursor:pointer;font-size:14px;min-height:44px}
      .wk-slide-nav-btn:disabled{opacity:.35;cursor:not-allowed}
      .wk-slide-count{font-family:'Space Grotesk';font-size:14px;color:var(--wk-muted)}
      .wk-slide-exit{position:fixed;top:14px;left:14px;z-index:50;font-size:12px;color:var(--wk-muted);text-decoration:none;background:var(--wk-card);border:1px solid var(--wk-line);border-radius:8px;padding:6px 10px}

      @media(max-width:640px){.wk-slide-stage{padding:20px 18px}}
    `}</style>
  );
}

export default function WorkshopSlides() {
  return (
    <PassphraseGate storageKey="wk_auth_slides">
      <SlidesDeck />
    </PassphraseGate>
  );
}

function SlidesDeck() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = SLIDES.length;

  const goTo = useCallback((i) => {
    setIndex(Math.max(0, Math.min(total - 1, i)));
  }, [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function onKey(e) {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
      if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  function onTouchStart(e) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) { delta < 0 ? next() : prev(); }
    touchStartX.current = null;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  const slide = SLIDES[index];
  const Layout = LAYOUTS[slide.layout] || PlainSlide;

  return (
    <WorkshopPage hideChrome>
      <SlideStyles />
      <Link to={ROUTES.hub} className="wk-slide-exit">خروج ×</Link>
      <div className="wk-slide-shell" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="wk-slide-stage">
          <div className="wk-slide-inner">
            <Layout slide={slide} />
          </div>
        </div>
        <div className="wk-slide-bar">
          <button className="wk-slide-nav-btn" onClick={prev} disabled={index === 0}>→ السابق</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="wk-slide-count mono">{toArabicDigits(index + 1)} / {toArabicDigits(total)}</span>
            <button className="wk-slide-nav-btn" onClick={toggleFullscreen}>ملء الشاشة</button>
          </div>
          <button className="wk-slide-nav-btn" onClick={next} disabled={index === total - 1}>التالي ←</button>
        </div>
      </div>
    </WorkshopPage>
  );
}
