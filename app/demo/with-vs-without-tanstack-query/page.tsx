'use client'
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import TanStack from "../../methods/TanStack";
import Regular from "../../methods/Regular";

export default function Page() {
  return (
    <main className="bg-neutral-900 w-svw min-h-svh space-y-4">
      <div className="flex justify-end">
        <Link href="/demo/about" className="flex items-center flex-shrink gap-4 px-6 py-6 transition-colors hover:bg-neutral-600 text-neutral-300">Go to about page <CaretRight className="text-neutral-300" /></Link>
      </div>
      <div className="flex justify-center">
        <TanStack />
        <Regular />
      </div>
    </main>
  );
}
