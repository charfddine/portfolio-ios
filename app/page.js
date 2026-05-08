// NEXT.JS 14 PORTFOLIO READY TO DEPLOY
// ====================================
// INSTALLATION:
// 1. npx create-next-app@latest portfolio-ios
// 2. Replace app/page.js with this file
// 3. npm run dev
// 4. Push to GitHub
// 5. Deploy on Vercel

'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  const experiences = [
    {
      company: 'FeetMe',
      period: '2022 – 2025',
      description:
        'Développement d’applications santé connectée avec SwiftUI, Combine et CI/CD.',
      tech: ['SwiftUI', 'Combine', 'Fastlane', 'Firebase', 'MVVM-C'],
    },
    {
      company: 'IVIFLO',
      period: '2019 – 2021',
      description:
        'Application IoT et Smart Building avec BLE, géolocalisation et architecture MVVM.',
      tech: ['Swift', 'RxSwift', 'BLE', 'Realm', 'Firebase'],
    },
    {
      company: 'StreamWide',
      period: '2017 – 2019',
      description:
        'Solutions de communication sécurisée et VoIP professionnelles.',
      tech: ['Swift', 'Objective-C', 'UIKit', 'MapKit'],
    },
  ];

  const skills = [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Objective-C',
    'Combine',
    'RxSwift',
    'MVVM-C',
    'Fastlane',
    'XCTest',
    'Firebase',
    'GitLab CI/CD',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-90" />

      <header className="relative z-10 px-6 md:px-20 py-10 flex items-center justify-between border-b border-zinc-800 backdrop-blur">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            Ilahi Charfeddine
          </h1>
          <p className="text-zinc-400 mt-2">Senior iOS Developer</p>
        </div>

        <div className="hidden md:flex gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="px-6 md:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Disponible immédiatement
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Building
              <br />
              Elegant iOS
              <br />
              Experiences.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Développeur iOS Senior avec 10 ans d’expérience en France et à
              l’international. Spécialisé dans Swift, SwiftUI et les architectures
              modernes pour créer des applications performantes et élégantes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ilahi.charfeddine@gmail.com"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform"
              >
                Contact Me
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative flex justify-center animate-in fade-in zoom-in duration-1000">
            <div className="w-[320px] h-[640px] bg-zinc-900 rounded-[3rem] border border-zinc-800 shadow-2xl p-4 rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-zinc-500 mb-4">Senior iOS Developer</p>
                  <h3 className="text-4xl font-bold mb-4">SwiftUI</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Clean Architecture • Performance • Modern UI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 md:px-20 py-20 border-t border-zinc-900">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold mb-8">About Me</h3>
            <p className="text-zinc-400 leading-8 text-lg">
              Passionné par l’écosystème Apple, je développe des applications iOS
              robustes et modernes depuis plus de 10 ans. J’ai travaillé sur des
              projets santé connectée, IoT, communication sécurisée et applications
              grand public avec une forte attention portée à l’expérience utilisateur,
              la qualité du code et les performances.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="px-6 md:px-20 py-20 border-t border-zinc-900"
        >
          <h3 className="text-4xl font-bold mb-12">Experience</h3>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold">{exp.company}</h4>
                    <p className="text-zinc-500">Senior iOS Developer</p>
                  </div>
                  <span className="text-zinc-400">{exp.period}</span>
                </div>

                <p className="text-zinc-400 leading-7 mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="px-6 md:px-20 py-20 border-t border-zinc-900">
          <h3 className="text-4xl font-bold mb-12">Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:scale-105 transition-transform"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="px-6 md:px-20 py-24 border-t border-zinc-900"
        >
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[2rem] p-10 text-center">
            <h3 className="text-4xl font-bold mb-6">Let’s Build Something Great</h3>

            <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg leading-8">
              Disponible en CDI ou Freelance, Full Remote ou hybride.
              Contactez-moi pour discuter de vos projets iOS.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ilahi.charfeddine@gmail.com"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        © 2026 Ilahi Charfeddine — Senior iOS Developer
      </footer>
    </div>
  );
}
