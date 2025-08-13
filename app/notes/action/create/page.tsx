"use client";
import { useEffect } from "react";
import { useNoteStore } from "@/lib/store/noteStore";
import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

export default function CreateNote() {
  const { setDraft } = useNoteStore();

  useEffect(() => {
    // Черновик загружается автоматически в NoteForm
  }, []);

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
