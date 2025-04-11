export const metadata = {
  title: "Home | My Portfolio",
  description: "Welcome to my personal website and research portfolio.",
};

export default function HomePage() {
  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Hi, I&apos;m Arindrajit 👋
        </h1>
        <p className="text-lg text-gray-700">
          I&apos;m a computer science graduate student passionate about machine
          learning, public health forecasting, and ethical AI systems. I build
          models, analyze data, and love turning complex problems into elegant
          solutions.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
