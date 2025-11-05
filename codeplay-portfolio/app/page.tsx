"use client"

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">CP</span>
            </div>
            <span className="text-xl font-bold">cODE PLAY</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About Us</a>
            <a href="#service" className="hover:text-purple-400 transition">Service</a>
            <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg mb-4 text-purple-300">we build</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">experience</h2>
            <p className="text-xl mb-12 text-gray-300">
              <span className="text-purple-400">website</span> - <span className="text-purple-400">digital marketing</span> - <span className="text-purple-400">branding</span>
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition uppercase">
                explore
              </button>
              <button className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition uppercase">
                reach us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl"></div>
                <div className="relative w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl flex items-center justify-center border border-purple-500/30">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-4">TENTANG ANDIKA SAPUTRA</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Halo, saya Andika — UI/UX Designer.<br /><br />
                Saya berfokus pada bagaimana desain bisa membuat teknologi terasa lebih manusiawi. Saya percaya bahwa setiap
                elemen visual harus punya tujuan: membuat pengguna merasa mudah, nyaman, dan terhubung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "WEB DEVELOPMENT",
                subtitle: "Frontend Engineer",
                description: "Mengubah desain menjadi kode nyata menggunakan framework seperti React atau Vue.",
                icon: "🌐"
              },
              {
                title: "UI/UX DESIGN",
                subtitle: "Design Systems",
                description: "Mendesain antarmuka yang intuitif dan menarik agar pengguna merasa nyaman.",
                icon: "🎨"
              },
              {
                title: "BACKEND",
                subtitle: "Backend Integration",
                description: "Menghubungkan frontend dengan API dan database untuk membuat sistem yang berfungsi penuh.",
                icon: "⚙️"
              },
              {
                title: "RESPONSIVE",
                subtitle: "Mobile First",
                description: "Membangun website responsif dan cepat dengan HTML, CSS, dan JavaScript modern.",
                icon: "📱"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-sm font-bold text-purple-400 mb-2">{service.title}</h4>
                <h5 className="text-xl font-bold mb-4">{service.subtitle}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UI Design Project",
                description: "Bikin tampilan website yang keren dan mudah dipakai, pakai warna gelap biar tampil beda.",
                color: "from-purple-600 to-blue-600"
              },
              {
                title: "Team Collaboration",
                description: "Sering kerja bareng teman buat ngerjain project sekolah biar hasilnya maksimal.",
                color: "from-pink-600 to-purple-600"
              },
              {
                title: "Problem Solving",
                description: "Suka cari cara unik buat nyelesain bug atau error pas coding — seru banget!",
                color: "from-blue-600 to-cyan-600"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`h-64 bg-gradient-to-br ${project.color} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                  <span className="text-6xl relative z-10">💻</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">what our Clients say about US</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Build Your Brand with Style",
                description: "We create design solutions that match your brand identity perfectly and attract your audience."
              },
              {
                title: "Grow Your Online Presence",
                description: "From web design to user experience, we make your digital face stand out and shine online."
              },
              {
                title: "Deliver Creative Solutions",
                description: "Our mission is to turn your ideas into interactive, functional, and stunning digital products."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30">
                <h4 className="text-xl font-bold mb-4">{testimonial.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{testimonial.description}</p>
                <button className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-12">WE'RE PROUD TO WORK WITH THESE COMPANIES</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Apple', 'Google', 'NVIDIA', 'Microsoft'].map((company, index) => (
              <div key={index} className="text-4xl font-bold text-gray-600 hover:text-purple-400 transition">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-6">WE'RE LOOKING FORWARD TO START PROJECT</h3>
          <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:scale-105 transition uppercase">
            CONTACT NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 py-16 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold">CP</span>
                </div>
                <span className="text-xl font-bold">Code Play</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reinventing the way of creating websites, we aim to create the most master-pieced WordPress theme available on the market
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-purple-400 mb-4">CONTACT US</h4>
              <div className="text-gray-400 text-sm space-y-2">
                <p>202 Helga Springs Rd, Crawford,<br />TN 38554</p>
                <p>Call idn: 0817278102</p>
                <p>DIKAWOILAH@GMAIL.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-purple-400 mb-4">SIGN UP UPDATES</h4>
              <p className="text-gray-400 text-sm mb-4">Sign up with your email address to receive news and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ENTER EMAIL ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-purple-500/30 rounded-lg text-sm focus:outline-none focus:border-purple-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">Copyright ©2023 Code Play. All rights reserved</p>
              <div className="flex gap-6 text-sm uppercase">
                <a href="#home" className="text-gray-500 hover:text-purple-400 transition">Home</a>
                <a href="#about" className="text-gray-500 hover:text-purple-400 transition">About Us</a>
                <a href="#service" className="text-gray-500 hover:text-purple-400 transition">Service</a>
                <a href="#blog" className="text-gray-500 hover:text-purple-400 transition">Blog</a>
                <a href="#contact" className="text-gray-500 hover:text-purple-400 transition">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
