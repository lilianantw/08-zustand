"use client";

import { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import css from "./not-found.module.css";

// Метаданные для страницы 404
export const metadata: Metadata = {
  title: "404 - Page Not Found | NoteHub",
  description: "The page you are looking for does not exist on NoteHub.",
  openGraph: {
    title: "404 - Page Not Found | NoteHub",
    description: "The page you are looking for does not exist on NoteHub.",
    siteName: "NoteHub",
    url: "https://08-zustand-ten-lake.vercel.app/not-found",
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

// Компонент страницы 404
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
