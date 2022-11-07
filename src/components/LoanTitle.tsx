type ILoanTitle = {
  title: string;
};

const LoanTitle = (props: ILoanTitle) => {
  return (
    <section className="flex mt-16 mx-auto justify-center">
      <div className="flex flex-col justify-center text-3xl text-indigo-600">
        Documents required for {props.title}
      </div>
    </section>
  );
};

export default LoanTitle;
