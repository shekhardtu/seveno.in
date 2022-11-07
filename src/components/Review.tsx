import { useRouter } from 'next/router';

const Review = () => {
  const router = useRouter();
  const reviews = [
    {
      name: 'Saurav Jain',
      img: 'saurav.jpg',
      title: 'Customer | Feb, 2018',
      review:
        'My business loan interest rate  and processing fee was nominal and the loan got sanctioned on proper time .This loan is still active and documents submitted through agent and the loan process was clearly shared by the agent .',
    },
    {
      name: 'Imteyaz',
      img: 'imteyaz.png',
      title: 'Customer | Sep, 2020',
      review:
        'I setup my business with the help of business loan. The process is hassle free. ',
    },
    {
      name: 'Rajesh',
      img: 'rajesh.png',
      title: 'Customer | Aug, 2021',
      review:
        'I applied for personal loan.  They collectively took a call and processed my loan application. I soon plans to get another personal loan. ',
    },

    {
      name: 'Rashmi',
      img: 'rashmi.png',
      title: 'Customer | Feb, 2022',
      review:
        'I applied for home loan. The rate of interest and the processing fee was nominal .This loan was sanctioned on time and i have uploaded the documents through online . The service was excellent according to my concern.',
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
          {reviews.map((reviewer, index) => {
            return (
              <div
                className="mb-8 sm:break-inside-avoid border-2 border-gray-300 rounded p-4"
                key={index}
              >
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    {reviewer.review}
                  </p>
                </blockquote>

                <div className="mt-4 flex items-center gap-4">
                  <img
                    alt={reviewer.name}
                    src={`${router.basePath}/assets/images/${reviewer.img}`}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-medium">{reviewer.name}</p>
                    <p className="mt-1">{reviewer.title}</p>
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
