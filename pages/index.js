export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2em', marginBottom: 10 }}>Perez Perez RTA & Diag</h1>
      <p>Bienvenue sur votre base de données automobile personnalisée.</p>
      <ul style={{ marginTop: 20 }}>
        <li>🔧 RTA - Clio 3 1.5 dCi (distribution, couples de serrage...)</li>
        <li>📉 Diag - Codes défauts OBD2</li>
        <li>🔒 Ajout de fiche (admin uniquement)</li>
      </ul>
    </main>
  )
}