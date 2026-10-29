
export default function Hero() {
  return (
    <section className="flex min-h-[500px] items-center bg-orange-50 px-6 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 font-semibold uppercase tracking-widest text-orange-600">
            Welcome to FoodHut
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Delicious Food,
            <span className="text-orange-600"> Happy Moments</span>
          </h1>

          <p className="mb-8 max-w-lg leading-7 text-gray-600">
            Enjoy freshly prepared meals made with love.
            Discover amazing flavors and make every meal special.
          </p>

          <a
            href="#menu"
            className="inline-block rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Explore Menu
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
            alt="Fresh and delicious restaurant food"
            className="h-72 w-full rounded-2xl object-cover shadow-lg md:h-96"
          />
        </div>

      </div>
    </section>
  );
}
