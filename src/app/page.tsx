import Donut from '@/components/donut'

export default function Home() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-cyan-950 text-yellow-300 text-opacity-80">
      <h1 className="text-center text-5xl font-bold hover:text-yellow-400">Donut Component</h1>
      <p className="mt-4 text-center text-xl text-yellow-300 text-opacity-80 hover:text-yellow-400">
        A typescript powered animated spinning donut. Wrapped as a simple react
        component.
      </p>
      <div className="mt-8">
        <Donut />
      </div>
      <div className="absolute bottom-4 left-10 text-xl font-semibold text-yellow-300 text-opacity-80 sm:flex sm:flex-col sm:items-start sm:justify-start ">
        <div className='hover:font-bold hover:text-yellow-400'>
          <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">
            Source --&gt; a1k0n
          </a>
        </div>
        <div className="mt-4 sm:mt-0 hover:font-bold hover:text-yellow-400">
          <a href="https://github.com/edegan-furb">Made by --&gt; Edegan</a>
        </div>
      </div>
    </div>
  )
}
