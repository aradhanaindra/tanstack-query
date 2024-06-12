import Link from "next/link";

const DemoSelector = () => {
  return (
    <div className="flex items-center gap-4 text-xs px-4 py-2">
      <p className="text-white">Demo</p>
      <div className="flex gap-4">
        <Link href={"/demo/with-vs-without-tanstack-query"} className="text-sm block border border-neutral-800 hover:bg-neutral-800 transition-color rounded-full px-3 py-1 text-white">With vs Without Tanstack Query</Link>
        <Link href={"/demo/one-key-one-request"} className="text-sm block border border-neutral-800 hover:bg-neutral-800 transition-color rounded-full px-3 py-1 text-white">One key, one request</Link>
        <Link href={"/"} className="text-sm block border border-neutral-800 hover:bg-neutral-800 transition-color rounded-full px-3 py-1 text-white">Optimistic updates</Link>
        <Link href={"/demo/parallel-and-dependent-query"} className="text-sm block border border-neutral-800 hover:bg-neutral-800 transition-color rounded-full px-3 py-1 text-white">Parallel & Dependent queries</Link>
      </div>
    </div>
  );
}

export default DemoSelector;