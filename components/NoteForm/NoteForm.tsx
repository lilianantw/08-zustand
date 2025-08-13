import css from "./NoteForm.module.css";

export default function NoteForm() {
  return (
    <form className={css.form} action="/api/notes" method="POST">
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className={css.input}
          required
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          className={css.textarea}
          required
        />
      </div>
      <div className={css.actions}>
        <button
          type="submit"
          name="action"
          value="draft"
          className={css.submitButton}
        >
          Save as Draft
        </button>
        <button
          type="submit"
          name="action"
          value="publish"
          className={css.submitButton}
        >
          Publish
        </button>
      </div>
    </form>
  );
}
