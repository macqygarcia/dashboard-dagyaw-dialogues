import DocHeader from '../components/DocHeader'
import Form from '../components/Forms'

export default function Login() {
  return (
    <div>
      <DocHeader title="Welcome to Dagyaw Dialogues Dashboard" />

      <main className="grid w-full h-screen place-items-center">
        <Form />
      </main>
    </div>
  )
}
