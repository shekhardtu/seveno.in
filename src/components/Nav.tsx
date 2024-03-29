// <!-- ========== { HEADER }==========  -->
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Nav = () => {
  const [show, setShow] = useState(true);

  // const toggleMobileMenu = () => {
  //   console.log(showMenu);

  // };
  const router = useRouter();
  const loanType = [
    {
      name: 'Agriculture Loan',
      link: '/agriculture-loan',
    },
    {
      name: 'Business Loan',
      link: '/business-loan',
    },
    {
      name: 'Complex Loan',
      link: '/complex-loan',
    },
    {
      name: 'Home Loan',
      link: '/home-loan',
    },
    {
      name: 'ITR Loan',
      link: '/itr-loan',
    },
    {
      name: 'Personal Loan',
      link: '/personal-loan',
    },
    {
      name: 'Property Loan',
      link: '/property-loan',
    },
    {
      name: 'Payslip Loan',
      link: '/payslip-loan',
    },
    {
      name: 'Shop Loan',
      link: '/shop-loan',
    },
  ];
  return (
    <header className="border-2 sticky inset-x-0 top-0 z-50 bg-white border-b-gray-300">
      <nav className="">
        <div className="container  mx-auto px-0">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-between">
              <Link href="/">
                <div className="text-4xl font-bold capitalize text-gray-900 flex items-center">
                  <img
                    src={`${router.basePath}/assets/images/logo.png`}
                    alt="Nextjs starter banner"
                    className="w-80"
                  />
                </div>
              </Link>
              {/* <!-- mobile nav --> */}
              <div className="flex flex-row items-center py-4 lg:py-0">
                <div className="relative text-gray-900  block lg:hidden">
                  <button
                    type="button"
                    className=" block py-3 px-6 border-b-2 border-transparent"
                    onClick={() => setShow(!show)}
                  >
                    <span className="sr-only">Mobile menu</span>
                    {show ? (
                      <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                        Show
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className=" h-8 w-8"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                        />
                        Hide
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`lg:flex lg:flex-row justify-end ${
                show ? 'hidden' : 'flex'
              }`}
            >
              {/* <!-- nav menu --> */}
              <ul className="bg-white lg:bg-white  w-full  text-center lg:text-left lg:flex lg:flex-row text-indigo-700 text-base items-center font-semibold hover:text-indigo-200">
                <li className="hover:text-red-700">
                  <Link
                    className=" block py-3 lg:py-2 px-6 border-b-2 border-transparent"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-3 lg:py-2 px-6 border-b-2 border-transparent"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="group relative  inline-block">
                  <a
                    className="block py-3 lg:py-2 px-6 border-b-2 border-transparent"
                    href="#portfolio"
                  >
                    Services
                  </a>

                  <ul className="absolute hidden bg-white group-hover:block z-50 border-gray-300 border rounded  shadow-lg  transition ease-out duration-100">
                    {loanType.map((loan, index) => (
                      <li key={index} className="">
                        <a
                          className="whitespace-nowrap bg-white  hover:bg-gray-200 hover:text-indigo-500 transition-all ease-in hover:rounded-none py-2 text-sm font-normal px-10 block rounded"
                          href={loan.link}
                        >
                          {loan.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link
                    className="block py-3 lg:py-2 px-6 border-b-2 border-transparent"
                    href="/payment"
                  >
                    Payment
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-3 lg:py-2 px-6 border-b-2 border-transparent"
                    href="/terms-and-condition"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-3 lg:py-2 px-6 border-b-2 border-transparent"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
  // <!-- end header -->
};

export default Nav;
