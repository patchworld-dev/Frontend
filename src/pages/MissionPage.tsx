import { useState } from 'react'

function MissionPage() {
  const initialBrokenSnippet = `<div class="card">
  <h1 style="margin-left: 140px; font-size: 10px;">BROKEN CARD</h1>
  <p style="margin-top: 180px; text-align: right; color: lime;">
    this text should not look like this
  </p>
  <button style="margin-left: 320px; margin-top: -170px; transform: rotate(12deg);">
    Click?
  </button>
</div>`
  const [solutionCode, setSolutionCode] = useState(initialBrokenSnippet)

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
      <section className="mx-auto grid w-full max-w-6xl gap-6">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <header className="mb-4 border-b border-slate-200 pb-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Broken Preview
              </h2>
            </header>

            <div className="rounded-lg border-4 border-red-500 bg-white p-2">
              <section className="h-[420px] w-full max-w-[440px] overflow-hidden bg-white">
                <h1 className="ml-36 mt-2 text-xs font-black tracking-[0.35em] text-blue-500">
                  BROKEN CARD
                </h1>

                <p className="mt-40 pr-24 text-right font-mono text-2xl italic text-lime-500">
                  this text should not look like this
                </p>

                <button
                  type="button"
                  className="ml-80 mt-[-190px] rotate-12 border-2 border-black bg-yellow-300 px-1 py-6 text-[10px] uppercase"
                >
                  Click?
                </button>
              </section>
            </div>
          </article>

          <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Mission 1 - Fix the card
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              The card layout is broken: alignment, typography, and positioning
              are inconsistent. Your goal is to restore a clean and readable
              UI.
            </p>

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Objectives
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Center the title</li>
                <li>Fix the paragraph style</li>
                <li>Reposition the button</li>
              </ul>
            </div>

            <button
              type="button"
              disabled
              className="mt-8 w-full cursor-not-allowed rounded-md bg-slate-300 px-4 py-2 text-sm font-semibold text-slate-600"
            >
              Validate Mission
            </button>
          </aside>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <header className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Solution
            </h2>
            <button
              type="button"
              onClick={() => setSolutionCode(initialBrokenSnippet)}
              className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Reset Code
            </button>
          </header>

          <textarea
            className="h-64 w-full resize-y rounded-lg border border-slate-300 bg-slate-50 p-3 font-mono text-sm leading-6 text-slate-800 outline-none ring-slate-300 focus:ring-2"
            value={solutionCode}
            onChange={(event) => setSolutionCode(event.target.value)}
            spellCheck={false}
          />
        </section>
      </section>
    </main>
  )
}

export default MissionPage
