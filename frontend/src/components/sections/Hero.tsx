import { SKILLS } from '../../constants/skills';

export default function Hero() {
  const repeatedSkills = [...SKILLS, ...SKILLS];

  
  function scrollDown() {
    const windowHeight = window.innerHeight;
    window.scrollBy({
        top: windowHeight,
        behavior: 'smooth'
    });
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <h1
        className="font-bold text-center leading-tight"
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

      <p className="hidden md:flex items-center justify-center gap-1 text-white mt-4 font-light">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        Switzerland | Fullstack Developer | Hardware
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </p>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden py-4 mt-8">
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
          onClick={scrollDown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
