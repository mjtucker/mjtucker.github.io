export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center ">
      <span className="d-block h-[1px] bg-slate-400" />
      <div className="text-2xl mr-4 text-slate-400 whitespace-nowrap">
        {title}
      </div>
      <span className="d-block h-[1px] bg-slate-400 w-full" />
    </div>
  );
}
