import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

import JoiningTemplate from '@/components/JoiningTemplate';
import { Main } from '@/templates/Main';

const Contact = () => {
  const printRef = useRef<any>(null);
  const router = useRouter();
  const [applicantName, setApplicantName]: [any, any] = useState('Raju');
  const [post, setPost]: [any, any] = useState('Manager');
  const [fatherName, setFatherName]: [any, any] = useState('Kumar');

  const [mobileNumber, setMobileNumber]: [any, any] = useState('8899832389');
  const [minimumTarget, setMinimumTarget]: [any, any] = useState('1');
  const [maximumTarget, setMaximumTarget]: [any, any] = useState('5');
  const [incentive, setIncentive]: [any, any] = useState(20);
  const [salary, setSalary]: [any, any] = useState(20000);
  const [codeNumber, setCodeNumber]: [any, any] = useState('BBS 790');

  const [filledBy, setFilledBy]: [any, any] = useState('Rahul');
  const [agentContact, setAgentContact]: [any, any] = useState('8899832389');

  const [imagePath, setImagePath]: [any, any] = useState(null);
  const [addressLine1, setAddressLine1]: [any, any] = useState('Gokal Puri');
  const [addressLine2, setAddressLine2]: [any, any] = useState('Delhi 110094');
  const [location, setLocation]: [any, any] = useState('Mumbai');

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
          pdf.setTextColor(150);
          pdf.text(
            `Page ${i} of ${totalPages}`,
            pdf.internal.pageSize.getWidth() - 100,
            pdf.internal.pageSize.getHeight() - 30
          );

          pdf.addImage(img, 'png', 50, 0, 554, 182);
          addWaterMark(pdf);
        }
        pdf.save('joiningLetter');
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
                  Joining Form
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
                      htmlFor="post"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Post (Required)
                    </label>

                    <input
                      type="text"
                      id="post"
                      name="post"
                      onChange={(e) => setPost(e.target.value)}
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

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="minimumTarget"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Minimum Target (Required)
                    </label>

                    <input
                      type="text"
                      id="minimumTarget"
                      name="minimumTarget"
                      onChange={(e) => setMinimumTarget(e.target.value)}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="maximumTarget"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Maximum Target (Required)
                    </label>

                    <input
                      type="text"
                      id="maximumTarget"
                      name="maximumTarget"
                      onChange={(e) => setMaximumTarget(e.target.value)}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="incentive"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Incentive (Required)
                    </label>

                    <input
                      type="text"
                      id="incentive"
                      name="incentive"
                      onChange={(e) => setIncentive(e.target.value)}
                      onKeyPress={onlyInteger}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location (Required)
                    </label>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={onlyAlphabets}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
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
                    <label
                      htmlFor="salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salary (Required)
                    </label>

                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      onChange={(e) => setSalary(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm"
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
                      htmlFor="addressLine1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address line 1 (Required)
                    </label>

                    <input
                      type="text"
                      id="addressLine1"
                      name="addressLine1"
                      onChange={(e) => setAddressLine1(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 ">
                    <label
                      htmlFor="addressLine2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address line 2 (Required)
                    </label>

                    <input
                      type="text"
                      id="addressLine2"
                      name="addressLine2"
                      onChange={(e) => setAddressLine2(e.target.value)}
                      className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-sm capitalize"
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
                    <JoiningTemplate
                      applicantName={applicantName}
                      fatherName={fatherName}
                      post={post}
                      mobileNumber={mobileNumber}
                      mininmumTarget={minimumTarget}
                      maximumTarget={maximumTarget}
                      filledBy={filledBy}
                      agentContact={agentContact}
                      imagePath={imagePath}
                      incentive={incentive}
                      salary={salary}
                      location={location}
                      addressLine1={addressLine1}
                      addressLine2={addressLine2}
                      codeNumber={codeNumber}
                    ></JoiningTemplate>
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
