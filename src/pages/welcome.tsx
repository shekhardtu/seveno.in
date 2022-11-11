import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import WelcomeTemplate from '@/components/WelcomeTemplate';
import { Main } from '@/templates/Main';

const Contact = () => {
  const router = useRouter();
  const printRef = useRef<any>(null);

  const [applicantName, setApplicantName]: [any, any] = useState('Raju');
  const [fatherName, setFatherName]: [any, any] = useState('Kumar');

  const [mobileNumber, setMobileNumber]: [any, any] = useState('8899832389');
  const [loanAmount, setLoanAmount]: [any, any] = useState('100000');
  const [loanDuration, setLoanDuration]: [any, any] = useState('5');
  const [filledBy, setFilledBy]: [any, any] = useState('Rahul');
  const [agentContact, setAgentContact]: [any, any] = useState('8899832389');
  const [emi, setEmi]: [any, any] = useState('');
  const [imagePath, setImagePath]: [any, any] = useState(null);
  // const [loanAmount, setLoanAmount]: [any, any] = useState('Manager');

  const onlyAlphabets = (e: any) => {
    if (!/[a-z,\s,A-Z]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onlyInteger = (e: any) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const calculateEmi = () => {
    const interestAmount: number = parseFloat(loanAmount) * 0.05 * loanDuration;
    const totalAmount = Number(loanAmount) + Number(interestAmount);
    const loanDurationInMonths: any = loanDuration * 12;

    let emiAmount: any = totalAmount / parseInt(loanDurationInMonths, 10);
    emiAmount = Math.ceil(emiAmount);
    setEmi(`${emiAmount}`);
  };

  useEffect(() => {
    calculateEmi();
  }, [loanAmount, loanDuration]);

  useEffect(() => {
    if (loanAmount > 0 && loanDuration > 0) {
      calculateEmi();
    } else {
      setEmi(``);
    }
  }, [loanAmount, loanDuration]);
  function addWaterMark(doc: any) {
    const img = new Image();
    img.src = `${router.basePath}/assets/images/logo_op.png`;

    // doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
    doc.setTextColor(150);
    doc.addImage(img, 'png', 30, 550, 660, 152, 'watermark', 'NONE', 20);

    return doc;
  }
  const handleDownloadPdf = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF({
      format: 'a3',
      unit: 'px',
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });

    // Adding the fonts
    // doc.setFont('Anton-Regular', 'normal');

    doc.html(printRef.current, {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      margin: [200, 0, 40, 20],
      autoPaging: 'text',

      async callback(pdf) {
        // save the document as a PDF with name of Memes
        const totalPages = pdf.internal.pages.length - 1;
        const img = new Image();
        img.src = `${router.basePath}/assets/images/header.png`;

        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);

          pdf.setFontSize(10);
          // pdf.setTextColor(150);
          // pdf.text(
          //   `Page ${i} of ${totalPages}`,
          //   pdf.internal.pageSize.getWidth() - 100,
          //   pdf.internal.pageSize.getHeight() - 30
          // );
          pdf.text(
            `SIGNATURE & THUMB-IMPRESSION OF LOANEE `,
            pdf.internal.pageSize.getWidth() - 200,
            pdf.internal.pageSize.getHeight() - 20
          );
          pdf.addImage(img, 'png', 40, 0, 554, 182);
          addWaterMark(pdf);
        }
        pdf.save('approvalLetter');
      },
    });
  };

  // const router = useRouter();
  return (
    <Main>
      <section>
        <div className="mx-auto max-w-screen-2xl p-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className=" py-4 px-8 sm:p-16 lg:p-8">
                <h2 className="text-2xl font-bold sm:text-3xl text-indigo-500">
                  Loan Application
                </h2>

                <form action="#" className="mt-4 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="applicantName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Applicant Name (Required)
                    </label>

                    <input
                      type="text"
                      id="applicantName"
                      name="applicantName"
                      onChange={(e) => setApplicantName(e.target.value)}
                      onKeyPress={onlyAlphabets}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="fatherName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Father&apos;s Name (Required)
                    </label>

                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      onChange={(e) => setFatherName(e.target.value)}
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
                  <div className="col-span-6">
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
                      onKeyPress={onlyInteger}
                      maxLength={10}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="loanAmount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Loan Amount (Required)
                    </label>

                    <input
                      type="text"
                      id="loanAmount"
                      name="loanAmount"
                      onKeyPress={onlyInteger}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 ">
                    <label
                      htmlFor="loanDuration"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Loan Duration (Required)
                    </label>

                    <input
                      type="text"
                      id="loanDuration"
                      name="loanDuration"
                      maxLength={3}
                      onChange={(e) => setLoanDuration(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="filledBy"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Filled by (Required)
                    </label>

                    <input
                      type="text"
                      id="filledBy"
                      name="filledBy"
                      onChange={(e) => setFilledBy(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500  text-sm text-gray-700 shadow-sm  bg-white
                        "
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="agentContact"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Agent Contact (Required)
                    </label>

                    <input
                      type="text"
                      id="agentContact"
                      name="agentContact"
                      onKeyPress={onlyInteger}
                      maxLength={10}
                      onChange={(e) => setAgentContact(e.target.value)}
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
                <div ref={printRef} className="p-0 m-0">
                  <WelcomeTemplate
                    applicantName={applicantName}
                    fatherName={fatherName}
                    mobileNumber={mobileNumber}
                    loanAmount={loanAmount}
                    loanDuration={loanDuration}
                    filledBy={filledBy}
                    agentContact={agentContact}
                    imagePath={imagePath}
                    emi={emi}
                  ></WelcomeTemplate>
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
