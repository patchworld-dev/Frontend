import { useState } from 'react'

type ValidationResult = {
  isValid: boolean
  message: string
}

function validateMissionCode(code: string): ValidationResult {
  const normalizedCode = code.toLowerCase()
  const hasLegacyTitleOffset = normalizedCode.includes('margin-left: 140px')
  const hasLegacyButtonRotation = normalizedCode.includes('transform: rotate')
  const hasCenteredText = normalizedCode.includes('text-align: center')

  if (!hasLegacyTitleOffset && !hasLegacyButtonRotation && hasCenteredText) {
    return {
      isValid: true,
      message: 'Mission passed. Your code now matches the expected direction.',
    }
  }

  return {
    isValid: false,
    message:
      'Mission not solved yet. Remove legacy offsets/rotation and center text alignment.',
  }
}

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
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null)

  const handleResetCode = () => {
    setSolutionCode(initialBrokenSnippet)
    setValidationResult(null)
  }

  const handleCodeChange = (nextCode: string) => {
    setSolutionCode(nextCode)
    setValidationResult(null)
  }

  const handleValidateMission = () => {
    setValidationResult(validateMissionCode(solutionCode))
  }

  return (
    <main className="min-h-screen bg-[#0f1117] p-5 text-slate-200 sm:p-7 lg:p-9">
      <section className="mx-auto grid w-full max-w-[1520px] gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="grid gap-5">
          <section className="rounded-xl border border-slate-800 bg-[#161a22] p-5">
            <header className="mb-5 flex items-center justify-between border-b border-slate-700 pb-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                Mission Workspace
              </h2>
              <span className="rounded-full border border-slate-600 px-2.5 py-1 text-xs text-slate-300">
                Before vs After
              </span>
            </header>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-lg border border-slate-700 bg-[#0f1117] p-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-rose-300">
                  Broken Preview
                </h3>
                <div className="rounded-md border-2 border-rose-500/70 bg-[#f3f4f6] p-2">
                  <div className="h-[340px] overflow-hidden bg-[#f3f4f6]">
                    <h1 className="ml-32 mt-1 text-[10px] font-black tracking-[0.28em] text-blue-500">
                      BROKEN CARD
                    </h1>
                    <p className="mt-36 pr-16 text-right font-mono text-2xl italic text-lime-500">
                      this text should not look like this
                    </p>
                    <button
                      type="button"
                      className="ml-72 mt-[-140px] rotate-12 border-2 border-black bg-yellow-300 px-1 py-4 text-[9px] uppercase text-black"
                    >
                      Click?
                    </button>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-slate-700 bg-[#0f1117] p-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-300">
                  Target Preview
                </h3>
                <div className="rounded-md border border-emerald-400/50 bg-[#f8fafc] p-4">
                  <div className="mx-auto flex h-[340px] max-w-[340px] items-center justify-center">
                    <div className="w-full rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                      <h4 className="text-xl font-semibold text-slate-900">
                        Product Card
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Clear hierarchy, clean spacing, and consistent visual
                        style.
                      </p>
                      <button
                        type="button"
                        className="mt-5 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="rounded-xl border border-slate-800 bg-[#161a22] p-5">
            <header className="mb-4 flex items-center justify-between border-b border-slate-700 pb-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                Solution
              </h2>
              <button
                type="button"
                onClick={handleResetCode}
                className="rounded-md border border-slate-600 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-slate-400 hover:bg-slate-800"
              >
                Reset Code
              </button>
            </header>

            <textarea
              className="h-80 w-full resize-y rounded-md border border-slate-600 bg-[#0b0e14] p-4 font-mono text-sm leading-7 text-slate-100 outline-none ring-sky-500/30 placeholder:text-slate-500 focus:ring-2"
              value={solutionCode}
              onChange={(event) => handleCodeChange(event.target.value)}
              spellCheck={false}
            />
          </section>
        </div>

        <aside className="rounded-xl border border-slate-700 bg-[#161a22] p-6 xl:sticky xl:top-6 xl:h-fit">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
            Mission Info
          </p>

          <h1 className="text-[1.7rem] font-semibold leading-tight text-slate-100">
            Mission 1 - Fix the card
          </h1>

          <p className="mt-4 text-[15px] leading-7 text-slate-300">
            Compare broken and target previews, then rewrite the code below to
            match the expected result.
          </p>

          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
              Objectives
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-200">
              <li className="rounded border border-slate-700 bg-[#10141c] px-3 py-2.5">
                Center the title
              </li>
              <li className="rounded border border-slate-700 bg-[#10141c] px-3 py-2.5">
                Fix the paragraph style
              </li>
              <li className="rounded border border-slate-700 bg-[#10141c] px-3 py-2.5">
                Reposition the button
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleValidateMission}
            className="mt-7 w-full rounded-md border border-sky-500/40 bg-sky-500/15 px-4 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/20"
          >
            Validate Mission
          </button>

          {validationResult && (
            <p
              className={`mt-3 rounded-md border px-3 py-2 text-sm ${
                validationResult.isValid
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                  : 'border-rose-500/40 bg-rose-500/10 text-rose-300'
              }`}
            >
              {validationResult.message}
            </p>
          )}
        </aside>
      </section>
    </main>
  )
}

export default MissionPage
