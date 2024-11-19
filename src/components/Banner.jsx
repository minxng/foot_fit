export default function Banner() {
  return (
    <section className="relative w-full h-52 overflow-hidden">
      <img
        className="w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-sm"
        src={process.env.REACT_APP_BANNER_BACKGROUND_IMG}
        alt=""
      />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        Der Ball ist rund und ein Spiel dauert 90 Minuten.
      </p>
    </section>
  );
}
