import { useState } from 'react';
import { ADMIN_PASSPHRASE } from './constants';
import WorkshopPage from './WorkshopChrome';

export default function PassphraseGate({ children, storageKey }) {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return localStorage.getItem(storageKey) === 'ok';
    } catch {
      return false;
    }
  });
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  if (unlocked) return children;

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim().toLowerCase() === ADMIN_PASSPHRASE.trim().toLowerCase()) {
      try { localStorage.setItem(storageKey, 'ok'); } catch { /* ignore */ }
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <WorkshopPage hideChrome>
      <section className="wk-section" style={{ paddingTop: '18vh' }}>
        <div className="wk-wrap-narrow wk-center">
          <div className="wk-card" style={{ maxWidth: 360, margin: '0 auto', textAlign: 'right' }}>
            <h2 className="wk-h2 wk-center" style={{ fontSize: 20 }}>🔒 دخول مقيّد</h2>
            <p className="wk-lead wk-center" style={{ marginBottom: 18, fontSize: 13.5 }}>
              هذه الصفحة خاصة بفريق نقطتين فقط
            </p>
            <form onSubmit={handleSubmit}>
              <div className={`wk-field${error ? ' error' : ''}`}>
                <label>كلمة المرور</label>
                <input
                  type="password"
                  autoFocus
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  value={value}
                  onChange={(e) => { setValue(e.target.value); setError(false); }}
                />
                <div className="wk-field-error-msg">كلمة المرور غير صحيحة</div>
              </div>
              <button type="submit" className="wk-btn wk-btn-primary wk-btn-block">دخول</button>
            </form>
          </div>
        </div>
      </section>
    </WorkshopPage>
  );
}
