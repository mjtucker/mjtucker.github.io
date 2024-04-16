import Section from "../section/section";

const skillsSections = [
  {
    title: "Languages",
    skills: [
      "Typescript",
      "Javascript",
      "HTML",
      "CSS",
      "Sass",
      "GraphQL",
      "C/C++",
    ],
  },
  {
    title: "Frameworks",
    skills: ["React", "NextJS", "Tailwind", "Vue", "Jest"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Storybook",
      "Bit",
      "Figma",
      "Prisma",
      "Google Maps API/Mapbox",
      "Jira",
    ],
  },
];

const listClasses =
  "grid grid-cols-2 md:grid-cols-3 pl-6 text-sm md:text-base mb-4 list-disc";

const SkillsSection = ({}: {}) => {
  return (
    <Section title="skills">
      {skillsSections.map((section) => (
        <>
          <div className="flex flex-row items-center my-4 text-slate-300">
            <span className="whitespace-nowrap">{section.title}</span>
            <span className="ml-2 block h-[1px] bg-green-400 w-full"></span>
          </div>
          <ul className={listClasses}>
            {section.skills.map((skill, index) => (
              <li key={`${section.title}-skill-${index}`}>{skill}</li>
            ))}
          </ul>
        </>
      ))}
    </Section>
  );
};

export default SkillsSection;
