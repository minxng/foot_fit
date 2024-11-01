export default function Button({ text, onClick }) {
  return (
    <button className="bg-main text-white rounded px-4 py-2" onClick={onClick}>
      {text}
    </button>
  );
}
