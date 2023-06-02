'use client'

import React, { useEffect, useRef, useCallback } from 'react'

const DonutAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tmr2 = useRef<number | undefined>(undefined)
  const A = useRef(1)
  const B = useRef(1)

  const R1 = 2 / 2.5
  const R2 = 4 / 2.5
  const K1 = 300 / 2.5
  const K2 = 10 / 2.5

  const canvasframe = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    A.current += 0.07
    B.current += 0.03

    const cA = Math.cos(A.current)
    const sA = Math.sin(A.current)
    const cB = Math.cos(B.current)
    const sB = Math.sin(B.current)

    for (let j = 0; j < 6.28; j += 0.3) {
      const ct = Math.cos(j)
      const st = Math.sin(j)

      for (let i = 0; i < 6.28; i += 0.1) {
        const sp = Math.sin(i)
        const cp = Math.cos(i)

        const ox = R2 + R1 * ct
        const oy = R1 * st

        const x = ox * (cB * cp + sA * sB * sp) - oy * cA * sB
        const y = ox * (sB * cp - sA * cB * sp) + oy * cA * cB
        const ooz = 1 / (K2 + cA * ox * sp + sA * oy)
        const xp = 160 + K1 * ooz * x
        const yp = 120 - K1 * ooz * y

        const L =
          0.7 *
          (cp * ct * sB -
            cA * ct * sp -
            sA * st +
            cB * (cA * st - ct * sA * sp))

        if (L > 0) {
          ctx.fillStyle = `rgba(255,255,255,${L})`
          ctx.fillRect(xp, yp, 2.5, 2.5)
        }
      }
    }
  }, [K1, K2, R1, R2])

  useEffect(() => {
    const startAnimation = () => {
      if (!tmr2.current) {
        tmr2.current = window.setInterval(canvasframe, 50)
      }
    }

    startAnimation()

    return () => {
      if (tmr2.current) {
        window.clearInterval(tmr2.current)
        tmr2.current = undefined
      }
    }
  }, [canvasframe])

  return (
    <canvas
      className="rounded-3xl border-4 border-solid border-yellow-300 border-opacity-80 bg-gray-950 hover:border-double"
      ref={canvasRef}
      id="canvasdonut"
      width={320}
      height={240}
    ></canvas>
  )
}

export default DonutAnimation
