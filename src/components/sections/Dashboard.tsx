import { Session } from "next-auth";

interface IDashboard {
  sessionData: Session;
}

export function Dashboard({ sessionData }: IDashboard) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-700 to-black">
      <div className="">{sessionData.user.name}</div>
    </section>
  );
}
