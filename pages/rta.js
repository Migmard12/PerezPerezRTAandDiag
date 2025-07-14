import { useState } from 'react';

const documents = [
  { label: 'Nissan Qashqai 1.5 dCi', file: 'qashqai-15dci.pdf', section: 'RTA' },
  { label: 'Audi A3 8P 2.0 TDI', file: 'audi-a3-8p.pdf', section: 'RTA' },
  { label: 'Golf 4 1.9 TDI ARL', file: 'golf4-arl.pdf', section: 'RTA' },
  { label: 'Fluides moteur 1.5 dCi', file: 'clio3.pdf', section: 'Fluides & Entretien' },
  { label: 'Fluides moteur 1.9 TDI', file: 'passat-awx.pdf', section: 'Fluides & Entretien' },
  { label: 'Passat B5.5 1.9 TDI', file: 'passat-b5-tdi.pdf', section: 'Distribution & Mécanique moteur' }
];

export default function RTA() {
  const [search, setSearch] = useState('');

  const filtered = documents.filter(doc => 
    doc.label.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, doc) => {
    acc[doc.section] = acc[doc.section] || [];
    acc[doc.section].push(doc);
    return acc;
  }, {});

  return (
    <main className="min-h-screen min-h-[100vh] bg-gray-50 p-10 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Section RTA</h2>
      <input
        type="text"
        placeholder="Rechercher un modèle, motorisation..."
        className="mb-8 w-full p-3 border border-gray-300 rounded shadow"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {Object.keys(grouped).map(section => (
        <div key={section} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">{section}</h3>
          <ul className="list-disc list-inside text-lg">
            {grouped[section].map(doc => (
              <li key={doc.file}>
                📄 {doc.label} – <a href={'/rta/' + doc.file} download className="text-blue-600 underline">Télécharger PDF</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
