import { useState } from "react";
import { NoteForm } from "./note/NoteForm";
import { NoteList } from "./note/NoteList";

export const Note = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const handleNotesSubmit = (name, main) => {
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
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.name.toLowerCase().includes(search.toLowerCase()) ||
      note.id.toString().includes(search),
  );

  return (
    <section className="pt-20 text-left">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-center text-4xl font-bold uppercase">
              Buat Notes
            </h1>
            <NoteForm onSubmit={handleNotesSubmit} />
          </div>
          <div className="mt-40 w-full">
            <h1 className="text-center text-4xl font-bold uppercase">
              Cari Notes
            </h1>
            <input
              type="text"
              name="cari-catatan"
              id="cari-catatan"
              className="mx-auto mt-10 block w-3/4 rounded-lg border-2 border-pink-500 bg-neutral-200 px-2 py-1.5 font-serif shadow-lg placeholder:font-dosis focus:outline-none focus:ring-2 focus:ring-pink-700"
              placeholder="Masukkan judul atau ID catatan ..."
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="mt-40 w-full">
            <h1 className="text-center text-4xl font-bold uppercase">Notes</h1>
            <NoteList notes={filteredNotes} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </section>
  );
};
