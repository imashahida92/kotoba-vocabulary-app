export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="hanko h-16 w-16 animate-spin border-t-transparent">
          <span className="text-xl">語</span>
        </div>
        <p className="font-display text-sm tracking-widest text-ai">LOADING…</p>
      </div>
    </div>
  )
}
