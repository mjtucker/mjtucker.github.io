import Section from "../section/section";

const skillsSections = [
  {
    title: "Languages",
    skills: ["Typescript", "HTML5", "C/C++", "Javascript", "CSS3"],
  },
  {
    title: "Frameworks",
    skills: [
      "React",
      "Sass",
      "Jest",
      "Vue",
      "Tailwind",
      "Google Maps API",
      "Next.js",
      "Boostrap",
      "Mapbox",
      "GraphQL",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Storybook", "Solr", "Prisma", "Figma", "Sitecore", "Jira"],
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
