const Review = () => {
  const reviews = [
    {
      name: 'Rajesh',
      img: '',
      title: 'Customer | Aug, 2021',
      review:
        'I applied for personal loan.  They collectively took a call and processed my loan application. I soon plans to get another personal loan. ',
    },
    {
      name: 'Imteyaz',
      img: '',
      title: 'Customer | Sep, 2022',
      review:
        'I setup my business with the help of business loan. The process is hassle free. ',
    },
    {
      name: 'Rashmi',
      img: '',
      title: 'Customer | Feb, 2022',
      review:
        'I applied for personal loan.  They collectively took a call and processed my loan application. I soon plans to get another personal loan. ',
    },
  ];
  return (
    <section className="border-t border-gray-400 pt-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <p className="text-gray-600 mx-auto mt-4 max-w-lg">
          Our reviews reflect that our dedication towards customer satisfaction
          is our utmost priority.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviews.map((items, index) => {
            return (
              <div
                className="mb-8 sm:break-inside-avoid border-2 border-gray-300 rounded p-4"
                key={index}
              >
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    {items.review}
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt="Woman"
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">{items.name}</p>
                    <p className="mt-1">{items.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
