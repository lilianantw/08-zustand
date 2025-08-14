// app/not-found.tsx
import type { Metadata } from "next";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found | NoteHub",
  description: "The page you are looking for does not exist on NoteHub.",
  openGraph: {
    title: "404 - Page Not Found | NoteHub",
    description: "The page you are looking for does not exist on NoteHub.",
    siteName: "NoteHub",
    url: "https://notehub.vercel.app/not-found",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub - Page Not Found",
      },
    ],
    type: "website",
  },
};

export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
