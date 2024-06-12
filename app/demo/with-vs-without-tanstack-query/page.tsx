'use client'
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import TanStack from "../../methods/TanStack";
import Regular from "../../methods/Regular";

export default function Page() {
  return (
    <main className="space-y-4 bg-neutral-900 w-svw min-h-svh">
      <div className="flex justify-center gap-8">
        <TanStack />
        <Regular />
      </div>
    </main>
  );
}
