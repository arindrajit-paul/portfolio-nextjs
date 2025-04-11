export const metadata = {
  title: "Research | My Portfolio",
  description: "Explore my publications and research interests.",
};

import researchData from "@/data/research.json";

export default function ResearchPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Intro */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Research</h1>
        {/* <p className="mt-4 text-gray-700 text-lg">{researchData.intro}</p> */}
        {researchData.intro.map((para, index) => (
          <p key={index} className="mt-4 text-gray-700 text-lg">
            {index === 1 ? (
              <>
                {para.split("profile")[0]}
                <a
                  href="https://scholar.google.com/citations?user=1jfNaoQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  profile
                </a>
                .
              </>
            ) : (
              para
            )}
          </p>
        ))}
      </div>

      {/* Publications */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Selected Publications
        </h2>
        <ul className="mt-6 space-y-6">
          {researchData.publications.map((pub, index) => (
            <li key={index} className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {pub.title}
              </h3>
              <p className="text-gray-600 italic">
                {pub.venue} ({pub.date})
              </p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View Publication
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
