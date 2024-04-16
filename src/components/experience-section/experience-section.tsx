import Section from "../section/section";

const ExperienceSection = ({}: {}) => {
  return (
    <Section title="experience">
      <div className="flex flex-col md:flex-row md:items-center my-4 text-slate-300">
        <div className="flex flex-row items-center whitespace-nowrap">
          <span>Senior Software Developer | </span>
          <i className="text-slate-400 text-sm ml-1"> Konrad Group</i>
          <div className="inline-block md:hidden ml-2 h-[1px] bg-green-400 w-full"></div>
        </div>
        <span className="hidden md:block mx-2 h-[1px] bg-green-400 w-full"></span>
        <span className="whitespace-nowrap text-xs uppercase pt-1 md:pt-0">
          Jan 2024 - present
        </span>
      </div>
      <ul className="pl-6 text-sm mb-4 list-disc">
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspRisus nullam eget felis eget nunc. Varius quam quisque id diam.
        </li>
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse in est ante. Neque sodales ut etiam sit. Nec feugiat nisl
          pretium
        </li>
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse in est
        </li>
      </ul>
      <div className="flex flex-row items-start text-slate-300">
        <span className="whitespace-nowrap">
          Software Developer I |{" "}
          <i className="text-slate-400 text-sm">Konrad Group</i>
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-4 text-slate-300">
        <div className="flex flex-row items-center whitespace-nowrap">
          <span>Software Developer II | </span>
          <i className="text-slate-400 text-sm ml-1"> Konrad Group</i>
          <div className="inline-block md:hidden ml-2 h-[1px] bg-green-400 w-full"></div>
        </div>
        <span className="hidden md:block mx-2 h-[1px] bg-green-400 w-full"></span>
        <span className="whitespace-nowrap text-xs uppercase pt-1 md:pt-0">
          Jul 2021 - Jan 2024
        </span>
      </div>
      <ul className="pl-6 text-sm mb-4 list-disc">
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse in est ante. Neque sodales ut etiam sit. Nec feugiat nisl
          pretium fusce id.
        </li>
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse in est ante. Neque sodales ut etiam sit. Nec feugiat nisl
          pretium fusce id. Risus nullam eget felis eget nunc. Varius quam
          quisque id diam.
        </li>
      </ul>
      <div className="flex flex-col md:flex-row md:items-center mb-4 text-slate-300">
        <div className="flex flex-row items-center whitespace-nowrap">
          <span>Associate Software Developer | </span>
          <i className="text-slate-400 text-sm ml-1"> Konrad Group</i>
          <div className="inline-block md:hidden ml-2 h-[1px] bg-green-400 w-full"></div>
        </div>
        <span className="hidden md:block mx-2 h-[1px] bg-green-400 w-full"></span>
        <span className="whitespace-nowrap text-xs uppercase pt-1 md:pt-0">
          Jan 2021 - Jul 2021
        </span>
      </div>
      <ul className="pl-6 text-sm mb-4 list-disc">
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse in est ante. Neque sodales ut etiam sit. Nec feugiat nisl
          pretium fusce id. Risus nullam eget felis eget nunc. Varius quam
          quisque id diam.
        </li>
        <li>
          dictumst. Dictum at tempor commodo ullamcorper. Vulputate dignissim
          suspendisse
        </li>
      </ul>
    </Section>
  );
};

export default ExperienceSection;
