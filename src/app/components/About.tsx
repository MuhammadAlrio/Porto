import React from 'react';
import styles from './AboutMe.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>What I Do</h2>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Design Leadership</h3>
          <ul>
            <li>Menginisiasi departemen riset & inovasi, menyusun visi, proses, dan perekrutan talenta.</li>
            <li>Berpengalaman memimpin inisiatif desain dan menyelaraskan kebutuhan pengguna dengan tujuan bisnis.</li>
            <li>Meningkatkan maturitas desain melalui strategi lintas fungsi di organisasi produk dan bisnis.</li>
            <li>Mendorong pertumbuhan melalui mentoring, pelatihan, dan knowledge sharing.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Workshop & Facilitation</h3>
          <ul>
            <li>Fasilitator workshop kreatif dan pemecahan masalah.</li>
            <li>Berpengalaman memimpin design sprint.</li>
            <li>Menyusun dan memfasilitasi sesi discovery dan ideation produk.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>UX & Strategic Design</h3>
          <ul>
            <li>Strategi UX dan visi produk yang berorientasi pada pengguna.</li>
            <li>Transformasi ide kompleks menjadi prototype high/low fidelity.</li>
            <li>Wawancara pengguna, usability testing, dan pemetaan user journey.</li>
            <li>Prototyping, wireframing, dan analisis tren desain human-centric.</li>
            <li>Pengembangan produk end-to-end: research, prototyping, evaluasi impact.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
