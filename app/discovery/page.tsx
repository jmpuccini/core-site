export default function DiscoveryPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-6">Start Your Discovery Journey</h1>
      <p className="text-lg text-gray-700 mb-10">
        Please fill out the form below to begin. 
      </p>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://forms.gle/VeMznWvaHddULPJ7A"
          width="100%"
          height="800"
          style={{ border: "none" }}
          title="Discovery Journey Form"
        ></iframe>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Thank you for submitting!</h2>
        <a
          href="https://calendly.com/mendozasabbagh/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
        >
          Continue Your Discovery Journey – Book a Meeting
        </a>
      </div>
    </section>
  );
}
