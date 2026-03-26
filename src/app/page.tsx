'use client'

import { useState } from 'react'
import Link from 'next/link'

// ===== NAVBAR COMPONENT =====
function Navbar() {
  return (
    <nav className="flex items-center px-4 md:px-8 py-1 md:py-1 fixed top-0 w-full z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', borderBottom: '1px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(50px)', borderRadius: '0 0 12px 12px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.12)' }}>
      <img src="public/IMG_2086 (1) 2.png" alt="EverlyCareHome Logo" className="h-14 md:h-24" style={{ marginLeft: '-8px' }} />
      <div className="flex gap-0 text-lg md:text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">
        <a href="#home" className="px-2 md:px-3 py-2 rounded-lg transition duration-200" style={{ color: '#68838c' }} onMouseEnter={(e) => { e.currentTarget.style.textShadow = '0 0 10px rgba(104, 131, 140, 0.7)'; }} onMouseLeave={(e) => { e.currentTarget.style.textShadow = 'none'; }} onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }} onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>Home</a>
        <a href="#about" className="px-2 md:px-3 py-2 rounded-lg transition duration-200" style={{ color: '#68838c' }} onMouseEnter={(e) => { e.currentTarget.style.textShadow = '0 0 10px rgba(104, 131, 140, 0.7)'; }} onMouseLeave={(e) => { e.currentTarget.style.textShadow = 'none'; }} onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }} onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>About</a>
        <a href="#services" className="px-2 md:px-3 py-2 rounded-lg transition duration-200" style={{ color: '#68838c' }} onMouseEnter={(e) => { e.currentTarget.style.textShadow = '0 0 10px rgba(104, 131, 140, 0.7)'; }} onMouseLeave={(e) => { e.currentTarget.style.textShadow = 'none'; }} onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }} onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>Services</a>
        <a href="#contact" className="px-2 md:px-3 py-2 rounded-lg transition duration-200" style={{ color: '#68838c' }} onMouseEnter={(e) => { e.currentTarget.style.textShadow = '0 0 10px rgba(104, 131, 140, 0.7)'; }} onMouseLeave={(e) => { e.currentTarget.style.textShadow = 'none'; }} onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }} onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>Contact</a>
      </div>
    </nav>
  )
}

// ===== FOOTER COMPONENT =====
function Footer() {
  return (
    <footer className="text-white text-center p-6" style={{ backgroundColor: '#68838c' }}>
      <p>© 2026 EverlyCareHome. Premium Assisted Living Services.</p>
    </footer>
  )
}

// ===== HERO SECTION =====
function Hero() {
  return (
    <div 
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative bg-cover bg-center pt-20 md:pt-0"
      style={{
        backgroundImage: 'url(/closeup-support-hands.jpg)',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg" style={{ fontFamily: 'Georgia, Garamond, serif' }}>
          Welcome!
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-2xl mb-6 md:mb-8 drop-shadow-lg">
          Experience compassionate care in a warm, supportive community designed for dignity, independence, and meaningful living.
        </p>
        <button 
          className="px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg transition hover:opacity-90"
          style={{ backgroundColor: '#7e529e', color: '#ffffff' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(126, 82, 158, 0.8)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(126, 82, 158, 0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#7e529e'; e.currentTarget.style.boxShadow = 'none'; }}
          onMouseDown={(e) => { e.currentTarget.style.backgroundColor = 'rgba(126, 82, 158, 0.6)'; e.currentTarget.style.transform = 'scale(0.95)'; }}
          onMouseUp={(e) => { e.currentTarget.style.backgroundColor = 'rgba(126, 82, 158, 0.8)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Schedule a Tour
        </button>
      </div>
    </div>
  )
}

// ===== MAIN HOME PAGE =====
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: '#68838c', fontFamily: 'Georgia, Garamond, serif' }}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="p-6 md:p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition" style={{ boxShadow: '0 0 20px rgba(126, 82, 158, 0.4)' }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: '#68838c' }}>24/7 Professional Care</h3>
            <p style={{ color: '#000000' }}>Round-the-clock medical support and assistance with daily activities tailored to each resident's needs.</p>
          </div>
          <div className="p-6 md:p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition" style={{ boxShadow: '0 0 20px rgba(126, 82, 158, 0.4)' }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: '#68838c' }}>Personalized Accommodations</h3>
            <p style={{ color: '#000000' }}>Beautiful private rooms decorated and furnished with your comfort in mind, designed for optimal comfort and accessibility standards.</p>
          </div>
          <div className="p-6 md:p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition" style={{ boxShadow: '0 0 20px rgba(126, 82, 158, 0.4)' }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: '#68838c' }}>Community Activities</h3>
            <p style={{ color: '#000000' }}>Engaging programs, events, and social activities that foster meaningful connections and wellness.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-cover bg-center" style={{ backgroundImage: 'url(/Background%20-%20White.jpg)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8" style={{ color: '#68838c', fontFamily: 'Georgia, Garamond, serif' }}>About EverlyCareHome</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed" style={{ color: '#000000' }}>
            EverlyCareHome is a caring assisted living community dedicated to providing exceptional care with dignity and respect. Our experienced team creates a warm, supportive environment where residents can maintain their independence while receiving the professional support they need.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#000000' }}>
            We believe that quality care goes beyond medical services—it's about building meaningful relationships and fostering a sense of community for our residents and their families.
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: '#68838c', fontFamily: 'Georgia, Garamond, serif' }}>Our Location</h2>
        <div className="max-w-4xl mx-auto">
          {/* Map */}
          <iframe
            className="w-full h-96 md:h-96 rounded-lg shadow-lg mb-6"
            src="https://maps.google.com/maps?q=215+Castillon+Way,+San+Jose,+CA+95119&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-center">
            <p className="text-2xl font-semibold mb-2" style={{ color: '#68838c' }}>
              215 Castillon Way
            </p>
            <p className="text-lg mb-4" style={{ color: '#000000' }}>
              San Jose, CA 95119
            </p>
            <a 
              href="https://www.google.com/maps/place/215+Castillon+Way,+San+Jose,+CA+95119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg font-semibold transition hover:opacity-90"
              style={{ backgroundColor: '#7e529e', color: '#ffffff' }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-0" style={{ backgroundColor: '#f9f9f9' }}>
        {/* Contact Header with Background Image */}
        <div 
          className="min-h-96 flex flex-col justify-center items-center text-center px-4 md:px-6 relative bg-cover"
          style={{
            backgroundImage: 'url(/annie-spratt-goholCAVTRs-unsplash.jpg)',
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center 70%'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'Georgia, Garamond, serif' }}>Contact Us</h2>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-12 md:py-20 px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 mr-2" style={{ color: '#000000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: '#000000' }}>OWNER</p>
                </div>
                <p className="text-2xl font-semibold" style={{ color: '#7e529e' }}>
                  Nazila Fereydoon (Nazy)
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 mr-2" style={{ color: '#000000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: '#000000' }}>PHONE</p>
                </div>
                <a href="tel:408-316-3016" className="text-2xl font-semibold hover:opacity-80 transition" style={{ color: '#7e529e' }}>
                  408-316-3016
                </a>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 mr-2" style={{ color: '#000000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: '#000000' }}>EMAIL</p>
                </div>
                <a href="mailto:everlycarehome@gmail.com" className="text-2xl font-semibold break-all hover:opacity-80 transition" style={{ color: '#7e529e' }}>
                  everlycarehome@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

