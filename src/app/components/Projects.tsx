'use client';

import React, { useState } from 'react';

export default function Projects() {
  const myProjects = [
    {
      title: 'Proyek Saya 1',
      description: 'Deskripsi singkat proyek saya 1.',
      imageUrl: '/images/5.jpg',
    },
    {
      title: 'Proyek Saya 2',
      description: 'Deskripsi singkat proyek saya 2.',
      imageUrl: '/images/6.jpg',
    },
    {
      title: 'Proyek Saya 3',
      description: 'Deskripsi singkat proyek saya 3.',
      imageUrl: '/images/7.jpg',
    },
    {
      title: 'Proyek Saya 4',
      description: 'Deskripsi singkat proyek saya 4.',
      imageUrl: '/images/8.jpg',
    },
  ];

  const otherProjects = [
    {
      title: 'Proyek 1',
      description: 'Deskripsi singkat proyek 1.',
      imageUrl: '/images/1.jpg',
    },
    {
      title: 'Proyek 2',
      description: 'Deskripsi singkat proyek 2.',
      imageUrl: '/images/2.jpg',
    },
    {
      title: 'Proyek 3',
      description: 'Deskripsi singkat proyek 3.',
      imageUrl: '/images/3.jpg',
    },
    {
      title: 'Proyek 4',
      description: 'Deskripsi singkat proyek 4.',
      imageUrl: '/images/4.jpg',
    },
  ];

  const newProjects = [
    {
      title: 'Proyek Baru 1',
      description: 'Deskripsi proyek baru yang lebih keren.',
      imageUrl: '/images/9.jpg',
    },
    {
      title: 'Proyek Baru 2',
      description: 'Deskripsi proyek baru yang lebih keren.',
      imageUrl: '/images/10.jpg',
    },
    {
      title: 'Proyek Baru 3',
      description: 'Deskripsi proyek baru yang lebih keren.',
      imageUrl: '/images/11.jpg',
    },
    {
      title: 'Proyek Baru 4',
      description: 'Deskripsi proyek baru yang lebih keren.',
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
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
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
          My Project's
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
          <img
            src={selectedImage}
            alt="Preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
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
