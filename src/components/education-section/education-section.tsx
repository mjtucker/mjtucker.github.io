import Section from "../section/section";

const EducationSection = ({}: {}) => {
  return (
    <Section title="education">
      <div className="flex flex-row items-center md:justify-center my-4 text-slate-300">
        <div className="flex flex-col md:flex-row whitespace-nowrap md:items-center w-full">
          <div className="flex flex-row w-full items-center">
            <span>Bachelor of Software Engineering</span>
            <span className="block md:hidden ml-2 h-[1px] bg-green-400 w-full"></span>
            <span className="hidden md:block ml-2">{" | "}</span>
          </div>
          <i className="text-slate-400 uppercase text-xs md:ml-2">
            McGill University
          </i>
        </div>
        <span className="hidden md:block ml-2 h-[1px] bg-green-400 w-full"></span>
      </div>
      <ul className="pl-3 text-sm md:text-base mb-4">
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse in est ante. Neque sodales ut etiam sit. Nec feugiat nisl
          pretium fusce id. Risus nullam eget felis eget nunc. Varius quam
          quisque id diam.
        </li>
      </ul>
    </Section>
  );
};

export default EducationSection;
