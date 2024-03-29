import type { NextPage } from 'next';
import FloatingButton from '@components/floating-button';
import Item from '@components/item';
import Layout from '@components/layout';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            title="title"
            subtitle="subtitle"
            price={95}
            heart={0}
            reply={20}
            key={i}
          />
        ))}
        <Link href="/items/upload">
          <button className="fixed bottom-24 right-5 rounded-full bg-orange-400 p-4 text-white shadow-xl hover:bg-orange-500">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
