export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-6">Hello world!</h1>
        <h2 className="text-2xl font-semibold mb-4">Vantaggi di Claude Code</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Modifica file direttamente nel tuo progetto senza copia-incolla</li>
          <li>Esegue comandi terminale e interpreta i risultati in autonomia</li>
          <li>Comprende l&apos;intera codebase grazie al contesto del repository</li>
          <li>Supporta workflow Git: commit, branch, pull request e diff</li>
          <li>Integrazione con VS Code, JetBrains e altri IDE</li>
          <li>Estendibile tramite MCP server e hook personalizzati</li>
        </ul>
      </div>
    </div>
  );
}
