import { useRouter } from 'next/router';

const PaymentQR = () => {
  const router = useRouter();
  return (
    <section className="rounded-3xl shadow-2xl w-11/12 lg:w-1/2 flex my-16 mx-auto">
      <div className="flex justify-center">
        <div className="p-8 text-center sm:p-12 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Pay Now
          </p>

          <h2 className="my-6 text-base font-semibold">
            Please Note that we only charge from our customers for file charge
            and processing Fee. So be carefull and pay only company accounts.
          </h2>

          <div className="flex justify-center">
            <img
              className="border-indigo-600 border-4 rounded p-4 w-80"
              src={`${router.basePath}/assets/images/payment-qr.jpeg`}
              alt="QR code"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentQR;
