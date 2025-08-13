import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata = {
  title: "Create New Note",
  description:
    "Create a new note and save it as a draft or publish immediately.",
  openGraph: {
    title: "Create New Note",
    description:
      "Create a new note and save it as a draft or publish immediately.",
    url: "/notes/action/create",
    images: [{ url: "/og-create-note.png" }],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
