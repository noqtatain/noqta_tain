import { useCallback, useEffect, useState } from 'react';
import WorkshopPage from './shared/WorkshopChrome';
import PassphraseGate from './shared/PassphraseGate';
import { ROUTES } from './shared/constants';
import { supabase } from './shared/supabaseClient';

const NEXT_STEP_LABELS = {
  assessment: 'تقييم مجاني',
  consultation: 'استشارة موجّهة',
  implementation: 'عرض تنفيذ مباشر',
};

function bandFor(total) {
  if (total <= 14) return { emoji: '🔴', color: '#FF8A8A' };
  if (total <= 22) return { emoji: '🟡', color: '#D4AF6A' };
  return { emoji: '🟢', color: '#3DD68C' };
}

function formatTime(iso) {
  try {
    return new Date(iso).toLocaleString('ar-SA', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });
  } catch {
    return iso;
  }
}

function DiagnosticPanel() {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from('diagnostic_responses')
      .select('id, created_at, q1, q2, q3, q4, q5, q6')
      .order('created_at', { ascending: false });
    if (err) setError(err.message);
    else setRows(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const withTotals = (rows || []).map((r) => ({ ...r, total: r.q1 + r.q2 + r.q3 + r.q4 + r.q5 + r.q6 }));
  const count = withTotals.length;
  const avg = count ? (withTotals.reduce((a, r) => a + r.total, 0) / count).toFixed(1) : '—';
  const bandCounts = { red: 0, yellow: 0, green: 0 };
  withTotals.forEach((r) => {
    if (r.total <= 14) bandCounts.red += 1;
    else if (r.total <= 22) bandCounts.yellow += 1;
    else bandCounts.green += 1;
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <h2 className="wk-h2" style={{ marginBottom: 0 }}>نتائج بطاقة التشخيص السريع</h2>
        <button className="wk-btn wk-btn-ghost wk-btn-sm" onClick={load} disabled={loading}>
          {loading ? 'جاري التحديث...' : 'تحديث ⟳'}
        </button>
      </div>

      {error && (
        <div className="wk-card" style={{ borderColor: '#FF8A8A', marginBottom: 18 }}>
          <p style={{ color: '#FF8A8A', fontWeight: 600 }}>تعذّر تحميل البيانات</p>
          <p className="wk-muted" style={{ fontSize: 13.5, marginTop: 6 }}>{error}</p>
          <p className="wk-muted" style={{ fontSize: 12.5, marginTop: 6 }}>
            تأكد من إنشاء الجدول وسياسة القراءة (RLS) في Supabase.
          </p>
        </div>
      )}

      <div className="wk-grid wk-g3" style={{ marginBottom: 22 }}>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5 }}>عدد المشاركين</p>
          <p className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{count}</p>
        </div>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5 }}>متوسط النقاط</p>
          <p className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{avg}<span style={{ fontSize: 15 }}> / 30</span></p>
        </div>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5, marginBottom: 6 }}>التوزيع</p>
          <p style={{ fontSize: 15 }}>🔴 {bandCounts.red} · 🟡 {bandCounts.yellow} · 🟢 {bandCounts.green}</p>
        </div>
      </div>

      {!loading && count === 0 && !error && (
        <p className="wk-muted wk-center">لا توجد إجابات بعد.</p>
      )}

      {count > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--wk-line)', textAlign: 'right' }}>
                <th style={{ padding: '8px 10px' }}>الوقت</th>
                <th style={{ padding: '8px 10px' }}>س١</th>
                <th style={{ padding: '8px 10px' }}>س٢</th>
                <th style={{ padding: '8px 10px' }}>س٣</th>
                <th style={{ padding: '8px 10px' }}>س٤</th>
                <th style={{ padding: '8px 10px' }}>س٥</th>
                <th style={{ padding: '8px 10px' }}>س٦</th>
                <th style={{ padding: '8px 10px' }}>المجموع</th>
              </tr>
            </thead>
            <tbody>
              {withTotals.map((r) => {
                const band = bandFor(r.total);
                return (
                  <tr key={r.id} style={{ borderBottom: '1px solid var(--wk-line)' }}>
                    <td style={{ padding: '8px 10px', color: 'var(--wk-muted)' }} className="mono">{formatTime(r.created_at)}</td>
                    <td style={{ padding: '8px 10px' }} className="mono">{r.q1}</td>
                    <td style={{ padding: '8px 10px' }} className="mono">{r.q2}</td>
                    <td style={{ padding: '8px 10px' }} className="mono">{r.q3}</td>
                    <td style={{ padding: '8px 10px' }} className="mono">{r.q4}</td>
                    <td style={{ padding: '8px 10px' }} className="mono">{r.q5}</td>
                    <td style={{ padding: '8px 10px' }} className="mono">{r.q6}</td>
                    <td style={{ padding: '8px 10px', fontWeight: 700 }} className="mono">{band.emoji} {r.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function GapMapPanel() {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from('gap_map_responses')
      .select('id, created_at, rows, priority_gap, next_step, name, store_name, whatsapp, bitrix_lead_id')
      .order('created_at', { ascending: false });
    if (err) setError(err.message);
    else setRows(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const list = rows || [];
  const count = list.length;
  const withNextStep = list.filter((r) => r.next_step).length;

  return (
    <div style={{ marginTop: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <h2 className="wk-h2" style={{ marginBottom: 0 }}>خارطة الفجوات</h2>
        <button className="wk-btn wk-btn-ghost wk-btn-sm" onClick={load} disabled={loading}>
          {loading ? 'جاري التحديث...' : 'تحديث ⟳'}
        </button>
      </div>

      {error && (
        <div className="wk-card" style={{ borderColor: '#FF8A8A', marginBottom: 18 }}>
          <p style={{ color: '#FF8A8A', fontWeight: 600 }}>تعذّر تحميل البيانات</p>
          <p className="wk-muted" style={{ fontSize: 13.5, marginTop: 6 }}>{error}</p>
          <p className="wk-muted" style={{ fontSize: 12.5, marginTop: 6 }}>
            تأكد من إنشاء الجدول وسياسة القراءة (RLS) في Supabase.
          </p>
        </div>
      )}

      <div className="wk-grid wk-g2" style={{ marginBottom: 22 }}>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5 }}>إجمالي الإجابات</p>
          <p className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{count}</p>
        </div>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5 }}>طلبوا خطوة تالية</p>
          <p className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{withNextStep}</p>
        </div>
      </div>

      {!loading && count === 0 && !error && (
        <p className="wk-muted wk-center">لا توجد إجابات بعد.</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {list.map((r) => (
          <div className="wk-card" key={r.id} style={{ borderColor: r.next_step ? 'var(--wk-violet2)' : 'var(--wk-line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
              <span className="mono wk-muted" style={{ fontSize: 12.5 }}>{formatTime(r.created_at)}</span>
              {r.next_step && (
                <span className="wk-chip" style={{ fontSize: 12 }}>🎯 {NEXT_STEP_LABELS[r.next_step] || r.next_step}</span>
              )}
            </div>

            {(r.name || r.store_name || r.whatsapp) && (
              <p style={{ marginBottom: 8 }}>
                <b>{r.name || '—'}</b>
                {r.store_name && <span className="wk-muted"> · {r.store_name}</span>}
                {r.whatsapp && (
                  <> · <a href={`https://wa.me/${r.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="mono" style={{ color: 'var(--wk-violet2)' }}>{r.whatsapp}</a></>
                )}
              </p>
            )}

            {r.priority_gap && <p style={{ marginBottom: 8, fontSize: 14 }}>🎯 أكبر فجوة: {r.priority_gap}</p>}

            {Array.isArray(r.rows) && r.rows.length > 0 && (
              <ul style={{ fontSize: 13, color: 'var(--wk-muted)', paddingInlineStart: 18 }}>
                {r.rows.map((row, i) => (
                  <li key={i}>{row.tool || '—'} — {row.problem || '—'} — {row.impact || '—'}</li>
                ))}
              </ul>
            )}

            {r.bitrix_lead_id && (
              <span className="wk-muted" style={{ fontSize: 11.5, display: 'block', marginTop: 8 }}>✅ Bitrix Lead #{r.bitrix_lead_id}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsultationPanel() {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from('consultation_requests')
      .select('id, created_at, name, store_name, whatsapp, email, tools, focus_areas, challenge, preferred_date, preferred_time, notes, bitrix_deal_id, bitrix_lead_id, bitrix_activity_id')
      .order('created_at', { ascending: false });
    if (err) setError(err.message);
    else setRows(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const list = rows || [];
  const count = list.length;
  const matchedCount = list.filter((r) => r.bitrix_deal_id).length;

  return (
    <div style={{ marginTop: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
        <h2 className="wk-h2" style={{ marginBottom: 0 }}>طلبات استشارة ١٥ دقيقة</h2>
        <button className="wk-btn wk-btn-ghost wk-btn-sm" onClick={load} disabled={loading}>
          {loading ? 'جاري التحديث...' : 'تحديث ⟳'}
        </button>
      </div>

      {error && (
        <div className="wk-card" style={{ borderColor: '#FF8A8A', marginBottom: 18 }}>
          <p style={{ color: '#FF8A8A', fontWeight: 600 }}>تعذّر تحميل البيانات</p>
          <p className="wk-muted" style={{ fontSize: 13.5, marginTop: 6 }}>{error}</p>
          <p className="wk-muted" style={{ fontSize: 12.5, marginTop: 6 }}>
            تأكد من إنشاء الجدول وسياسة القراءة (RLS) في Supabase.
          </p>
        </div>
      )}

      <div className="wk-grid wk-g2" style={{ marginBottom: 22 }}>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5 }}>إجمالي الطلبات</p>
          <p className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{count}</p>
        </div>
        <div className="wk-card wk-center">
          <p className="wk-muted" style={{ fontSize: 12.5 }}>مرتبطة بصفقة قائمة</p>
          <p className="mono" style={{ fontSize: 30, fontWeight: 700 }}>{matchedCount}</p>
        </div>
      </div>

      {!loading && count === 0 && !error && (
        <p className="wk-muted wk-center">لا توجد طلبات بعد.</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {list.map((r) => (
          <div className="wk-card" key={r.id} style={{ borderColor: r.bitrix_deal_id ? 'var(--wk-violet2)' : 'var(--wk-line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
              <span className="mono wk-muted" style={{ fontSize: 12.5 }}>{formatTime(r.created_at)}</span>
              <span className="wk-chip" style={{ fontSize: 12 }}>📅 {r.preferred_date} — {r.preferred_time}</span>
            </div>

            <p style={{ marginBottom: 8 }}>
              <b>{r.name}</b>
              {r.store_name && <span className="wk-muted"> · {r.store_name}</span>}
              {r.whatsapp && (
                <> · <a href={`https://wa.me/${r.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="mono" style={{ color: 'var(--wk-violet2)' }}>{r.whatsapp}</a></>
              )}
            </p>

            {Array.isArray(r.tools) && r.tools.length > 0 && (
              <p style={{ marginBottom: 6, fontSize: 13.5 }}>🛠️ الأدوات الحالية: {r.tools.join('، ')}</p>
            )}
            {Array.isArray(r.focus_areas) && r.focus_areas.length > 0 && (
              <p style={{ marginBottom: 6, fontSize: 13.5 }}>🎯 المجالات المطلوبة: {r.focus_areas.join('، ')}</p>
            )}
            {r.challenge && <p style={{ marginBottom: 6, fontSize: 13.5 }}>⚠️ التحدي: {r.challenge}</p>}
            {r.notes && <p style={{ marginBottom: 6, fontSize: 13.5 }}>📝 ملاحظات: {r.notes}</p>}

            <span className="wk-muted" style={{ fontSize: 11.5, display: 'block', marginTop: 8 }}>
              {r.bitrix_deal_id
                ? `✅ صفقة Bitrix قائمة #${r.bitrix_deal_id}`
                : r.bitrix_lead_id
                  ? `✅ Bitrix Lead #${r.bitrix_lead_id}`
                  : '⚠️ لم يتم التسجيل في Bitrix'}
              {r.bitrix_activity_id && ` · موعد #${r.bitrix_activity_id}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub}>
      <section className="wk-section" style={{ paddingTop: 28 }}>
        <div className="wk-wrap">
          <div style={{ marginBottom: 24 }}>
            <div className="wk-eyebrow">لوحة الإدارة</div>
            <h1 className="wk-h1" style={{ fontSize: 'clamp(24px,5vw,32px)' }}>🔒 لوحة تحكم نقطتين</h1>
          </div>
          <DiagnosticPanel />
          <GapMapPanel />
          <ConsultationPanel />
        </div>
      </section>
    </WorkshopPage>
  );
}

export default function WorkshopAdmin() {
  return (
    <PassphraseGate storageKey="wk_auth_admin">
      <AdminDashboard />
    </PassphraseGate>
  );
}
