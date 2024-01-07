import Image from 'next/image';

import { cards } from './cards';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import styles from './card.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ResumeCard() {
  const renderedCards = cards.map((card, index) => {
    return (
      <SwiperSlide key={index} className={styles.card}>
        <div
          className={styles.card_header}
          style={{
            background: `linear-gradient( to bottom, ${card.colors.header}95, aliceblue)  `,
          }}
        >
          <h2 className={styles.card_heading}>{card.title}</h2>
        </div>
        <div className={styles.icons}>
          {card.icons.map((icon, index) => {
            return (
              <Image
                key={index}
                src={icon.img}
                width={48}
                height={48}
                alt={`${icon.title} icon`}
              />
            );
          })}
        </div>
        <div className={styles.card_content}>
          <div className={styles.school_head}>
            <p>school</p>
            <p>instructor</p>
          </div>
          <div className={styles.school}>
            <p>{card.school}</p>
            <p>{card.instructor}</p>
          </div>
          <div className={styles.completion}>
            <p>completed</p>
            <p>{card.completed}</p>
          </div>
          <ul className={styles.details}>
            {card.details.map((det, index) => {
              return <li key={index}>{det}</li>;
            })}
          </ul>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className='mySwiper'
    >
      {renderedCards}
    </Swiper>
  );
}
