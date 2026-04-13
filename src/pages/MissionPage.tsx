function MissionPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-2">
      <section className="h-[420px] w-[440px] border-4 border-red-500 bg-white">
        <h1 className="ml-36 mt-2 text-xs font-black tracking-[0.35em] text-blue-500">
          BROKEN CARD
        </h1>

        <p className="mt-40 pr-24 text-right font-mono text-2xl italic text-lime-500">
          this text should not look like this
        </p>

        <button className="ml-80 mt-[-190px] rotate-12 border-2 border-black bg-yellow-300 px-1 py-6 text-[10px] uppercase">
          Click?
        </button>
      </section>
    </main>
  )
}

export default MissionPage
