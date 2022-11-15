interface ItemProps {
    title: string;
    subtitle: string;
    price: number;
    heart: number;
    reply: number;
}

export default function Item({title="", subtitle="", price=0, heart=0, reply=0}:ItemProps){
    return (<div
        className="flex cursor-pointer justify-between border-b px-4 pb-4 "
      >
        <div className="flex space-x-4">
          <div className="h-20 w-20 rounded-md bg-gray-400" />
          <div className="flex flex-col pt-2">
            <h3 className="text-sm font-medium text-gray-900">
              {title}
            </h3>
            <span className="text-xs text-gray-500">{subtitle}</span>
            <span className="mt-1 font-medium">${price}</span>
          </div>
        </div>
        <div className="flex flex-row items-end space-x-3">
          <div className="flex flex-row items-center space-x-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{heart}</span>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>{reply}</span>
          </div>
        </div>
      </div>)
}