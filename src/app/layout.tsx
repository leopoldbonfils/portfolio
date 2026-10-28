import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AIChatWidget from '@/components/AIChatWidget';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: `${profile.role} & Software Engineer in Kigali, Rwanda. Practical web applications, distributed Java systems, Oracle PL/SQL, React Native, and clean code.`,
  keywords: [
    'Leopold Mugisha',
    'Mugisha Leopold Bonfils',
    'Full-Stack Developer',
    'Software Engineer Rwanda',
    'Software Engineering Kigali',
    'Java RMI',
    'Oracle PL/SQL',
    'React Native Developer',
    'Next.js Portfolio',
    'Kigali Developer',
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: 'website',
    locale: 'en_US',
    siteName: `${profile.name} Portfolio`,
  },
  icons: {
    icon: '/image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080807] text-[#f2ede4] min-h-screen relative selection:bg-accent selection:text-[#080807]">
        {/* Interactive Particle Constellation Canvas */}
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* AI Representative Floating Assistant */}
        <AIChatWidget />
      </body>
    </html>
  );
}
