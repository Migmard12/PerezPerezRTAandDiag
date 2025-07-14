export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundImage: 'url(/garage-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '40px',
      color: '#fff',
      textShadow: '1px 1px 3px black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '30px', borderRadius: '20px', maxWidth: '700px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>Perez Perez RTA & Diag</h1>
        <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>La base de données technique du garage</p>
        <a href="/rta" style={{ margin: 10, padding: '15px 30px', backgroundColor: '#0070f3', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>🔧 Section RTA</a>
        <a href="/diag" style={{ margin: 10, padding: '15px 30px', backgroundColor: '#10b981', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>📉 Diag OBD2</a>
        <a href="/admin" style={{ margin: 10, padding: '15px 30px', backgroundColor: '#f59e0b', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>🔒 Admin</a>
      </div>
    </main>
  );
}
