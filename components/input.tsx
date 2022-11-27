import { cls } from '../libs/client/utils';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  name: string;
  type: string;
  requried?: boolean;
  label: string;
  preInput?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({
  name,
  type,
  requried = false,
  label,
  preInput,
  register,
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor="input" className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex rounded-md shadow-sm">
        {preInput ? (
          <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 bg-gray-50 px-3 text-gray-500">
            {preInput}
          </span>
        ) : null}

        <input
          id={name}
          type={type}
          required={requried}
          className={cls(
            'w-full border-gray-300 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500',
            preInput ? 'rounded-r-md' : 'rounded-md'
          )}
          {...register}
          {...rest}
        />
      </div>
    </div>
  );
}
