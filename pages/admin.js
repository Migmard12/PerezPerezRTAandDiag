import React from "react";

export default function Admin() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-gray-100 p-10 font-sans">
      <section className="bg-gray-800 shadow-md rounded-xl p-6 border border-yellow-400">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">🔒 Espace Admin – Ajout de Fiches</h2>
        <p className="mb-4">Cette section permettra bientôt d’ajouter de nouvelles fiches RTA directement via une interface.</p>
        <p className="text-sm text-gray-400 italic">Fonction à venir : formulaire sécurisé, ajout PDF, filtrage par type, etc.</p>
      </section>
    </main>
  );
}
