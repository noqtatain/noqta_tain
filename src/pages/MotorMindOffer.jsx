import { useEffect } from 'react';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');

.mm-offer {
  --bg:#0B0A18; --bg2:#100F22; --bg3:#16143A;
  --p:#7C3AED; --p2:#9F67FF; --p3:#C4A5FF; --pdim:#7C3AED22;
  --w:#FFFFFF; --g:#9B97B8; --g2:#CBC8E0;
  --bd:rgba(124,58,237,0.18); --bd2:rgba(255,255,255,0.07);
  --y:#FFBE00; --wa:#25D366;
  font-family:'Cairo',sans-serif;
  background:var(--bg);
  color:var(--w);
  overflow-x:hidden;
  min-height:100vh;
  direction:rtl;
}
.mm-offer * { margin:0; padding:0; box-sizing:border-box; }
.mm-offer .tag { display:inline-flex;align-items:center;gap:7px;background:var(--pdim);border:1px solid var(--bd);color:var(--p3);font-size:11px;font-weight:700;letter-spacing:2px;padding:5px 14px;border-radius:99px; }
.mm-offer .tdot { width:6px;height:6px;background:var(--p2);border-radius:50%;animation:mm-blink 2s infinite; }
@keyframes mm-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
.mm-offer .ey { display:flex;align-items:center;gap:12px;margin-bottom:18px; }
.mm-offer .ey-t { font-size:11px;font-weight:700;color:var(--p2);letter-spacing:3px;text-transform:uppercase;white-space:nowrap; }
.mm-offer .ey::after { content:'';flex:1;height:1px;background:var(--bd2); }
.mm-offer .st { font-size:clamp(26px,3.8vw,46px);font-weight:900;line-height:1.15;margin-bottom:14px; }
.mm-offer .sd { font-size:15px;color:var(--g);line-height:1.8;max-width:620px;margin-bottom:52px; }
.mm-offer section { padding:96px 72px; }
.mm-offer .btn { display:inline-flex;align-items:center;gap:9px;padding:14px 28px;border-radius:99px;border:none;font-family:'Cairo',sans-serif;font-size:14px;font-weight:700;cursor:pointer;text-decoration:none;transition:all .2s; }
.mm-offer .btn-p { background:var(--p);color:var(--w); }
.mm-offer .btn-p:hover { background:var(--p2);transform:translateY(-2px); }
.mm-offer .btn-g { background:transparent;color:var(--w);border:1px solid var(--bd2); }
.mm-offer .btn-g:hover { border-color:var(--p3);color:var(--p3); }
.mm-offer .btn-wa { background:var(--wa);color:var(--w); }
.mm-offer .btn-wa:hover { filter:brightness(1.1);transform:translateY(-2px); }

.mm-offer nav { position:fixed;top:0;width:100%;z-index:100;background:rgba(11,10,24,.88);backdrop-filter:blur(16px);border-bottom:1px solid var(--bd2);padding:16px 72px;display:flex;align-items:center;justify-content:space-between; }
.mm-offer .nl { font-size:22px;font-weight:900;letter-spacing:-1px;display:flex;align-items:center;gap:2px; }
.mm-offer .nd { color:var(--p2);letter-spacing:-4px;font-size:28px; }

