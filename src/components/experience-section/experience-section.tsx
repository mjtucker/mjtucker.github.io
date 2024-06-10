import Section from "../section/section";

const firstSection = [
  `Provided leadership within project teams through peer mentorship and
knowledge transfers, and by spearheading the creation of team
development processes and standards in code quality, test coverage,
and documentation writing`,
  `Led internal company power hours for 100+ employees to educate and
provide resources regarding current digital mapping technologies and
trends, used for project training and guidance`,
  `Conducted technical interviews with prospective entry-to-mid level
developer candidates to assess qualifications and skills by evaluating
technical and theoretical questions, while promoting our company's
culture, values, and opportunities`,
  `Led the migration of 20+ legacy UI components to standardized Bit
components for cohesion between micro frontends, ensuring all
functional, design, and analytics requirements were maintained`,
];

const secondSection = [
  `Worked on multiple client projects operating under agile
methodologies, regularly contributing in ritual meetings while
collaborating with project managers, designers, and developers to
build websites for major Fintech, Real Estate, and Healthtech clients`,
  `Wrote, developed, and maintained intuitive UI and reusable front-end
sections of a microfrontend application, implementing key features of
user onboarding, dashboard displays, payments and services using
React, GraphQL, Bit, and Tailwind`,
  `Implemented features and functionalities of a Next.js microservice
application with React and PostgreSQL, translating designs and
animations to a performant, responsive, and accessible full stack
digital solution`,
  `Tested, validated and refactored code with a focus on robustness and
reusability to improve team productivity and code clarity and
longevity with continuous feature enhancements and iterations`,
];

const thirdSection = [
  `Developed, tested, and shipped production code with React within a
  Sitecore CMS instance using HTML/CSS/Javascript`,
  `Optimized Solr search with C++ to enhance and customize search results
  for targeted and dynamic content discovery`,
  `Implemented interactive markers, pop-ups, and dynamic mapping layers
  with Mapbox’s API to create an engaging visualization of client
  datasets through a complex and feature-rich user experience`,
];

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
      <ul className="pl-6 text-sm md:text-base mb-4 list-disc">
        {firstSection.map((text, index) => (
          <li className="pb-2" key={`first-section-${index}`}>
            {text}
          </li>
        ))}
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
      <ul className="pl-6 text-sm md:text-base mb-4 list-disc">
        {secondSection.map((text, index) => (
          <li className="pb-2" key={`second-section-${index}`}>
            {text}
          </li>
        ))}
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
      <ul className="pl-6 text-sm md:text-base mb-4 list-disc">
        {thirdSection.map((text, index) => (
          <li className="pb-2" key={`third-section-${index}`}>
            {text}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ExperienceSection;
