import { useRouter } from 'next/router';

const WorkCulture = () => {
  const router = useRouter();
  return (
    <section className="border-t border-gray-400 clear-both overflow-hidden">
      <div className="lg:grid  lg:grid-cols-12">
        <main
          aria-label="Main"
          className="flex flex-col  justify-center sm:px-0 lg:col-span-7 lg:py-10 lg:px-16 xl:col-span-6"
        >
          <div className="flex justify-start lg:relative lg:block lg:py-2 text-indigo-600">
            <div className=" uppercase text-sm font-bold text-orange-400 mb-4">
              Our Philosophy
            </div>
            <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl">
              We Always Try to be the Best Support to Our Clients as Possible
            </h2>

            <p className="leading-relaxed">
              Our statistics and history records are very clear and positive.
            </p>
          </div>
          <div className="max-w-xl lg:max-w-3xl py-10">
            <div className="group">
              <div className="text-base flex justify-between">
                <div className="flex">Satisfied Customer</div>
                <div className="flex mr-5">99%</div>
              </div>
              <div className="h-3 relative max-w-xl  overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-indigo-600 absolute "
                  style={{ width: '99%' }}
                ></div>
              </div>
            </div>
            <div className="group my-16">
              <div className="text-base flex justify-between">
                <div className="flex">10 Years Experience</div>
                <div className="flex mr-5">10%</div>
              </div>
              <div className="h-3 relative max-w-xl  overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-indigo-600 absolute "
                  style={{ width: '10%' }}
                ></div>
              </div>
            </div>
            <div className="group">
              <div className="text-base flex justify-between">
                <div className="flex">Success Rate</div>
                <div className="flex mr-5">80%</div>
              </div>
              <div className="h-3 relative max-w-xl  overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-indigo-600 absolute "
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>
        </main>
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={`${router.basePath}/assets/images/work-culture.jpeg`}
            className="h-full absolute inset-0 w-full object-cover opacity-80"
          />
        </section>
      </div>
    </section>
  );
};

export default WorkCulture;
