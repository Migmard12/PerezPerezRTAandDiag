import React from "react";

export default function RTA() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-gray-100 p-8 font-sans space-y-16">
      <section className="bg-gray-800 shadow-lg rounded-xl p-6 border border-blue-300">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">📘 Revue Technique Automobile (RTA)</h2>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold mb-2">📄 Nissan Qashqai 1.5 dCi – <a href="/rta/qashqai-15dci.pdf" download className="text-blue-400 underline">Télécharger PDF</a></p>
            <iframe src="/rta/qashqai-15dci.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
          <li>
            <p className="font-semibold mb-2">📄 Audi A3 8P 2.0 TDI – <a href="/rta/audi-a3-8p.pdf" download className="text-blue-400 underline">Télécharger PDF</a></p>
            <iframe src="/rta/audi-a3-8p.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
          <li>
            <p className="font-semibold mb-2">📄 Golf 4 1.9 TDI ARL – <a href="/rta/golf4-arl.pdf" download className="text-blue-400 underline">Télécharger PDF</a></p>
            <iframe src="/rta/golf4-arl.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
        </ul>
      </section>

      <section className="bg-gray-700 shadow-md rounded-xl p-6 border border-blue-400">
        <h3 className="text-2xl font-bold text-blue-200 mb-4">🧪 Fluides & Entretien</h3>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold mb-2">🧪 Fluides moteur 1.5 dCi – <a href="/rta/clio3.pdf" download className="text-blue-300 underline">Télécharger PDF</a></p>
            <iframe src="/rta/clio3.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
          <li>
            <p className="font-semibold mb-2">🧪 Fluides moteur 1.9 TDI – <a href="/rta/passat-awx.pdf" download className="text-blue-300 underline">Télécharger PDF</a></p>
            <iframe src="/rta/passat-awx.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
        </ul>
      </section>

      <section className="bg-gray-800 shadow-inner rounded-xl p-6 border border-red-500">
        <h3 className="text-2xl font-bold text-red-400 mb-4">🔩 Distribution & Mécanique moteur</h3>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold mb-2">🔩 Passat B5.5 1.9 TDI – <a href="/rta/passat-b5-tdi.pdf" download className="text-blue-300 underline">Télécharger PDF</a></p>
            <iframe src="/rta/passat-b5-tdi.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
        </ul>
      </section>
    </main>
  );
}
