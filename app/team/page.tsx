export default function TeamPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white text-center">
      <h1 className="text-4xl font-bold mb-6">Our Expertise</h1>
      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
        At corEvolve, our team brings extensive experience in organizational psychology, leadership development, cultural transformation, and strategic consulting. We guide organizations to evolve sustainably while retaining their core values and purpose.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Example team member cards */}
        {[
          { name: "Juan M. Mendoza-Puccini", role: "Founder & Lead Consultant" },
          { name: "Karime Sabbagh", role: "Business & Financial Expert" },
          { name: "Karolyn Sabbagh", role: "Business, Procurement & logistics Expert" },
        ].map(({ name, role }) => (
          <div
            key={name}
            className="bg-gray-50 p-6 rounded-lg shadow hover:scale-105 transform transition text-center"
          >
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
