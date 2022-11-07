import BreadCrumb from '@/components/BreadCrumb';
import ContactUs from '@/components/ContactUs';
import { Main } from '@/templates/Main';

const TermsAndCondition = () => {
  // const bannerSide = isTerms ? props.terms;
  const terms = [
    'Disbursement of loan will be subject to the condition at the time of disbursement.',
    'Final approval sanction will be issued subject to fulfillment of existing terms & conditions of apply.',
    'Only 50% of net salary of govt. guarantor can be treated as EMI.',
    'Net salary of govt. Guarantor must be doubled from the EMI of loanee if salary of govt. Guarantor is less than double the amount will be reduced.',
    'Advance EMI installment will be recovered from all the applicants lonee if applicant depositing their E.M.I.Without bouncing till completion of loan on demand, company can provide loan equal to double in future in case a single bouncing.This facility will not be applicable to them.',
    'Company will accept only those applicant & amp; guarantor whose age should be 18 to 60 years.',
    'In case of property guarantor the property of any blood relative will not be accepted SC caste guarantor is not acceptable. ',
    'In case if the document requested by the company is not completed by the applicant shall be rejected.',
    'Property guarantor search report compulsory & amp; all family member permission is compulsory. File fees will not refundable after issuing the offer letter.',
  ];
  return (
    <Main>
      <BreadCrumb path="Terms and Condition" />
      <ContactUs>
        <section className="relative flex flex-col text-base lg:col-span-5 lg:h-full xl:col-span-6 border-r border-gray-400 ">
          {terms.length > 0}
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-4 text-indigo-600 pl-10 mt-14">
            {' '}
            Terms &amp; Conditions
          </h2>
          <ul className="list-disc px-14 mb-10 mt-4">
            {terms.map((items: any, index: any) => {
              return (
                <li key={index} className="mb-2">
                  {items}
                </li>
              );
            })}
          </ul>
        </section>
      </ContactUs>
    </Main>
  );
};

export default TermsAndCondition;
