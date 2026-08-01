import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, waLink, WORKSHOP_TITLE } from './constants';

const FONTS_LINK_ID = 'wk-fonts-link';

function useWorkshopFonts() {
  useEffect(() => {
    if (document.getElementById(FONTS_LINK_ID)) return;
    const link = document.createElement('link');
    link.id = FONTS_LINK_ID;
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap';
    document.head.appendChild(link);
  }, []);
}

export function WorkshopStyles() {
  return (
    <style>{`
      .wk-root{
        --wk-bg:#13102B;
        --wk-card:#1E1A45;
        --wk-card2:#251F52;
        --wk-violet:#7C3AED;
        --wk-violet2:#9F67FF;
        --wk-gold:#D4AF6A;
        --wk-ink:#F5F3FF;
        --wk-muted:#AFA8D6;
        --wk-line:#3A3470;
        background:var(--wk-bg);
        color:var(--wk-ink);
        min-height:100dvh;
        font-family:'IBM Plex Sans Arabic','Segoe UI',Tahoma,sans-serif;
        line-height:1.75;
        position:relative;
        overflow-x:hidden;
      }
      .wk-root .mono{font-family:'Space Grotesk','IBM Plex Sans Arabic',sans-serif}
      .wk-root *{box-sizing:border-box}
      .wk-root img{max-width:100%;display:block}
      .wk-root a{color:inherit}
      .wk-root button{font-family:inherit}
      .wk-wrap{max-width:1080px;margin:0 auto;padding:0 20px}
      .wk-wrap-narrow{max-width:760px;margin:0 auto;padding:0 20px}

      .wk-glow{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
      .wk-glow::before,.wk-glow::after{content:"";position:absolute;border-radius:50%;filter:blur(120px);opacity:.35}
      .wk-glow::before{width:560px;height:560px;background:var(--wk-violet2);top:-200px;right:-140px}
      .wk-glow::after{width:460px;height:460px;background:var(--wk-violet);bottom:-160px;left:-120px}

      .wk-nav{position:sticky;top:0;z-index:100;backdrop-filter:blur(14px);background:rgba(19,16,43,.78);border-bottom:1px solid var(--wk-line)}
      .wk-nav .wk-wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
      .wk-brand{display:flex;align-items:center;gap:9px;font-weight:700;font-size:16px;text-decoration:none}
      .wk-dots{display:inline-flex;gap:4px}
      .wk-dots i{width:8px;height:8px;border-radius:50%;display:block}
      .wk-dots i:first-child{background:var(--wk-violet2)}
      .wk-dots i:last-child{background:var(--wk-gold)}
      .wk-nav-back{font-size:13.5px;color:var(--wk-muted);text-decoration:none;display:flex;align-items:center;gap:6px}

      .wk-footer{padding:28px 0 90px;border-top:1px solid var(--wk-line);text-align:center;position:relative;z-index:1;margin-top:40px}
      .wk-footer p{color:var(--wk-muted);font-size:12.5px}
      @media(min-width:761px){.wk-footer{padding-bottom:28px}}

      section.wk-section, .wk-section{position:relative;z-index:1;padding:44px 0}
      .wk-eyebrow{font-family:'Space Grotesk';font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--wk-violet2);margin-bottom:14px;display:flex;align-items:center;gap:9px;font-weight:600}
      .wk-eyebrow::before{content:"";width:26px;height:1px;background:var(--wk-violet)}
      .wk-center{text-align:center}
      .wk-h1{font-size:clamp(26px,6vw,42px);line-height:1.22;font-weight:700;letter-spacing:-.5px}
      .wk-h2{font-size:clamp(21px,4.4vw,28px);line-height:1.28;font-weight:700;margin-bottom:10px}
      .wk-lead{font-size:15.5px;color:var(--wk-muted);font-weight:300}
      .wk-muted{color:var(--wk-muted)}
      .wk-gold-text{color:var(--wk-gold)}

      .wk-btn{
        display:inline-flex;align-items:center;justify-content:center;gap:8px;
        font-weight:600;font-size:15px;border-radius:12px;border:none;cursor:pointer;
        padding:14px 24px;min-height:50px;transition:transform .15s,box-shadow .15s,opacity .15s;
        text-decoration:none;white-space:nowrap;
      }
      .wk-btn-primary{background:var(--wk-gold);color:#1A1430;box-shadow:0 10px 26px -10px rgba(212,175,106,.55)}
      .wk-btn-primary:hover{transform:translateY(-2px)}
      .wk-btn-violet{background:linear-gradient(90deg,var(--wk-violet),var(--wk-violet2));color:#fff}
      .wk-btn-violet:hover{transform:translateY(-2px)}
      .wk-btn-ghost{background:var(--wk-card);border:1px solid var(--wk-line);color:var(--wk-ink)}
      .wk-btn-sm{padding:10px 18px;font-size:13.5px;min-height:40px;border-radius:10px}
      .wk-btn-block{width:100%}
      .wk-btn[disabled]{opacity:.6;cursor:not-allowed;transform:none!important}

      .wk-card{background:var(--wk-card);border:1px solid var(--wk-line);border-radius:18px;padding:22px}
      .wk-card2{background:var(--wk-card2)}

      .wk-grid{display:grid;gap:16px}
      .wk-g2{grid-template-columns:repeat(2,1fr)}
      .wk-g3{grid-template-columns:repeat(3,1fr)}
      @media(max-width:820px){.wk-g3{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:560px){.wk-g2,.wk-g3{grid-template-columns:1fr}}

      .wk-feature-ic{width:42px;height:42px;border-radius:11px;background:rgba(124,58,237,.16);border:1px solid var(--wk-line);display:flex;align-items:center;justify-content:center;margin-bottom:14px;font-size:20px}
      .wk-card h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
      .wk-card p{color:var(--wk-muted);font-size:14px;font-weight:300}

      .wk-chip{display:inline-flex;align-items:center;gap:8px;background:var(--wk-card);border:1px solid var(--wk-line);border-radius:100px;padding:9px 16px;font-size:13.5px}
      .wk-pill-row{display:flex;flex-wrap:wrap;gap:10px}

      .wk-flow{display:flex;align-items:stretch;gap:10px;flex-wrap:wrap;justify-content:center}
      .wk-flow-item{flex:1 1 130px;min-width:110px;background:var(--wk-card);border:1px solid var(--wk-line);border-radius:14px;padding:14px 10px;text-align:center;font-size:13px}
      .wk-flow-item .em{font-size:22px;display:block;margin-bottom:6px}
      .wk-flow-item .sub{display:block;margin-top:6px;font-size:11px;color:var(--wk-muted)}
      .wk-flow-arrow{display:flex;align-items:center;justify-content:center;color:var(--wk-violet2);font-size:18px;flex:0 0 auto}
      @media(max-width:700px){.wk-flow{flex-direction:column}.wk-flow-arrow{transform:rotate(90deg)}}

      .wk-timeline{border-inline-start:2px solid var(--wk-line);padding-inline-start:20px;display:flex;flex-direction:column;gap:22px}
      .wk-timeline-step{position:relative}
      .wk-timeline-step::before{content:"";position:absolute;inset-inline-start:-26px;top:2px;width:10px;height:10px;border-radius:50%;background:var(--wk-violet2)}
      .wk-timeline-step b{font-size:14.5px}
      .wk-timeline-step p{color:var(--wk-muted);font-size:13.5px;margin-top:2px}

      .wk-field{margin-bottom:16px;text-align:right}
      .wk-field label{display:block;font-size:13.5px;font-weight:600;margin-bottom:7px}
      .wk-field label .req{color:#FF8A8A;margin-inline-start:3px}
      .wk-field label .opt{color:var(--wk-muted);font-weight:400;font-size:12px}
      .wk-field input,.wk-field select,.wk-field textarea{
        width:100%;border:1.5px solid var(--wk-line);background:var(--wk-card2);border-radius:11px;
        padding:12px 14px;font-size:14.5px;font-family:inherit;color:var(--wk-ink);transition:border-color .2s;
      }
      .wk-field textarea{resize:vertical;min-height:78px}
      .wk-field input::placeholder,.wk-field textarea::placeholder{color:var(--wk-muted)}
      .wk-field input:focus,.wk-field select:focus,.wk-field textarea:focus{outline:none;border-color:var(--wk-violet2)}
      .wk-field.error input,.wk-field.error select{border-color:#FF8A8A}
      .wk-field-error-msg{display:none;color:#FF8A8A;font-size:12px;margin-top:6px}
      .wk-field.error .wk-field-error-msg{display:block}
      .wk-field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
      @media(max-width:480px){.wk-field-row{grid-template-columns:1fr}}
      .wk-field-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
      @media(max-width:700px){.wk-field-row-3{grid-template-columns:1fr}}
      .wk-phone-input{display:flex;gap:8px}
      .wk-phone-input select{flex:0 0 108px}
      .wk-phone-input input{flex:1;min-width:0}
      .wk-honeypot{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

      .wk-success{text-align:center;padding:10px 4px}
      .wk-success .ic{width:60px;height:60px;border-radius:50%;background:rgba(61,214,140,.14);color:#3DD68C;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px}

      .wk-progress-track{width:100%;height:8px;background:var(--wk-card2);border-radius:100px;overflow:hidden}
      .wk-progress-fill{height:100%;background:linear-gradient(90deg,var(--wk-violet),var(--wk-violet2));transition:width .3s}

      @media(max-width:640px){.wk-h1{font-size:28px}}
    `}</style>
  );
}

