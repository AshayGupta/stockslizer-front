import { Toaster, toast } from "sonner";

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

export const ToastSuccess = () => {
  return (
    toast.success(`Scan complete · ${data.new_notifications} new alert${data.new_notifications === 1 ? "" : "s"}`)
  );
};

export const ToastError = () => {
  return (
    toast.error("Scan failed")
  );
};