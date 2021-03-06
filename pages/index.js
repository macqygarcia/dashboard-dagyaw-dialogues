import DocHeader from '../components/DocHeader'
import Register from './register'

export default function Home() {
  return (
    <div>
      <DocHeader title="Dashboard - Dagyaw Dialogues" />
      <main className="grid w-full h-screen place-items-center">
        <Register />
      </main>
    </div>
  )
}
