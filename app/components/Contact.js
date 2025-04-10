import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-8">
          I'm open to opportunities, collaborations, or just a friendly chat. Reach out!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:chandnithakur.job@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-500 transition"
          >
            <Mail /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/chandni-thakur-220625271/"
            target="_blank"
            className="flex items-center gap-2 hover:text-indigo-500 transition"
          >
            <Linkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Chandni-Thakur"
            target="_blank"
            className="flex items-center gap-2 hover:text-indigo-500 transition"
          >
            <Github /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
