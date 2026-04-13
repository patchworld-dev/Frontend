import { Link } from 'react-router-dom'

function ZonePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Zone 1 - Broken Interface</h1>
      <Link
        to="/mission"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Start Mission 1
      </Link>
    </main>
  )
}

export default ZonePage
