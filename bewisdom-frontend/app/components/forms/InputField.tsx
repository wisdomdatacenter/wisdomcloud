import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
