export default function HomePage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore my work, research, and more below.
        </p>
      </div>

      {/* Dummy scrollable content */}
      <div className="mt-16 space-y-12 max-w-3xl mx-auto text-gray-700">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            commodo, nunc vitae placerat convallis, elit risus volutpat mauris,
            id vulputate sapien massa nec dui. Integer in ante et nisi placerat
            tincidunt at nec mauris.
          </p>
        ))}
      </div>
    </section>
  );
}
