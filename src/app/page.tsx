import Donut from '@/components/donut'

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-cyan-950 text-yellow-300 text-opacity-80">
        <h1 className="absolute left-48 top-64 text-5xl font-bold">
          Donut Component ---{'>'}
        </h1>
        <div className="absolute right-80 top-40">
          <Donut />
        </div>
      </div>
      <div className="fixed bottom-4 right-10 text-xl font-semibold text-yellow-300 text-opacity-80 hover:font-bold">
        <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">
          Source --{'>'} a1k0n
        </a>
      </div>
      <div className="fixed bottom-4 left-10 text-xl font-semibold text-yellow-300 text-opacity-80 hover:font-bold">
        <a href="https://github.com/edegan-furb">Made by --{'>'} Edegan</a>
      </div>
    </div>
  )
}
