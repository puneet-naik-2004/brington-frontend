// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../Style/Number.css";

// export default function TwoRowsNumberSwiper() {
//   const row1 = [1, 2, 3, 4, 5, 6, 7, 8];
//   const row2 = [9, 10, 11, 12, 13, 14, 15, 16];

//   return (
//     <div className="two-rows-swiper">
//       {/* Row 1 */}
//       <h2 className="row-title">Row 1</h2>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         navigation
//         pagination={{ clickable: true }}
//         slidesPerView={3}
//         className="row-swiper"
//       >
//         {row1.map((num, i) => (
//           <SwiperSlide key={i} className="my-slide">
//             <div className="number-box">
//               <span className="number">{num}</span>
//               <span className="unit-text">Unit</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Row 2 */}
//       <h2 className="row-title">Row 2</h2>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={20}
//         navigation
//         pagination={{ clickable: true }}
//         slidesPerView={3}
//         className="row-swiper"
//       >
//         {row2.map((num, i) => (
//           <SwiperSlide key={i} className="my-slide">
//             <div className="number-box">
//               <span className="number">{num}</span>
//               <span className="unit-text">Unit</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Style/Number.css";

export default function TwoRowsNumberSwiper() {
  const row1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const row2 = [9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="two-rows-swiper">
      {/* Row 1 */}
      <h2 className="row-title">Row 1</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 }, // small phones
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktops
        }}
        className="row-swiper"
      >
        {row1.map((num, i) => (
          <SwiperSlide key={i} className="my-slide">
            <div className="number-box">
              <span className="number">{num}</span>
              <span className="unit-text">Unit</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2 */}
      <h2 className="row-title">Row 2</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="row-swiper"
      >
        {row2.map((num, i) => (
          <SwiperSlide key={i} className="my-slide">
            <div className="number-box">
              <span className="number">{num}</span>
              <span className="unit-text">Unit</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
