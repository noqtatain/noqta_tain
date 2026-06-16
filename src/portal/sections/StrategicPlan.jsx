import React from 'react';

export default function StrategicPlan() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">الخطة الاستراتيجية لشركة نقطتين</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            هذه صفحة مبدئية سيتم استكمالها بالمحتوى التفصيلي القادم.
          </p>
        </div>
        <span className="text-xs text-slate-400 dark:text-slate-500">
          آخر تحديث: سيتم تحديده بعد إضافة المحتوى
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">الرؤية</div>
          <div className="text-base font-semibold text-slate-800 dark:text-slate-100">
            سيتم إضافة صياغة الرؤية المعتمدة قريبًا.
          </div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">الرسالة</div>
          <div className="text-base font-semibold text-slate-800 dark:text-slate-100">
            سيتم إضافة رسالة الشركة المعتمدة قريبًا.
          </div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">الأهداف الاستراتيجية</div>
          <div className="text-base font-semibold text-slate-800 dark:text-slate-100">
            سيتم إضافة الأهداف الاستراتيجية المتفق عليها قريبًا.
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6">
        <h2 className="text-lg font-semibold mb-3">الملخص التنفيذي</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          سيتم وضع ملخص تنفيذي يوضح نطاق الخطة، المعطيات الرئيسية، والمخرجات
          المتوقعة بمجرد مشاركة المحتوى الكامل.
        </p>
      </div>

      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 p-6">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          أقسام إضافية قادمة: تحليل الوضع الراهن، المبادرات، مؤشرات الأداء، وخارطة الطريق.
        </div>
      </div>
    </div>
  );
}
