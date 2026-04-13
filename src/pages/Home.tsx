import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Patchworld</h1>
      <Link
        to="/zone"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Enter Zone 1
      </Link>
    </main>
  )
}

export default Home
