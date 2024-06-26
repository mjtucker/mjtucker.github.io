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
      <ul className="text-sm md:text-base mb-4">
        <li key="education-1">
          Graduated Decemeber 2020. Some relevant courses taken during my
          undergrad include - Algorithm and Data Structures, Software
          Engineering Requirements, Database Systems, and Telecommunications
          Networks.
          <br />
          <br />
          In my time at McGill I received the Toyota Scholarship in Engineering,
          the Faculty of Engineering Scholarship, and the W.G. McBride
          Scholarship in Engineering - which were all awarded in recognition of
          high academic performance.
        </li>
      </ul>
    </Section>
  );
};

export default EducationSection;
