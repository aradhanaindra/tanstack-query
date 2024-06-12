import Link from "next/link";
import DemoLink from "./demo-link";

const DemoSelector = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 text-xs">
      <p className="text-white">Demo</p>
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <DemoLink href={"/demo/with-vs-without-tanstack-query"}>With vs Without Tanstack Query</DemoLink>
          <DemoLink href={"/demo/one-key-one-request"}>One key, one request</DemoLink>
          <DemoLink href={"/demo/optimistic-updates"}>Optimistic updates</DemoLink>
          <DemoLink href={"/demo/parallel-and-dependent-query"}>Parallel & Dependent queries</DemoLink>
        </div>
        <DemoLink href={"/demo/about"}>About</DemoLink>
      </div>
    </div>
  );
}

export default DemoSelector;