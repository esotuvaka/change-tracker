import { signOut } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      <header className="absolute flex h-[10vh] w-full items-center bg-gradient-to-t from-transparent to-black">
        <div className="mx-auto flex w-4/5 justify-between rounded-md bg-neutral-700/70 py-2 px-4 text-xl text-white ring-1 ring-white">
          <Link
            href="/"
            className="border-1 border-b border-b-transparent transition-all duration-300 hover:cursor-pointer hover:border-b-white"
          >
            HOME
          </Link>
          <ul className="flex gap-16">
            <Link
              href="/issues"
              className="border-1 border-b border-b-transparent transition-all duration-300 hover:cursor-pointer hover:border-b-white"
            >
              ISSUES
            </Link>
            <Link
              href="/changes"
              className="border-1 border-b border-b-transparent transition-all duration-300 hover:cursor-pointer hover:border-b-white"
            >
              CHANGES
            </Link>
            <Link
              href="/solved"
              className="border-1 border-b border-b-transparent transition-all duration-300 hover:cursor-pointer hover:border-b-white"
            >
              SOLVED
            </Link>
          </ul>

          <Link
            href="/"
            className="border-1 border-b border-b-transparent transition-all duration-300 hover:cursor-pointer hover:border-b-white"
            onClick={() => void signOut()}
          >
            LOGOUT
          </Link>
        </div>
      </header>
    </>
  );
}
