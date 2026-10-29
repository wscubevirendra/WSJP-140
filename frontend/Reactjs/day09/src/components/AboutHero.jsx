
export default function AboutHero() {
  return (
    <section className="bg-orange-50 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
            alt="Restaurant interior and dining area"
            className="h-72 w-full rounded-2xl object-cover shadow-lg md:h-[450px]"
          />
        </div>

        {/* Right: Content */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-600">
            About FoodHut
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Good Food, Great
            <span className="text-orange-600"> Memories</span>
          </h1>

          <p className="mb-5 leading-7 text-gray-600">
            At FoodHut, we believe that great food brings people
            together. We prepare delicious meals using fresh
            ingredients and serve every dish with care.
          </p>

          <p className="mb-8 leading-7 text-gray-600">
            Whether you're enjoying a family dinner or meeting
            friends, we aim to make every visit special with
            quality food and friendly service.
          </p>

          {/* Features */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-orange-600">
                10+
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Years of Experience
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-orange-600">
                50+
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Delicious Dishes
              </p>
            </div>
          </div>

          <a
            href="#menu"
            className="inline-block rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Explore Our Menu
          </a>
        </div>

      </div>
    </section>
  );
}
