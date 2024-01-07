import Image from 'next/image';

import { cards } from './cards';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCube } from 'swiper/modules';

import styles from './mobileCard.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function MobileCard() {
  const renderedCards = cards.map((card, index) => {
    return (
      <SwiperSlide key={index} className={styles.card}>
        <div
          className={styles.card_header}
          style={{
            background: `linear-gradient( to bottom, ${card.colors.header}95, aliceblue)  `,
            color: `#000`,
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
              return (
                <li key={index} className={styles.detail}>
                  {det}
                </li>
              );
            })}
          </ul>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 40,
        shadowScale: 0.9,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className='mySwiper'
    >
      {renderedCards}
    </Swiper>
  );
}
