import BreadCrumb from '@/components/BreadCrumb';
import PaymentQR from '@/components/PaymentQR';
import { Main } from '@/templates/Main';

const Payment = () => {
  return (
    <Main>
      <BreadCrumb path="Payment" />

      <PaymentQR />

      {/* <ContactUs /> */}
    </Main>
  );
};

export default Payment;
