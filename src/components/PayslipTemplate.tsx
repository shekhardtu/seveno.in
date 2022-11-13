import { useRouter } from 'next/router';
import type { CSSProperties } from 'react';

type Iwelcome = {
  applicantName: string;
  totalAmount: string;
  balanceAmount: string;
  paidAmount: string;
  amountInWords: string;
  caseFile: string;
  paymentMode: string;
  invoiceId: string;
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
      color: '#5145cc',
      fontSize: '20px',
      fontWeight: 'bold',
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
      color: '#000',
      backgroundColor: '#fff',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      marginBottom: '10px',
      width: '100%',
      fontSize: '15px',
      padding: '15px',
    } as CSSProperties,

    text1: {
      display: 'inline-block',
      width: '240px',
      fontWeight: 'bold',
    } as CSSProperties,

    text2: {
      display: 'inline-block',
      width: '240px',
      fontWeight: '400',
      textAlign: 'right',
    } as CSSProperties,

    formBox: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: '#5145cc',
      color: '#fff',
      padding: '15px',
      fontSize: '15px',
      marginBottom: '20px',
    } as CSSProperties,

    formData: {
      display: 'flex',
      flexDirection: 'column',
    } as CSSProperties,
    formLabel: {
      display: 'inline-block',
      width: '140px',
      fontWeight: 'bold',
    } as CSSProperties,
    formValue: {
      display: 'inline-block',
    } as CSSProperties,
    formImgBox: {
      display: 'flex',
    } as CSSProperties,
    formImg: {
      width: '100px',
      height: 'auto',
      padding: '0',
    } as CSSProperties,

    text2Box: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '16px',
      width: '100%',
      marginBottom: '20px',
    } as CSSProperties,
    text2Title: {
      display: 'flex',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#5145cc',
      width: '100%',
    } as CSSProperties,

    text2Desc: {
      display: 'flex',
      fontSize: '14px',
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
    normalText: {
      fontWeight: 400,
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
            <div style={styles.h1Heading}> Payment Invoice</div>

            <div style={styles.text1Box}>
              <div style={styles.text1}>
                <div> Bill To</div>
                <div style={styles.normalText}> {props.applicantName} </div>
              </div>
              <div style={styles.text2}>
                <div style={styles.text1}>
                  <div>
                    {' '}
                    Invoice Id:{' '}
                    <span style={styles.normalText}>
                      {' '}
                      {props.invoiceId}
                    </span>{' '}
                  </div>
                </div>
                <div style={styles.text1}>
                  <div>
                    {' '}
                    Invoice Date:{' '}
                    <span style={styles.normalText}>
                      {getCurrentDate()}
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.formBox}>
              <div style={styles.formData}>
                <div style={styles.formLabel}> Total Amount </div>
                <div style={styles.formValue}> {props.totalAmount}</div>
              </div>
              <div style={styles.formData}>
                <div style={styles.formLabel}> Received Amount</div>
                <div style={styles.formValue}>{props.paidAmount}</div>
              </div>
              <div style={styles.formData}>
                <div style={styles.formLabel}> Balance Amount</div>
                <div style={styles.formValue}>{props.balanceAmount}</div>
              </div>
            </div>

            <div style={styles.text2Box}>
              <div style={styles.text2Title}>Amount In Words</div>

              <span style={styles.text2Desc}>{props.amountInWords}</span>
            </div>
            <div style={styles.text2Box}>
              <div style={styles.text2Title}>Payment Mode</div>

              <span style={styles.text2Desc}>{props.paymentMode}</span>
            </div>
            <div style={styles.text2Box}>
              <div style={styles.text2Title}>Description</div>

              <span style={styles.text2Desc}>
                Dear customer, we have received payment of Rs.{' '}
                {props.paidAmount} processing fee for your case file no{' '}
                {props.caseFile}
              </span>
            </div>
          </div>
          <div className="footer" style={styles.footerBox}>
            <div style={styles.footerText}></div>
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
