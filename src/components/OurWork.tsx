import classNames from 'classnames';
import { useRouter } from 'next/router';

const Ourwork = () => {
  const router = useRouter();
  const loanType = [
    {
      name: 'Agriculture Loan',
      link: '/agriculture-loan',
      img: 'agriculture-loan.jpeg',
      w: 'col-span-1',
    },
    {
      name: 'Business Loan',
      link: '/business-loan',
      img: 'business-loan.jpeg',
      w: 'col-span-1',
    },
    {
      name: 'Complex Loan',
      link: '/agriculture-loan',
      img: 'complex-loan.jpeg',
      w: 'col-span-2',
    },

    {
      name: 'Home Loan',
      link: '/agriculture-loan',
      img: 'home-loan.jpeg',
      w: 'col-span-1',
    },
    {
      name: 'ITR Loan',
      link: '/agriculture-loan',
      img: 'itr-loan.jpeg',
      w: 'col-span-2',
    },
    {
      name: 'Payslip Loan',
      link: '/agriculture-loan',
      img: 'payslip-loan.jpeg',
      w: 'col-span-1',
    },
    {
      name: 'Personal Loan',
      link: '/agriculture-loan',
      img: 'personal-loan.jpeg',
      w: 'col-span-2',
    },
    {
      name: 'Property Loan',
      link: '/agriculture-loan',
      img: 'property-loan.jpeg',
      w: 'col-span-1',
    },

    {
      name: 'Shop Loan',
      link: '/agriculture-loan',
      img: 'shop-loan.jpeg',
      w: 'col-span-1',
    },
  ];

  return (
    <div
      id="portfolio"
      className=" container  relative z-0 py-12 md:py-16 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* <!-- Heading start --> */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <div className=" uppercase text-sm font-bold text-orange-400 mb-4">
            {' '}
            Our Services
          </div>
          <h1 className="text-2xl leading-normal mb-2 font-bold text-black">
            Services as per need
          </h1>
          <p className="text-gray-800 leading-relaxed font-light text-xl mx-auto pb-2">
            We have categorize our services as per your need. It help us to
            understand our customers requirements. Please choose the service
            among them.
          </p>
        </header>
        {/* <!-- End heading --> */}
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 gap-4">
        {loanType.map((item, index) => {
          const figureClass = classNames(`group  lg:${item.w}`);
          return (
            <figure className={figureClass} data-wow-duration="1s" key={index}>
              <div className="relative overflow-hidden cursor-pointer mb-6  h-96 ">
                <a
                  href="src/img/dummy/img1.jpg"
                  data-gallery="gallery1"
                  data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
                >
                  <img
                    className="hover:scale-125 block w-full h-auto duration-500"
                    src={`${router.basePath}/assets/images/${item.img}`}
                    alt="Image Description"
                  />
                  <div className="duration-700 group-hover:h-24 opacity-90 absolute inset-x-0 bottom-0 h-12  ease-in-out transition-all  overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">
                      {item.name}
                    </h3>
                    <small className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 mt-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                      View more
                    </small>
                  </div>
                </a>
              </div>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Ourwork;
