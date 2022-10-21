import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="flex h-48  w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 py-6 text-gray-600 hover:border-orange-500 hover:text-orange-500">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <div className="relative flex items-center rounded-md shadow-md">
          <input
            id="name"
            className="flex w-full items-center rounded-md border-gray-300 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="text"
          />
        </div>

        <label htmlFor="price">Price</label>
        <div className="relative flex items-center rounded-md shadow-md">
          <div className="pointer-events-none absolute left-0  justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            className="flex w-full items-center rounded-md border-gray-300 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="pointer-events-none absolute right-0 flex items-center pr-3">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <textarea
            className="focus mt-1 w-full rounded-md border-gray-300 shadow-sm ring-orange-500 focus:ring-2"
            rows={4}
          />
        </div>
      </div>
      <button className="w-full rounded-md bg-orange-500 py-2 text-white">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
