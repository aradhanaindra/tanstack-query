import Provider from "../provider";
import DemoSelector from "../components/demo-selector";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <Toaster position="bottom-right" richColors />
      <DemoSelector />
      <div className="mt-16">
        {children}
      </div>
    </Provider>
  );
}
