import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './../index.css';
import Header from './Header/Header';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <img
            src="/api/placeholder/1920/600?text=Australia+Map+Outline"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for the Adventure of a Lifetime?
            </h2>
            <p className="text-xl mb-8">
              Book your Australian journey today and save up to 20% on selected
              tours when you book before June.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-xl px-10 py-4 rounded-full transition"
            >
              Book Your Adventure Now
            </a>
            <p className="mt-6 text-blue-200">
              No booking fees • Free cancellation • Best price guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
