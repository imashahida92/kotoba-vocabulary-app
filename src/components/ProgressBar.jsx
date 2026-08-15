export default function ProgressBar({ percent, label, compact = false }) {
  const clamped = Math.max(0, Math.min(100, percent))
  return (
    <div className={compact ? '' : 'rounded-2xl border border-ai/10 bg-white/70 p-4'}>
      <div className="flex items-center justify-between">
        {label && <p className="text-sm font-semibold text-sumi/70">{label}</p>}
        <p className="font-display text-sm font-bold text-shu">{clamped}%</p>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-ai/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-ai to-shu transition-all duration-500"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
