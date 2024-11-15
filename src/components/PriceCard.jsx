export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="text-main text-bold text-xl md:text-2xl">{price}</p>
    </div>
  );
}
