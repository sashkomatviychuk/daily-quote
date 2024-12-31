const QuoteSkeleton = () => {
  return (
    <div className="p-4 px-2 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded flex items-center gap-2">
      <div className="flex flex-col items-center gap-2 animate-pulse">
        <div className="rounded-full bg-slate-200 dark:bg-gray-700 h-4 w-4"></div>
        <div className="rounded bg-slate-200 dark:bg-gray-700 h-4 w-2"></div>
      </div>
      <div className="flex w-full flex-col gap-6">
        <div className="flex rounded bg-slate-200 dark:bg-gray-700  h-8 w-full"></div>
        <div className="flex rounded bg-slate-200 dark:bg-gray-700 h-4 w-1/3"></div>
        <div className="flex rounded bg-slate-200 dark:bg-gray-700 h-4 w-1/6"></div>
      </div>
    </div>
  );
};

export default function QuotesLoading() {
  const skeletonItems = Array.from({ length: 3 }, (_, index) => <QuoteSkeleton key={index} />);

  return <div className="flex flex-col w-full gap-4 pt-8 mx-4">{skeletonItems}</div>;
}
