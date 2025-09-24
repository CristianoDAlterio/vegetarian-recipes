function stripHtml(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return tmp.textContent || tmp.innerText || "";
}

export default function Instructions({ text }) {
  if (!text) return null;

  return (
    <>
      <h2>Istruzioni</h2>
      <p>{stripHtml(text)}</p>
    </>
  );
}
