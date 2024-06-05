import { NoteItem } from "./NoteItem";

export const NoteList = ({ notes, onDelete }) => (
  <ul className="mt-14 flex flex-wrap justify-between font-sans">
    {notes.map((note) => (
      <NoteItem key={note.id} note={note} onDelete={onDelete} />
    ))}
  </ul>
);
