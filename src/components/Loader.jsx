export const Loader = ({ loadingTxt="Fetching latest updates..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-slate-200"></div>
        <div className="absolute inset-0 h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-teal-600 border-r-blue-600"></div>
      </div>

      <span className="mt-4 text-sm font-medium text-slate-600">
        {loadingTxt}
      </span>
    </div>
  );
};
