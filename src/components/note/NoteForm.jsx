import { useState } from "react";

export const NoteForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [main, setMain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, main);
    setName("");
    setMain("");
  };

  return (
    <form className="mb-20 mt-10 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="judul-catatan"
        id="judul-catatan"
        className="mx-auto block w-3/4 rounded-lg border-2 border-pink-500 bg-neutral-200 px-2 py-1.5 font-serif shadow-lg placeholder:font-dosis focus:outline-none focus:ring-2 focus:ring-pink-700"
        placeholder="Masukan judul catatan ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="mx-auto mt-5 block h-60 w-3/4 rounded-lg border-2 border-pink-500 bg-neutral-200 px-2 py-1.5 font-serif shadow-lg placeholder:font-dosis focus:outline-none focus:ring-2 focus:ring-pink-700"
        name="isi-catatan"
        id="isi-catatan"
        placeholder="Masukan isi catatan ..."
        value={main}
        onChange={(e) => setMain(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="mx-auto mt-5 block w-fit rounded-lg bg-pink-500 px-8 py-2 text-xl text-white shadow-lg hover:bg-pink-400"
      >
        Buat
      </button>
    </form>
  );
};
