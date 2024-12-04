export default function Banner() {
  return (
    <section className="w-full overflow-hidden">
      <picture>
        <source
          srcSet="https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/1300w/image-manager/spurs-2425away-shop-desktopcategoryhero-mic.jpg?t=1719825574"
          media="(min-width: 640px)"
        />
        <img
          className="w-full"
          src="https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/480w/image-manager/spurs-2425away-shop-mobilecathero-sarr-6.jpg?t=1719825536"
          alt=""
        />
      </picture>
    </section>
  );
}
