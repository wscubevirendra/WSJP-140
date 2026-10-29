
const recipes = [
  {
    id: 1,
    name: "Veggie Salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    rating: 4.5,
    time: "15 min",
    price: 199,
  },
  {
    id: 2,
    name: "Cheese Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    rating: 4.8,
    time: "25 min",
    price: 299,
  },
  {
    id: 3,
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
    rating: 4.6,
    time: "20 min",
    price: 249,
  },
  {
    id: 4,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    rating: 4.7,
    time: "20 min",
    price: 179,
  },
];

export default function RecipeList() {
  return (
    <section className="bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Our Popular Recipes
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-48 w-full object-cover"
              />

              {/* Recipe Details */}
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {recipe.name}
                </h3>

                <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
                  <span>Rating: {recipe.rating}/5</span>
                  <span>{recipe.time}</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-orange-600">
                    ₹{recipe.price}
                  </p>

                  <button
                    type="button"
                    className="rounded-lg bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
