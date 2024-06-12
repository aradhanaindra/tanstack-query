import TanStack from "@/app/methods/TanStack";

const Page = () => {
  return (
    <main className="bg-neutral-900 w-svw min-h-svh space-y-4">
      <div className="flex justify-center">
        <TanStack />
        <TanStack />
      </div>
    </main>
  );
}

export default Page;