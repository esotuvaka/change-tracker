import { signOut } from "next-auth/react";

export function Navbar() {
  return (
    <>
      <header className="absolute flex h-[10vh] w-full items-center bg-gradient-to-t from-transparent to-black">
        <div className="mx-auto flex w-4/5 justify-between rounded-md bg-neutral-700 px-4">
          <div>Home</div>
          <div className="flex gap-4">
            <div>Issues</div>
            <div>Changes</div>
            <div>Closed</div>
          </div>
          <div className="hover:cursor-pointer" onClick={() => void signOut()}>
            Logout
          </div>
        </div>
      </header>
    </>
  );
}
