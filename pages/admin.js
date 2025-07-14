import React, { useState } from "react";

const PDFS = [
  { name: "qashqai-15dci.pdf", label: "Nissan Qashqai 1.5 dCi", category: "RTA" },
  { name: "audi-a3-8p.pdf", label: "Audi A3 8P 2.0 TDI", category: "RTA" },
  { name: "passat-b5-tdi.pdf", label: "Passat B5.5 1.9 TDI", category: "Distribution" },
];

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("RTA");

  const handleLogin = () => {
    if (login.user === "PDG" && login.pass === "Elfuerte59") {
      setLoggedIn(true);
    } else {
      alert("Identifiants incorrects.");
    }
  };

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center font-sans">
        <h2 className="text-3xl mb-4">🔒 Connexion Administrateur</h2>
        <input type="text" placeholder="Identifiant" className="mb-2 p-2 rounded text-black" onChange={(e) => setLogin({ ...login, user: e.target.value })} />
        <input type="password" placeholder="Mot de passe" className="mb-4 p-2 rounded text-black" onChange={(e) => setLogin({ ...login, pass: e.target.value })} />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded" onClick={handleLogin}>Se connecter</button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-gray-100 p-10 font-sans">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">🛠️ Tableau de bord Admin</h2>

      <section className="mb-10">
        <h3 className="text-xl font-semibold text-white mb-2">📄 Fichiers PDF existants :</h3>
        <table className="w-full text-left border border-gray-600">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2 border border-gray-600">Nom</th>
              <th className="p-2 border border-gray-600">Catégorie</th>
              <th className="p-2 border border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {PDFS.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="p-2 border border-gray-700">{doc.label}</td>
                <td className="p-2 border border-gray-700">{doc.category}</td>
                <td className="p-2 border border-gray-700"><a href={"/rta/" + doc.name} download className="text-blue-400 underline">Télécharger</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-gray-800 p-6 rounded-xl border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-yellow-300">📤 Ajouter un nouveau fichier</h3>
        <form className="space-y-4">
          <input type="file" className="text-white" />
          <input type="text" placeholder="Nom affiché" className="p-2 rounded w-full text-black" value={fileName} onChange={(e) => setFileName(e.target.value)} />
          <select className="p-2 rounded w-full text-black" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="RTA">RTA</option>
            <option value="Distribution">Distribution</option>
            <option value="Fluides">Fluides</option>
            <option value="Diag">Diag</option>
          </select>
          <button type="button" disabled className="bg-gray-600 text-white py-2 px-4 rounded cursor-not-allowed">📥 Upload (simulation en local)</button>
        </form>
        <p className="text-sm mt-4 text-gray-400 italic">⚠️ Cette version locale simule l’ajout. L’envoi réel ne fonctionne qu’en hébergement serveur (ex : Railway).</p>
      </section>
    </main>
  );
}
