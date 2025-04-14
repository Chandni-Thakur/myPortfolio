import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />

      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-indigo-500 mb-6">
        <img
          src="/profile.jpg"
          alt="Chandni Thakur"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-indigo-500">Chandni Thakur</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-6">
            Java Developer | Full Stack Learner | Software Engineering Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="/Chandni_Thakur_CV.pdf" 
              className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      
      <section id="about">
        <About />
      </section>

      <section id="education">
      <Education />
      </section>


      <section id="projects">
        <Projects />
      </section>

      <section id="certifications">
      <Certifications />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

     
    </main>
  );
}
