import React, { useEffect } from 'react';
import lathaLammaHtml from './Latha_lamma.html?raw';

export default function LathaLamma() {
  useEffect(() => {
    document.title = 'عرض الشراكة — نقطتين × لذة ولمة';
  }, []);

  return (
    <iframe
      title="عرض الشراكة — نقطتين × لذة ولمة"
      srcDoc={lathaLammaHtml}
      className="block h-screen w-full border-0"
    />
  );
}
