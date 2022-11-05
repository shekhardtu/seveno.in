import Link from 'next/link';

import About from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import Ourwork from '@/components/OurWork';
import Review from '@/components/Review';
import WorkCulture from '@/components/WorkCulture';
import { Main } from '@/templates/Main';

const Banner = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="container relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            We understand your
            <strong className="block font-extrabold text-indigo-700">
              financial needs
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            We are here to fulfill your financial needs. Easy loan approval and
            amount directly credit to customers bank account.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#"
              className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
            >
              EMI Calculator
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Main>
      <Banner />
      <Ourwork />
      <Review />
      <About />
      <WorkCulture />
      <ContactUs />
    </Main>
  );
};

export default Index;
