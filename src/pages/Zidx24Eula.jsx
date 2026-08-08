import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CONTENT = {
  en: {
    dir: 'ltr',
    toggleLabel: 'العربية',
    eyebrow: 'ZID.SA',
    title: 'End-User License Agreement (EULA)',
    heroDesc:
      'This End-User License Agreement is a legal agreement between you and Noqtatain for the acquisition and use of the Zid.sa (by noqtatain) software and related services, which sync orders, customers, and abandoned carts between your Zid store and your Bitrix24 CRM.',
    lastUpdated: 'Last updated: July 25, 2026',
    intro: [
      'This End-User License Agreement ("EULA") is a legal agreement between you, whether an individual or a legal entity ("you" or "End User"), and Noqtatain ("Noqtatain," "we," "us," or "our").',
      'This EULA governs your acquisition and use of our Zid.sa (by noqtatain) software, application, integrations, updates, supplements, Internet-based services, and support services (collectively, the "Software"), whether obtained directly from Noqtatain or indirectly through the Zid App Market, the Bitrix24 Marketplace, or another Noqtatain-authorized reseller or distributor (a "Reseller").',
      'Please read this EULA carefully before installing, accessing, registering for, or using the Software. It provides a license to use the Software and contains important warranty information, liability disclaimers, and restrictions on your use of the Software.',
      'If you register for a free trial of the Software, this EULA will also govern that trial. By installing, accessing, registering for, or using the Software, you confirm your acceptance of the Software and agree to be bound by the terms of this EULA.',
      'If you are entering into this EULA on behalf of a company or other legal entity, you represent that you have the authority to bind that entity and its affiliates to these terms. If you do not have such authority, or if you do not agree to this EULA, you must not install, access, register for, or use the Software.',
    ],
    sections: [
      {
        heading: '1. Scope of Agreement',
        paragraphs: [
          'This EULA applies only to the Software supplied by Noqtatain, regardless of whether other software, platforms, or services are referred to or described in connection with the Software. The terms also apply to any Noqtatain updates, supplements, Internet-based services, and support services for the Software, unless separate terms accompany those items on delivery, in which case those separate terms will apply.',
        ],
      },
      {
        heading: '2. License Grant',
        paragraphs: [
          'Subject to your compliance with this EULA, Noqtatain grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to install, access, and use the Software on your Zid store and connected Bitrix24 portal, solely for your internal business purposes and in accordance with this EULA, any applicable order form, subscription plan, marketplace listing, documentation, and usage limits.',
          'You are responsible for ensuring that your Zid store, Bitrix24 portal, devices, accounts, browsers, Internet connection, and necessary software meet the minimum requirements for using the Software.',
        ],
      },
      {
        heading: '3. Restrictions',
        paragraphs: ['You are not permitted to:'],
        list: [
          'Edit, alter, modify, adapt, translate, or otherwise change the whole or any part of the Software, or permit the Software to be combined with or incorporated into any other software, except as expressly permitted in writing by Noqtatain.',
          'Decompile, disassemble, reverse engineer, or otherwise attempt to derive the source code, underlying ideas, algorithms, structure, or organization of the Software.',
          'Reproduce, copy, distribute, rent, lease, sublicense, resell, or otherwise use the Software for any commercial purpose not expressly authorized by Noqtatain.',
          'Allow any third party to use the Software on behalf of, or for the benefit of, any third party without Noqtatain’s prior written consent.',
          'Use the Software in any way that breaches any applicable local, national, or international law or regulation.',
          'Use the Software for any purpose that Noqtatain reasonably considers to be a breach of this EULA or harmful to Noqtatain, its customers, users, partners, systems, or reputation.',
        ],
      },
      {
        heading: '4. Intellectual Property and Ownership',
        paragraphs: [
          'Noqtatain retains all ownership, title, and interest in and to the Software as originally downloaded, installed, enabled, or accessed by you and in all subsequent downloads, installations, updates, upgrades, enhancements, or modifications. The Software, including all copyrights, trademarks, trade secrets, and other intellectual property rights of any nature in the Software and any modifications made to it, is and will remain the property of Noqtatain or its licensors.',
          'Noqtatain reserves the right to grant licenses to use the Software to third parties. No rights are granted to you except for the limited license expressly stated in this EULA.',
        ],
      },
      {
        heading: '5. Data and Third-Party Services',
        paragraphs: [
          'The Software connects to your Zid store and your Bitrix24 portal using credentials and access tokens you authorize, and transmits order, customer, and abandoned-cart data between them to provide its sync functionality. Your use of Zid and Bitrix24 remains subject to each platform\'s own terms of service and privacy policy, in addition to this EULA. You are responsible for obtaining and maintaining all required accounts, permissions, and consents needed to use the Software with your data and these third-party services.',
        ],
      },
      {
        heading: '6. Warranty Disclaimer',
        paragraphs: [
          'To the maximum extent permitted by applicable law, the Software is provided "as is" and "as available," without warranties of any kind, whether express, implied, statutory, or otherwise. Noqtatain disclaims all implied warranties, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, uninterrupted operation, security, accuracy, and error-free performance, and does not warrant that any sync between Zid and Bitrix24 will complete without delay or discrepancy.',
        ],
      },
      {
        heading: '7. Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by applicable law, Noqtatain will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, goodwill, data, business, or business interruption arising out of or related to the Software or this EULA, even if Noqtatain has been advised of the possibility of such damages.',
        ],
      },
      {
        heading: '8. Termination',
        paragraphs: [
          'This EULA is effective from the date you first install, access, register for, or use the Software and will continue until terminated. You may terminate this EULA at any time by stopping all access to and use of the Software and uninstalling it from your Zid store and Bitrix24 portal.',
          'This EULA will terminate immediately if you fail to comply with any term of this EULA. Upon termination, the licenses granted under this EULA will immediately end, and you agree to stop all access to and use of the Software. Provisions that by their nature should survive termination will survive, including intellectual property ownership, restrictions, warranty disclaimers, limitations of liability, and governing law.',
        ],
      },
      {
        heading: '9. Governing Law',
        paragraphs: [
          'This EULA, and any dispute arising out of or in connection with this EULA or the Software, will be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to conflict-of-law principles.',
        ],
      },
    ],
    contact: {
      heading: '10. Contact',
      before: 'If you have questions about this EULA or the Software, please contact Noqtatain at',
    },
  },
  ar: {
    dir: 'rtl',
    toggleLabel: 'English',
    eyebrow: 'ZID.SA',
    title: 'اتفاقية ترخيص المستخدم النهائي (EULA)',
    heroDesc:
      'اتفاقية ترخيص المستخدم النهائي هذه هي اتفاقية قانونية بينك وبين نقطتين تتعلق باقتناء واستخدام برنامج Zid.sa (من نقطتين) والخدمات المرتبطة به، والتي تُزامن الطلبات والعملاء وعربات التسوق المتروكة بين متجر Zid الخاص بك ومنصة Bitrix24 CRM الخاصة بك.',
    lastUpdated: 'آخر تحديث: 25 يوليو 2026',
    intro: [
      'اتفاقية ترخيص المستخدم النهائي هذه («EULA») هي اتفاقية قانونية بينك، سواء كنت فردًا أو كيانًا قانونيًا («أنت» أو «المستخدم النهائي»)، وبين نقطتين («نقطتين» أو «نحن» أو «لنا»).',
      'تحكم اتفاقية الترخيص هذه اقتناءك واستخدامك لبرنامج Zid.sa (من نقطتين) والتطبيق والتكاملات والتحديثات والإضافات والخدمات المستندة إلى الإنترنت وخدمات الدعم (يُشار إليها مجتمعة بـ «البرنامج»)، سواء تم الحصول عليها مباشرة من نقطتين أو بشكل غير مباشر عبر متجر تطبيقات Zid، أو سوق Bitrix24، أو أي موزّع أو معيد بيع آخر معتمد من نقطتين («معيد البيع»).',
      'يُرجى قراءة هذه الاتفاقية بعناية قبل تثبيت البرنامج أو الوصول إليه أو التسجيل فيه أو استخدامه. فهي تمنحك ترخيصًا لاستخدام البرنامج وتتضمن معلومات مهمة حول الضمان وإخلاء المسؤولية والقيود المفروضة على استخدامك للبرنامج.',
      'إذا قمت بالتسجيل للحصول على نسخة تجريبية مجانية من البرنامج، فإن هذه الاتفاقية تحكم تلك التجربة أيضًا. من خلال تثبيت البرنامج أو الوصول إليه أو التسجيل فيه أو استخدامه، فإنك تؤكد قبولك للبرنامج وتوافق على الالتزام بشروط هذه الاتفاقية.',
      'إذا كنت تبرم هذه الاتفاقية نيابة عن شركة أو كيان قانوني آخر، فإنك تُقر بأن لديك الصلاحية لإلزام ذلك الكيان والشركات التابعة له بهذه الشروط. وإذا لم تكن تملك هذه الصلاحية، أو لم توافق على هذه الاتفاقية، فيجب عليك عدم تثبيت البرنامج أو الوصول إليه أو التسجيل فيه أو استخدامه.',
    ],
    sections: [
      {
        heading: '1. نطاق الاتفاقية',
        paragraphs: [
          'تنطبق اتفاقية الترخيص هذه فقط على البرنامج المقدم من نقطتين، بغض النظر عمّا إذا كانت هناك برامج أو منصات أو خدمات أخرى مُشار إليها أو موصوفة فيما يتعلق بالبرنامج. كما تنطبق هذه الشروط على أي تحديثات أو إضافات أو خدمات مستندة إلى الإنترنت أو خدمات دعم يقدمها نقطتين للبرنامج، ما لم تُرفق شروط منفصلة بهذه العناصر عند تسليمها، وفي هذه الحالة تُطبَّق تلك الشروط المنفصلة.',
        ],
      },
      {
        heading: '2. منح الترخيص',
        paragraphs: [
          'مع مراعاة التزامك بهذه الاتفاقية، يمنحك نقطتين ترخيصًا محدودًا وقابلًا للإلغاء وغير حصري وغير قابل للتحويل وغير قابل للترخيص من الباطن، لتثبيت البرنامج والوصول إليه واستخدامه على متجر Zid الخاص بك ومنصة Bitrix24 المرتبطة به، وذلك حصريًا لأغراض عملك الداخلية ووفقًا لهذه الاتفاقية، وأي نموذج طلب أو خطة اشتراك أو قائمة في سوق التطبيقات أو وثائق أو حدود استخدام معمول بها.',
          'أنت مسؤول عن التأكد من أن متجر Zid الخاص بك، ومنصة Bitrix24، والأجهزة، والحسابات، والمتصفحات، والاتصال بالإنترنت، والبرامج اللازمة تفي بالحد الأدنى من المتطلبات لاستخدام البرنامج.',
        ],
      },
      {
        heading: '3. القيود',
        paragraphs: ['لا يجوز لك:'],
        list: [
          'تحرير البرنامج أو تغييره أو تعديله أو تكييفه أو ترجمته أو تغيير كل أو أي جزء منه بأي شكل آخر، أو السماح بدمج البرنامج أو دمجه مع أي برنامج آخر، إلا بالقدر المسموح به صراحةً وكتابيًا من قِبل نقطتين.',
          'فك تجميع البرنامج أو فك ترجمته أو إجراء هندسة عكسية له، أو محاولة استخراج الشيفرة المصدرية أو الأفكار الأساسية أو الخوارزميات أو البنية أو التنظيم الخاص بالبرنامج بأي طريقة أخرى.',
          'نسخ البرنامج أو توزيعه أو تأجيره أو منحه بترخيص من الباطن أو إعادة بيعه أو استخدامه لأي غرض تجاري غير مصرّح به صراحةً من قِبل نقطتين.',
          'السماح لأي طرف ثالث باستخدام البرنامج نيابةً عن أو لمصلحة أي طرف ثالث دون موافقة كتابية مسبقة من نقطتين.',
          'استخدام البرنامج بأي طريقة تُخالف أي قانون أو نظام محلي أو وطني أو دولي معمول به.',
          'استخدام البرنامج لأي غرض يعتبره نقطتين، وفق تقديره المعقول، مخالفًا لهذه الاتفاقية أو ضارًا بنقطتين أو عملائه أو مستخدميه أو شركائه أو أنظمته أو سمعته.',
        ],
      },
      {
        heading: '4. الملكية الفكرية والملكية',
        paragraphs: [
          'يحتفظ نقطتين بكافة حقوق الملكية والحيازة والمصلحة في البرنامج بصيغته الأصلية التي تم تنزيلها أو تثبيتها أو تفعيلها أو الوصول إليها من قِبلك، وفي جميع عمليات التنزيل والتثبيت والتحديثات والترقيات والتحسينات أو التعديلات اللاحقة. ويظل البرنامج، بما في ذلك جميع حقوق النشر والعلامات التجارية والأسرار التجارية وحقوق الملكية الفكرية الأخرى من أي نوع في البرنامج وأي تعديلات تُجرى عليه، ملكًا لنقطتين أو للجهات المرخِّصة له.',
          'يحتفظ نقطتين بالحق في منح تراخيص استخدام البرنامج لأطراف ثالثة. ولا تُمنح لك أي حقوق باستثناء الترخيص المحدود المنصوص عليه صراحةً في هذه الاتفاقية.',
        ],
      },
      {
        heading: '5. البيانات وخدمات الأطراف الثالثة',
        paragraphs: [
          'يتصل البرنامج بمتجر Zid الخاص بك ومنصة Bitrix24 الخاصة بك باستخدام بيانات الاعتماد ورموز الوصول التي تُصرّح بها، وينقل بيانات الطلبات والعملاء وعربات التسوق المتروكة بينهما لتوفير وظيفة المزامنة. ويظل استخدامك لمنصتَي Zid وBitrix24 خاضعًا لشروط الخدمة وسياسة الخصوصية الخاصة بكل منصة، بالإضافة إلى هذه الاتفاقية. وأنت مسؤول عن الحصول على جميع الحسابات والأذونات والموافقات اللازمة والحفاظ عليها لاستخدام البرنامج مع بياناتك وهذه الخدمات الخاصة بأطراف ثالثة.',
        ],
      },
      {
        heading: '6. إخلاء المسؤولية عن الضمان',
        paragraphs: [
          'إلى أقصى حد يسمح به القانون المعمول به، يُقدَّم البرنامج «كما هو» و«حسب توفره»، دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية أو قانونية أو غير ذلك. ويُخلي نقطتين مسؤوليته عن جميع الضمانات الضمنية، بما في ذلك ضمانات قابلية التسويق والملاءمة لغرض معين والملكية وعدم الانتهاك واستمرارية التشغيل دون انقطاع والأمان والدقة والأداء الخالي من الأخطاء، ولا يضمن أن أي مزامنة بين Zid وBitrix24 ستكتمل دون تأخير أو تعارض في البيانات.',
        ],
      },
      {
        heading: '7. حدود المسؤولية',
        paragraphs: [
          'إلى أقصى حد يسمح به القانون المعمول به، لن يكون نقطتين مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو نموذجية أو عقابية، أو عن أي خسارة في الأرباح أو الإيرادات أو السمعة أو البيانات أو الأعمال أو انقطاع الأعمال الناشئة عن أو المرتبطة بالبرنامج أو بهذه الاتفاقية، حتى لو تم إخطار نقطتين باحتمال حدوث مثل هذه الأضرار.',
        ],
      },
      {
        heading: '8. الإنهاء',
        paragraphs: [
          'تسري هذه الاتفاقية اعتبارًا من تاريخ أول تثبيت أو وصول أو تسجيل أو استخدام للبرنامج من قِبلك، وتستمر إلى أن يتم إنهاؤها. ويجوز لك إنهاء هذه الاتفاقية في أي وقت من خلال التوقف عن الوصول إلى البرنامج واستخدامه بالكامل وإلغاء تثبيته من متجر Zid ومنصة Bitrix24 الخاصين بك.',
          'تُنهى هذه الاتفاقية فورًا في حال إخلالك بأي بند من بنودها. وعند الإنهاء، تنتهي التراخيص الممنوحة بموجب هذه الاتفاقية فورًا، وتوافق على التوقف عن جميع أشكال الوصول إلى البرنامج واستخدامه. وتظل الأحكام التي تقتضي طبيعتها الاستمرار بعد الإنهاء سارية، بما في ذلك ملكية الملكية الفكرية والقيود وإخلاءات الضمان وحدود المسؤولية والقانون الواجب التطبيق.',
        ],
      },
      {
        heading: '9. القانون الواجب التطبيق',
        paragraphs: [
          'تخضع هذه الاتفاقية، وأي نزاع ينشأ عنها أو يتعلق بها أو بالبرنامج، لقوانين المملكة العربية السعودية وتُفسَّر وفقًا لها، دون اعتبار لمبادئ تنازع القوانين.',
        ],
      },
    ],
    contact: {
      heading: '10. التواصل',
      before: 'إذا كانت لديك أي أسئلة حول هذه الاتفاقية أو البرنامج، يُرجى التواصل مع نقطتين عبر',
    },
  },
};

export default function Zidx24Eula({ initialLang = 'en' }) {
  const [lang, setLang] = useState(initialLang);
  const navigate = useNavigate();
  const t = CONTENT[lang];
  const listPadding = t.dir === 'rtl' ? 'pr-6' : 'pl-6';

  const handleToggle = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    navigate(nextLang === 'ar' ? '/EULA/ar' : '/EULA');
    setLang(nextLang);
  };

  return (
    <div dir={t.dir} lang={lang} className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_32rem)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={handleToggle}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-violet-400"
            >
              {t.toggleLabel}
            </button>
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            {t.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {t.heroDesc}
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {t.lastUpdated}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          {t.intro.map((p) => (
            <p key={p} className="mt-4 leading-8 text-slate-700 dark:text-slate-300 first:mt-0">
              {p}
            </p>
          ))}

          {t.sections.map((section) => (
            <section className="mt-10" key={section.heading}>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className={`mt-4 space-y-3 ${listPadding} text-slate-700 dark:text-slate-300`}>
                  {section.list.map((item) => (
                    <li key={item} className="list-disc leading-8">{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-10 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{t.contact.heading}</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              {t.contact.before}{' '}
              <a href="mailto:info@noqtatain.com" className="font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
                info@noqtatain.com
              </a>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
