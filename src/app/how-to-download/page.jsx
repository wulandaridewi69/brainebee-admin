const HowToDownload = () => {
  return (
    <main className="min-h-screen bg-white text-black max-w-5xl mx-auto px-6 py-16 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        How to Download
      </h1>

      <p className="text-sm text-gray-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-8">
        <p>
          Follow the steps below to download your digital products from
          brainebee after completing your purchase.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Step 1: Complete Your Purchase
          </h2>
          <p>
            Make sure your payment is successfully completed. You will receive
            a confirmation once your order is processed.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Step 2: Access Your Account
          </h2>
          <p>
            Log in to your brainebee account using the email you used during
            checkout.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Step 3: Go to Downloads
          </h2>
          <p>
            Navigate to your dashboard and open the <strong>Downloads</strong>{" "}
            or <strong>My Products</strong> section.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Step 4: Download Your Files
          </h2>
          <p>
            Click the download button to save the files to your device. Files
            are typically provided in PDF or ZIP format.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Download Issues
          </h2>
          <p>
            If you experience any issues with downloading, please check your
            internet connection or contact our support team.
          </p>
          <p className="mt-2 font-medium">
            📧 support@brainebee.com
          </p>
        </div>
      </section>
    </main>
  );
}


export default HowToDownload;