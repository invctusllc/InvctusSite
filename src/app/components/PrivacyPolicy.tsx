import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display tracking-wider mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900 }}>
              PRIVACY POLICY
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="opacity-60 mb-12" style={{ fontSize: '0.875rem' }}>
              Last Updated: April 16, 2026
            </p>

            <div className="space-y-8 opacity-80" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  1. INTRODUCTION
                </h2>
                <p>
                  Invctus, LLC ("Company", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  2. INFORMATION WE COLLECT
                </h2>
                <p className="mb-4">
                  We may collect information about you in a variety of ways. The information we may collect includes:
                </p>
                <h3 className="font-display tracking-wider mb-3 mt-6" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Personal Data
                </h3>
                <p className="mb-4">
                  Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the site or our services or when you choose to participate in various activities related to the site and our services.
                </p>
                <h3 className="font-display tracking-wider mb-3 mt-6" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Derivative Data
                </h3>
                <p className="mb-4">
                  Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
                </p>
                <h3 className="font-display tracking-wider mb-3 mt-6" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Financial Data
                </h3>
                <p>
                  Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  3. SMS VERIFICATION (ONE-TIME PASSCODES)
                </h2>
                <p className="mb-4">
                  Invctus may collect a phone number when you choose to provide it for account authentication and security verification. We use your phone number only to send automated SMS messages containing one-time passcodes (OTPs) or verification codes to help confirm your identity and protect your account.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No marketing texts:</strong> Invctus does not send promotional or marketing SMS messages.</li>
                  <li><strong>Message frequency:</strong> Messages are sent only when you request verification (for example, during sign-in or account security checks), so frequency varies based on your activity.</li>
                  <li><strong>Carrier charges:</strong> Message and data rates may apply depending on your mobile carrier.</li>
                  <li><strong>Opt-out/help:</strong> You may opt out at any time by replying STOP, and request assistance by replying HELP or contacting us at hello@invctus.co.</li>
                  <li><strong>Service providers:</strong> We may use third-party service providers (such as SMS delivery platforms) to send verification messages on our behalf. These providers process phone numbers only as needed to deliver the messages and are required to protect that information.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  4. USE OF YOUR INFORMATION
                </h2>
                <p className="mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site or our services to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create and manage your account</li>
                  <li>Process your transactions and send you related information</li>
                  <li>Email you regarding your account or order</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                  <li>Generate a personal profile about you to make future visits more personalized</li>
                  <li>Increase the efficiency and operation of the site and services</li>
                  <li>Monitor and analyze usage and trends to improve your experience</li>
                  <li>Notify you of updates to the site and services</li>
                  <li>Perform other business activities as needed</li>
                  <li>Prevent fraudulent transactions and protect against criminal activity</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  5. DISCLOSURE OF YOUR INFORMATION
                </h2>
                <p className="mb-4">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <h3 className="font-display tracking-wider mb-3 mt-6" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  By Law or to Protect Rights
                </h3>
                <p className="mb-4">
                  If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </p>
                <h3 className="font-display tracking-wider mb-3 mt-6" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Third-Party Service Providers
                </h3>
                <p>
                  We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  6. SECURITY OF YOUR INFORMATION
                </h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  7. POLICY FOR CHILDREN
                </h2>
                <p>
                  We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  8. CHANGES TO THIS PRIVACY POLICY
                </h2>
                <p>
                  We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  9. YOUR DATA PROTECTION RIGHTS
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate</li>
                  <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions</li>
                  <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions</li>
                  <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions</li>
                  <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  10. CONTACT US
                </h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:<br />
                  <br />
                  Invctus, LLC<br />
                  360 Meadow Ranch Rd<br />
                  Snowmass Village, CO 81615<br />
                  United States
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
