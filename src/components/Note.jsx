import { useState } from "react";

export const Note = () => {
  const [name, setName] = useState("");
  const [main, setMain] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        name: name,
        main: main,
        date: new Date().toLocaleDateString(),
        id: Date.now(),
      },
    ]);
    console.log(notes);
    setName("");
    setMain("");
  }

  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  const savedNotes = notes.map((note) => (
    <li
      key={note.id}
      className="mb-5 flex w-full flex-col rounded-lg border-2 border-pink-500 bg-neutral-200 px-6 py-4 text-black shadow-lg lg:w-[30%]"
    >
      <h1 className="text-2xl font-bold">{note.name}</h1>
      <h2>{note.date}</h2>
      <p className="mt-3 text-base">{note.main}</p>
      <button
        className="mt-8 w-full rounded-lg bg-pink-500 py-2 text-center font-bold text-white hover:bg-pink-400"
        onClick={() => handleDelete(note.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <section className="pt-20 text-left">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-center text-4xl font-bold uppercase">
              Buat Notes
            </h1>
            <form className="mt-10" onSubmit={handleSubmit}>
              <input
                type="text"
                name="judul-catatan"
                id="judul-catatan"
                className="mx-auto block w-2/3 rounded-lg border-2 border-pink-500 bg-neutral-200 px-2 py-1.5 font-serif shadow-lg placeholder:font-dosis focus:outline-none focus:ring-2 focus:ring-pink-700"
                placeholder="Judul catatan ..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                className="mx-auto mt-5 block h-60 w-2/3 rounded-lg border-2 border-pink-500 bg-neutral-200 px-2 py-1.5 font-serif shadow-lg placeholder:font-dosis focus:outline-none focus:ring-2 focus:ring-pink-700"
                name="isi-catatan"
                id="isi-catatan"
                placeholder="Isi catatan ..."
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
          </div>
          <div className="mt-[14rem] w-full">
            <h1 className="text-center text-4xl font-bold uppercase">
              Catatan
            </h1>

            <ul className="mt-14 flex flex-wrap justify-between font-sans">
              {savedNotes}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
