import styles from './about.module.css';

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} id='about' className={styles.about}>
      <div className={styles.left_container}>
        <h2 className={styles.heading_secondary}>about me</h2>
        <h2 className={styles.heading_primary}>
          I design websites &amp; <br /> develop the logic.
        </h2>

        <a className='contact_button' href='#resume'>
          See my resume
        </a>
      </div>
      <div className={styles.right_container}>
        <p>
          <span className={styles.first_letter}>F</span>or the past few years, I
          have dedicated every spare moment I have to web development. I am
          extremely hungry for an opportunity to grow in this industry that has
          captivated my life. I am intelligent, analytical, and love to solve
          puzzles. I am determined, curious, creative, and relentless. I am a
          ridiculously fast learner, and I can learn on my own because I am
          incredibly resourceful.
        </p>
        <p>
          I began learning Javascript as my first step, through the
          recommendation of a close friend in the industry. I realized I wanted
          a more complete understanding of web design and development, so I took
          several courses on HTML, CSS, and advanced CSS. Then I went back and
          completed the course on Javascript. Afterwards, I completed courses on
          React, and NextJS. I have been developing web applications using
          NextJS, with a React framework, and Material UI components.
        </p>
      </div>
    </div>
  );
}
