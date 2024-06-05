export const NoteItem = ({ note, onDelete }) => (
  <li
    key={note.id}
    className="mb-5 flex w-full flex-col rounded-lg border-2 border-pink-500 bg-neutral-200 px-6 py-4 text-black shadow-lg lg:w-[30%]"
  >
    <h1 className="text-2xl font-bold">{note.name}</h1>
    <h2>{note.date}</h2>
    <p className="mt-3 text-base">{note.main}</p>
    <p className="mt-3 text-sm text-gray-500">ID: {note.id}</p>
    <button
      className="mt-8 w-full rounded-lg bg-pink-500 py-2 text-center font-bold text-white hover:bg-pink-400"
      onClick={() => onDelete(note.id)}
    >
      Delete
    </button>
  </li>
);
