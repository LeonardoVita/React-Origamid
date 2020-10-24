import React from 'react'
import styles from '../Slide.module.css'


export default function Slide({ slides }) {

  const [active, setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const [size, setSize] = React.useState({ width: window.innerWidth, height: window.innerHeight });

  const contentRef = React.useRef()

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect()
    setPosition(-(width * active))
  }, [active, size])

  React.useEffect(() => {
    window.addEventListener('resize',
      () => setSize({
        width: window.innerWidth,
        height: window.innerHeight
      }));
  }, [])

  function slidePrev() {
    if (active > 0) setActive(active - 1)
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1)
  }

  if (slides) {
    return (
      <section className={styles.container}>
        <div
          className={styles.content}
          style={{ transform: `translateX(${position}px)` }}
          ref={contentRef}
        >
          {
            slides.map(slide => (
              <div key={slide.id} className={styles.item}>
                {slide.text}
              </div>
            ))
          }
        </div>
        <nav className={styles.nav}>
          <button onClick={slidePrev}>Anterior</button>
          <button onClick={slideNext}>proximo</button>
        </nav>
      </section>
    )
  }
}
