import DocHeader from '../components/DocHeader'
import Table from '../components/Table'

export default function Home() {
  return (
    <div>
      <DocHeader title="Dashboard - Dagyaw Dialogues" />

      <main className="grid w-full h-screen place-items-center">
        <Table />
      </main>
    </div>
  )
}
