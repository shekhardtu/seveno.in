import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import ApprovalTemplate from '@/components/ApprovalTemplate';
import { Main } from '@/templates/Main';

const Contact = () => {
  const printRef = useRef<any>(null);
  const router = useRouter();
  const [applicantName, setApplicantName]: [any, any] =
    useState('Candidate Name');
  const [codeNumber, setCodeNumber]: [any, any] = useState('BBS 790');

  const [fatherName, setFatherName]: [any, any] = useState('Father Kumar');
  const [imagePath, setImagePath]: [any, any] = useState(null);

  const [mobileNumber, setMobileNumber]: [any, any] = useState('8899832389');

  const [dob, setDob]: [any, any] = useState('14/11/1990');
  const [aadhar, setAadhar]: [any, any] = useState('1234-1234-2255');
  const [pan, setPan]: [any, any] = useState('CHKPS8921H');
  const [loanAmount, setLoanAmount]: [any, any] = useState(100000);
  const [loanPeriod, setLoanPeriod]: [any, any] = useState(5);

  const [bankName, setBankName]: [any, any] = useState('State Bank of India');
  const [bankAccount, setBankAccount]: [any, any] = useState('157634342367');
  const [bankIFSC, setBankIFSC]: [any, any] = useState('SBIOO1598');

  const [permanentAddress, setPermanentAddress]: [any, any] =
    useState('Gokal Puri');

  const [processingCharge, setProcessingCharge]: [any, any] = useState('1500');
  const [state, setState]: [any, any] = useState('Delhi');
  const [gender, setGender]: [any, any] = useState('Male');
  const [filledBy, setFilledBy]: [any, any] = useState('Rahul');
  const [agentContact, setAgentContact]: [any, any] = useState('8899832389');
  const [contactForOTP, setContactForOTP]: [any, any] = useState('7799832389');
  const [emi, setEmi]: [any, any] = useState('2500');

  const onlyAlphabets = (e: any) => {
    if (!/[a-z,\s,A-Z]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const calculateEmi = () => {
    const interestAmount: number = parseFloat(loanAmount) * 0.05 * loanPeriod;
    const totalAmount = Number(loanAmount) + Number(interestAmount);
    const loanDurationInMonths: any = loanPeriod * 12;

    let emiAmount: any = totalAmount / parseInt(loanDurationInMonths, 10);
    emiAmount = Math.ceil(emiAmount);
    setEmi(`${emiAmount}`);
  };

  useEffect(() => {
    if (loanAmount > 0 && loanPeriod > 0) {
      calculateEmi();
    } else {
      setEmi(``);
    }
  }, [loanAmount, loanPeriod]);

  const onlyInteger = (e: any) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  function addWaterMark(doc: any) {
    const img = new Image();
    img.src = `${router.basePath}/assets/images/logo_op.png`;

    // doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
    doc.setTextColor(150);
    doc.addImage(img, 'png', 250, 450, 320, 76, 'watermark', 'NONE', 20);

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
                  Approval Form
                </h2>

                <form action="#" className="mt-4 grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="codeNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Code No. (Required)
                    </label>

                    <input
                      type="text"
                      id="codeNumber"
                      name="codeNumber"
                      onChange={(e) => setCodeNumber(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="applicantName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Candidate Name (Required)
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

                  <div className="col-span-6">
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
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700"
                    >
                      DOB (Required)
                    </label>

                    <input
                      type="text"
                      id="dob"
                      name="dob"
                      placeholder="DD/MM/YYYY"
                      onChange={(e) => setDob(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="aadhar"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Aadhar (Required)
                    </label>

                    <input
                      type="text"
                      id="aadhar"
                      name="aadhar"
                      placeholder="xxxx-xxxx-xxxx"
                      onChange={(e) => setAadhar(e.target.value)}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="pan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      PAN (Required)
                    </label>

                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      placeholder="CHKPS8922G"
                      onChange={(e) => setPan(e.target.value)}
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
                      onChange={(e) => setLoanAmount(e.target.value)}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="loanPeriod"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Loan Period (Required)
                    </label>

                    <input
                      type="text"
                      id="loanPeriod"
                      name="loanPeriod"
                      onChange={(e) => setLoanPeriod(e.target.value)}
                      maxLength={3}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="bankName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bank Name (Required)
                    </label>

                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      onChange={(e) => setBankName(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="bankAccount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bank Account (Required)
                    </label>

                    <input
                      type="text"
                      id="bankAccount"
                      name="bankAccount"
                      onChange={(e) => setBankAccount(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="bankIFSC"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bank IFSC Code (Required)
                    </label>

                    <input
                      type="text"
                      id="bankIFSC"
                      name="bankIFSC"
                      onChange={(e) => setBankIFSC(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender (Required)
                    </label>

                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 ">
                    <label
                      htmlFor="permanentAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Permanent Address (Required)
                    </label>

                    <input
                      type="text"
                      id="permanentAddress"
                      name="permanentAddress"
                      onChange={(e) => setPermanentAddress(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State (Required)
                    </label>

                    <input
                      type="text"
                      id="state"
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="processingCharge"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Processing Charge (Required)
                    </label>

                    <input
                      type="text"
                      id="processingCharge"
                      name="processingCharge"
                      onChange={(e) => setProcessingCharge(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="filledBy"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Reference (Required)
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
                      Reference Contact (Required)
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
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="contactForOTP"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact for OTP (Required)
                    </label>

                    <input
                      type="text"
                      id="contactForOTP"
                      name="contactForOTP"
                      onKeyPress={onlyInteger}
                      maxLength={10}
                      onChange={(e) => setContactForOTP(e.target.value)}
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
            <div className="z-10 lg:py-8  relative">
              <div className="flex-col items-center flex ">
                <div className="overflow-y-auto  border border-gray-600 sticky top-60 p-8">
                  <div ref={printRef} className="p-0 m-0">
                    <ApprovalTemplate
                      emi={emi}
                      applicantName={applicantName}
                      fatherName={fatherName}
                      codeNumber={codeNumber}
                      dob={dob}
                      mobileNumber={mobileNumber}
                      imagePath={imagePath}
                      aadhar={aadhar}
                      pan={pan}
                      filledBy={filledBy}
                      agentContact={agentContact}
                      bankName={bankName}
                      bankAccount={bankAccount}
                      bankIFSC={bankIFSC}
                      loanAmount={loanAmount}
                      loanPeriod={loanPeriod}
                      gender={gender}
                      state={state}
                      permanentAddress={permanentAddress}
                      processingCharge={processingCharge}
                      contactForOTP={contactForOTP}
                    ></ApprovalTemplate>
                  </div>
                </div>
                {/* <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mt-8">
                  <button
                    onClick={handleDownloadPdf}
                    className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Print PDF
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Contact;
