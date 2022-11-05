import { useRouter } from 'next/router';

const AboutUs = () => {
  const router = useRouter();
  return (
    <section className="border-t border-gray-400 clear-both overflow-hidden">
      <div className="mx-auto container  px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={`${router.basePath}/assets/images/about.jpeg`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <div className="uppercase text-sm font-bold text-orange-400 mb-4">
                {' '}
                About Us
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Stand with you to fulfill your financial needs.
              </h2>

              <div className="flex relative align-middle justify-items-center justify-between my-6">
                <div className="flex w-auto flex-col">
                  <img
                    alt="House"
                    src={`${router.basePath}/assets/images/podium.png`}
                    className="h-10 w-10 object-cover"
                  />
                  <div className="flex text-sm"> Award Winner</div>
                </div>
                <div className="flex w-auto flex-col">
                  <img
                    alt="House"
                    src={`${router.basePath}/assets/images/customer-service.png`}
                    className="h-10 w-10 object-cover"
                  />
                  <div className="flex text-sm"> 24/7 Support</div>
                </div>
                <div className="flex w-auto flex-col">
                  <img
                    alt="House"
                    src={`${router.basePath}/assets/images/handshake.png`}
                    className="h-10 w-10 object-cover flex"
                  />
                  <div className="flex text-sm">100% Trusted</div>
                </div>
              </div>

              <p className="mt-4 text-gray-600">
                We deal in Shop Loan, Flat Loan, Personal Loan, Home Loan,
                Agriculture Loan, Plot Loan, Complex loan, Sale-Purchase Loan,
                Project Loan, Education Loan, Pay Slip Loan, Gold Loan,
                Insurance, Policy Bond Loan, Car Loan, Machine Loan, Business
                Loans, Loan Against Property & Project Etc.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
