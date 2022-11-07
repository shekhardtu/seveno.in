import BreadCrumb from '@/components/BreadCrumb';
import Card from '@/components/Card';
import LoanTitle from '@/components/LoanTitle';
import { Main } from '@/templates/Main';

const GurantorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
};
const DocumentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
      />
    </svg>
  );
};
const ValidDocumentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    </svg>
  );
};

const PayslipLoan = () => {
  const documentPoint = [
    '5 Photographs',
    'Address Proof',
    'I.D. Proof',
    '2 Stamp Paper of Rs.50/- in favor of the Applicant.',
    'Bank Statement of last 3 months',
    'File Charge Rs. 3150/-.',
    'Papers of Property (Khasra, Khaitoni, Registry, Bainama).',
  ];
  const gurantorPoints = [
    'Government Guarantor',
    'Guarantor',
    'Property Guarantor',
  ];
  const validIdProofPoints = [
    'PAN Card',
    ' Voter Card',
    'Driving License',
    ' Job Certificate (at present) issued from company in which Applicant Working',
    'College Identity Card Etc.',
  ];
  return (
    <Main>
      <BreadCrumb path="Payslip Loan" />

      <div className="container">
        <LoanTitle title="Payslip Loan" />
      </div>
      <div className="grid grid-cols-2 container my-16 gap-8">
        <div className="grid">
          <Card
            title="Document Required"
            icon={<DocumentIcon />}
            bulletPoints={documentPoint}
          ></Card>
        </div>
        <div className="grid">
          <Card
            title="Type of Guarantor"
            bulletPoints={gurantorPoints}
            icon={<GurantorIcon />}
          ></Card>
        </div>
        <div className="grid col-span-2">
          <Card
            icon={<ValidDocumentIcon />}
            title="Documents Valid as I.D. Proof"
            bulletPoints={validIdProofPoints}
          ></Card>
        </div>
      </div>
    </Main>
  );
};
export default PayslipLoan;