export function WorkshopHeader({ backLabel = 'المحور', backHref }) {
  return (
    <nav className="wk-nav">
      <div className="wk-wrap">
        <Link to={ROUTES.hub} className="wk-brand" title={WORKSHOP_TITLE}>
          <span className="wk-dots"><i></i><i></i></span>
          نقطتين
        </Link>
        {backHref ? (
          <Link to={backHref} className="wk-nav-back">{backLabel} ←</Link>
        ) : (
          <Link to={ROUTES.hub} className="wk-nav-back">الرئيسية ←</Link>
        )}
      </div>
    </nav>
  );
}

export function WorkshopFooter() {
  return (
    <footer className="wk-footer">
      <div className="wk-wrap">
        <p>© 2026 نقطتين — ورشة {WORKSHOP_TITLE}</p>
      </div>
    </footer>
  );
}

export default function WorkshopPage({ children, backLabel, backHref, hideChrome, wide }) {
  useWorkshopFonts();
  return (
    <div className="wk-root" dir="rtl" lang="ar">
      <WorkshopStyles />
      <div className="wk-glow"></div>
      {!hideChrome && <WorkshopHeader backLabel={backLabel} backHref={backHref} />}
      <div className={wide ? '' : ''} style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
      {!hideChrome && <WorkshopFooter />}
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="wk-btn wk-btn-violet wk-btn-sm"
      style={{ position: 'fixed', bottom: 18, insetInlineStart: 18, zIndex: 150 }}
    >
      واتساب نقطتين
    </a>
  );
}
