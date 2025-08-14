import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="z-[100] w-full h-24 fixed top-0 border-b-1 border-b-gray-800 flex items-center  justify-between bg-black/1 backdrop-blur-sm">
      <Link href={"/"} className="basis-1/6 pl-10">
        <Image src="/Mylogo.svg" alt="Abdone's Logo" width={164} height={64} />
      </Link>
      <ul className="flex gap-24 h-full items-center flex-1 border-x border-x-gray-800 justify-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>Who am I</Link>
        </li>
        <li>
          <Link href={"/projects"}>Featured Projects</Link>
        </li>
      </ul>
      <a
        className="basis-1/6 flex items-center justify-center gap-2"
        href="mailto:adelopoabdullah@gmail.com"
        aria-label="Send an email to Abdone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Get In touch</span>
        <FaExternalLinkAlt aria-hidden="true" className="mb-2" />
      </a>
    </nav>
  );
}
