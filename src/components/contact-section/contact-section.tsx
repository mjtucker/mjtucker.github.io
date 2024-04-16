import Section from "../section/section";

export const contactSections = [
  {
    href: "mailto:mjtucker08@gmail.com",
    image: "/mail_icon.svg",
  },
  {
    href: "https://github.com/mjtucker",
    image: "/github-icon.svg",
  },
  {
    href: "https://www.linkedin.com/in/maryjanetucker/",
    image: "/linkedin-icon.svg",
  },
];

const ContactSection = ({}: {}) => {
  return (
    <Section title="contact">
      <div className="flex flex-col my-4 text-slate-400 text-sm md:text-base">
        Please feel free to connect with me on any of the following platforms -
        I am always happy to chat.
        <div className="flex flex-row w-full justify-center items-center my-4 gap-3">
          <span className="block h-[1px] bg-green-400 w-1/2"></span>
          {contactSections.map((section) => (
            <div className="flex items-center justify-center rounded-full w-12 h-12 group">
              <a href={section.href} target="_blank" rel="noopener noreferrer">
                <img
                  className="transition-all duration-200 ease-in-out w-12 h-12 group-hover:w-10 group-hover:h-10"
                  src={section.image}
                ></img>
              </a>
            </div>
          ))}
          <span className=" h-[1px] bg-green-400 w-1/2"></span>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
