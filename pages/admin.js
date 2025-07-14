import React, { useState } from "react";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [docs, setDocs] = useState([
    { name: "qashqai-15dci.pdf", label: "Nissan Qashqai 1.5 dCi", category: "RTA" },
    { name: "audi-a3-8p.pdf", label: "Audi A3 8P 2.0 TDI", category: "RTA" },
    { name: "passat-b5-tdi.pdf", label: "Passat B5.5 1.9 TDI", category: "Distribution" },
  ]);
  const [uploadName, setUploadName] = useState("");
  const [uploadCat, setUploadCat] = useState("RTA");
  const [fileInput, setFileInput] = useState(null);

  const handleLogin = () => {
    if (login.user === "PDG" && login.pass === "Elfuerte59") {
      setLoggedIn(true);
    } else {
      alert("Identifiants incorrects.");
    }
  };

  const categories = ["RTA", "Distribution", "Fluides", "Diag"];

  const groupedDocs = categories.reduce((acc, cat) => {
    acc[cat] = docs.filter(doc => doc.category === cat);
    return acc;
  }, {});

  const handleSimulateUpload = () => {
    if (!uploadName || !fileInput) return alert("Nom et fichier requis.");
    const newDoc = {
      name: fileInput.name,
      label: uploadName,
      category: uploadCat
    };
    setDocs([...docs, newDoc]);
    setUploadName("");
    setFileInput(null);
  };

  const handleDelete = (index) => {
    const updated = [...docs];
    updated.splice(index, 1);
    setDocs(updated);
  };

  const handleRename = (index) => {
    const newName = prompt("Nouveau nom pour ce document :", docs[index].label);
    if (newName) {
      const updated = [...docs];
      updated[index].label = newName;
      setDocs(updated);
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
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">👋 Bienvenue PDG</h2>

      <section className="mb-12">
        {categories.map(cat => (
          <div key={cat} className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-white">{cat}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupedDocs[cat].map((doc, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">{doc.label}</h4>
                  <p className="text-sm text-gray-400 mb-2">Nom fichier : {doc.name}</p>
                  <div className="flex gap-2">
                    <a href={"/rta/" + doc.name} download className="text-green-400 hover:underline">📥 Télécharger</a>
                    <button onClick={() => handleRename(docs.indexOf(doc))} className="text-yellow-400 hover:underline">✏️ Renommer</button>
                    <button onClick={() => handleDelete(docs.indexOf(doc))} className="text-red-400 hover:underline">🗑️ Supprimer</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-gray-800 p-6 rounded-xl border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-yellow-300">📤 Ajouter un fichier PDF</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="file" className="text-white" onChange={(e) => setFileInput(e.target.files[0])} />
          <input type="text" placeholder="Nom affiché" className="p-2 rounded w-full text-black" value={uploadName} onChange={(e) => setUploadName(e.target.value)} />
          <select className="p-2 rounded w-full text-black" value={uploadCat} onChange={(e) => setUploadCat(e.target.value)}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <button type="button" onClick={handleSimulateUpload} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">✅ Ajouter (simulation)</button>
        </form>
        <p className="text-sm mt-4 text-gray-400 italic">⚠️ L’envoi réel nécessite un hébergement avec accès disque (Railway, VPS...).</p>
      </section>
    </main>
  );
}
