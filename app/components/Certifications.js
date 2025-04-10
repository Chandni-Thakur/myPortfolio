// components/Certifications.jsx
import { FileText } from "lucide-react";

export default function Certifications() {
  const certificates = [
    {
      title: "Cybersecurity Essentials - Cisco",
      link: "https://drive.google.com/file/d/12tr0qcD9im09yjbui6tcnFwvi0QX5yaV/view?usp=drivesdk",
    },
    {
      title: "Java Certificate - Wipro",
      link: "https://drive.google.com/file/d/12sqVVyZKPgUJ3CUD1Z3ochvRQzbUpgIZ/view?usp=drivesdk",
    },
    {
      title: "Introduction to Python - CCNA",
      link: "https://drive.google.com/file/d/12yh3zDfpM4REd-b6TU7HJ0KYHG3Airfi/view?usp=drivesdk",
    },
  ];

  return (
    <section id="certifications" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
        <ul className="space-y-4">
          {certificates.map((cert, index) => (
            <li key={index} className="flex items-center gap-3 text-lg">
              <FileText className="text-indigo-400" />
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
