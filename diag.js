import React from "react";

export default function Diag() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-gray-100 p-10 font-sans">
      <section className="bg-gray-800 shadow-md rounded-xl p-6 border border-green-400">
        <h2 className="text-3xl font-bold text-green-300 mb-4">📉 Diagnostic OBD2</h2>
        <p className="mb-4">Consultez ici la documentation liée aux diagnostics OBD2.</p>
        <p className="font-semibold mb-2">📄 Tableau des codes défauts – <a href="/rta/obd2-codes.pdf" download className="text-green-300 underline">Télécharger PDF</a></p>
        <iframe src="/rta/obd2-codes.pdf" className="w-full h-[500px] border rounded-lg shadow-sm"></iframe>
      </section>
    </main>
  );
}
