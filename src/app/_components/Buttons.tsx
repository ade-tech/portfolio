import Link from "next/link";

interface buttonProps {
  type?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  buttonContent: string;
  to: string;
}

const primary = "bg-white  rounded-full text-black";
const secondary =
  "bg-transparent text-white border-2 border-gray-300 rounded-full";
const sm = "text-md px-4 py-3";
const md = "text-xl font-bold px-6 py-4";
const lg = "text-2xl font-bold px-8 py-7";
export default function Buttons({
  type = "primary",
  to,
  buttonContent,
  size = "sm",
}: buttonProps) {
  return (
    <Link
      href={to}
      className={`${type === "primary" ? primary : secondary} ${
        size === "sm" ? sm : size === "md" ? md : lg
      }`}
    >
      {buttonContent}
    </Link>
  );
}
