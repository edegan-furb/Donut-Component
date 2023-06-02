import Donut from '@/components/donut'

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-cyan-950 text-yellow-300">
        <h1 className="absolute left-48 top-52 text-5xl font-bold">
          Donut Component ---{'>'}
        </h1>
        <div className="absolute right-80 top-24">
          <Donut />
        </div>
      </div>
      <div className="fixed bottom-4 right-10 font-semibold text-yellow-300">
        <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">
          Source --{'>'} a1k0n
        </a>
      </div>
      <div className="fixed bottom-4 left-10 font-semibold text-yellow-300">
        <a href="https://github.com/edegan-furb">Made by --{'>'} Edegan</a>
      </div>
    </div>
  )
}
