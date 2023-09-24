export default function SectionHeader({ title }: { title: string }) {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="text-2xl mr-4 text-slate-400">{title}</div>
        <span className="d-block h-[1px] bg-slate-50 group-active:animate-fill-in" />
      </div>
    </div>
  );
}
