import { useRouter } from 'next/router';
import type { CSSProperties } from 'react';

type Iwelcome = {
  applicantName: string;
  fatherName: string;
  post: string;
  salary: number;
  mininmumTarget: string;
  maximumTarget: string;
  mobileNumber: string;
  location: string;
  incentive: string;
  filledBy: string;
  agentContact: string;
  imagePath: any;
  addressLine1: string;
  addressLine2: string;
  codeNumber: string;
};
const JoiningTemplate = (props: Iwelcome) => {
  const router = useRouter();
  const styles = {
    container: {
      letterSpacing: 'normal',
      wordSpacing: '0.1rem',
      display: 'flex',
      position: 'relative',
      // overflow: 'hidden',
      width: '590px',
      height: '822px',
    } as CSSProperties,
    contentContainer: {
      fontSize: '12px',

      margin: '20px',

      marginTop: '-40px',
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
    h1Heading: {
      color: '#8C3B38',
      fontSize: '20px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textDecoration: 'underline',
      padding: '15px',
      paddingTop: '0',
      width: '446px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    } as CSSProperties,

    text1Box: {
      display: 'flex',
      color: '#000',
      fontWeight: 'bold',
      justifyContent: 'flex-end',
      marginBottom: '10px',
      width: '100%',
    } as CSSProperties,

    text1: {
      display: 'inline-block',
      color: '#000',
      width: '340px',
      fontWeight: 'bold',
      position: 'relative',
    } as CSSProperties,

    text2: {
      display: 'inline-block',
      color: '#5145cc',
      width: '180px',
      fontWeight: 'bold',
      textAlign: 'right',
      position: 'relative',
    } as CSSProperties,

    formImg: {
      maxWidth: '60px',
      maxHeight: '70px',
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
      top: '120px',
      position: 'absolute',
    } as CSSProperties,

    footerBox: {
      display: 'flex',
      fontSize: '12px',
      padding: '20px',
      paddingTop: '0',
      justifyContent: 'space-between',
      marginTop: '40px',
      position: 'relative',
    } as CSSProperties,
    footerText: {
      display: 'flex',
      flexDirection: 'column',
    } as CSSProperties,
    footerImg: {
      display: 'block',
      height: '80px',
      padding: '5px',
      position: 'absolute',
      left: '40px',
      top: '-60px',
    } as CSSProperties,
    footerSignature: {
      marginTop: '10px',
      textDecoration: 'underline',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '12px',
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
      lineHeight: '1.4rem',
      margin: '20px 0',
      verticalAlign: 'bottom',
    } as CSSProperties,
    bold: {
      color: '#8C3B38',
      display: 'contents',
      fontWeight: 700,
      verticalAlign: 'top',
    } as CSSProperties,

    termsList: {
      fontSize: '12px',
      fontWeight: 400,
    } as CSSProperties,
    termsTitle: {
      fontSize: '14px',
      margin: '16px 0 2px 0',
      fontWeight: 700,
    } as CSSProperties,
    termsLabel: {
      fontSize: '14px',
      borderBottom: '2px solid #999',
      fontWeight: 'bold',
      display: 'inline-block',
      margin: '16px 0 6px 0',
      paddingBottom: '5px',
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
      {/* <div style={styles.coverBg}></div> */}

      {/* <img alt="" src={`${router.basePath}/assets/images/banner.jpg`} /> */}
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.contentContainer}>
            <div style={styles.h1Heading}>JOINING LETTER</div>

            <div style={styles.text1Box}>
              <div style={styles.text1}>
                To,
                <br />
                Mr. {props.applicantName} S/o Mr. {props.fatherName}
                <br />
                {props.addressLine1} <br />
                {props.addressLine2}
                <br />
                +91-{props.mobileNumber}
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

                <div style={styles.text2}>Code No. {props.codeNumber}</div>
              </div>
            </div>

            <div style={styles.mainBox}>
              We are pleased to appoint you in our organization as
              <span style={styles.bold}> {props.post} </span>
              AGENT GRADE: Shree Vaishno Finance Services PVT LTD w.e.f.
              <div style={styles.bold}>{getCurrentDate()} </div>on the Following
              Terms & Conditions:
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>Annual compensation:</div>
                Your Annual compensation package (approx.) will be{' '}
                <div style={styles.bold}>
                  ON SALARY BASIS Rs. {props.salary}/- + {props.mininmumTarget}{' '}
                  to {props.maximumTarget} FILE PER MONTH ({props.incentive}% OF
                  INCENTIVE OF LOAN AMOUNT AFTER DISBURSEMENT) with T.A. & D.A.
                  Rs. 2500/-.
                </div>{' '}
                subjects to deductions as per Govt. rules and any other Govt.
                taxes and Levis as may be applicable.{' '}
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}> Location: </div>
                Your initial place of position will be our
                <div style={styles.bold}> {props.location} </div>
                office However the organization reserve the right to transfer
                you at any other office/branch, subsidiary or association
                Company of the organization in India that is in existence or may
                come into existence at a future date. On your transfer you will
                governed by the company rule applicable to the establishment to
                which you are posted.
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>
                  Duties and responsibilities:{' '}
                </div>
                A. The Company will expect you to work with a high standard of
                integrity, initiative, efficiency and economy. <br />
                B. You will devote your entire time and attention to the work of
                the company and will not undertake any direct/indirect business
                or work honory or remunerative expect with the written
                permission of the management in each case, contravention of this
                will lead to the termination of your service without any notice
                or any compensation in lieu of such notice. <br />
                C. You shall not seek membership of any local or public bodies
                without obtaining written permission form
                <br />
                management by words of month or otherwise, or deals of the
                company system of working, technical Know how, security
                arrangement and/or organization matters of a confidential/secret
                nature, which may be
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}> Past Records: </div>
                privileging to know by to virtue of your being the company
                employee. D. You shall keep confidential all the information and
                material provide to you by the company or by its clients
                concerning their affairs in order to enable to company to
                perform the service, this also includes such information as is
                already known which also, you will not release, use or disclose
                expect with the prior written permission of the company, your
                obligation to keep such formation confidential shall remain even
                after termination after cancellation of this employment.{' '}
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}> Probationary Period: </div>
                Your appointment shall be for the period of six month on
                probation, at the end of which the decision will be taken by the
                organization to extent/termination your tenure, the extension if
                Permissible will be at same salary unless otherwise specified.
                The decision of the company so taken Shall & binding on you. It
                may be clearly noted that company will need at least 15 days
                salary in lieu. Thereof, in case you wish to leave the company
                during the tenure of notice period, The company Reserves the
                right to terminate your services by giving you a 24 hours
                notice. Secrecy You will be required to act in the best interest
                of the organization always. You shall not discuss, Divulge, or
                make public to any person/Third party at any time during your
                services with the Organization or there after any information,
                truncation, Secrets, relating to business of the Company. Which
                may come within your possession in the courses of work.
                Alternate Employment During the period of services with
                organization you will not accept or perform any Part-time or
                other work for remuneration without obtain prior sanction the
                organization.
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>Leave: </div>
                In case of any leave taken under unfrozen circumstances, for
                which prior approval was not taken Obtained immediate
                information will be required to be sent. In case if you fail to
                do so, Management will have the right to take the action against
                you as per company rule.
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}> Increment: </div>
                Your increment and prospects in the company shall entirely
                depend on your appraisal depends on Efficiency Hard work and
                regularity in attendance, sincerity, good Conduct companyâ€TMs
                performance And such other relevant factors as adjudged by the
                management. I appreciate your willingness to serve in this
                position, and I am confident that your time will be spent In a
                manner to improve the state business of Delhi(city name){' '}
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>Reference Checks: </div>
                Your appointmwnt will be subject to the organization receiving
                sartisfactory refrences, Please furnish the name of the
                references, who have supervised you in a professional capacity
                at some stage in your professional career. Not with standing
                anything contained in the avobe paragraphs, your services may be
                terminated by the organization if you are found to be indulging
                in a cuts of commission / omission which may be prejudicial to
                the interest of the organization, or any act of dishonesty ,
                disobedience, insubordination are any other misconduct or
                neglect of duty or incompetence in the discharge of duty on your
                part.
                <br />
                If any declaration given or furnished by you to the company
                proves to be false or if you are found to have will fully
                surpressed any material information in such case you will be
                liable to removal from without any notice.
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>
                  Consequence of breach of Terms:
                </div>
                Not with standing anything contained in this letter, should you
                contravene or breach any of the foregoing, the company will be
                entitled to terminate your service forthwith without
                compensation, notice period or salary in lieu thereof and
                without prejudice to other legal rights/remedies available to
                the company. However, no notice would be required to be given by
                the management in case the employee has concealed/suppressed
                information or is found guilty of gross indiscipline, fraud,
                misappropriation or acting against the interest of the office.{' '}
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}> General: </div>
                You are required to submit the following documents, if you have
                not submitted the same earlier: <br />
                a.Clariification in support of your education, experince, date
                of birth and other testimonials in together with copied thereof.
                b. Two copied of your recent passport size colored photographs.
                c. Two copied of postcard size colored photographed, if entitled
                for E.S.I. benefit. d. Relieving letter from your last employer
                in case you were employed. I case of leaving the company, you
                will return to the company all papers/ documents or any other
                item belonging to the company.
              </div>
              <div style={styles.termsList}>
                <div style={styles.termsTitle}>Relieving:</div>
                Any changes in your status of residential address should be
                notified in writing to the company. We welcome you to Shalimar
                Finance Pvt Ltd Change of Address: And look forward to having a
                long and mutually beneficial association with you.
              </div>
              <div style={styles.termsList}>
                I have read and understood the above terms and conditions of the
                appointment letter and hereby give my acceptance to the same.
              </div>
            </div>
          </div>
          <div className="footer" style={styles.footerBox}>
            <div style={styles.footerText}>
              <div className="font-bold">Authorized Signatory</div>
              <div className="font-bold mb-8">
                Shree Vaishno Finance Services PVT LTD
              </div>
              <div className="text-indigo-600">
                Working Under: {props.filledBy}
              </div>
              <div className="text-indigo-600">
                Contact No: +91-{props.agentContact}
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div style={styles.footerSignature}>
                SIGNATURE AND THUMB IMPRESSION
              </div>
            </div>
            <div>
              <img
                style={styles.footerImg}
                alt="not found"
                src={`${router.basePath}/assets/images/stamp.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoiningTemplate;
