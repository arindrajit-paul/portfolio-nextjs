import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg bg-white shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
      {image ? (
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm italic">
          No image available
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>

        {Array.isArray(tags) && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          View project →
        </Link>
      </div>
    </div>
  );
}
