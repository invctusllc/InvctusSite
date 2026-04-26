import { motion } from "motion/react";

export function TermsOfService() {
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
              TERMS OF SERVICE
            </h1>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="opacity-60 mb-12" style={{ fontSize: '0.875rem' }}>
              Last Updated: April 16, 2026
            </p>

            <div className="space-y-8 opacity-80" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  1. ACCEPTANCE OF TERMS
                </h2>
                <p>
                  By accessing and using the services provided by Invctus, LLC ("Company", "we", "our", or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  2. USE LICENSE
                </h2>
                <p className="mb-4">
                  Permission is granted to temporarily access the materials (information or software) on Invctus, LLC's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in Invctus, LLC's services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  3. SERVICES DESCRIPTION
                </h2>
                <p>
                  Invctus, LLC provides design, product development, software development, and AI research and development services. All services are provided on a project basis and subject to separate agreements and statements of work.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  4. SMS VERIFICATION (ONE-TIME PASSCODES)
                </h2>
                <p className="mb-4">
                  Invctus may require a phone number for account authentication and security verification. By providing your phone number, you consent to receive automated SMS messages containing one-time passcodes (OTPs) or verification codes to help confirm your identity and protect your account.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No marketing texts:</strong> Invctus does not send promotional or marketing SMS messages.</li>
                  <li><strong>Message frequency:</strong> Messages are sent only when you request verification, so frequency varies.</li>
                  <li><strong>Msg & data rates:</strong> Message and data rates may apply depending on your mobile carrier.</li>
                  <li><strong>Opt-out/help:</strong> Reply STOP to opt out and HELP for help. You may also contact hello@invctus.co.</li>
                  <li><strong>Service providers:</strong> We may use third-party service providers (such as SMS delivery platforms) to deliver verification messages.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  5. INTELLECTUAL PROPERTY
                </h2>
                <p>
                  Unless otherwise stated, Invctus, LLC and/or its licensors own the intellectual property rights for all material on this platform. All intellectual property rights are reserved. You may view and/or print pages for your own personal use subject to restrictions set in these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  6. LIMITATION OF LIABILITY
                </h2>
                <p>
                  In no event shall Invctus, LLC, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this service, whether such liability is under contract, tort, or otherwise. Invctus, LLC, including its officers, directors, and employees shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this service.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  7. INDEMNIFICATION
                </h2>
                <p>
                  You hereby indemnify to the fullest extent Invctus, LLC from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  8. SEVERABILITY
                </h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  9. VARIATION OF TERMS
                </h2>
                <p>
                  Invctus, LLC is permitted to revise these Terms at any time as it sees fit, and by using this service you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this service.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  10. GOVERNING LAW
                </h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the State of Colorado, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-display tracking-wider mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  11. CONTACT INFORMATION
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us at:<br />
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
