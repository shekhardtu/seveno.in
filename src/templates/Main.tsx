import type { ReactNode } from 'react';

import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ScrollButton from '@/components/ScrollButton';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <div className="w-full  text-gray-700 antialiased ">
        <ContactInfo />
        <Nav />
        <div className="w-full mx-auto">
          <div className=" text-xl">{props.children}</div>
        </div>
        <div className="border-t border-gray-300 py-8 text-center text-sm"></div>
        <Footer />
        <ScrollButton />
      </div>
    </>
  );
};

export { Main };
