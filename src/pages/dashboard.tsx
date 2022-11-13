import Link from 'next/link';

import { Main } from '@/templates/Main';

const Dashboard = () => {
  return (
    <Main>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between">
        <div className="flex col-span-1 justify-center items-center p-8 border-r border-b border-gray-400 ">
          <Link href="/welcome"> Welcome Letter</Link>
        </div>
        <div className="flex col-span-1 justify-center items-center border-r border-gray-400 p-8 border-b ">
          {' '}
          <Link href="/approval">Approval Letter</Link>
        </div>
        <div className="flex col-span-1 justify-center border-b border-r  border-gray-400 items-center p-8">
          {' '}
          <Link href="/joining">Joining Letter</Link>
        </div>
        <div className="flex col-span-1 justify-center border-b border-r  border-gray-400 items-center p-8">
          {' '}
          <Link href="/id-card">ID Card</Link>
        </div>
        <div className="flex col-span-1 justify-center border-b border-r  border-gray-400 items-center p-8">
          {' '}
          <Link href="/paylip">Payment Slip</Link>
        </div>
        <div className="flex col-span-1 justify-center border-b border-r  border-gray-400 items-center p-8">
          <Link href="/"> Home</Link>
        </div>
      </div>
    </Main>
  );
};

export default Dashboard;
