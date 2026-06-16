import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, Gem, PhoneCall } from 'lucide-react';

const heroIdeas = [
  {
    title: 'الفكرة (A): تجربة بصرية فاخرة وهادئة',
    points: [
      'فيديو خلفية لمساحة داخلية واسعة بتصميم مريح للعين.',
      'Light Motion خفيف جدًا يعكس الحياة داخل المكان.',
      'تركيز على الإضاءة الطبيعية والتفاصيل الدقيقة.',
      'عبارة تسويقية: «نحوّل المساحات إلى تجارب فنية متكاملة».',
    ],
  },
  {
    title: 'الفكرة (B): تجربة عالم التصميم (افتراضي / واقعي)',
    points: [
      'عرض نفس المساحة بتصميمين مختلفين (صباحي / مسائي).',
      'زر للتبديل بين الأجواء.',
      'إمكانية عرض تجربة تفاعلية ثلاثية الأبعاد.',
      'CTA واضح ورقم مخصص للعملاء الجادين.',
    ],
  },
];

const pricingPlans = [
  {
    tier: '🥉 الباقة الأولى',
    price: '5,000 ريال',
    fit: 'مناسبة لتطوير الموقع القائم بأقل تكلفة.',
    features: [
      'تطوير وتحسين الموقع الحالي.',
      'إضافة Hero احترافي + عرض خامات + Before/After.',
      'تحسين تجربة المستخدم.',
      'تحسين الواجهة دون تغيير البنية الأساسية.',
    ],
  },
  {
    tier: '🥈 الباقة الثانية',
    price: '10,000 ريال',
    fit: 'مناسبة لعمل نقلة نوعية في الحضور الرقمي.',
    features: [
      'إعادة تصميم الموقع بالكامل من الصفر.',
      'تصميم تجربة مستخدم احترافية.',
      'واجهة مخصصة لإدخال المشاريع والصور والخامات والفيديوهات.',
      'تنظيم معرض الأعمال بشكل احترافي.',
      'دعم تجربة عرض الخامات التفاعلية.',
    ],
  },
  {
    tier: '🥇 الباقة الثالثة',
    price: '18,000 ريال',
    fit: 'مناسبة لإنجاز الموقع كأداة مبيعات متكاملة.',
    features: [
      'كل ما سبق + واجهة داخلية لاستقبال طلبات العملاء.',
      'نموذج طلب تصميم متقدم.',
      'واجهة تصنيف العملاء المحتملين.',
      'ربط CRM / واتساب / إشعارات.',
      'لوحة تحكم لإدارة الطلبات + قابلية توسع 3D/VR.',
    ],
  },
];

const MutahedDesignOffer = () => {
  return (
    <main className="bg-slate-50 py-16" dir="rtl">
      <div className="container mx-auto max-w-6xl px-4">
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">
            <Gem className="h-4 w-4" />
            عرض سعر تصميم موقع احترافي
          </p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Mutahed Design – للتصميم الداخلي</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            موقع يعكس هوية فاخرة ويعمل كمنصة عرض احترافية وأداة إقناع بصري وتوليد عملاء محتملين، مع
            دعم تجارب تفاعلية حديثة مثل عرض الخامات والواقع الافتراضي.
          </p>

          <div className="mt-8 grid gap-4 rounded-2xl bg-slate-100 p-5 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">العميل</p>
              <p className="text-lg font-semibold text-slate-900">Mutahed Design</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">صلاحية العرض</p>
              <p className="text-lg font-semibold text-slate-900">15 يومًا</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">المرجع التفاعلي</p>
              <a
                href="https://rawajcard.com/Demo3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-lg font-semibold text-violet-700 hover:text-violet-800"
              >
                Demo3D <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {heroIdeas.map((idea) => (
            <article key={idea.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{idea.title}</h2>
              <ul className="mt-4 space-y-2 text-slate-600">
                {idea.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-slate-900">المحتوى الأساسي للموقع</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">تجربة الخامات التفاعلية</h3>
              <p className="mt-2 text-slate-600">
                معاينة الرخام والخشب والدهانات والزجاج والمرايا و3D CNC على نفس المساحة لإظهار النتيجة
                النهائية قبل التنفيذ.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">تجربة الواقع الافتراضي (360°)</h3>
              <p className="mt-2 text-slate-600">
                عرض مشاريع حقيقية، التنقل داخل المشروع، ومقارنة قبل/بعد لتعزيز ثقة العميل.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">إبراز الفريق وبيئة العمل</h3>
              <p className="mt-2 text-slate-600">
                صور احترافية للفريق، فلسفة التصميم، كواليس العمل، ومراحل التنفيذ من الفكرة حتى التسليم.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">صفحات الموقع الأساسية</h3>
              <p className="mt-2 text-slate-600">
                الرئيسية، من نحن، أعمالنا، خدماتنا، تواصل معنا، طلب استشارة.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">الباقات والأسعار</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article key={plan.tier} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">{plan.tier}</p>
                <p className="mt-1 text-3xl font-bold text-violet-700">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-violet-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">{plan.fit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">الخلاصة</h2>
          <p className="mt-3 text-lg text-slate-700">
            هذا الموقع ليس مجرد معرض أعمال، بل امتداد رقمي فاخر وهو أداة مبيعات متكاملة لتحويل الاهتمام
            إلى طلبات فعلية.
          </p>
          <Link
            to="/Contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
          >
            <PhoneCall className="h-4 w-4" />
            احجز استشارة
          </Link>
        </section>
      </div>
    </main>
  );
};

export default MutahedDesignOffer;
