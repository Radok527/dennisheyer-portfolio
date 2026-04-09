import {
  Navbar,
  HeroSection,
  TechSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="py-8 border-t border-zinc-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dennis Heyer. All rights reserved.</p>
      </footer>
    </div>
  );
}
