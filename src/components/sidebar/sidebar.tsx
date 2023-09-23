export default function SideBar() {
  return (
    <div className="h-full p-8 pr-32 flex flex-col text-slate-400 justify-between border-r border-r-slate-400 w-auto">
      <div className="flex flex-col">
        <span className="text-2xl">MJ Tucker</span>
        <span className="text-sm">Software Developer</span>
        <nav>
          <ul className="py-6 px-4">
            <SideBarItem title="about" id="about" />
            <SideBarItem title="experience" id="experience" />
            <SideBarItem title="education" id="education" />
          </ul>
        </nav>
      </div>
      <div>socials</div>
    </div>
  );
}

const SideBarItem = ({ title, id }: { title: string; id: string }) => {
  return (
    <li>
      <a className="flex flex-row items-center justify-start" href={`#${id}`}>
        <div className="bg-slate-50 w-3 h-[1px] mr-2"></div>
        {title}
      </a>
    </li>
  );
};
