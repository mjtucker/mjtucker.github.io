import SectionHeader from "../section-header/section-header";

const Section = ({ title }: { title: string }) => {
  return (
    <section
      id={title}
      key={`section-${title}`}
      className={`p-10 h-full bg-slate-900 `}
    >
      <SectionHeader title={title} />
    </section>
  );
};

export default Section;
