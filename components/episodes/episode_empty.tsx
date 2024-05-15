export function EpisodeEmpty({text}: { text: string }) {
  return (
    <div className="flex justify-center items-center w-full h-[200px]">
      <span className="font-thin">
        {text}
      </span>
    </div>
  );
}