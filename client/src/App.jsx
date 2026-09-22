import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getThreads, createThread } from "./services/threads.service";

console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);

export default function App() {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    data: threads = [],
    isLoading,
    isError,
    error: queryError,
  } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  async function onSubmit(e) {
    e.preventDefault();

    setSubmitting(true);
    setError("");

    try {
      await createThread({ title, body });

      setTitle("");
      setBody("");

      window.location.reload();
    } catch (e) {
      setError(String(e?.message || e));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="wrap">
      <h1>Threadbase</h1>

      <p className="muted">
        API base URL:{" "}
        <code>{String(import.meta.env.VITE_API_URL)}</code>
      </p>

      {isLoading && <p>Loading threads...</p>}

      {isError && (
        <p className="err">
          Error: {queryError?.message}
        </p>
      )}

      {!isLoading && !isError && (
        <>
          <form onSubmit={onSubmit}>
            <input
              placeholder="Thread title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="Thread body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={3}
              required
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "Adding..." : "Add thread"}
            </button>

            {error && <span className="err">{error}</span>}
          </form>

          {threads.map((t) => (
            <div className="card" key={t.id}>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
