import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import PayslipTemplate from '@/components/PayslipTemplate';
import { Main } from '@/templates/Main';

const Contact = () => {
  const router = useRouter();
  const printRef = useRef<any>(null);

  const [applicantName, setApplicantName]: [any, any] = useState('Raju Kumar');
  const [totalAmount, setTotalAmount]: [any, any] = useState(1000);

  const [paidAmount, setPaidAmount]: [any, any] = useState(300);
  const [amountInWords, setAmountInWords]: [any, any] = useState(
    'One Thousand Rupees'
  );
  const [caseFile, setCaseFile]: [any, any] = useState('5155');
  const [paymentMode, setPaymentMode]: [any, any] = useState('UPI');
  const [invoiceId, setInvoiceId]: [any, any] = useState('1677');
  const [balanceAmount, setBalanceAmount]: [any, any] = useState('700');

  const onlyAlphabets = (e: any) => {
    if (!/[a-z,\s,A-Z]/.test(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    setBalanceAmount(totalAmount - paidAmount);
  }, [paidAmount]);

  const onlyInteger = (e: any) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  function addWaterMark(doc: any) {
    const img = new Image();
    img.src = `${router.basePath}/assets/images/logo_op.png`;

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

    doc.html(printRef.current, {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      margin: [160, 0, 20, 0],
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
          pdf.text(
            `Page ${i} of ${totalPages}`,
            pdf.internal.pageSize.getWidth() - 100,
            pdf.internal.pageSize.getHeight() - 30
          );

          pdf.addImage(img, 'png', 40, 0, 554, 182);
          addWaterMark(pdf);
        }
        pdf.save('welcomeLetter');
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
                  Payment Invoice
                </h2>

                <form action="#" className="mt-4 grid grid-cols-6 gap-6">
                  <div className="col-span-6 ">
                    <label
                      htmlFor="invoiceId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Invoice Id (Required){' '}
                    </label>

                    <input
                      type="text"
                      id="invoiceId"
                      name="invoiceId"
                      onChange={(e) => setInvoiceId(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="applicantName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bill To (Required){' '}
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
                      htmlFor="totalAmount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Total Amount (Required)
                    </label>

                    <input
                      type="text"
                      id="totalAmount"
                      name="totalAmount"
                      onChange={(e) => setTotalAmount(e.target.value)}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="paidAmount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Paid Amount (Required)
                    </label>

                    <input
                      type="text"
                      id="paidAmount"
                      name="paidAmount"
                      onChange={(e) => setPaidAmount(e.target.value)}
                      onKeyPress={onlyInteger}
                      maxLength={10}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="amountInWords"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Amount in Words
                    </label>

                    <input
                      type="text"
                      id="amountInWords"
                      name="amountInWords"
                      onKeyPress={onlyAlphabets}
                      onChange={(e) => setAmountInWords(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 ">
                    <label
                      htmlFor="caseFile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Case File No
                    </label>

                    <input
                      type="text"
                      id="caseFile"
                      name="caseFile"
                      onChange={(e) => setCaseFile(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="paymentMode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Payment Mode (Required)
                    </label>

                    <input
                      type="text"
                      id="paymentMode"
                      name="paymentMode"
                      onChange={(e) => setPaymentMode(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500  text-sm text-gray-700 shadow-sm  bg-white
                        "
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
                  <PayslipTemplate
                    applicantName={applicantName}
                    totalAmount={totalAmount}
                    paidAmount={paidAmount}
                    amountInWords={amountInWords}
                    caseFile={caseFile}
                    paymentMode={paymentMode}
                    invoiceId={invoiceId}
                    balanceAmount={balanceAmount}
                  ></PayslipTemplate>
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
