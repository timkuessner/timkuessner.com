import { useState } from "react";
import { testBackend, testDatabase } from "./api/api";

const skills = [
  "React.js",
  "Tailwind",
  "CSS",
  "HTML",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Vite",
  "Git",
  "Firebase",
  "Supabase",
  "SQL",
  "Python",
  "Arduino",
  "ESP32-S3"
];

const repeatedSkills = [...skills, ...skills];

export default function App() {
  const [backendStatus, setBackendStatus] = useState<string>("");
  const [dbStatus, setDbStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleTestBackend = async () => {
    setLoading(true);
    try {
      const data = await testBackend();
      setBackendStatus(`✅ ${data.message}`);
    } catch (error) {
      setBackendStatus("❌ Backend connection failed");
    }
    setLoading(false);
  };

  const handleTestDatabase = async () => {
    setLoading(true);
    try {
      const data = await testDatabase();
      setDbStatus(`✅ ${data.message}`);
    } catch (error) {
      setDbStatus("❌ Database connection failed");
    }
    setLoading(false);
  };

  return (
    <div className="bg-black text-white w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <h1
          className="font-bold mb-12 text-center leading-tight"
          style={{ maxWidth: '70vw' }}
        >
          {/* Desktop */}
          <span
            className="hidden md:inline text-white"
            style={{
              fontSize: 'clamp(3rem, 7vw, 9rem)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Tim Jonas Kuessner
          </span>

          {/* Mobile */}
          <span
            className="md:hidden text-white"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Tim Kuessner
          </span>
        </h1>


        {/* Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-marquee items-center">
            {repeatedSkills.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-white text-2xl md:text-3xl font-extralight whitespace-nowrap mx-8 marquee-text leading-tight"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-10">
          <svg
            className="w-8 h-8 animate-[wiggle_1s_infinite]"
            fill="none"
            stroke="white"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Placeholder Section 0 - Backend/DB Test */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
        <h2 className="text-4xl mb-4">Testing Connections</h2>
        <div className="flex flex-col items-center gap-6 mt-6">
          {/* Backend */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleTestBackend}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold disabled:opacity-50"
            >
              Test Backend
            </button>
            {backendStatus && <p className="mt-2">{backendStatus}</p>}
          </div>

          {/* Database */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleTestDatabase}
              disabled={loading}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold disabled:opacity-50"
            >
              Test Database
            </button>
            {dbStatus && <p className="mt-2">{dbStatus}</p>}
          </div>
        </div>
      </section>

      {/* Placeholder Section 1 */}
      <section className="min-h-screen flex items-center justify-center bg-gray-800">
        <h2 className="text-4xl">Placeholder Section 1</h2>
      </section>

      {/* Placeholder Section 2 */}
      <section className="min-h-screen flex items-center justify-center bg-gray-700">
        <h2 className="text-4xl">Placeholder Section 2</h2>
      </section>

      {/* Placeholder Section 3 */}
      <section className="min-h-screen flex items-center justify-center bg-gray-600">
        <h2 className="text-4xl">Placeholder Section 3</h2>
      </section>
    </div>
  );
}
