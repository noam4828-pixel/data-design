const INTERVAL_MS = 3000
const listeners = new Set()
let tick = 0
let timer = null

function start() {
  if (timer) return
  timer = setInterval(() => {
    tick += 1
    listeners.forEach((fn) => fn(tick))
  }, INTERVAL_MS)
}

export function subscribeTick(fn) {
  listeners.add(fn)
  start()
  return () => {
    listeners.delete(fn)
    if (listeners.size === 0) {
      clearInterval(timer)
      timer = null
      tick = 0
    }
  }
}

export function getTick() {
  return tick
}
