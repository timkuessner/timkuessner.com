export default function About() {
  return (
    <section className="flex flex-col items-center justify-center bg-black px-4 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-semibold mb-12 text-center text-white">About Me</h2>
        
        <p className="text-center text-white text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          Hi, I'm Tim. I was born in Germany, grew up mostly in Switzerland, and finished school in 2026 in New Zealand. I'm looking for a full-stack developer role before starting university in September/October 2026, and I plan to keep working while studying.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-8 rounded-2xl border-2 border-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300 cursor-pointer group hover:-translate-y-1">
            <h3 className="text-xl font-medium mb-2">Frontend</h3>
            <p>React & Tailwind</p>
          </div>
          
          <div className="p-8 rounded-2xl border-2 border-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300 cursor-pointer group hover:-translate-y-1">
            <h3 className="text-xl font-medium mb-2">Backend</h3>
            <p>Node.js & Firebase or Supabase</p>
          </div>
          
          <div className="p-8 rounded-2xl border-2 border-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300 cursor-pointer group hover:-translate-y-1">
            <h3 className="text-xl font-medium mb-2">Hardware</h3>
            <p>ESP32-S3 & Arduino</p>
          </div>
        </div>
      </div>
    </section>
  );
}
