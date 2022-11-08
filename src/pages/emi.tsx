import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import BreadCrumb from '@/components/BreadCrumb';
import { Main } from '@/templates/Main';

const numWords = require('num-words');

const Contact = () => {
  const [amount, setAmount]: [any, any] = useState();
  const [amountInWords, setAmountInWords]: [any, any] = useState('');
  const [months, setMonths]: [any, any] = useState();
  const [years, setYears]: [any, any] = useState(0);
  const [emi, setEmi]: [any, any] = useState('');
  // useEffect(() => {}, []);
  const calculateEmi = () => {
    const interestAmount: any = parseFloat(amount) * 0.05 * years;

    const totalAmount = amount + interestAmount;
    let emiAmount = totalAmount / parseInt(months, 10);

    emiAmount = Math.ceil(emiAmount);

    setEmi(`${emiAmount}/- Per month`);
  };
  const handleAmountChange = (e: any) => {
    const amountInt = parseInt(e.target.value, 10);
    setAmount(amountInt);
    e.preventDefault();
  };

  useEffect(() => {
    const inWords = numWords(amount);
    setAmountInWords(inWords);
    const calMonths = years * 12;
    if (years > 0) {
      setMonths(calMonths);
    } else setMonths(0);
  }, [amount, years]);

  useEffect(() => {
    if (amount > 0 && months > 0) {
      calculateEmi();
    } else {
      setEmi(``);
    }
  }, [amount, months]);

  const handleYearChange = (e: any) => {
    const amountInt = parseInt(e.target.value, 10);
    setYears(amountInt);
    e.preventDefault();
  };

  const router = useRouter();
  return (
    <Main>
      <BreadCrumb path="EMI Calculator" />

      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="Emi Calculator"
                  src={`${router.basePath}/assets/images/emi-cal.jpeg`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-indigo-500">
                  EMI Calculator
                </h2>

                <p className="mt-4 text-gray-600">Calculate your EMI now</p>
                <div>
                  <form action="#" className="mt-4 grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Amount
                      </label>

                      <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        maxLength={9}
                        onChange={handleAmountChange}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div className="col-span-6 ">
                      <label
                        htmlFor="amountInWords"
                        className="block text-sm font-medium text-gray-700"
                      >
                        In Words
                      </label>

                      <input
                        readOnly
                        type="text"
                        id="amountInWords"
                        name="amountInWords"
                        placeholder="Amount in words"
                        value={amountInWords}
                        tabIndex={-1}
                        className="mt-1 w-full rounded-md border-gray-500 bg-gray-100 text-sm text-gray-700 shadow-sm capitalize"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Years
                      </label>

                      <input
                        type="text"
                        id="Subject"
                        name="subject"
                        onChange={handleYearChange}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        maxLength={3}
                        className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Months
                      </label>

                      <input
                        readOnly
                        type="text"
                        id="Subject"
                        name="subject"
                        value={`${months} Months`}
                        tabIndex={-1}
                        className="mt-1 w-full rounded-md border-gray-500  text-sm text-gray-700 shadow-sm  bg-gray-100
                        "
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="Subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Installment
                      </label>

                      <input
                        type="text"
                        id="Subject"
                        name="subject"
                        readOnly
                        placeholder="Monthly Installment"
                        value={emi}
                        tabIndex={-1}
                        className="mt-1 w-full rounded-md border-gray-500                     bg-gray-100 font-semibold
                        text-sm text-gray-700 shadow-sm"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
