const ContactUs = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-10">
          We’re happy to hear from you. If you have any questions, feedback,
          or collaboration ideas, please reach out to us using the form below.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">Subject</label>
            <input
              type="text"
              placeholder="How can we help you?"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-zinc-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-sm text-gray-600">
          <p>
            📧 Email:{" "}
            <span className="font-medium text-black">
              support@brainebee.com
            </span>
          </p>
          <p>
            🌍 Website:{" "}
            <span className="font-medium text-black">
              www.brainebee.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
