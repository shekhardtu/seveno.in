import { useRouter } from 'next/router';
import type { CSSProperties } from 'react';

type Iwelcome = {
  applicantName: string;
  fatherName: string;
  mobileNumber: string;
  loanAmount: string;
  loanDuration: string;
  filledBy: string;
  agentContact: string;
  emi: string;
  imagePath: any;
};
const WelcomeTemplate = (props: Iwelcome) => {
  const router = useRouter();
  const styles = {
    container: {
      letterSpacing: 'normal',
      wordSpacing: '0.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'relative',
      // overflow: 'hidden',
      width: '590px',
      margin: '20px 20px',
      marginTop: 0,
      marginBottom: '0',
      height: '652px',
    } as CSSProperties,
    contentContainer: {
      fontSize: '12px',

      margin: '20px',
      width: '94%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    } as CSSProperties,
    contentCard: {
      zIndex: 1,
      backgroundColor: 'black',
    } as CSSProperties,
    title: {
      fontFamily: 'Anton, Anton-Regular',
      fontSize: '1rem',
      color: 'white',
      textAlign: 'center',
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
      textDecoration: 'underline',
      textTransform: 'uppercase',
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
      color: '#8C3B38',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      marginBottom: '10px',
      width: '100%',
    } as CSSProperties,

    text1: {
      display: 'inline-block',
      color: '#8C3B38',
      width: '140px',
      fontWeight: 'bold',
    } as CSSProperties,

    text2: {
      display: 'inline-block',
      color: '#8C3B38',
      width: '140px',
      fontWeight: 'bold',
      textAlign: 'right',
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
      fontSize: '12px',
    } as CSSProperties,
    formLabel: {
      display: 'inline-block',
      width: '140px',
      fontWeight: 'bold',
    } as CSSProperties,
    formValue: {
      display: 'inline-block',
      marginLeft: '10px',
    } as CSSProperties,
    formImgBox: {
      display: 'flex',
    } as CSSProperties,
    formImg: {
      width: '100px',
      height: 'auto',
      padding: '0',
    } as CSSProperties,

    qrBox: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '16px',
      width: '100%',
      marginBottom: '0',
    } as CSSProperties,
    qrImgBoxTitle: {
      display: 'flex',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#8C3B38',
      width: '100%',
      marginBottom: '10px',
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

    qrImgText: {
      display: 'flex',
      fontSize: '10px',
    } as CSSProperties,

    footerBox: {
      display: 'flex',
      fontSize: '12px',
      padding: '20px',
      paddingTop: '0',
      justifyContent: 'space-between',
    } as CSSProperties,
    footerText: {
      display: 'flex',
      flexDirection: 'column',
    } as CSSProperties,
    footerImg: {
      display: 'block',
      height: '80px',
      padding: '5px',
    } as CSSProperties,
    footerSignature: {
      marginTop: '10px',
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
      margin: '20px 0',
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
            <div style={styles.h1Heading}> Congratulations</div>

            <div style={styles.text1Box}>
              <div style={styles.text1}>Dear Sir/ Madam</div>
              <div style={styles.text2}>Date: {getCurrentDate()}</div>
            </div>

            <div style={styles.formBox}>
              <div style={styles.formData}>
                <div>
                  <div style={styles.formLabel}> Applicant Name</div>:
                  <div style={styles.formValue}> {props.applicantName}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Father Name</div>:
                  <div style={styles.formValue}>{props.fatherName}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Loan Amount</div>:
                  <div style={styles.formValue}>{props.loanAmount}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Contact Number</div>:
                  <div style={styles.formValue}> +91-{props.mobileNumber}</div>
                </div>
                <div>
                  <div style={styles.formLabel}> Monthly EMI </div>:
                  <div style={styles.formValue}>
                    {props.emi} (for {props.loanDuration} Years/{' '}
                    {Number(props.loanDuration) * 12} Months){' '}
                  </div>
                </div>
                <div>
                  <div style={styles.formLabel}> Total Charges</div>:
                  <div style={styles.formValue}>3150/-</div>
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

            <p style={styles.mainBox}>
              We have received your documents, these are appropriate docs
              according to our legal adviser. Behalf of your documents by Shree
              Vaishno Finance Services PVT LTD.
              <br />
              <br />
              Your documents are passed by our legal department and now you have
              to pay file charge (Login Charge) for the loan, only in the
              account of our company.
            </p>
            <div style={styles.qrBox}>
              <div style={styles.qrImgBoxTitle}>COMPANY BANK DETAIL:-</div>
              <div style={styles.qrImgBox}>
                <img
                  style={styles.qrImg}
                  src={`${router.basePath}/assets/images/payment-qr.jpeg`}
                  alt=""
                ></img>
              </div>
              <span style={styles.qrImgText}>
                After deposit your file charge you will receive your letter
                within 1-3 days.
              </span>
            </div>
          </div>
          <div className="footer" style={styles.footerBox}>
            <div style={styles.footerText}>
              <div>For Further Query</div>
              <div>Contact to Our Assistant: {props.filledBy}</div>
              <div>Contact No: +91-{props.agentContact}</div>
              <br />
              <br />
              <br />
              <div style={styles.footerSignature}>
                Signature of Lonee.........................
              </div>
            </div>
            <div>
              <img
                style={styles.footerImg}
                src={`${router.basePath}/assets/images/stamp.png`}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTemplate;
