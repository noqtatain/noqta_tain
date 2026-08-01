import { GULF_COUNTRIES } from './bitrix';

export default function PhoneField({ dial, onDialChange, value, onChange, error }) {
  const len = GULF_COUNTRIES[dial]?.len || 9;
  return (
    <div className={`wk-field${error ? ' error' : ''}`}>
      <label>رقم واتساب <span className="req">*</span></label>
      <div className="wk-phone-input">
        <select value={dial} onChange={(e) => onDialChange(e.target.value)} dir="ltr">
          {Object.entries(GULF_COUNTRIES).map(([code, info]) => (
            <option key={code} value={code}>{info.flag} +{code}</option>
          ))}
        </select>
        <input
          type="tel"
          dir="ltr"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ''))}
          placeholder={`5${'x'.repeat(Math.max(len - 1, 0))}`}
        />
      </div>
      <div className="wk-field-error-msg">الرجاء إدخال رقم جوال صحيح</div>
    </div>
  );
}
