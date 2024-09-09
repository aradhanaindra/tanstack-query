import Regular from "@/app/methods/Regular";
import TanStack from "@/app/methods/TanStack";

const Page = () => {
  return (
    <main className="bg-neutral-900 w-svw min-h-svh space-y-4 max-w-4xl mx-auto">
      <h1 className="font-['JetBrains_Mono'] mx-auto text-white bg-neutral-800 w-max p-4 rounded-lg text-2xl mb-4">{"Query Key: ['Products']"}</h1>
      <div className="flex gap-8">
        {/* <TanStack />
        <TanStack /> */}
        <Regular/>
        <Regular/>

      </div>
    </main>
  );
}

export default Page;