import type {NextPage} from "next";

const Upload: NextPage = () =>{
    return (
        <div className="px-4 py-16">
        <div>
            <label className="w-full text-gray-600  hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 py-6 h-48 rounded-md">
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
          <label htmlFor="price">Price</label>
          <div className="rounded-md shadow-md relative flex items-center">
            <div className="absolute left-0 pl-3  justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input className="w-full rounded-md pl-7 flex items-center border-gray-300 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500" id="price" type="text" placeholder="0.00" />
            <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>                               
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <textarea className="mt-1 shadow-sm w-full focus:ring-2 focus ring-orange-500 rounded-md border-gray-300" rows={4} />
          </div>
        </div>
        <button className="bg-orange-500 w-full text-white py-2 rounded-md">Upload product</button>
      </div>
    );
}

export default Upload;