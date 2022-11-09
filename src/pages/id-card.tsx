import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

import { Main } from '@/templates/Main';

const Contact = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const [firstName, setFirstName]: [any, any] = useState('Raju');
  const [lastName, setLastName]: [any, any] = useState('Kumar');
  const [designation, setDesignation]: [any, any] = useState('Manager');
  const [mobileNumber, setMobileNumber]: [any, any] = useState('8899832389');
  const [idNumber, setIdNumber]: [any, any] = useState('165500');
  const [location, setLocation]: [any, any] = useState('Delhi');
  const [imagePath, setImagePath]: [any, any] = useState(null);

  const onlyAlphabets = (e: any) => {
    if (!/[a-z,A-Z]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    // eslint-disable-next-line new-cap
    const pdf = new jsPDF({
      orientation: 'p',
      format: 'a4',
      unit: 'mm',
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 50, 50, pdfWidth / 2, pdfHeight / 2);
    pdf.save('print.pdf');
  };
  const router = useRouter();
  return (
    <Main>
      <section>
        <div className="mx-auto max-w-screen-2xl p-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className=" py-4 px-8 sm:p-16 lg:p-8">
                <h2 className="text-2xl font-bold sm:text-3xl text-indigo-500">
                  Create Id Card
                </h2>

                <form action="#" className="mt-4 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      onKeyPress={onlyAlphabets}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      onKeyPress={onlyAlphabets}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Upload profile pic (file)
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full text-sm border-gray-500"
                      onChange={(e) => {
                        if (e.target.files) {
                          setImagePath(e.target.files[0]);
                        }
                      }}
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="designation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Designation
                    </label>

                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      onChange={(e) => setDesignation(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Number
                    </label>

                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      onChange={(e) => setMobileNumber(e.target.value)}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      maxLength={10}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="idNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Id Number
                    </label>

                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500  text-sm text-gray-700 shadow-sm  bg-white
                        "
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white
                        text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      onClick={(e) => {
                        handleDownloadPdf();
                        e.preventDefault();
                      }}
                      className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                      Save PDF
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative z-10 lg:py-16">
              <div className="flex-col items-center relative flex">
                <div
                  ref={printRef}
                  className="bg-cover h-auto flex flex-col justify-center items-center border-2 border-gray-600 w-80 p-4 bg-no-repeat bg-center text-white"
                  style={{
                    backgroundImage: `url(${router.basePath}/assets/images/icard-bg.png)`,
                  }}
                >
                  <div className="h-1/5 relative border-b border-gray-500 m-3 pb-3">
                    <img
                      src={`${router.basePath}/assets/images/logo.png`}
                      alt=""
                    />
                  </div>
                  <div className="h-2/5  relative mt-2 bg-white">
                    {imagePath && (
                      <img
                        alt="not found"
                        src={URL.createObjectURL(imagePath)}
                        className="w-32 h-44 border-2 border-gray-600 p-1"
                      />
                    )}
                  </div>
                  <div className="h-1/5 relative my-2 font-bold uppercase">
                    {firstName} {lastName}{' '}
                  </div>
                  <div className="h-auto relative  text-base my-2">
                    <div className="">
                      <span className="inline-block w-32 font-semibold">
                        Designation{' '}
                      </span>
                      :<span className="ml-4">{designation}</span>
                    </div>
                    <div className="">
                      <span className="inline-block w-32 font-semibold">
                        Mobile Number{' '}
                      </span>
                      :<span className="ml-4">{mobileNumber}</span>
                    </div>
                    <div className="">
                      <span className="inline-block w-32 font-semibold">
                        Id Number{' '}
                      </span>
                      :<span className="ml-4">{idNumber}</span>
                    </div>
                    <div className="">
                      <span className="inline-block w-32 font-semibold">
                        Location{' '}
                      </span>
                      :<span className="ml-4">{location}</span>
                    </div>
                  </div>
                  <div className="relative text-sm">
                    www.seveno.in
                    <img
                      alt="stamp"
                      src={`${router.basePath}/assets/images/stamp.png`}
                      className="w-16 h-16 absolute -right-20 -top-9"
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mt-8">
                  <button
                    onClick={handleDownloadPdf}
                    className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Print PDF
                  </button>
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
