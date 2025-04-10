export const metadata = {
  title: "About | My Portfolio",
  description: "Learn more about me and my background.",
};

// src/app/about/page.tsx

import aboutData from "@/data/about.json";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Intro */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
        <p className="mt-4 text-gray-700 text-lg">{aboutData.intro}</p>
      </div>

      {/* Academic Background */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Academic Background
        </h2>
        <ul className="mt-6 divide-y divide-gray-200">
          {aboutData.academicBackground.map((item, index) => (
            <li key={index} className="py-6 first:pt-0 last:pb-0">
              <p className="text-sm text-gray-500">
                {item.startYear} – {item.endYear}
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700 italic">
                {item.institution}
                {item.location ? `, ${item.location}` : ""}
              </p>
              {item.note && (
                <p className="text-gray-600 mt-1 text-sm">{item.note}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills & Tools */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Things I am Pretty Good At
        </h2>
        <div className="mt-4 space-y-4">
          {aboutData.skills.prettyGoodAt.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-gray-700">
                {category.label}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                {category.items.map((item, i) => (
                  <li key={i} className="px-2 py-1 bg-gray-100 rounded-md">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <h2 className="text-2xl font-semibold text-gray-800 mt-10">
          Things I am Not So Good At (Yet!)
        </h2>
        <div className="mt-4 space-y-4">
          {aboutData.skills.gettingThere.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-gray-700">
                {category.label}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                {category.items.map((item, i) => (
                  <li key={i} className="px-2 py-1 bg-yellow-50 rounded-md">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>

      {/* Personal Touch */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">A Little More</h2>
        <p className="mt-4 text-gray-700">{aboutData.personalTouch}</p>
      </div>
    </section>
  );
}
