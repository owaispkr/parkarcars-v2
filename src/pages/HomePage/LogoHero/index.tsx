const LogoHero = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular makers
          </h2>
        </div>
        <section>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap justify-center">
              <div className="card-zoom">
                <div className="card-zoom-image bg-toyota"></div>
                <h1 className="card-zoom-text">TOYOTA</h1>
              </div>

              <div className="card-zoom">
                <div className="card-zoom-image bg-honda"></div>
                <h1 className="card-zoom-text">HONDA</h1>
              </div>

              <div className="card-zoom">
                <div className="card-zoom-image bg-mazda"></div>
                <h1 className="card-zoom-text">MAZDA</h1>
              </div>

              <div className="card-zoom">
                <div className="card-zoom-image bg-nissan"></div>
                <h1 className="card-zoom-text">NISSAN</h1>
              </div>
              <div className="card-zoom">
                <div className="card-zoom-image bg-subaru"></div>
                <h1 className="card-zoom-text">SUBARU</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LogoHero;
