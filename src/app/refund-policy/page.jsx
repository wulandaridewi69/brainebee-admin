const RefundPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4 text-gray-700">
        Thank you for shopping at <strong>brainebee</strong>.
        We offer digital products designed to support children's learning.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Digital Products – No Refund
      </h2>
      <p className="text-gray-700 mb-4">
        All products sold on brainebee are <strong>digital downloads</strong>.
        Once a file has been downloaded or accessed, we are unable to offer a refund,
        exchange, or cancellation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Exceptions
      </h2>
      <p className="text-gray-700 mb-4">
        Refunds may be considered only if:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>The file is corrupted or cannot be opened</li>
        <li>You received the wrong product</li>
      </ul>

      <p className="text-gray-700 mb-4">
        In such cases, please contact us within <strong>7 days</strong> of purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Contact Us
      </h2>
      <p className="text-gray-700">
        If you have any questions about our Refund Policy, please contact us at:
        <br />
        <a
          href="mailto:support@brainebee.com"
          className="text-blue-600 underline"
        >
          support@brainebee.com
        </a>
      </p>
    </section>
  );
}

export default RefundPolicy;
