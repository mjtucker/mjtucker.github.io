import SectionHeader from "../section-header/section-header";

const Section = ({ title, children }: { title: string; children: any }) => {
  return (
    <section
      id={title}
      key={`section-${title}`}
      className={`p-8 bg-slate-900 flex flex-col items-center justify-center pb-40 scroll-m-10 md:scroll-m-0`}
    >
      <div className="max-w-3xl w-full">
        <SectionHeader title={title} />
        {children}
      </div>
    </section>
  );
};

export default Section;
