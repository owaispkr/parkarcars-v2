function AboutPage() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold m-8">About Us</h1>
      </header>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et
              magna quis elit efficitur consequat. Mauris eleifend velit a
              pretium iaculis. Donec sagittis velit et magna euismod, vel
              aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
              arcu volutpat vel.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="/assets/Home/home.png"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
