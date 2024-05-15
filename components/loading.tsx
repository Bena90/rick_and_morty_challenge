
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center flex-1 h-[500px]">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-green border-4 h-36 w-36"></div>
    </div>
  );
}