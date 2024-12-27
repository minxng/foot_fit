import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function Banner() {
  const images = [
    {
      pc: "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/1300w/image-manager/spurs-2425away-shop-desktopcategoryhero-mic.jpg?t=1719825574",
      mobile:
        "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/480w/image-manager/spurs-2425away-shop-mobilecathero-sarr-6.jpg?t=1719825536",
    },
    {
      pc: "https://res.cloudinary.com/dfd3hx72e/image/upload/v1735280627/banner_1_pga4my.jpg",
      mobile:
        "https://res.cloudinary.com/dfd3hx72e/image/upload/v1735284560/banner_1_mobile_dcbmo4.jpg",
    },
    {
      pc: "https://res.cloudinary.com/dfd3hx72e/image/upload/v1735280552/banner_2_cvyubm.webp",
      mobile:
        "https://res.cloudinary.com/dfd3hx72e/image/upload/v1735284560/banner_2_mobile_nizo2n.webp",
    },
    {
      pc: "https://res.cloudinary.com/dfd3hx72e/image/upload/v1735284560/banner_3_r3clqm.webp",
      mobile:
        "https://res.cloudinary.com/dfd3hx72e/image/upload/v1735284560/banner_3_mobile_bnfjea.webp",
    },
  ];
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((img) => (
          <SwiperSlide key={img.pc}>
            <picture>
              <source srcSet={img.pc} media="(min-width: 640px)" />
              <img className="w-full" src={img.mobile} alt="배너" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
