import type { FC, ReactNode } from 'react';

import { Main } from '@/templates/Main';

type IContactUsProps = {
  children?: ReactNode;
};

const Banner: FC<IContactUsProps> = (): JSX.Element => {
  const terms = [
    'Disbursement of loan will be subject to the condition at the time of disbursement.',
    'Final approval sanction will be issued subject to fulfillment of existing terms &amp; conditions of apply.',
    ' Only 50% of net salary of govt. guarantor can be treated as EMI.',
    'Net salary of govt. Guarantor must be doubled from the EMI of loanee if salary of govt. Guarantor is less than double the amount will be reduced.',
    'Advance EMI installment will be recovered from all the applicants lonee if applicant depositing their E.M.I.Without bouncing till completion of loan on demand, company can provide loan equal to double in future in case a single bouncing.This facility will not be applicable to them.',
    'Company will accept only those applicant & amp; guarantor whose age should be 18 to 60 years.',
    'In case of property guarantor the property of any blood relative will not be accepted SC caste guarantor is not acceptable. ',
    'In case if the document requested by the company is not completed by the applicant shall be rejected.',
    ' Property guarantor search report compulsory & amp; all family member permission is compulsory.File fees will not refundable after issuing the offer letter.',
  ];

  if (terms.length > 0) {
    return (
      <>
        <ul>
          {terms.map((items, index) => {
            return <li key={index}>{items}</li>;
          })}
        </ul>
      </>
    );
  }
  return (
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="Night"
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="h-full absolute inset-0 w-full object-cover opacity-80"
      />
    </section>
  );
};
const ContactUs = () => {
  // const bannerSide = isTerms ? props.terms;
  return (
    <Main>
      <section className="border-t border-gray-400 clear-both overflow-hidden">
        <div className="lg:grid  lg:grid-cols-12">
          <Banner />
          <main
            aria-label="Main"
            className="flex flex-col  justify-center sm:px-0 lg:col-span-7 lg:py-10 lg:px-16 xl:col-span-6"
          >
            <div className="flex justify-start lg:relative lg:block lg:py-2 text-indigo-600">
              <div className=" uppercase text-sm font-bold text-orange-400 mb-4">
                Contact Us
              </div>
              <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl">
                We Love to Hear From You
              </h2>

              <p className="leading-relaxed">
                Please Feel free and share with us. We will get you on priority.
              </p>
            </div>
            <div className="max-w-xl lg:max-w-3xl">
              <form action="#" className="mt-4 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="Subject"
                    name="subject"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  ></textarea>
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </Main>
  );
};

export default ContactUs;
