import Dependent from "./dependent";
import Parallel from "./parallel";

const Page = () => {
  return (<main className="space-y-4 bg-neutral-900 w-svw min-h-svh">
    <div className="flex justify-center max-w-5xl gap-4 mx-auto">
      <Parallel />
      <Dependent />
    </div>
  </main>);
}

export default Page;