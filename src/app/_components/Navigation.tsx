import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="w-full h-24 absolute border-b-1 border-b-gray-900 flex items-center px-10 justify-between">
      <Link href={"/"} className="basis-1/6">
        <Image src="/Mylogo.svg" alt="Abdone's Logo" width={164} height={64} />
      </Link>
      <ul className="flex gap-24 h-full items-center flex-1 border-x border-x-gray-900 justify-center">
        <li>
          <Link href={"/about"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>Who am I</Link>
        </li>
        <li>
          <Link href={"/about"}>Featured Projects</Link>
        </li>
      </ul>
      <div className="basis-1/6 flex item-center justify-center">
        <a
          href="adelopoabdullah@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100"
          aria-label="Send an email to Abdone"
        >
          <span>Shoot a mail</span>
          <FaExternalLinkAlt aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
