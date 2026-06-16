import React from 'react';

const restrictedUses = [
  'Edit, alter, modify, adapt, translate, or otherwise change the whole or any part of the Software, or permit the Software to be combined with or incorporated into any other software, except as expressly permitted in writing by Noqtatain.',
  'Decompile, disassemble, reverse engineer, or otherwise attempt to derive the source code, underlying ideas, algorithms, structure, or organization of the Software.',
  'Reproduce, copy, distribute, rent, lease, sublicense, resell, or otherwise use the Software for any commercial purpose not expressly authorized by Noqtatain.',
  'Allow any third party to use the Software on behalf of, or for the benefit of, any third party without Noqtatain’s prior written consent.',
  'Use the Software in any way that breaches any applicable local, national, or international law or regulation.',
  'Use the Software for any purpose that Noqtatain reasonably considers to be a breach of this EULA or harmful to Noqtatain, its customers, users, partners, systems, or reputation.',
];

export default function NoqtaChatEula() {
  return (
    <div dir="ltr" className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_32rem)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            NOQTACHAT
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            End-User License Agreement (EULA)
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            This End-User License Agreement is a legal agreement between you and Noqtatain for the acquisition and use of the NOQTACHAT software and related services.
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Last updated: June 5, 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="leading-8 text-slate-700 dark:text-slate-300">
            This End-User License Agreement (&quot;EULA&quot;) is a legal agreement between you, whether an individual or a legal entity (&quot;you&quot; or &quot;End User&quot;), and Noqtatain (&quot;Noqtatain,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
            This EULA governs your acquisition and use of our NOQTACHAT software, application, integrations, updates, supplements, Internet-based services, and support services (collectively, the &quot;Software&quot;), whether obtained directly from Noqtatain or indirectly through a Noqtatain-authorized reseller, distributor, marketplace, or integration platform (a &quot;Reseller&quot;).
          </p>
          <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
            Please read this EULA carefully before installing, accessing, registering for, or using the Software. It provides a license to use the Software and contains important warranty information, liability disclaimers, and restrictions on your use of the Software.
          </p>
          <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
            If you register for a free trial of the Software, this EULA will also govern that trial. By installing, accessing, registering for, or using the Software, you confirm your acceptance of the Software and agree to be bound by the terms of this EULA.
          </p>
          <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
            If you are entering into this EULA on behalf of a company or other legal entity, you represent that you have the authority to bind that entity and its affiliates to these terms. If you do not have such authority, or if you do not agree to this EULA, you must not install, access, register for, or use the Software.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">1. Scope of Agreement</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              This EULA applies only to the Software supplied by Noqtatain, regardless of whether other software, platforms, or services are referred to or described in connection with the Software. The terms also apply to any Noqtatain updates, supplements, Internet-based services, and support services for the Software, unless separate terms accompany those items on delivery, in which case those separate terms will apply.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">2. License Grant</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              Subject to your compliance with this EULA, Noqtatain grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to install, access, and use the Software solely for your internal business or personal purposes and in accordance with this EULA, any applicable order form, subscription plan, marketplace listing, documentation, and usage limits.
            </p>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              You are permitted to install or enable the Software under your control, including within supported business systems, messaging environments, or integration platforms, where applicable. You are responsible for ensuring that your devices, accounts, browsers, Internet connection, third-party platforms, and necessary software meet the minimum requirements for using the Software.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">3. Restrictions</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">You are not permitted to:</p>
            <ul className="mt-4 space-y-3 pl-6 text-slate-700 dark:text-slate-300">
              {restrictedUses.map((item) => (
                <li key={item} className="list-disc leading-8">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">4. Intellectual Property and Ownership</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              Noqtatain retains all ownership, title, and interest in and to the Software as originally downloaded, installed, enabled, or accessed by you and in all subsequent downloads, installations, updates, upgrades, enhancements, or modifications. The Software, including all copyrights, trademarks, trade secrets, and other intellectual property rights of any nature in the Software and any modifications made to it, is and will remain the property of Noqtatain or its licensors.
            </p>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              Noqtatain reserves the right to grant licenses to use the Software to third parties. No rights are granted to you except for the limited license expressly stated in this EULA.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">5. Data and Third-Party Services</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              The Software may connect to, exchange information with, or depend on third-party services, messaging platforms, hosting providers, marketplaces, or APIs. Your use of third-party services may be subject to separate terms and privacy policies from those third parties. You are responsible for obtaining and maintaining all required accounts, permissions, consents, and lawful bases needed to use the Software with your data and third-party services.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">6. Warranty Disclaimer</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              To the maximum extent permitted by applicable law, the Software is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, whether express, implied, statutory, or otherwise. Noqtatain disclaims all implied warranties, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, uninterrupted operation, security, accuracy, and error-free performance.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">7. Limitation of Liability</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              To the maximum extent permitted by applicable law, Noqtatain will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, goodwill, data, business, or business interruption arising out of or related to the Software or this EULA, even if Noqtatain has been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">8. Termination</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              This EULA is effective from the date you first install, access, register for, or use the Software and will continue until terminated. You may terminate this EULA at any time by stopping all access to and use of the Software and, where applicable, uninstalling or disabling it.
            </p>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              This EULA will terminate immediately if you fail to comply with any term of this EULA. Upon termination, the licenses granted under this EULA will immediately end, and you agree to stop all access to and use of the Software. Provisions that by their nature should survive termination will survive, including intellectual property ownership, restrictions, warranty disclaimers, limitations of liability, and governing law.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">9. Governing Law</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              This EULA, and any dispute arising out of or in connection with this EULA or the Software, will be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to conflict-of-law principles.
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">10. Contact</h2>
            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
              If you have questions about this EULA or the Software, please contact Noqtatain at{' '}
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
