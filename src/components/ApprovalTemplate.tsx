import { useRouter } from 'next/router';
import type { CSSProperties } from 'react';

type IapprovalTemplate = {
  applicantName: string;
  fatherName: string;
  imagePath: any;
  codeNumber: string;
  mobileNumber: string;

  dob: string;
  aadhar: number;
  pan: string;
  loanAmount: string;
  loanPeriod: string;
  bankName: string;
  bankAccount: string;
  bankIFSC: string;

  gender: string;
  state: string;

  permanentAddress: string;
  processingCharge: string;

  filledBy: string;
  agentContact: string;
  contactForOTP: string;
  emi: string;
};
const ApprovalTemplate = (props: IapprovalTemplate) => {
  const router = useRouter();
  const styles = {
    container: {
      display: 'flex',
      position: 'relative',
      // overflow: 'hidden',
      width: '590px',
      height: '822px',
      fontSize: '10px',
      lineHeight: '1.2em',
    } as CSSProperties,
    contentContainer: {
      fontSize: '10px',
      lineHeight: '1.5em',
      margin: '20px',
      marginTop: '0',
      width: '94%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    } as CSSProperties,

    imgContainer: {
      width: '300px',
    } as CSSProperties,
    img: {
      display: 'block',
      width: '100%',
      height: '100%',
    } as CSSProperties,

    text1Box: {
      display: 'flex',
      color: '#FF0000',
      fontWeight: 'bold',
      justifyContent: 'flex-end',
      marginBottom: '10px',
      width: '100%',
    } as CSSProperties,

    text1: {
      display: 'inline-block',
      color: '#000',
      width: '440px',
      fontWeight: 'bold',
      position: 'relative',
    } as CSSProperties,

    text2: {
      display: 'inline-block',
      color: '#FF0000',
      width: '180px',
      fontWeight: 'bold',
      textAlign: 'right',
      position: 'relative',
    } as CSSProperties,

    formImg: {
      maxWidth: '80px',
      maxHeight: '90px',
      padding: '0',
      right: '0',
      top: '70px',
      position: 'absolute',
    } as CSSProperties,

    formImg2: {
      maxWidth: '50px',
      height: '50px',
      padding: '0',
      right: '-15px',
      zIndex: '9999',
      top: '140px',
      position: 'absolute',
    } as CSSProperties,

    box: {
      display: 'flex',
      flexDirection: 'column',
    } as CSSProperties,
    headerImg: {
      display: 'flex',
      width: '100%',
      height: 'auto',
      padding: '0',
    } as CSSProperties,
    mainBox: {
      display: 'block',
      margin: '15px 0',
      marginTop: '10px',
      verticalAlign: 'bottom',
    } as CSSProperties,
    bold: {
      color: '#8C3B38',
      display: 'contents',
      fontWeight: 700,
      verticalAlign: 'top',
    } as CSSProperties,

    boldBlockFirst: {
      marginLeft: 0,
    } as CSSProperties,
    boldBlock: {
      color: '#5145cc',
      display: 'inline-block',
      fontWeight: 700,
      verticalAlign: 'top',
      margin: '10px 10px 40px 10px',
      padding: 0,
    } as CSSProperties,

    termsList: {
      fontSize: '10px',
      fontWeight: 400,
    } as CSSProperties,
    termsTitle: {
      color: '#FF0000',
      fontSize: '12px',
      margin: '16px 0 2px 0',
      fontWeight: 700,
      display: 'block',
      marginBottom: '20px',
    } as CSSProperties,
    termsLabel: {
      fontSize: '12px',
      borderBottom: '2px solid #999',
      fontWeight: 'bold',
      display: 'inline-block',
      margin: '16px 0 6px 0',
      paddingBottom: '5px',
    } as CSSProperties,
    qrBox: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '16px',
      width: '100%',
      marginBottom: '0',
      padding: '20px 0',
    } as CSSProperties,

    qrImgBox: {
      display: 'flex',
      flexDirection: 'column',
      width: '120px',
    } as CSSProperties,
    qrImg: {
      display: 'flex',
      height: '120px',
      padding: '5px',
      border: '2px solid #888',
    } as CSSProperties,

    footerBox: {
      fontSize: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: '60px',
    } as CSSProperties,
    footerSignature: {
      marginTop: '10px',
      textDecoration: 'underline',
      textTransform: 'uppercase',
      fontWeight: 600,
    } as CSSProperties,

    formBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    } as CSSProperties,

    formData: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '10px',
    } as CSSProperties,
    formLabel: {
      display: 'inline-block',
      width: '240px',
      fontWeight: 'bold',
      paddingBottom: '6px',
      paddingLeft: '10px',
      border: '1px solid #ddd',
    } as CSSProperties,
    formValue: {
      display: 'inline-block',
      border: '1px solid #ddd',
      paddingBottom: '6px',
      paddingLeft: '10px',
      width: '300px',
    } as CSSProperties,
    formImgBox: {
      display: 'flex',
    } as CSSProperties,
  };

  function getCurrentDate(separator = '/') {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  }
  return (
    <section className="relative flex flex-col justify-center m-auto w-full">
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.contentContainer}>
            <div style={styles.text1Box}>
              <div style={styles.text1}>
                To,
                <br />
                Mr./Mrs./Ms. {props.applicantName}
                <br />
                {props.mobileNumber} <br />
                Ref: Your account for loan from Shree Vaishno Finance Services
                Pvt Ltd <br />
                CFN: {props.codeNumber}
                <br />
                Date : {getCurrentDate()}
              </div>
              <div style={styles.text1Box}>
                {props.imagePath && (
                  <img
                    style={styles.formImg}
                    alt="not found"
                    src={URL.createObjectURL(props.imagePath)}
                    className="w-32 h-44 border border-gray-600 p-1"
                  />
                )}
                {props.imagePath && (
                  <img
                    style={styles.formImg2}
                    alt="not found"
                    src={`${router.basePath}/assets/images/stamp.png`}
                  />
                )}
              </div>
            </div>
            <div style={styles.mainBox}>
              Based on your Application no.{' '}
              <div style={styles.bold}>{props.codeNumber} </div>acting under the
              constitution of Shree Vaishno Finance Services Pvt Ltd is pleased
              to provide provisional sanction the loan request submitted by
              Mr./Mrs./Ms. <div style={styles.bold}>{props.applicantName}</div>{' '}
              accepting the terms and conditions for the progress of loan. This
              is in subject to the execution of loan agreement and the other
              documents between ourselves:-
            </div>
            <div style={styles.formBox}>
              <div style={styles.formData}>
                <div>
                  <div style={styles.formLabel}> Date of Application</div>
                  <div style={styles.formValue}> {getCurrentDate()}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Name</div>
                  <div style={styles.formValue}>
                    Mr./Mrs./Ms.{props.applicantName}
                  </div>
                </div>
                <div>
                  <div style={styles.formLabel}> Guardian Name</div>
                  <div style={styles.formValue}>
                    S/o. / D/o{props.fatherName}
                  </div>
                </div>
                <div>
                  <div style={styles.formLabel}> Permanent Address</div>
                  <div style={styles.formValue}> {props.permanentAddress}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Date of Birth</div>
                  <div style={styles.formValue}> {props.dob}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Contact </div>
                  <div style={styles.formValue}> +91 {props.mobileNumber}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Aadhar</div>
                  <div style={styles.formValue}> {props.aadhar}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> PAN No</div>
                  <div style={styles.formValue}> {props.pan}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Loan Amount</div>
                  <div style={styles.formValue}> {props.loanAmount}/-</div>
                </div>

                <div>
                  <div style={styles.formLabel}> Period of Loan</div>
                  <div style={styles.formValue}> {props.loanPeriod} Years</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Rate of Interest</div>
                  <div style={styles.formValue}> 5%</div>
                </div>
                <div>
                  <div style={styles.formLabel}>
                    {' '}
                    Monthly Equated Installment
                  </div>
                  <div style={styles.formValue}> Rs. {props.emi} /-</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Required Guarantor</div>
                  <div style={styles.formValue}> One</div>
                </div>
                <div>
                  <div style={styles.formLabel}>
                    Bank Name & A/C No./ IFSC CODE
                  </div>

                  <div style={styles.formValue}>
                    {props.bankName} / {props.bankAccount} /{props.bankIFSC}
                  </div>
                </div>
                <div>
                  <div style={styles.formLabel}> Gender</div>
                  <div style={styles.formValue}> {props.gender} </div>
                </div>
                <div>
                  <div style={styles.formLabel}> State</div>
                  <div style={styles.formValue}> {props.state} </div>
                </div>
                <div>
                  <div style={styles.formLabel}>
                    Processing Charge + 18% GST{' '}
                  </div>

                  <div style={styles.formValue}> {props.processingCharge} </div>
                </div>
                <div>
                  <div style={styles.formLabel}>
                    {' '}
                    Executive Code, Name & Contact
                  </div>

                  <div style={styles.formValue}>
                    {props.filledBy} / {props.agentContact}{' '}
                  </div>
                </div>
              </div>
              <div style={styles.formImgBox}>
                {props.imagePath && (
                  <img
                    style={styles.formImg}
                    alt="not found"
                    src={URL.createObjectURL(props.imagePath)}
                    className="w-32 h-44 border-2 border-gray-600 p-1"
                  />
                )}
              </div>
            </div>
            <br />
            <div style={styles.mainBox}>
              You are intimated that Rs.{' '}
              <div style={styles.bold}>{`${props.loanAmount}/-`}</div> has been
              approved by the approving committee of the company, after the
              validation of the submitted documents for loan. We are pleased to
              inform you that the company is issuing the offer letter to you so
              that we can further initiate your lone process as early as
              possible. This offer letter is valid for 25 days. Where company
              will keep you are submitted to documents safe only for 30 days,
              otherwise your file will stand closed. Kindly deposit your process
              fees of{' '}
              <div style={styles.bold}>
                1500/- (18.00% Gst Tax Of Agreement Fees) by Bank Demand Draft
                (D.D) in favor of Shree Vaishno Finance Services Pvt Ltd{' '}
              </div>
              for issuing advisory report and to meet other expenses, along with
              required reports as per company terms & conditions Mentioned at
              the end of the letter WITHIN 10 DAYS (TEN DAYS) after receiving
              the offer letter, kindly submit the D.D (demand draft) of
              processing fee failing to which the offer letter will not be
              valid. The advisory reports shall comprise of title, valuation,
              investigation report of property etc. As per line mark on search
              report.
            </div>
            <div style={styles.mainBox}>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>
                  SPECIAL CONDITIONS FOR LOAN (Important Terms & Conditions)
                </div>
                1. Disbursement of loan will be subject to the condition at the
                time of disbursement.
                <br />
                2. Final approval sanction will be issued subject to fulfillment
                of existing terms & conditions of apply. <br />
                3. Only 50% of net salary of govt. guarantor can be treated as
                EMI. <br />
                4. net salary of govt. Guarantor must be doubled from the EMI of
                loanee if salary of govt. Guarantor is less than double the
                amount will be reduced.
                <br />
                5. Advance EMI installment will be recovered from all the
                applicants / lonee if applicant depositing their E. M. I.
                Without bouncing till completion of loan on demand, company can
                provide loan equal to double in future in case a single
                bouncing. This facility will not be applicable to them <br />
                6. Company will accept only those applicant & guarantor whose
                age should be 18 to 60 years. <br />
                7. In case of property guarantor the property of any blood
                relative will not be accepted SC caste guarantor is not
                acceptable. <br />
                8. In case if the document requested by the company is not
                completed by the applicant shall be rejected. <br /> 9. File
                charges of company is Rs.3150/- paid <br />
                10. Property guarantor search report compulsory & all family
                member permission is compulsory. <br />
                11. File fees will not refundable after issuing the offer
                letter.
                <br />
                <br />
                <br />I accept that after verification of my records and my
                guarantors Govt. Records, of any discrepancies traced, I will
                fulfill the same within due course of time. If I cannot complete
                the required terms & conditions/Legal formalities within due
                course of time or paper found fake during investigation, then
                finance company is fully competent to refuse refunding the
                process fees, which has already deposited with the company and I
                will not request to company to refund the process fees in any
                circumstances as the same has been spend during investigation of
                loan case. Except the amount mentioned at page no.1 and no other
                amount is payable to the company, for which I am fully
                responsible if paid to any person.
              </div>
            </div>
            <br></br>

            <div style={styles.mainBox}>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}> QUESTIONAIRE FOR GUARANTOR</div>
                <div style={styles.bold}>
                  GOVERNMENT GUARANTOR [ ] PVT. LTD. GUARANTOR [ ] PROPERTY
                  GUARANTOR [ ]
                </div>
                <br />
                <br />
                <br />
                Name:.................................................................................................................................
                S/o,W/o,D/o:
                ..............................................................
                Date of Birth: ............................... Age:
                ..................... Residence Address:
                .............................................................................
                ............................................................................................................................................
                Office Phone No:
                ................................................. Mobile:
                ............................................... Office/Property
                Address:
                ...................................................................................................
                Department Name
                ..............................................................................................................
                Official Designation/Post
                ............................................... Remaining
                Service Period till
                Retirement:......................................................
                Job Transferble Yes / No: ........................ Willing to
                Fulfil All Legal Requirement for surety of guarantee of loan:
                Yes / No: .......... Previously stood as a surety is given any
                guarantee: Yes / No: ........................................
                Will Your successors agreed with you as have stand as a
                Guarantor for Mr./Mrs./Ms: .................................
                Amount of net carry home salary per month:
                .................................. Distt:
                .................................................... Nagar
                Panchayat: ................................................
                Tehsil: ................................................
                Mohalla:
                .................................................................
                Police station:
                ..........................................Chokee:
                ............................................................
                Check Post: ..................... Pin
                Code:..........................
                <br />
                <br />
                <div style={styles.bold}>Guarantor Require document:-</div>
                <br></br>
                <div style={styles.boldBlock}>5 photo,</div>
                <div style={styles.boldBlock}>Address Proof, </div>
                <div style={styles.boldBlock}> I.D Proof,</div>
                <div style={styles.boldBlock}>7 stamp paper 50-50 Rs/-, </div>
                <div style={styles.boldBlock}>Bank detail,</div> <br />
                Property documents (in case of property guarantor) Last two
                months pay slip & last six months bank statement (in case of
                Govt/pvt.) Last two year statement of I.T.R (in case of I.T.R
                Guarantor )
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={styles.termsTitle}>
                  Important Notice of Shree Vaishno Finance Services PVT LTD
                </div>
              </div>
            </div>
            <div style={styles.mainBox}>
              <ol start={1}>
                <li>
                  {' '}
                  1. Applicant should not deposit money in any of these
                  following working (person lawyer, agent) or else company would
                  not be responsible for it.
                </li>
                <li>
                  {' '}
                  2. After receiving the offer letter you have to submit the
                  process charge fees if not you have to pay for file reopen
                  charge after 10 days.
                </li>
                <li>
                  3. Every signed paper of the offer letter as well as required
                  paper processing fees has to be send to the company
                </li>
                <li>
                  4. The payment of the process fees has to be deposit in
                  company account.
                </li>
                <li>
                  5. Immediately send your personal mobile number to the company
                  so that you may not face any problems during up coming forward
                  proceeding.
                </li>
                <li>
                  6. Immediately send the cash deposit slip at company email
                  I.D- info@seveno.in
                </li>
                <li>
                  7. The process charge should not be returned after the offer
                  letter is ready.
                </li>
                <li>
                  8. Signature or thumb impression is compulsory in every page.
                </li>
              </ol>
              <div style={styles.qrBox}>
                <div style={styles.qrImgBox}>
                  <img
                    style={styles.qrImg}
                    src={`${router.basePath}/assets/images/payment-qr.jpeg`}
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="footer" style={styles.footerBox}>
            <div style={styles.footerSignature}>
              SIGNATURE OF GAURANTER & THUMB-IMPRESSION{' '}
            </div>
            <div style={styles.footerSignature}>
              SIGNATURE OF APPLICANT & THUMB-IMPRESSION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprovalTemplate;
