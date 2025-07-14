export default function RTA() {
  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.5em', marginBottom: 20 }}>Section RTA – Clio 3 1.5 dCi</h2>
      <p style={{ marginBottom: 20 }}>Consultez directement la fiche technique en ligne :</p>
      <iframe
        src="/rta/clio3.pdf"
        style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}
        title="RTA Clio 3 PDF"
      ></iframe>
    </main>
  );
}
