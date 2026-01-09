const PrivacyPolicy = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-8">
        <p>
          brainebee ("we", "our", or "us") respects your privacy and is committed
          to protecting your personal data. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website
          and services.
        </p>

        {/* 1 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal information such as name and email address</li>
            <li>Account and profile information</li>
            <li>Usage data (pages visited, actions performed)</li>
            <li>Uploaded content and related metadata</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To manage user accounts and access</li>
            <li>To improve platform performance and user experience</li>
            <li>To communicate updates and support responses</li>
            <li>To ensure platform security</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Data Security
          </h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your data. However, no method of transmission over the
            internet is completely secure.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Data Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. Data may
            only be shared when required by law or to protect the security and
            integrity of our platform.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Cookies
          </h2>
          <p>
            We may use cookies or similar technologies to improve functionality
            and user experience. You can control cookies through your browser
            settings.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            7. Children’s Privacy
          </h2>
          <p>
            brainebee is intended for parents, educators, and content creators.
            We do not knowingly collect personal data from children under 13.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mt-2">
            📧 <span className="font-medium">support@brainebee.com</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