.mm-offer .hero { position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:140px 72px 80px;overflow:hidden; }
.mm-offer .glow { position:absolute;border-radius:50%;pointer-events:none;filter:blur(110px);opacity:.22; }
.mm-offer .g1 { width:600px;height:600px;background:var(--p);top:-150px;right:-200px; }
.mm-offer .g2 { width:400px;height:400px;background:#3B0FA8;bottom:-100px;left:-100px; }
.mm-offer .ht { font-size:clamp(48px,7vw,88px);font-weight:900;line-height:1.05;margin:16px 0 10px; }
.mm-offer .ht .hl { color:var(--p2); }
.mm-offer .hs { font-size:clamp(15px,1.8vw,19px);color:var(--g);max-width:580px;line-height:1.7; }
.mm-offer .hmeta { display:flex;gap:40px;margin-top:52px;flex-wrap:wrap; }
.mm-offer .mi { display:flex;flex-direction:column;gap:3px; }
.mm-offer .mlbl { font-size:10px;color:var(--g);letter-spacing:2px;font-weight:700;text-transform:uppercase; }
.mm-offer .mv { font-size:14px;font-weight:700; }

.mm-offer .sg { display:grid;grid-template-columns:repeat(3,1fr);gap:2px; }
.mm-offer .sc { background:var(--bg);padding:32px 28px;display:flex;flex-direction:column;gap:14px;transition:background .2s;border-bottom:2px solid transparent; }
.mm-offer .sc:hover { background:var(--bg3);border-bottom-color:var(--p); }
.mm-offer .sb { font-size:10px;font-weight:700;padding:3px 9px;border-radius:99px;width:fit-content;letter-spacing:1px; }
.mm-offer .sb-g { background:rgba(34,197,94,.12);color:#4ade80;border:1px solid rgba(34,197,94,.25); }
.mm-offer .sb-w { background:rgba(251,191,36,.12);color:#fbbf24;border:1px solid rgba(251,191,36,.25); }

.mm-offer .ph { display:grid;grid-template-columns:140px 1fr 36px;align-items:start;gap:36px;padding:38px 0;border-top:1px solid var(--bd2);transition:all .2s; }
.mm-offer .ph:hover .phn { color:var(--p2); }
.mm-offer .pnum { font-size:11px;font-weight:700;color:var(--p2);letter-spacing:2px;padding-top:5px; }
.mm-offer .pdur { font-size:11px;color:var(--g);margin-top:5px; }
.mm-offer .phn { font-size:22px;font-weight:900;margin-bottom:12px;transition:color .2s; }
.mm-offer .ptags { display:flex;flex-wrap:wrap;gap:7px; }
.mm-offer .pt { font-size:11px;font-weight:600;padding:4px 11px;border-radius:99px;background:var(--pdim);color:var(--p3);border:1px solid var(--bd); }
.mm-offer .pt.hi { background:rgba(124,58,237,.22);color:var(--p2);border-color:rgba(124,58,237,.4); }

.mm-offer .svgg { display:grid;grid-template-columns:repeat(3,1fr);gap:2px; }
.mm-offer .svc { background:var(--bg2);padding:34px 28px;display:flex;flex-direction:column;gap:12px;border-bottom:2px solid transparent;transition:all .2s; }
.mm-offer .svc:hover { background:var(--bg3);border-bottom-color:var(--p); }
.mm-offer .svl { border-top:1px solid var(--bd2);padding-top:16px;margin-top:8px;display:flex;flex-direction:column;gap:7px; }
.mm-offer .svli { font-size:12px;color:var(--g2);display:flex;align-items:flex-start;gap:8px;line-height:1.5; }
.mm-offer .svli::before { content:'—';color:var(--p2);font-weight:700;flex-shrink:0; }

.mm-offer .uii { display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:72px; }
.mm-offer .sbox { background:var(--bg2);border:1px solid var(--bd2);border-radius:8px;padding:36px; }
.mm-offer .sboxh { display:flex;justify-content:space-between;align-items:center;margin-bottom:32px; }
.mm-offer .sov { font-size:56px;font-weight:900;color:var(--y);display:flex;align-items:flex-end;gap:6px;line-height:1; }
.mm-offer .sov small { font-size:20px;color:var(--g);font-weight:400;margin-bottom:8px; }
.mm-offer .srs { display:flex;flex-direction:column;gap:16px; }
.mm-offer .sr { display:flex;flex-direction:column;gap:7px; }
.mm-offer .srl { display:flex;justify-content:space-between;font-size:12px; }
.mm-offer .bar { height:5px;background:rgba(255,255,255,.07);border-radius:99px;overflow:hidden; }
.mm-offer .fill { height:100%;border-radius:99px;transition:width 1.2s cubic-bezier(.4,0,.2,1);width:0%; }
.mm-offer .fr { background:#ef4444; }
.mm-offer .fy { background:var(--y); }
.mm-offer .fg { background:#22c55e; }
.mm-offer .fp { background:var(--p2); }

.mm-offer .utabs { display:flex;gap:4px;margin-bottom:28px;background:var(--bg2);padding:5px;border-radius:99px;width:fit-content;border:1px solid var(--bd2); }
.mm-offer .utab { padding:8px 20px;border-radius:99px;border:none;font-family:'Cairo',sans-serif;font-size:13px;font-weight:700;color:var(--g);background:transparent;cursor:pointer;transition:all .15s; }
.mm-offer .utab.on { background:var(--p);color:var(--w); }
.mm-offer .upanel { display:none; }
.mm-offer .upanel.on { display:block; }
.mm-offer .il { display:flex;flex-direction:column;gap:16px; }
.mm-offer .ic { background:var(--bg2);border:1px solid var(--bd2);border-radius:6px;padding:24px 22px;display:flex;gap:18px;align-items:flex-start;transition:border-color .2s; }
.mm-offer .ic:hover { border-color:var(--p); }
.mm-offer .sev { font-size:10px;font-weight:800;padding:3px 9px;border-radius:99px;width:fit-content;letter-spacing:1px; }
.mm-offer .sh2 { background:rgba(239,68,68,.12);color:#f87171;border:1px solid rgba(239,68,68,.25); }
.mm-offer .smid { background:rgba(251,191,36,.12);color:#fbbf24;border:1px solid rgba(251,191,36,.25); }
.mm-offer .slow { background:rgba(34,197,94,.12);color:#4ade80;border:1px solid rgba(34,197,94,.25); }
.mm-offer .ifix { margin-top:12px;padding:10px 14px;border-radius:4px;background:rgba(124,58,237,.1);border-right:3px solid var(--p);font-size:12px;color:var(--p3);font-weight:600;line-height:1.6; }
.mm-offer .ifix::before { content:'✦ الحل المقترح: ';font-weight:800; }

.mm-offer .mkg { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
.mm-offer .mf { background:var(--bg2);border:1px solid var(--bd2);border-radius:8px;overflow:hidden; }
.mm-offer .mbar { background:var(--bg3);padding:10px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd2); }
.mm-offer .mdots { display:flex;gap:5px; }
.mm-offer .mdt { width:10px;height:10px;border-radius:50%; }
.mm-offer .mdt:nth-child(1) { background:#ef4444; }
.mm-offer .mdt:nth-child(2) { background:#fbbf24; }
.mm-offer .mdt:nth-child(3) { background:#22c55e; }
.mm-offer .murl { flex:1;background:var(--bg);border-radius:4px;padding:4px 12px;font-size:11px;color:var(--g);font-family:monospace;text-align:center; }
.mm-offer .mlbl2 { font-size:11px;color:var(--p3);font-weight:700;padding:10px 16px 4px;letter-spacing:1px; }

.mm-offer .mhero { background:linear-gradient(135deg,#0D0B1E,#1a0a2e);padding:18px 14px;position:relative;overflow:hidden; }
.mm-offer .mbadge { background:rgba(255,190,0,.15);border:1px solid rgba(255,190,0,.3);color:#FFBE00;font-size:9px;font-weight:700;padding:3px 10px;border-radius:99px;display:inline-block;margin-bottom:9px; }
.mm-offer .mbtns { display:flex;gap:7px;flex-wrap:wrap;margin-top:10px; }
.mm-offer .mbtn { font-size:10px;font-weight:700;padding:7px 14px;border-radius:99px;border:none;cursor:pointer;font-family:'Cairo',sans-serif; }
.mm-offer .mbp { background:#FFBE00;color:#0A0A0A; }
.mm-offer .mbg { background:transparent;color:#fff;border:1px solid rgba(255,255,255,.2); }
.mm-offer .mtags { display:flex;gap:5px;flex-wrap:wrap;margin-top:10px; }
.mm-offer .mtag { background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#9B97B8;font-size:9px;padding:3px 9px;border-radius:99px;font-weight:600; }
.mm-offer .mprod { padding:12px; }
.mm-offer .mpg { display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px; }
.mm-offer .mpc { background:var(--bg3);border-radius:5px;overflow:hidden;border:1px solid var(--bd2); }
.mm-offer .mpi { height:50px;background:linear-gradient(135deg,#1a1035,#2a1060);display:flex;align-items:center;justify-content:center;font-size:20px; }
.mm-offer .mpinfo { padding:7px; }
.mm-offer .mpn { font-size:9px;font-weight:700;margin-bottom:3px;line-height:1.3; }
.mm-offer .mpb { font-size:8px;color:#9B97B8;margin-bottom:4px; }
.mm-offer .mpf { display:flex;justify-content:space-between;align-items:center; }
.mm-offer .mpp { font-size:11px;font-weight:900;color:#FFBE00; }
.mm-offer .mpbtn { background:#FFBE00;color:#0A0A0A;font-size:8px;font-weight:800;padding:3px 7px;border-radius:99px;border:none;cursor:pointer;font-family:'Cairo',sans-serif; }
.mm-offer .mfilt { padding:10px 12px;background:var(--bg3);border-bottom:1px solid var(--bd2); }
.mm-offer .mchips { display:flex;gap:5px;flex-wrap:wrap;margin-top:6px; }
.mm-offer .mchip { font-size:9px;font-weight:700;padding:4px 9px;border-radius:99px;border:1px solid var(--bd2);color:var(--g);cursor:pointer;background:transparent; }
.mm-offer .mchip.on { background:rgba(255,190,0,.15);border-color:rgba(255,190,0,.4);color:#FFBE00; }
.mm-offer .msrch { display:flex;align-items:center;gap:7px;padding:9px 11px;background:var(--bg3);border-bottom:1px solid var(--bd2); }
.mm-offer .msinp { flex:1;background:rgba(255,255,255,.06);border:1px solid var(--bd2);border-radius:99px;padding:5px 12px;font-size:10px;color:var(--g); }
.mm-offer .msbtn { background:#FFBE00;border:none;color:#000;font-size:10px;font-weight:700;padding:5px 12px;border-radius:99px;cursor:pointer;font-family:'Cairo',sans-serif; }
.mm-offer .mups { padding:11px; }
.mm-offer .mupi { display:flex;gap:9px;align-items:center;background:var(--bg3);padding:8px 9px;border-radius:5px;border:1px solid var(--bd2);margin-bottom:7px; }
.mm-offer .muimg { width:30px;height:30px;background:linear-gradient(135deg,#1a1035,#2a1060);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0; }
.mm-offer .muadd { background:#FFBE00;color:#000;font-size:9px;font-weight:800;padding:4px 9px;border-radius:99px;border:none;cursor:pointer;font-family:'Cairo',sans-serif;flex-shrink:0; }
.mm-offer .nbadge { background:var(--p);color:#fff;font-size:8px;font-weight:800;padding:2px 7px;border-radius:99px;display:inline-block;margin-bottom:3px; }
.mm-offer .gbadge { background:#22c55e22;color:#4ade80;font-size:8px;font-weight:800;padding:2px 7px;border-radius:99px;border:1px solid #22c55e44;display:inline-block;margin-bottom:3px; }

.mm-offer .pcg { display:grid;grid-template-columns:repeat(3,1fr);gap:16px; }
.mm-offer .pcc { background:var(--bg2);border:1px solid var(--bd2);border-radius:4px;padding:38px 30px;display:flex;flex-direction:column;position:relative;transition:all .25s; }
.mm-offer .pcc:hover { border-color:var(--p);transform:translateY(-5px); }
.mm-offer .pcc.feat { background:var(--bg3);border-color:var(--p); }
.mm-offer .fbadge { position:absolute;top:-13px;right:28px;background:var(--p);color:var(--w);font-size:11px;font-weight:800;padding:4px 14px;border-radius:99px;letter-spacing:.5px; }
.mm-offer .free-month-badge { position:absolute;top:-13px;left:28px;background:var(--y);color:#0A0A0A;font-size:11px;font-weight:800;padding:4px 14px;border-radius:99px;letter-spacing:.5px; }
.mm-offer .offer-banner { display:flex;align-items:center;gap:14px;background:rgba(255,190,0,.08);border:1px solid rgba(255,190,0,.25);border-radius:8px;padding:18px 24px;margin-bottom:32px; }
.mm-offer .offer-banner-icon { font-size:28px;flex-shrink:0; }
.mm-offer .offer-banner-text { font-size:14px;font-weight:700;color:var(--g2);line-height:1.6; }
.mm-offer .offer-banner-text strong { color:var(--y);font-size:16px; }
.mm-offer .ppr { font-size:44px;font-weight:900;line-height:1;margin-bottom:4px; }
.mm-offer .ppr span { font-size:18px;font-weight:600;color:var(--g); }
.mm-offer .pdiv { height:1px;background:var(--bd2);margin:24px 0; }
.mm-offer .pfs { display:flex;flex-direction:column;gap:11px;flex:1; }
.mm-offer .pf { display:flex;align-items:flex-start;gap:9px;font-size:13px;color:var(--g2);line-height:1.5; }
.mm-offer .pck { width:18px;height:18px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0;margin-top:1px;background:rgba(124,58,237,.18);color:var(--p2); }
.mm-offer .pck.off { background:rgba(255,255,255,.05);color:var(--g); }

.mm-offer .adg { display:grid;grid-template-columns:repeat(4,1fr);gap:2px; }
.mm-offer .adc { background:var(--bg2);padding:26px 22px;display:flex;flex-direction:column;gap:9px;transition:background .2s; }
.mm-offer .adc:hover { background:var(--bg3); }
.mm-offer .adp { font-size:20px;font-weight:900;color:var(--p2); }
.mm-offer .adp span { font-size:12px;color:var(--g);font-weight:400; }

.mm-offer .wg { display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center; }
.mm-offer .wps { display:flex;flex-direction:column;gap:26px; }
.mm-offer .wp { display:flex;gap:18px;align-items:flex-start; }
.mm-offer .wnum { font-size:38px;font-weight:900;color:rgba(124,58,237,.25);line-height:1;flex-shrink:0;width:48px; }
.mm-offer .kbox { background:var(--bg);border:1px solid var(--bd2);border-radius:8px;padding:36px; }
.mm-offer .kr { display:flex;flex-direction:column;gap:18px; }
.mm-offer .ki { display:flex;flex-direction:column;gap:7px; }
.mm-offer .kl { display:flex;justify-content:space-between;font-size:12px; }

.mm-offer .tl { display:flex;position:relative; }
.mm-offer .ti { flex:1;display:flex;flex-direction:column;align-items:center;position:relative; }
.mm-offer .ti::after { content:'';position:absolute;top:15px;left:0;width:100%;height:2px;background:var(--bd2);z-index:0; }
.mm-offer .ti:last-child::after { display:none; }
.mm-offer .tdot2 { width:30px;height:30px;border-radius:50%;background:var(--bg3);border:2px solid var(--bd);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--p2);position:relative;z-index:1;margin-bottom:14px; }
.mm-offer .tdot2.done { background:var(--p);border-color:var(--p);color:#fff; }

.mm-offer .fc { background:linear-gradient(135deg,var(--bg3) 0%,#200a4e 100%);border-top:1px solid var(--bd);padding:80px 72px;display:flex;justify-content:space-between;align-items:center;gap:40px;position:relative;overflow:hidden; }
.mm-offer .fc::before { content:'';position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:500px;height:500px;background:radial-gradient(circle,rgba(124,58,237,.2) 0%,transparent 70%);pointer-events:none; }

.mm-offer .snav { position:fixed;right:18px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px;z-index:50; }
.mm-offer .sdot { width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.15);cursor:pointer;transition:all .2s; }
.mm-offer .sdot.on, .mm-offer .sdot:hover { background:var(--p2);transform:scale(1.4); }

@media(max-width:880px) {
  .mm-offer section { padding:60px 22px; }
  .mm-offer .hero { padding:100px 22px 60px; }
  .mm-offer nav { padding:16px 22px; }
  .mm-offer .sg, .mm-offer .svgg, .mm-offer .pcg, .mm-offer .mkg, .mm-offer .uii, .mm-offer .wg { grid-template-columns:1fr; }
  .mm-offer .adg { grid-template-columns:1fr 1fr; }
  .mm-offer .ph { grid-template-columns:1fr;gap:14px; }
  .mm-offer .snav { display:none; }
  .mm-offer .tl { flex-direction:column; }
  .mm-offer .ti::after { display:none; }
  .mm-offer .fc { flex-direction:column;padding:60px 22px; }
}
`;

export default function MotorMindOffer() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'تصور خطة إطلاق موتر ميند | نقطتين';

    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-w]').forEach(el => {
            setTimeout(() => { el.style.width = el.getAttribute('data-w'); }, 250);
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    document.querySelectorAll('.mm-offer .sbox, .mm-offer .kbox').forEach(el => io.observe(el));

    const sections = document.querySelectorAll('.mm-offer section[id]');
    const dots = document.querySelectorAll('.mm-offer .sdot');
    const sio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = [...sections].indexOf(e.target);
          dots.forEach((d, i) => d.classList.toggle('on', i === idx));
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => sio.observe(s));

    return () => {
      document.title = prevTitle;
      styleEl.remove();
      io.disconnect();
      sio.disconnect();
    };
  }, []);

  const utab = (el, id) => {
    document.querySelectorAll('.mm-offer .utab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.mm-offer .upanel').forEach(p => p.classList.remove('on'));
    el.classList.add('on');
    document.getElementById('p-' + id).classList.add('on');
  };

  const goTo = (sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mm-offer" lang="ar">
      {/* NAV */}
      <nav>
        <div className="nl"><span className="nd">..</span>نقطتين</div>
        <span style={{ fontSize: '12px', color: 'var(--g)' }}>وكالة تسويق رقمي وأتمتة</span>
        <a href="https://wa.me/966543569492?text=السلام%20عليكم،%20أريد%20الاستفسار%20عن%20خطة%20موتر%20ميند" target="_blank" rel="noopener noreferrer" className="btn btn-p" style={{ textDecoration: 'none', padding: '10px 22px' }}>تواصل معنا</a>
      </nav>

      {/* SIDE NAV */}
      <div className="snav">
        <div className="sdot on" onClick={() => goTo('#hero')}></div>
        <div className="sdot" onClick={() => goTo('#situation')}></div>
        <div className="sdot" onClick={() => goTo('#strategy')}></div>
        <div className="sdot" onClick={() => goTo('#services')}></div>
        <div className="sdot" onClick={() => goTo('#uiux')}></div>
        <div className="sdot" onClick={() => goTo('#pricing')}></div>
        <div className="sdot" onClick={() => goTo('#why')}></div>
      </div>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="tag" style={{ marginBottom: '36px' }}><span className="tdot"></span>تصور مبدئي — حصري</div>
        <div style={{ fontSize: '13px', color: 'var(--g)', marginBottom: '10px', letterSpacing: '1px' }}>مقدّم لـ شركة موتر ميند للتجارة</div>
        <h1 className="ht">خطة إطلاق<br /><span className="hl">المتجر الإلكتروني</span></h1>
        <p className="hs">تسويق متكامل يجمع المتجر الإلكتروني، الفروع الخمس، والخدمة المتنقلة — مع تحسينات UX تحوّل الزوار إلى مشترين.</p>
        <div className="hmeta">
          <div className="mi"><span className="mlbl">العميل</span><span className="mv">موتر ميند</span></div>
          <div className="mi"><span className="mlbl">القطاع</span><span className="mv">خدمات السيارات</span></div>
          <div className="mi"><span className="mlbl">نطاق العمل</span><span className="mv">إطلاق + UX + نمو</span></div>
          <div className="mi"><span className="mlbl">التاريخ</span><span className="mv">يونيو ٢٠٢٦</span></div>
        </div>
      </section>

      {/* SITUATION */}
      <section style={{ background: 'var(--bg2)' }} id="situation">
        <div className="ey"><span className="ey-t">قراءة الوضع الراهن</span></div>
        <h2 className="st">وين أنتم الحين؟</h2>
        <p className="sd">بناءً على الاجتماع وتحليلنا للحضور الرقمي لموتر ميند، هذه أبرز ما رصدناه.</p>
        <div className="sg">
          <div className="sc"><div style={{ fontSize: '22px' }}>🗃️</div><span className="sb sb-g">ميزة</span><div style={{ fontSize: '16px', fontWeight: '800' }}>قاعدة بيانات عملاء موجودة</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>بيانات عملاء الفروع الخمس مؤرشفة في النظام — فرصة ذهبية لحملات واتساب فور الإطلاق.</div></div>
          <div className="sc"><div style={{ fontSize: '22px' }}>📍</div><span className="sb sb-g">ميزة</span><div style={{ fontSize: '16px', fontWeight: '800' }}>تغطية جغرافية كاملة بالرياض</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>خمسة فروع تغطي شمال، جنوب، شرق، غرب، وسط — أصل يدعم التسويق الجيو-محلي.</div></div>
          <div className="sc"><div style={{ fontSize: '22px' }}>🚐</div><span className="sb sb-g">ميزة تنافسية</span><div style={{ fontSize: '16px', fontWeight: '800' }}>خدمة متنقلة تمييزية</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>العميل المشغول لا يريد الانتظار في البنشر — أنتم تحلّون هذه المشكلة. أقوى USP في السوق.</div></div>
          <div className="sc"><div style={{ fontSize: '22px' }}>🛒</div><span className="sb sb-g">ميزة</span><div style={{ fontSize: '16px', fontWeight: '800' }}>متجر Salla + تقسيط مفعّل</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>تابي، تمارا، إمكان — يرفعون معدل الشراء في منتجات ذات فاتورة مرتفعة.</div></div>
          <div className="sc"><div style={{ fontSize: '22px' }}>💬</div><span className="sb sb-w">تحدي</span><div style={{ fontSize: '16px', fontWeight: '800' }}>إشكالية الرد على العملاء</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>استفسارات بدون نظام رد منظّم = تسرّب فرص بيع يومي. يجب معالجتها قبل ضخ إعلانات.</div></div>
          <div className="sc"><div style={{ fontSize: '22px' }}>🎨</div><span className="sb sb-w">فرصة تحسين</span><div style={{ fontSize: '16px', fontWeight: '800' }}>تجربة المتجر تحتاج تطوير</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>المتجر يعمل لكن تجربة المستخدم بحاجة تحسينات لرفع معدل التحويل من زائر لمشترٍ.</div></div>
        </div>
      </section>

      {/* STRATEGY */}
      <section id="strategy">
        <div className="ey"><span className="ey-t">الاستراتيجية</span></div>
        <h2 className="st">الخطة على ٣ مراحل</h2>
        <p className="sd">نبني ماكينة تسويقية تشتغل لصالحكم وتكبر معكم.</p>
        <div>
          <div className="ph">
            <div><div className="pnum">المرحلة الأولى</div><div className="pdur">الأسابيع ١ — ٣</div></div>
            <div>
              <div className="phn">التأسيس والإعداد</div>
              <div className="ptags">
                <span className="pt hi">هوية بصرية موحّدة</span><span className="pt hi">جدول محتوى ٣٠ يوم</span>
                <span className="pt">إعداد بوت واتساب</span><span className="pt">تحسين UX المتجر</span>
                <span className="pt">استخراج قاعدة البيانات</span><span className="pt">وصف منتجات SEO</span>
              </div>
            </div>
            <div style={{ color: 'var(--g)', fontSize: '18px', paddingTop: '5px' }}>←</div>
          </div>
          <div className="ph">
            <div><div className="pnum">المرحلة الثانية</div><div className="pdur">الأسابيع ٤ — ٨</div></div>
            <div>
              <div className="phn">الإطلاق والإشعال</div>
              <div className="ptags">
                <span className="pt hi">حملة إطلاق (ميتا + سناب)</span><span className="pt hi">بث واتساب لعملاء الفروع</span>
                <span className="pt">ريلز وتيك توك للخدمة المتنقلة</span><span className="pt">ريتارجتينج زوار المتجر</span>
                <span className="pt">كوبونات الإطلاق</span>
              </div>
            </div>
            <div style={{ color: 'var(--g)', fontSize: '18px', paddingTop: '5px' }}>←</div>
          </div>
          <div className="ph">
            <div><div className="pnum">المرحلة الثالثة</div><div className="pdur">الأسابيع ٩ — ١٦</div></div>
            <div>
              <div className="phn">النمو والاستدامة</div>
              <div className="ptags">
                <span className="pt hi">تحسين الحملات بناءً على البيانات</span><span className="pt hi">بناء مجتمع العملاء</span>
                <span className="pt">برنامج الولاء</span><span className="pt">محتوى تعليمي</span><span className="pt">تقارير شهرية</span>
              </div>
            </div>
            <div style={{ color: 'var(--g)', fontSize: '18px', paddingTop: '5px' }}>←</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--bg2)' }} id="services">
        <div className="ey"><span className="ey-t">ما نقدّمه لكم</span></div>
        <h2 className="st">الخدمات المشمولة</h2>
        <p className="sd">كل الخدمات مصمّمة خصيصاً لقطاع خدمات السيارات في السوق السعودي.</p>
        <div className="svgg">
          <div className="svc"><div style={{ fontSize: '26px' }}>📲</div><div style={{ fontSize: '16px', fontWeight: '800' }}>إدارة السوشيال ميديا</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65', flex: '1' }}>محتوى منتظم على إنستغرام، سناب، تيك توك، فيسبوك.</div><div className="svl"><div className="svli">٢٠–٣٠ منشور شهرياً + تصاميم</div><div className="svli">ريلز وفيديو للخدمة المتنقلة</div><div className="svli">إدارة التعليقات والرسائل</div></div></div>
          <div className="svc"><div style={{ fontSize: '26px' }}>🎯</div><div style={{ fontSize: '16px', fontWeight: '800' }}>الإعلانات المدفوعة</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65', flex: '1' }}>حملات ميتا وسناب لأصحاب السيارات بالرياض.</div><div className="svl"><div className="svli">حملات ترافيك للمتجر الإلكتروني</div><div className="svli">حملات جيو للخدمة المتنقلة</div><div className="svli">ريتارجتينج + تقارير أسبوعية</div></div></div>
          <div className="svc"><div style={{ fontSize: '26px' }}>💬</div><div style={{ fontSize: '16px', fontWeight: '800' }}>أتمتة واتساب</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65', flex: '1' }}>ردود فورية وبث ترويجي لقاعدة بيانات الفروع.</div><div className="svl"><div className="svli">بوت رد تلقائي على الاستفسارات</div><div className="svli">بث واتساب شهري لعملاء الفروع</div><div className="svli">تذكير مواعيد الصيانة</div></div></div>
          <div className="svc"><div style={{ fontSize: '26px' }}>🛒</div><div style={{ fontSize: '16px', fontWeight: '800' }}>تحسين المتجر الإلكتروني</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65', flex: '1' }}>تجربة مستخدم ترفع معدل التحويل على Salla.</div><div className="svl"><div className="svli">وصف منتجات SEO-friendly</div><div className="svli">فلترة ذكية + Upsell</div><div className="svli">صفحة خدمات السيارات كاملة</div></div></div>
          <div className="svc"><div style={{ fontSize: '26px' }}>🎬</div><div style={{ fontSize: '16px', fontWeight: '800' }}>إنتاج المحتوى</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65', flex: '1' }}>تصوير الفروع والخدمة المتنقلة في الميدان.</div><div className="svl"><div className="svli">خطة تصوير شهرية</div><div className="svli">محتوى وراء الكواليس</div><div className="svli">مراجعات عملاء مصوّرة</div></div></div>
          <div className="svc"><div style={{ fontSize: '26px' }}>📊</div><div style={{ fontSize: '16px', fontWeight: '800' }}>التقارير والتحليل</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65', flex: '1' }}>تقارير شهرية واضحة بدون مصطلحات معقّدة.</div><div className="svl"><div className="svli">مؤشرات الأداء الرئيسية</div><div className="svli">تحليل عائد الإعلانات ROAS</div><div className="svli">اجتماع مراجعة شهري</div></div></div>
        </div>
      </section>

      {/* UIUX */}
      <section id="uiux">
        <div className="ey"><span className="ey-t">تحسينات المتجر الإلكتروني</span></div>
        <h2 className="st">UI/UX — من زائر إلى مشترٍ</h2>
        <p className="sd">المتجر يعمل، لكن تجربة الشراء بحاجة تحسينات استراتيجية لرفع معدل التحويل.</p>
        <div className="uii">
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '14px' }}>ما الذي يعيق الشراء الآن؟</h3>
            <p style={{ fontSize: '14px', color: 'var(--g)', lineHeight: '1.75', marginBottom: '16px' }}>أجرينا مراجعة UX شاملة لمتجر موتر ميند. رصدنا ٦ مشاكل رئيسية تؤثر مباشرة على قرار الشراء — من غياب الفلترة الذكية، إلى ضعف صفحة الخدمات، إلى انعدام البيع الإضافي.</p>
            <p style={{ fontSize: '14px', color: 'var(--g)', lineHeight: '1.75', marginBottom: '28px' }}>تحسين UX وحده يمكنه رفع معدل التحويل <strong style={{ color: 'var(--p3)' }}>من ١٪ إلى ٣–٥٪</strong> — أي ٣-٥ أضعاف المبيعات بنفس ميزانية الإعلانات.</p>
            <a href="https://wa.me/966543569492?text=أريد%20مناقشة%20تحسينات%20متجر%20موتر%20ميند%20الإلكتروني" target="_blank" rel="noopener noreferrer" className="btn btn-p" style={{ textDecoration: 'none' }}>ناقشوا معنا التحسينات ←</a>
          </div>
          <div className="sbox">
            <div className="sboxh">
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--g)' }}>تقييم المتجر الحالي</div>
              <div className="sov">٥٤<small>/١٠٠</small></div>
            </div>
            <div className="srs">
              <div className="sr"><div className="srl"><span style={{ color: 'var(--g2)', fontSize: '12px', fontWeight: '600' }}>تجربة التصفح والاكتشاف</span><span style={{ fontSize: '12px', fontWeight: '800', color: '#ef4444' }}>٤٠</span></div><div className="bar"><div className="fill fr" data-w="40%"></div></div></div>
              <div className="sr"><div className="srl"><span style={{ color: 'var(--g2)', fontSize: '12px', fontWeight: '600' }}>جودة صفحات المنتج</span><span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--y)' }}>٥٥</span></div><div className="bar"><div className="fill fy" data-w="55%"></div></div></div>
              <div className="sr"><div className="srl"><span style={{ color: 'var(--g2)', fontSize: '12px', fontWeight: '600' }}>عملية الدفع والشراء</span><span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--y)' }}>٦٥</span></div><div className="bar"><div className="fill fy" data-w="65%"></div></div></div>
              <div className="sr"><div className="srl"><span style={{ color: 'var(--g2)', fontSize: '12px', fontWeight: '600' }}>الهوية البصرية والثقة</span><span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--y)' }}>٦٠</span></div><div className="bar"><div className="fill fy" data-w="60%"></div></div></div>
              <div className="sr"><div className="srl"><span style={{ color: 'var(--g2)', fontSize: '12px', fontWeight: '600' }}>صفحة الخدمة المتنقلة</span><span style={{ fontSize: '12px', fontWeight: '800', color: '#ef4444' }}>٢٥</span></div><div className="bar"><div className="fill fr" data-w="25%"></div></div></div>
              <div className="sr"><div className="srl"><span style={{ color: 'var(--g2)', fontSize: '12px', fontWeight: '600' }}>البيع الإضافي Upsell</span><span style={{ fontSize: '12px', fontWeight: '800', color: '#ef4444' }}>٣٠</span></div><div className="bar"><div className="fill fr" data-w="30%"></div></div></div>
            </div>
          </div>
        </div>

        <div className="utabs">
          <button className="utab on" onClick={e => utab(e.currentTarget, 'issues')}>المشاكل والحلول</button>
          <button className="utab" onClick={e => utab(e.currentTarget, 'mocks')}>نماذج UI مقترحة</button>
        </div>

        <div className="upanel on" id="p-issues">
          <div className="il">
            <div className="ic"><div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>🔍</div><div style={{ flex: 1 }}><span className="sev sh2">أولوية عالية</span><div style={{ fontSize: '15px', fontWeight: '800', margin: '6px 0 5px' }}>غياب الفلترة الذكية للمنتجات</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>الزائر الذي يبحث عن زيت بمواصفة معينة لا يجد فلترة حسب نوع السيارة، البراند، أو السعر. نتيجة: خروج بدون شراء.</div><div className="ifix">إضافة فلاتر chip-style سريعة: الفئة، البراند، نوع السيارة، نطاق السعر. يُطبَّق في أعلى كل قسم.</div></div></div>
            <div className="ic"><div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>📄</div><div style={{ flex: 1 }}><span className="sev sh2">أولوية عالية</span><div style={{ fontSize: '15px', fontWeight: '800', margin: '6px 0 5px' }}>صفحة "خدمات السيارات" شبه فارغة</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>القسم موجود في القائمة لكنه لا يحتوي تفاصيل، أسعاراً، أو آلية حجز — يفوّت أبرز USP لديكم.</div><div className="ifix">بناء صفحة خدمات كاملة: الخدمة المتنقلة + فروع، مع سعر استرشادي ومناطق تغطية وزر حجز واتساب.</div></div></div>
            <div className="ic"><div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>📦</div><div style={{ flex: 1 }}><span className="sev sh2">أولوية عالية</span><div style={{ fontSize: '15px', fontWeight: '800', margin: '6px 0 5px' }}>لا يوجد Upsell / Cross-sell</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>مشتري الزيت لا يُعرض عليه فلتر متوافق أو خدمة تغيير — خسارة مباشرة في متوسط قيمة الطلب.</div><div className="ifix">إضافة "منتجات مكمّلة" في صفحة كل منتج: "اشترِ معه الفلتر + خدمة التركيب وفّر ٢٠٪".</div></div></div>
            <div className="ic"><div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>🏠</div><div style={{ flex: 1 }}><span className="sev smid">أولوية متوسطة</span><div style={{ fontSize: '15px', fontWeight: '800', margin: '6px 0 5px' }}>الصفحة الرئيسية لا تحكي قصة واضحة</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>الزائر الجديد لا يفهم على الفور: ما الذي يجعل موتر ميند مختلفاً؟ لماذا يشتري هنا؟</div><div className="ifix">إعادة تصميم Hero: عنوان يبرز الخدمة المتنقلة، badge إفتتاح أكثر بروزاً، CTA واضح.</div></div></div>
            <div className="ic"><div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>🤝</div><div style={{ flex: 1 }}><span className="sev smid">أولوية متوسطة</span><div style={{ fontSize: '15px', fontWeight: '800', margin: '6px 0 5px' }}>غياب عناصر بناء الثقة</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>لا توجد شعارات براندات بارزة، ولا تقييمات عملاء فيديو، ولا "الأكثر مبيعاً" لتوجيه القرار.</div><div className="ifix">شريط براندات بارز، قسم تقييمات Google، وbadge ضمان الأصالة في كل منتج.</div></div></div>
            <div className="ic"><div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>📱</div><div style={{ flex: 1 }}><span className="sev slow">تحسين</span><div style={{ fontSize: '15px', fontWeight: '800', margin: '6px 0 5px' }}>زر واتساب بدون رسالة مسبقة</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.65' }}>الزائر الذي ينقر يجد نافذة فارغة — يقلل من احتمال التواصل والإكمال.</div><div className="ifix">ربط الزر برسالة تتضمن اسم المنتج تلقائياً: "أريد الاستفسار عن: موبيل ١ لتر ٥W-٣٠".</div></div></div>
          </div>
        </div>

        <div className="upanel" id="p-mocks">
          <div style={{ fontSize: '17px', fontWeight: '800', marginBottom: '22px' }}>نماذج UI مقترحة — كيف يصبح المتجر</div>
          <div className="mkg">
            <div className="mf">
              <div className="mbar"><div className="mdots"><div className="mdt"></div><div className="mdt"></div><div className="mdt"></div></div><div className="murl">motormend.net</div></div>
              <div className="mlbl2">✦ الصفحة الرئيسية — Hero محسّن</div>
              <div className="mhero">
                <div className="mbadge">🎉 خصومات الإفتتاح تصل ٥٠٪</div>
                <div style={{ fontSize: '16px', fontWeight: '900', lineHeight: '1.2', marginBottom: '6px' }}>كل خدمات سيارتك<br /><span style={{ color: '#FFBE00' }}>في مكانك أنت 🚐</span></div>
                <div style={{ fontSize: '10px', color: '#9B97B8', lineHeight: '1.6', marginBottom: '10px' }}>إطارات، زيوت، بطاريات — في فروعنا الخمس<br />أو نجيك أينما كنت بخدمتنا المتنقلة</div>
                <div className="mbtns"><button className="mbtn mbp">تسوّق الآن ←</button><button className="mbtn mbg">احجز خدمة متنقلة</button></div>
                <div className="mtags"><span className="mtag">🗺️ ٥ فروع بالرياض</span><span className="mtag">✅ ضمان الأصالة</span><span className="mtag">💳 تقسيط متاح</span></div>
              </div>
            </div>
            <div className="mf">
              <div className="mbar"><div className="mdots"><div className="mdt"></div><div className="mdt"></div><div className="mdt"></div></div><div className="murl">motormend.net/زيوت-المحرك</div></div>
              <div className="mlbl2">✦ قسم الزيوت — فلترة ذكية + كروت محسّنة</div>
              <div className="msrch"><div className="msinp">ابحث عن زيت، إطار، بطارية...</div><button className="msbtn">بحث</button></div>
              <div className="mfilt">
                <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--g)' }}>فلترة سريعة</div>
                <div className="mchips"><button className="mchip on">زيوت المحرك</button><button className="mchip">كاسترول</button><button className="mchip">موبيل</button><button className="mchip">تويوتا</button><button className="mchip">الأرخص</button><button className="mchip">الأكثر مبيعاً</button></div>
              </div>
              <div className="mprod">
                <div style={{ fontSize: '10px', fontWeight: '700', marginBottom: '8px' }}>الزيوت (٢٤٠+ منتج)</div>
                <div className="mpg">
                  <div className="mpc"><div className="mpi">🛢️</div><div className="mpinfo"><div className="nbadge">الأكثر مبيعاً</div><div className="mpn">موبيل ١ — ٤ لتر</div><div className="mpb">Mobil 1 • 5W-30</div><div className="mpf"><div className="mpp">١٣٩ ر.س</div><button className="mpbtn">أضف</button></div></div></div>
                  <div className="mpc"><div className="mpi">🛢️</div><div className="mpinfo"><div className="gbadge">الأفضل قيمة</div><div className="mpn">كاسترول GTX — ٤ لتر</div><div className="mpb">Castrol • 10W-40</div><div className="mpf"><div className="mpp">٨٩ ر.س</div><button className="mpbtn">أضف</button></div></div></div>
                  <div className="mpc"><div className="mpi">🛢️</div><div className="mpinfo"><div className="mpn">شل هيليكس — ٤ لتر</div><div className="mpb">Shell • 5W-40</div><div className="mpf"><div className="mpp">١١٥ ر.س</div><button className="mpbtn">أضف</button></div></div></div>
                </div>
              </div>
            </div>
            <div className="mf">
              <div className="mbar"><div className="mdots"><div className="mdt"></div><div className="mdt"></div><div className="mdt"></div></div><div className="murl">motormend.net/product/mobil-1</div></div>
              <div className="mlbl2">✦ صفحة المنتج — Upsell محسّن</div>
              <div className="mups">
                <div style={{ background: 'var(--bg3)', borderRadius: '5px', padding: '10px', marginBottom: '9px', border: '1px solid rgba(255,190,0,.2)' }}><div style={{ fontSize: '9px', fontWeight: '700', color: '#FFBE00', marginBottom: '3px' }}>✅ أضفت: موبيل ١ — ٤ لتر</div><div style={{ fontSize: '9px', color: '#9B97B8' }}>هل تريد اكتمال الخدمة؟</div></div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--g)', marginBottom: '8px' }}>🎯 أكمل صيانة محركك — وفّر ١٥٪</div>
                <div className="mupi"><div className="muimg">🔧</div><div style={{ flex: 1 }}><div className="nbadge">موصى به</div><div style={{ fontSize: '9px', fontWeight: '700' }}>فلتر زيت متوافق</div><div style={{ fontSize: '10px', fontWeight: '900', color: '#FFBE00' }}>٢٥ ر.س</div></div><button className="muadd">أضف ←</button></div>
                <div className="mupi"><div className="muimg">🚐</div><div style={{ flex: 1 }}><div className="gbadge">الأكثر طلباً</div><div style={{ fontSize: '9px', fontWeight: '700' }}>خدمة تغيير الزيت في موقعك</div><div style={{ fontSize: '10px', fontWeight: '900', color: '#FFBE00' }}>٥٠ ر.س</div></div><button className="muadd">أضف ←</button></div>
                <div className="mupi"><div className="muimg">🔩</div><div style={{ flex: 1 }}><div style={{ fontSize: '9px', fontWeight: '700' }}>فلتر هواء + فلتر مكيف</div><div style={{ fontSize: '10px', fontWeight: '900', color: '#FFBE00' }}>٤٥ ر.س</div></div><button className="muadd">أضف ←</button></div>
                <div style={{ background: 'rgba(255,190,0,.08)', border: '1px solid rgba(255,190,0,.2)', borderRadius: '4px', padding: '8px 10px' }}><div style={{ fontSize: '9px', fontWeight: '800', color: '#FFBE00' }}>🎁 الباقة الكاملة بـ ٢٠٥ ر.س بدل ٢٥٥ — وفّر ٢٠٪</div></div>
              </div>
            </div>
            <div className="mf">
              <div className="mbar"><div className="mdots"><div className="mdt"></div><div className="mdt"></div><div className="mdt"></div></div><div className="murl">motormend.net/خدمات-السيارات</div></div>
              <div className="mlbl2">✦ صفحة الخدمة المتنقلة — مقترحة</div>
              <div style={{ padding: '14px', background: 'linear-gradient(135deg,#0D0B1E,#1a0830)' }}>
                <div style={{ fontSize: '10px', fontWeight: '700', color: '#FFBE00', marginBottom: '5px' }}>🚐 الخدمة المتنقلة</div>
                <div style={{ fontSize: '15px', fontWeight: '900', marginBottom: '4px' }}>ما تحرّك — إحنا نجيك</div>
                <div style={{ fontSize: '10px', color: '#9B97B8', marginBottom: '10px' }}>في البيت، في المكتب، أي مكان بالرياض</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '10px' }}>
                  <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '8px' }}><div style={{ fontSize: '16px', marginBottom: '3px' }}>🛢️</div><div style={{ fontSize: '9px', fontWeight: '700' }}>تغيير الزيت</div><div style={{ fontSize: '9px', color: '#9B97B8' }}>من ٩٩ ر.س</div></div>
                  <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '8px' }}><div style={{ fontSize: '16px', marginBottom: '3px' }}>⚡</div><div style={{ fontSize: '9px', fontWeight: '700' }}>تغيير البطارية</div><div style={{ fontSize: '9px', color: '#9B97B8' }}>من ١٩٩ ر.س</div></div>
                  <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '8px' }}><div style={{ fontSize: '16px', marginBottom: '3px' }}>🔄</div><div style={{ fontSize: '9px', fontWeight: '700' }}>تغيير الإطارات</div><div style={{ fontSize: '9px', color: '#9B97B8' }}>من ٣٩٩ ر.س</div></div>
                  <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '8px' }}><div style={{ fontSize: '16px', marginBottom: '3px' }}>🔧</div><div style={{ fontSize: '9px', fontWeight: '700' }}>تغيير الفلاتر</div><div style={{ fontSize: '9px', color: '#9B97B8' }}>من ٤٩ ر.س</div></div>
                </div>
                <a href="https://wa.me/966543569492?text=أريد%20حجز%20خدمة%20متنقلة%20من%20موتر%20ميند" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#25D366', color: '#fff', textAlign: 'center', padding: '9px', borderRadius: '99px', fontSize: '10px', fontWeight: '800', textDecoration: 'none', marginBottom: '6px' }}>📱 احجز الآن عبر واتساب</a>
                <div style={{ fontSize: '9px', color: '#9B97B8', textAlign: 'center' }}>متاح ٨ص – ١٠م | الرياض كلها</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: 'var(--bg2)' }} id="pricing">
        <div className="ey"><span className="ey-t">باقات الشراكة</span></div>
        <h2 className="st">اختار الباقة المناسبة</h2>
        <p className="sd">ثلاث باقات — كلها تشمل الإعداد الأولي وتحسينات UX المذكورة أعلاه.</p>
        <div className="offer-banner">
          <div className="offer-banner-icon">🎁</div>
          <div className="offer-banner-text">
            <strong>شهر مجاني عند تمام كل ٦ أشهر</strong><br />
            مكافأة وفائكم — كل ٦ أشهر منجزة تحصلون على الشهر السابع مجاناً بنفس الباقة.
          </div>
        </div>
        <div className="pcg">
          <div className="pcc">
            <div className="free-month-badge">🎁 شهر مجاني / ٦ أشهر</div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--p2)', letterSpacing: '2px', marginBottom: '18px' }}>الباقة الأولى</div>
            <div style={{ fontSize: '22px', fontWeight: '900', marginBottom: '6px' }}>الانطلاقة</div>
            <div style={{ fontSize: '13px', color: 'var(--g)', marginBottom: '28px', lineHeight: '1.6' }}>للإطلاق الذكي — سوشيال + متجر + واتساب أساسي</div>
            <div className="ppr">٥٬٠٠٠ <span>ر.س</span></div>
            <div style={{ fontSize: '11px', color: 'var(--g)', fontWeight: '700', letterSpacing: '1px', marginBottom: '28px' }}>/ شهرياً — عقد ٣ أشهر</div>
            <div className="pdiv"></div>
            <div className="pfs">
              <div className="pf"><div className="pck">✓</div>إدارة ٣ منصات (إنستغرام، سناب، تيك توك)</div>
              <div className="pf"><div className="pck">✓</div>٢٠ منشور شهرياً + تصاميم</div>
              <div className="pf"><div className="pck">✓</div>مراجعة وتحسين UX أساسي للمتجر</div>
              <div className="pf"><div className="pck">✓</div>بث واتساب لعملاء الفروع</div>
              <div className="pf"><div className="pck">✓</div>تقرير شهري</div>
              <div className="pf"><div className="pck off">—</div><span style={{ color: 'var(--g)' }}>إعلانات مدفوعة</span></div>
              <div className="pf"><div className="pck off">—</div><span style={{ color: 'var(--g)' }}>بوت واتساب أتمتة</span></div>
            </div>
            <a href="https://wa.me/966543569492?text=أريد%20الاستفسار%20عن%20باقة%20الانطلاقة%20-%20موتر%20ميند" target="_blank" rel="noopener noreferrer" className="btn btn-g" style={{ textDecoration: 'none', textAlign: 'center', marginTop: '28px', justifyContent: 'center' }}>تواصل معنا</a>
          </div>
          <div className="pcc feat">
            <div className="fbadge">الأكثر طلباً</div>
            <div className="free-month-badge">🎁 شهر مجاني / ٦ أشهر</div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--p2)', letterSpacing: '2px', marginBottom: '18px' }}>الباقة الثانية</div>
            <div style={{ fontSize: '22px', fontWeight: '900', marginBottom: '6px' }}>النمو</div>
            <div style={{ fontSize: '13px', color: 'var(--g)', marginBottom: '28px', lineHeight: '1.6' }}>الخيار الأمثل — تسويق متكامل + UX + إعلانات + أتمتة</div>
            <div className="ppr">٩٬٠٠٠ <span>ر.س</span></div>
            <div style={{ fontSize: '11px', color: 'var(--g)', fontWeight: '700', letterSpacing: '1px', marginBottom: '28px' }}>/ شهرياً — عقد ٦ أشهر</div>
            <div className="pdiv"></div>
            <div className="pfs">
              <div className="pf"><div className="pck">✓</div>إدارة ٥ منصات كاملة</div>
              <div className="pf"><div className="pck">✓</div>٣٠ منشور شهرياً + تصاميم احترافية</div>
              <div className="pf"><div className="pck">✓</div>إعلانات ميتا + سناب (بميزانية منفصلة)</div>
              <div className="pf"><div className="pck">✓</div>تنفيذ تحسينات UX الكاملة على المتجر</div>
              <div className="pf"><div className="pck">✓</div>بوت واتساب + أتمتة الردود</div>
              <div className="pf"><div className="pck">✓</div>بث واتساب شهري لعملاء الفروع</div>
              <div className="pf"><div className="pck">✓</div>٤ ريلز شهرياً للخدمة المتنقلة</div>
              <div className="pf"><div className="pck">✓</div>تقرير شهري + اجتماع مراجعة</div>
            </div>
            <a href="https://wa.me/966543569492?text=أريد%20الاستفسار%20عن%20باقة%20النمو%20-%20موتر%20ميند" target="_blank" rel="noopener noreferrer" className="btn btn-p" style={{ textDecoration: 'none', textAlign: 'center', marginTop: '28px', justifyContent: 'center' }}>ابدأ بهذي الباقة ←</a>
          </div>
          <div className="pcc">
            <div className="free-month-badge">🎁 شهر مجاني / ٦ أشهر</div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--p2)', letterSpacing: '2px', marginBottom: '18px' }}>الباقة الثالثة</div>
            <div style={{ fontSize: '22px', fontWeight: '900', marginBottom: '6px' }}>الشراكة الكاملة</div>
            <div style={{ fontSize: '13px', color: 'var(--g)', marginBottom: '28px', lineHeight: '1.6' }}>لمن يريد ماكينة تسويقية تعمل ٢٤/٧</div>
            <div className="ppr">١٥٬٠٠٠ <span>ر.س</span></div>
            <div style={{ fontSize: '11px', color: 'var(--g)', fontWeight: '700', letterSpacing: '1px', marginBottom: '28px' }}>/ شهرياً — عقد سنوي</div>
            <div className="pdiv"></div>
            <div className="pfs">
              <div className="pf"><div className="pck">✓</div>كل ما في باقة النمو</div>
              <div className="pf"><div className="pck">✓</div>مصوّر ميداني شهري</div>
              <div className="pf"><div className="pck">✓</div>إدارة رد العملاء ٨ ساعات يومياً</div>
              <div className="pf"><div className="pck">✓</div>CRM أساسي لمتابعة العملاء</div>
              <div className="pf"><div className="pck">✓</div>برنامج ولاء العملاء (تصميم + تنفيذ)</div>
              <div className="pf"><div className="pck">✓</div>حملات مناسبات (رمضان، صيف، إجازات)</div>
              <div className="pf"><div className="pck">✓</div>استراتيجية تطبيق الجوال</div>
              <div className="pf"><div className="pck">✓</div>تقارير أسبوعية + اجتماع شهري</div>
            </div>
            <a href="https://wa.me/966543569492?text=أريد%20الاستفسار%20عن%20باقة%20الشراكة%20الكاملة%20-%20موتر%20ميند" target="_blank" rel="noopener noreferrer" className="btn btn-g" style={{ textDecoration: 'none', textAlign: 'center', marginTop: '28px', justifyContent: 'center' }}>تواصل معنا</a>
          </div>
        </div>
      </section>

      {/* ADDONS */}
      <section>
        <div className="ey"><span className="ey-t">إضافات اختيارية</span></div>
        <h2 className="st">ترقيات وخدمات منفصلة</h2>
        <p className="sd">تضاف لأي باقة حسب الحاجة.</p>
        <div className="adg">
          <div className="adc"><div style={{ fontSize: '22px' }}>📸</div><div style={{ fontSize: '14px', fontWeight: '700' }}>جلسة تصوير ميداني</div><div className="adp">١٬٥٠٠ <span>ر.س/جلسة</span></div><div style={{ fontSize: '12px', color: 'var(--g)', lineHeight: '1.55' }}>تصوير في الفرع أو الخدمة المتنقلة</div></div>
          <div className="adc"><div style={{ fontSize: '22px' }}>🤖</div><div style={{ fontSize: '14px', fontWeight: '700' }}>بوت واتساب متقدم</div><div className="adp">٢٬٥٠٠ <span>ر.س/مرة</span></div><div style={{ fontSize: '12px', color: 'var(--g)', lineHeight: '1.55' }}>سيناريوهات متعددة وجدولة مواعيد</div></div>
          <div className="adc"><div style={{ fontSize: '22px' }}>🗺️</div><div style={{ fontSize: '14px', fontWeight: '700' }}>إعلانات Google Maps</div><div className="adp">٢٬٠٠٠ <span>ر.س/شهر</span></div><div style={{ fontSize: '12px', color: 'var(--g)', lineHeight: '1.55' }}>ظهور قرب الفروع الخمس</div></div>
          <div className="adc"><div style={{ fontSize: '22px' }}>⭐</div><div style={{ fontSize: '14px', fontWeight: '700' }}>إدارة التقييمات</div><div className="adp">١٬٠٠٠ <span>ر.س/شهر</span></div><div style={{ fontSize: '12px', color: 'var(--g)', lineHeight: '1.55' }}>متابعة Google والمنصات والرد عليها</div></div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: 'var(--bg2)' }} id="why">
        <div className="ey"><span className="ey-t">لماذا نقطتين</span></div>
        <h2 className="st">شريك يفهم سوقكم</h2>
        <div className="wg">
          <div className="wps">
            <div className="wp"><div className="wnum">١</div><div><div style={{ fontSize: '15px', fontWeight: '800', marginBottom: '5px' }}>متخصصون في السوق السعودي</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.7' }}>نفهم المستهلك السعودي، منصاته، وطريقة قراره الشرائي.</div></div></div>
            <div className="wp"><div className="wnum">٢</div><div><div style={{ fontSize: '15px', fontWeight: '800', marginBottom: '5px' }}>تكامل التسويق والتقنية والـ UX</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.7' }}>لا نكتفي بالمحتوى — نبني أنظمة واتمتة وتجارب مستخدم تشتغل وأنتم نايمين.</div></div></div>
            <div className="wp"><div className="wnum">٣</div><div><div style={{ fontSize: '15px', fontWeight: '800', marginBottom: '5px' }}>شفافية كاملة في النتائج</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.7' }}>تقارير بأرقام حقيقية — كم إعلان، كم نقرة، كم مبيعة.</div></div></div>
            <div className="wp"><div className="wnum">٤</div><div><div style={{ fontSize: '15px', fontWeight: '800', marginBottom: '5px' }}>شراكة طويلة المدى</div><div style={{ fontSize: '13px', color: 'var(--g)', lineHeight: '1.7' }}>نبني معكم خطط التطبيق والخدمة المتنقلة والتوسع — لا لكم.</div></div></div>
          </div>
          <div className="kbox">
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--g)', marginBottom: '5px' }}>مؤشرات نستهدفها خلال ٩٠ يوم</div>
            <div style={{ fontSize: '11px', color: 'rgba(155,151,184,.6)', marginBottom: '26px' }}>أرقام تقديرية بناءً على السوق وتجارب مماثلة</div>
            <div className="kr">
              <div className="ki"><div className="kl"><span style={{ color: 'var(--g2)', fontWeight: '600' }}>طلبات المتجر الإلكتروني</span><span style={{ fontWeight: '800', color: '#22c55e' }}>+٤٠٠٪</span></div><div className="bar"><div className="fill fg" data-w="85%"></div></div></div>
              <div className="ki"><div className="kl"><span style={{ color: 'var(--g2)', fontWeight: '600' }}>متابعو منصات التواصل</span><span style={{ fontWeight: '800', color: 'var(--p2)' }}>+٥٠٠٠</span></div><div className="bar"><div className="fill fp" data-w="70%"></div></div></div>
              <div className="ki"><div className="kl"><span style={{ color: 'var(--g2)', fontWeight: '600' }}>طلبات الخدمة المتنقلة</span><span style={{ fontWeight: '800', color: '#22c55e' }}>+٢٠٠٪</span></div><div className="bar"><div className="fill fg" data-w="60%"></div></div></div>
              <div className="ki"><div className="kl"><span style={{ color: 'var(--g2)', fontWeight: '600' }}>معدل تحويل الزوار</span><span style={{ fontWeight: '800', color: 'var(--y)' }}>٣–٥٪</span></div><div className="bar"><div className="fill fy" data-w="50%"></div></div></div>
              <div className="ki"><div className="kl"><span style={{ color: 'var(--g2)', fontWeight: '600' }}>متوسط قيمة الطلب (Upsell)</span><span style={{ fontWeight: '800', color: 'var(--y)' }}>+٣٥٪</span></div><div className="bar"><div className="fill fy" data-w="35%"></div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: 'var(--bg3)' }}>
        <div className="ey"><span className="ey-t">جدول التنفيذ</span></div>
        <h2 className="st" style={{ marginBottom: '52px' }}>من التوقيع للإطلاق</h2>
        <div className="tl">
          <div className="ti"><div className="tdot2 done">✓</div><div style={{ fontSize: '12px', fontWeight: '800', textAlign: 'center', marginBottom: '4px' }}>الاجتماع الأول</div><div style={{ fontSize: '11px', color: 'var(--g)', textAlign: 'center', lineHeight: '1.5', padding: '0 8px' }}>الاكتشاف ✓</div></div>
          <div className="ti"><div className="tdot2">٢</div><div style={{ fontSize: '12px', fontWeight: '800', textAlign: 'center', marginBottom: '4px' }}>الأسبوع ١</div><div style={{ fontSize: '11px', color: 'var(--g)', textAlign: 'center', lineHeight: '1.5', padding: '0 8px' }}>التوقيع والوصول للحسابات</div></div>
          <div className="ti"><div className="tdot2">٣</div><div style={{ fontSize: '12px', fontWeight: '800', textAlign: 'center', marginBottom: '4px' }}>الأسبوع ٢</div><div style={{ fontSize: '11px', color: 'var(--g)', textAlign: 'center', lineHeight: '1.5', padding: '0 8px' }}>تحسينات UX + تصاميم + خطة محتوى</div></div>
          <div className="ti"><div className="tdot2">٤</div><div style={{ fontSize: '12px', fontWeight: '800', textAlign: 'center', marginBottom: '4px' }}>الأسبوع ٣</div><div style={{ fontSize: '11px', color: 'var(--g)', textAlign: 'center', lineHeight: '1.5', padding: '0 8px' }}>إطلاق السوشيال + بث واتساب</div></div>
          <div className="ti"><div className="tdot2">٥</div><div style={{ fontSize: '12px', fontWeight: '800', textAlign: 'center', marginBottom: '4px' }}>الأسبوع ٤</div><div style={{ fontSize: '11px', color: 'var(--g)', textAlign: 'center', lineHeight: '1.5', padding: '0 8px' }}>إطلاق الإعلانات المدفوعة</div></div>
          <div className="ti"><div className="tdot2">٦</div><div style={{ fontSize: '12px', fontWeight: '800', textAlign: 'center', marginBottom: '4px' }}>الشهر ٢–٣</div><div style={{ fontSize: '11px', color: 'var(--g)', textAlign: 'center', lineHeight: '1.5', padding: '0 8px' }}>تحسين، قياس، تسريع</div></div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="fc">
        <div style={{ fontSize: 'clamp(22px,3.5vw,40px)', fontWeight: '900', lineHeight: '1.2', maxWidth: '480px', position: 'relative' }}>جاهزون نبدأ معكم<br />من الأسبوع القادم</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end', flexShrink: 0, position: 'relative' }}>
          <a href="https://wa.me/966543569492?text=السلام%20عليكم،%20شاهدت%20تصور%20موتر%20ميند%20وأريد%20مناقشة%20التفاصيل" target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ textDecoration: 'none', fontSize: '15px', padding: '16px 32px' }}>💬 تواصل على واتساب</a>
          <div style={{ fontSize: '11px', color: 'var(--g)' }}>نقطتين — وكالة التسويق الرقمي والأتمتة | الرياض</div>
        </div>
      </div>
    </div>
  );
}
