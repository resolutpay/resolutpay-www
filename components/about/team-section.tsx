import Link from "next/link";

const TeamSection = ({ teams }: { teams: { name: string; portfolio: string }[] }) => {
  return (
    <section className="">
      <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl text-center">Team</h1>
      <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 md:gap-x-[152px] gap-y-14 mt-8 md:mt-10 lg:mt-[89px] px-5">
        {teams.map((person, index) => {
          return (
            <div key={index}>
              <div className="rounded-full bg-primary-700 size-40  lg:size-56 mx-auto">
                {/* TODO: add user image */}
              </div>
              <h5 className="mt-6 font-medium text-2xl text-center text-primary-900">
                {person.name}
              </h5>
              <div className="mx-auto w-fit mt-2.5 ">
                <Link
                  href={person.portfolio}
                  className="text-xl text-center text-feminine-gray"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
