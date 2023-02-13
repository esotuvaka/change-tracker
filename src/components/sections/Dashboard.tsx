import { Session } from "next-auth";

interface IDashboard {
  sessionData: Session;
}

export function Dashboard({ sessionData }: IDashboard) {
  return (
    <section className="flex min-h-screen flex-col bg-gradient-to-b from-neutral-700 to-black pt-[10vh]">
      <div className="mx-auto h-[90vh] w-4/5 text-white">
        <div className="text-5xl">{sessionData.user.name}</div>
        <div className="mt-8 text-xl">
          <div className="">Issues opened: </div>
          <div className="">Changes made: </div>
          <div className="">Issues solved: </div>
        </div>
      </div>
    </section>
  );
}
