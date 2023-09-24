import { useEffect } from "react";

export default function IntroBanner({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen: any;
}) {
  useEffect(() => {
    let options = {
      root: window.document,
      rootMargin: "0px",
      threshold: 0,
    };

    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) {
        //has left the view port scrolling down direction
        setIsSidebarOpen(true);
      } else {
        //has entered the viewport scrolling up direction
        setIsSidebarOpen(false);
      }
    }, options);

    observer.observe(window.document.getElementById("intro-banner"));
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center p-32 text-slate-200"
      id="intro-banner"
    >
      <div className="text-4xl text-slate-100">hi. I'm MJ!</div>
      <div className="text-xl mb-4 text-slate-400">(or mary jane for long)</div>
      <div className="text-sm text-slate-200 text-center max-w-2xl">
        Welcome to my little corner of the internet. Feel free to stick around.
      </div>
      <button
        className=" mt-7 animate-pulse"
        onClick={() => setIsSidebarOpen(true)}
      >
        continue
      </button>
    </div>
  );
}
