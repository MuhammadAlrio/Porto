'use client'

import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.description}>
          Hubungi saya untuk kerja sama atau ngobrol santai.
        </p>
        <div>
          <p className={styles.contactItem}>
            <strong>Email:</strong>{' '}
            <a href="mailto:bagasale29@gmail.com" className={styles.link}>
              bagasale29@gmail.com
            </a>
          </p>
          <p className={styles.contactItem}>
            <strong>WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/6287838234365"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              +62 878-3823-4365
            </a>
          </p>
          <p className={styles.contactItem}>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://instagram.com/muhammad_alrio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              @muhammad_alrio
            </a>
          </p>
          <p className={styles.contactItem}>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/muhammad-alrio-2914182b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Muhammad Alrio
            </a>
          </p>
          <p className={styles.contactItem}>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/MuhammadAlrio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              MuhammadAlrio
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
