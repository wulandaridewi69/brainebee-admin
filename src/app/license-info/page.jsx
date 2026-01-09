const LicenseInfo = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        License Information
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-8">
        <p>
          All digital products available on brainebee are protected by
          copyright laws. By purchasing or downloading our products, you agree
          to comply with the following license terms.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            What You Are Allowed To Do
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use products for personal or classroom use</li>
            <li>Use products in a single business or educational setting</li>
            <li>Print digital products for personal use</li>
            <li>Use products in digital format for presentations or lessons</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            What You Are NOT Allowed To Do
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Resell, redistribute, or share the files</li>
            <li>Upload products to public websites or marketplaces</li>
            <li>Modify and claim the product as your own</li>
            <li>Share files with others who did not purchase them</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Commercial Use
          </h2>
          <p>
            Unless explicitly stated, all products are licensed for personal or
            educational use only. Commercial use requires a separate license.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            License Termination
          </h2>
          <p>
            Violation of these license terms may result in termination of access
            without notice or refund.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Contact
          </h2>
          <p>
            If you have questions regarding licensing, please contact us at:
          </p>
          <p className="mt-2 font-medium">
            📧 support@brainebee.com
          </p>
        </div>
      </section>
    </main>
  );
}

export default LicenseInfo;