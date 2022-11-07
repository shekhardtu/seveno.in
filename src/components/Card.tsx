import type { ReactNode } from 'react';

type ICard = {
  icon: ReactNode;
  title: string;
  bulletPoints: string[];
};

const Card = ({ icon, title, bulletPoints }: ICard) => {
  return (
    <article className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
      <div className="flex items-start">
        <div
          className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">{icon}</div>
        </div>

        <div className="sm:ml-8">
          <div className="text-lg font-medium sm:text-xl text-indigo-500">
            {title}
          </div>

          <div className="mt-1 text-sm text-gray-700">
            <ul className="list-disc pl-4">
              {bulletPoints.map((item: string, index: number): any => {
                return <li key={index}> {item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
