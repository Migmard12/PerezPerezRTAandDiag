import React from "react";

export default function RTA() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8 font-sans space-y-16">
      <section className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">📘 Revue Technique Automobile (RTA)</h2>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold mb-2">📄 Nissan Qashqai 1.5 dCi – <a href="/rta/qashqai-15dci.pdf" download className="text-blue-600 underline">Télécharger PDF</a></p>
            <iframe src="/rta/qashqai-15dci.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
          <li>
            <p className="font-semibold mb-2">📄 Audi A3 8P 2.0 TDI – <a href="/rta/audi-a3-8p.pdf" download className="text-blue-600 underline">Télécharger PDF</a></p>
            <iframe src="/rta/audi-a3-8p.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
          <li>
            <p className="font-semibold mb-2">📄 Golf 4 1.9 TDI ARL – <a href="/rta/golf4-arl.pdf" download className="text-blue-600 underline">Télécharger PDF</a></p>
            <iframe src="/rta/golf4-arl.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 shadow-md rounded-xl p-6 border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">🧪 Fluides & Entretien</h3>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold mb-2">🧪 Fluides moteur 1.5 dCi – <a href="/rta/clio3.pdf" download className="text-blue-600 underline">Télécharger PDF</a></p>
            <iframe src="/rta/clio3.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
          <li>
            <p className="font-semibold mb-2">🧪 Fluides moteur 1.9 TDI – <a href="/rta/passat-awx.pdf" download className="text-blue-600 underline">Télécharger PDF</a></p>
            <iframe src="/rta/passat-awx.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 shadow-inner rounded-xl p-6 border border-gray-300">
        <h3 className="text-2xl font-bold text-red-700 mb-4">🔩 Distribution & Mécanique moteur</h3>
        <ul className="space-y-6">
          <li>
            <p className="font-semibold mb-2">🔩 Passat B5.5 1.9 TDI – <a href="/rta/passat-b5-tdi.pdf" download className="text-blue-600 underline">Télécharger PDF</a></p>
            <iframe src="/rta/passat-b5-tdi.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
          </li>
        </ul>
      </section>
    </main>
  );
}
