import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const About = () => {
  return (
    <main className="bg-neutral-900 w-svw min-h-svh space-y-4">
      <div className="flex justify-start">
        <Link href="/" className="flex items-center flex-shrink gap-4 px-6 py-6 transition-colors hover:bg-neutral-600 text-neutral-300"><CaretLeft className="text-neutral-300" />Go to home page</Link>
      </div>
      <h1 className="text-4xl font-bold text-white text-center">About page</h1>
    </main>
  );
}

export default About;