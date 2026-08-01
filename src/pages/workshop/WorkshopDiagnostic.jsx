import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkshopPage from './shared/WorkshopChrome';
import { ROUTES } from './shared/constants';
import { supabase } from './shared/supabaseClient';

const QUESTIONS = [
  'سرعة الرد على استفسارات العملاء',
  'وجود نظام متابعة آلي (لا أنسى أي عميل)',
  'رؤية موحّدة لتاريخ كل عميل وطلباته',
  'وضوح مسار المبيعات من الاستفسار حتى الإغلاق',
  'توحيد قنوات خدمة العملاء في مكان واحد',
  'توفّر تقارير وأرقام واضحة عن أداء المبيعات والخدمة',
];

function bandFor(total) {
  if (total <= 14) return { emoji: '🔴', label: 'فجوة تشغيلية واضحة — تحتاج نظام الآن', color: '#FF8A8A' };
  if (total <= 22) return { emoji: '🟡', label: 'يوجد أساس، لكنه يحتاج تطويراً وتنظيماً', color: '#D4AF6A' };
  return { emoji: '🟢', label: 'وضع جيد — الفرصة الآن في التوسّع والأتمتة', color: '#3DD68C' };
}

export default function WorkshopDiagnostic() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(0));
  const answeredCount = answers.filter(Boolean).length;
  const total = useMemo(() => answers.reduce((a, b) => a + b, 0), [answers]);
  const done = answeredCount === QUESTIONS.length;
  const band = done ? bandFor(total) : null;
  const loggedRef = useRef(false);

  function setAnswer(qi, val) {
    setAnswers((prev) => prev.map((v, i) => (i === qi ? val : v)));
  }

  // Anonymous, no-PII: just the 1-5 scores, for a live "room average" in /admin.
  useEffect(() => {
    if (!done || loggedRef.current) return;
    loggedRef.current = true;
    supabase
      .from('diagnostic_responses')
      .insert({
        q1: answers[0], q2: answers[1], q3: answers[2],
        q4: answers[3], q5: answers[4], q6: answers[5],
      })
      .then(({ error }) => {
        if (error) console.error('diagnostic log failed:', error.message);
      });
  }, [done, answers]);

  return (
    <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub}>
      <section className="wk-section" style={{ paddingTop: 28 }}>
        <div className="wk-wrap-narrow">
          <div className="wk-center" style={{ marginBottom: 24 }}>
            <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>نشاط تفاعلي · ⏱️ ٨ دقائق</div>
            <h1 className="wk-h1" style={{ fontSize: 'clamp(24px,5vw,34px)' }}>🔴 بطاقة التشخيص السريع</h1>
            <p className="wk-lead" style={{ marginTop: 10 }}>قيّم وضعك من ١ إلى ٥ في كل محور، ثم اجمع نقاطك لمعرفة وضعك التشغيلي.</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div className="wk-progress-track">
              <div className="wk-progress-fill" style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }} />
            </div>
            <p className="wk-muted mono" style={{ fontSize: 12.5, marginTop: 6, textAlign: 'center' }}>{answeredCount} / {QUESTIONS.length}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {QUESTIONS.map((q, qi) => (
              <div className="wk-card" key={q}>
                <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 12 }}>{qi + 1}. {q}</p>
                <div className="wk-pill-row">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAnswer(qi, val)}
                      className="wk-btn wk-btn-sm"
                      style={{
                        minWidth: 48,
                        background: answers[qi] === val ? 'var(--wk-violet)' : 'var(--wk-card2)',
                        color: answers[qi] === val ? '#fff' : 'var(--wk-ink)',
                        border: '1px solid var(--wk-line)',
                      }}
                      aria-pressed={answers[qi] === val}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {done && band && (
            <div className="wk-card wk-center" style={{ marginTop: 26, borderColor: band.color }}>
              <div style={{ fontSize: 40 }}>{band.emoji}</div>
              <p className="mono" style={{ fontSize: 28, fontWeight: 700, marginTop: 6 }}>{total} / 30</p>
              <p style={{ marginTop: 8, fontSize: 16, color: band.color, fontWeight: 600 }}>{band.label}</p>
              <Link to={ROUTES.gapMap} className="wk-btn wk-btn-primary" style={{ marginTop: 18 }}>
                تابع إلى خارطة الفجوات ←
              </Link>
            </div>
          )}
        </div>
      </section>
    </WorkshopPage>
  );
}
