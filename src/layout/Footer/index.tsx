const Footer = () => {
  return (
    <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            More Than Cars. It's About You!
          </h2>
          <p className="text-xl mb-8">
            Backed by expert support and transparent pricing
          </p>
          <a
            href="/listing"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-xl px-10 py-4 rounded-full transition"
          >
            View Our Stock Now
          </a>
          <p className="mt-6 text-blue-200">
            Copyright © 2025 - All Rights Reserved By Parkar Cars
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
