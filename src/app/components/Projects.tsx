'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const myProjects = [
    {
      title: '1',
      description: 'Fitur Login dan Register',
      imageUrl: '/images/5.jpg',
    },
    {
      title: '2',
      description: 'Management Menu Cafe',
      imageUrl: '/images/6.jpg',
    },
    {
      title: '3',
      description: 'Menu Cafe',
      imageUrl: '/images/7.jpg',
    },
    {
      title: '4',
      description: 'Order Menu',
      imageUrl: '/images/8.jpg',
    },
  ];

  const otherProjects = [
    {
      title: '1',
      description: 'Fitur Cuaca dan Tanggal',
      imageUrl: '/images/1.jpg',
    },
    {
      title: '2',
      description: 'Fitur Option Website',
      imageUrl: '/images/2.jpg',
    },
    {
      title: '3',
      description: 'Home Page utama Website',
      imageUrl: '/images/3.jpg',
    },
    {
      title: '4',
      description: 'Fitur Contact Us dan Navigation Bar',
      imageUrl: '/images/4.jpg',
    },
  ];

  const newProjects = [
    {
      title: '1',
      description: 'Login Pilihan Stok atau CS',
      imageUrl: '/images/9.jpg',
    },
    {
      title: '2',
      description: 'Form Pemesanan',
      imageUrl: '/images/10.jpg',
    },
    {
      title: '3',
      description: 'Update Stok',
      imageUrl: '/images/11.jpg',
    },
    {
      title: '4',
      description: 'Hasil Form Pemesanan',
      imageUrl: '/images/12.jpg',
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderProjects = (projects: typeof myProjects) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '16px',
            maxWidth: '300px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setSelectedImage(project.imageUrl)}
        >
          <div
            style={{
              width: '100%',
              height: '180px',
              overflow: 'hidden',
              borderRadius: '8px',
              marginBottom: '12px',
            }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={500}        // contoh ukuran, sesuaikan
              height={300}       // contoh ukuran, sesuaikan
              style={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
          <h3
            style={{
              margin: '0 0 8px 0',
              fontSize: '1.1rem',
              textAlign: 'center',
              color: '#5b4a3e',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#555',
              textAlign: 'center',
            }}
          >
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Judul utama */}
      <section
        id="projects-section"
        style={{
          paddingTop: '60px',
          paddingBottom: '20px',
          textAlign: 'center',
          backgroundColor: '#fefaf7',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#5b4a3e', marginBottom: '20px' }}>
          My Projects
        </h1>
      </section>

      {/* Section 1 */}
      <section
        id="my-projects"
        style={{ padding: '40px 20px', backgroundColor: '#fff' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#5b4a3e' }}>
          Project Food Ordering System
        </h2>
        {renderProjects(myProjects)}
      </section>

      {/* Section 2 */}
      <section
        id="other-projects"
        style={{ padding: '40px 20px', backgroundColor: '#fef9f5' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#5b4a3e' }}>
          Project Website Umrah dan E-Commerce
        </h2>
        {renderProjects(otherProjects)}
      </section>

      {/* Section 3 */}
      <section
        id="new-projects"
        style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#5b4a3e' }}>
          Project Aplikasi Lainnya
        </h2>
        {renderProjects(newProjects)}
      </section>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <Image
            src={selectedImage}
            alt="Preview"
            width={500}        // sesuaikan ukuran
            height={300}       // sesuaikan ukuran
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              cursor: 'default',
              animation: 'zoomIn 0.3s ease',
            }}
            onClick={e => e.stopPropagation()}
          />
          <style>{`
            @keyframes zoomIn {
              from {
                transform: scale(0.7);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
