import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgDecoration}></div>
      <div className={styles.left}>
      <Image
        src="/images/foto.jpg"
        alt="Foto Profil"
        width={300}    // sesuaikan ukuran
        height={300}   // sesuaikan ukuran
        priority={true} // jika ingin preloading supaya langsung tampil cepat
      />
      </div>

      <div className={styles.center}>
        <h1>Halo, saya Muhammad Alrio Bagaskara</h1>
        <h3>Web Developer & IT Specialist</h3>

        <p>
          Saya adalah seorang Web Developer dan IT Specialist lulusan D3 Teknologi Komputer dari Telkom University (IPK 3.56), dengan pengalaman kerja nyata dalam pengembangan website dan integrasi sistem. Saya telah terlibat dalam berbagai proyek — mulai dari magang di perusahaan telekomunikasi nasional hingga bekerja remote untuk startup digital.
        </p>

        <p>
          Gairah saya dalam membangun produk digital didasari pada prinsip menempatkan manusia sebagai pusat perhatian. Saya memastikan solusi yang dibuat relevan, bermanfaat, dan dapat diandalkan, baik dari sisi teknis maupun fungsional.
        </p>

        <p>
          Pengalaman saya mencakup:
          <br />• Teknisi pembangunan dan integrasi OLT di PT PLN Icon Plus (Mar–Agu 2023)
          <br />• Web Developer remote di PT Panca Grup Indonesia (Nov 2024 – Apr 2024)
          <br />• IT Backend & Frontend di PT Beesan Baklava (Jan 2025 – sekarang)
        </p>

        <p>
          Saya terbiasa bekerja secara kolaboratif, memiliki kemampuan komunikasi yang baik, dan terus belajar untuk meningkatkan kompetensi di dunia teknologi.
        </p>

        <div className={styles.ctaWrapper}>
          <a href="#projects" className={styles.ctaButton}>Lihat Projek Saya</a>
          <a href="/pdf/CV Muhammad Alrio Bagaskara.pdf" className={styles.cvButton} download>Download CV</a>
        </div>
      </div>

      <div className={styles.right}>
        {/* Kosong untuk sekarang */}
      </div>
    </section>
  );
};

export default Hero;
