import SideBar from "../src/components/sidebar/sidebar";
import SectionHeader from "../src/components/section-header/section-header";

const scrollableSection = [
  {
    title: "",
    id: "header",
  },
  {
    title: "about",
    id: "about",
  },
  {
    title: "experience",
    id: "experience",
  },
  {
    title: "education",
    id: "education",
  },
];

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-slate-900  text-slate-400 ">
      <SideBar />
      <div className="w-full">
        {scrollableSection.map((section) => (
          <section id={section.id}>
            <SectionHeader title={section.title} />
          </section>
        ))}
      </div>
    </div>
  );
}
