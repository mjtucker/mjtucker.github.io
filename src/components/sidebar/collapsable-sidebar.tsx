import { useEffect } from "react";
import { useScreenDetector } from "../../hooks/useScreenSize";

const CollapsableSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: any;
}) => {
  return (
    <div
      id="side-bar"
      className=" bg-slate-900 fixed transform -translate-x-full max-w-[400px] h-full p-8 flex flex-col text-slate-400 justify-between border-r border-r-slate-400"
    >
      <button
        className="absolute left-full top-2 p-4 border rounded-r-md border-slate-400 bg-slate-900"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "In" : "Out"}
      </button>

      <div className="flex flex-col">
        <span className="block pb-1 text-3xl text-slate-300">MJ Tucker</span>
        <span className="text-md text-slate-300">
          Senior Software Developer at Konrad Group
        </span>
        <span className="block text-sm pt-4">
          Current front-end developer, former tree-planter. Lover of crafts,
          music, and the outdoors.
        </span>

        <nav>
          <ul className="py-6">
            <SideBarItem title="about" id="about" />
            <SideBarItem title="experience" id="experience" />
            <SideBarItem title="education" id="education" />
          </ul>
        </nav>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <div className="flex items-center justify-center rounded-full h-10 w-10 group">
          <a
            href="mailto:mjtucker08@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="transition-all duration-200 ease-in-out w-8 h-8 group-hover:w-10 group-hover:h-10"
              src="/mail_icon.svg"
            ></img>
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full h-10 w-10 group">
          <a
            href="https://github.com/mjtucker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="transition-all duration-200 ease-in-out w-8 h-8 group-hover:w-10 group-hover:h-10"
              src="/github-icon.svg"
            ></img>
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full h-10 w-10 group">
          <a
            href="https://www.linkedin.com/in/maryjanetucker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="transition-all duration-200 ease-in-out w-8 h-8 group-hover:w-10 group-hover:h-10"
              src="/linkedin-icon.svg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

const SideBarItem = ({
  title,
  id,
  isFirst,
}: {
  title: string;
  id: string;
  isFirst?: boolean;
}) => {
  return (
    <li className="group">
      <a
        className={`flex flex-row items-center justify-start group-hover:text-slate-50 transition-all hover:cursor-pointer current:text-slate-50`}
        href={`#${id}`}
      >
        <span className="line block bg-slate-50 w-3 h-[1px] mr-2 group-hover:w-6 transition-width"></span>
        <span className="text">{title}</span>
      </a>
    </li>
  );
};

export default CollapsableSidebar;
