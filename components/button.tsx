import { cls } from '@libs/client/utils';

interface buttonProps {
  text: string;
  width?: string;
}
export default function Button({ text, width = '100%' }: buttonProps) {
  return (
    <button
      className={cls(
        'mt-5 rounded-md bg-orange-500 py-3 font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
        `w-[${width}]`
      )}
    >
      {text}
    </button>
  );
}
