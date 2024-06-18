import Updater from "./updater";
import TanStackOptimistic from "@/app/methods/TanStackOptimistic";

const Page = () => {
  return (<main className="space-y-4 bg-neutral-900 w-svw min-h-svh">
    <div className="flex gap-16 mx-16">
      <Updater />
      <TanStackOptimistic />
    </div>
  </main>);
}
export default Page;