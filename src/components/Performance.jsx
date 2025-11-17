import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

export default function Performance() {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = {
    labels,
    datasets: [
      {
        label: 'Weekly gains (%)',
        data: [12, 28, 45, 31, 68, 90, 120],
        borderColor: 'rgb(34, 211, 238)',
        backgroundColor: 'rgba(236, 72, 153, 0.25)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
      y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.7)' } },
    },
  }

  return (
    <section id="performance" className="py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Performance snapshot</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">Sample chart visualizing cumulative performance across calls.</p>
        <div className="mt-10 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <Line data={data} options={options} height={120} />
        </div>
      </div>
    </section>
  )
}
