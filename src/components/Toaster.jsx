import { Toaster } from "sonner";

export const SonnerToaster = () => {
  return (
    <Toaster
      theme="light"
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#fff",
          border: "1px solid #e9e9e9",
          color: "#111827",
          fontFamily: "IBM Plex Sans",
        },
      }}
    />
  );
};
