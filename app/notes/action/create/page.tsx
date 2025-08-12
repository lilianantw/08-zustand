import { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";
import styles from "./create.module.css";

export const metadata: Metadata = {
  title: "NoteHub - Create New Note",
  description: "Create a new note in NoteHub to organize your tasks and ideas.",
  openGraph: {
    title: "NoteHub - Create New Note",
    description:
      "Create a new note in NoteHub to organize your tasks and ideas.",
    url: "https://your-vercel-app.vercel.app/notes/action/create",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function CreateNotePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
