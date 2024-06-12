import DemoSelector from "./components/demo-selector";

const Page = () => {
  return (
    <div className="flex w-svw min-h-svh justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl text-white font-bold">
          Tanstack Query Demo
        </h1>
        <DemoSelector />
      </div>
    </div>
  );
}

export default Page;