export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6" id="home">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-800">
          We help organizations evolve<br />without losing their core
        </h1>
        <a
          href="/discovery"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start your Discovery Journey
        </a>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6 bg-gray-50 text-center" id="about">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10 leading-relaxed">
          At corEvolve, we help growing businesses attract and keep the right people by aligning leadership, culture, and purpose, so they scale without losing what makes them great.
        </p>
        <a
          href="/team"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Our Expertise
        </a>
      </section>

      {/* corEvolve Method Section */}
      <section className="py-24 px-6 bg-white text-center" id="method">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">corEvolve Method</h2>
        <p className="text-lg text-gray-700 mb-12">Built across four progressive phases:</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Reveal", desc: "Uncovers the organization's true cultural dynamics." },
            { title: "Align", desc: "Realigns leadership around a shared narrative." },
            { title: "Embed", desc: "Activates purpose in daily systems." },
            { title: "Sustain", desc: "Equips teams to preserve and evolve their culture over time." },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-gray-100 p-8 rounded-xl shadow hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
              <p className="text-gray-700 text-base">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-gray-500">
          Each tool used within the method is practical, lightweight, and designed for real-world environments.
        </p>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-24 px-6 bg-gray-50 text-center" id="cases">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Unión Vital", "Helped a growing healthcare company strengthen its people foundation by building the HR function from scratch..."],
            ["Mercatoner", "Guided a local business through a bold transformation, shifting from selling products to offering printer rental services..."],
            ["Crocanitos Project", "Guided a community to create a cooperative organization that designed and developed an innovative snack product..."],
            ["Barranquilla Cómo Vamos", "Made the invisible visible by helping the city tell a clearer story about quality of life..."],
            ["From the Summit to the Sea", "Worked alongside indigenous communities to protect their land and future..."],
            ["Fishing for Progress", "Helped coastal communities fish for the future, improving catch quality and sustainability..."],
            ["Weaving Progress", "Partnered with indigenous artisans to turn tradition into opportunity..."],
            ["Guajira 360° Think Tank", "Helped shape La Guajira’s economic future by bringing culture and sustainability to the center..."],
            ["Resilient Youth", "Opened new paths for vulnerable youth by helping over 150 young people complete life and job readiness programs..."],
            ["Wings for Communities", "Co-created a thriving support network for women in vulnerable rural areas..."],
            ["Clay Roots", "Worked with traditional potters to breathe new life into their craft..."],
            ["Cocina para Todos", "Transformed the future of over 100 unemployed youth by certifying them in professional cooking..."],
            ["English for Work", "Prepared over 120 young people for the job market by teaching practical, workplace English..."],
            ["Entrepreneur Kitchen", "Helped more than 30 women in rural Luruaco turn their cooking traditions into thriving businesses..."],
            ["Hands to the Land – Dibulla", "Strengthened the future of 110 rural producers by improving agricultural productivity..."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow hover:scale-105 transform transition duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          No commitment. Just a conversation about your goals.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="/discovery"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Your Discovery Journey
          </a>
          <a
            href="https://calendly.com/mendozasabbagh/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
          >
            Book a 30-Minute Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
