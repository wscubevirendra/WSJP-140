
function ProductCard({ price, thumbnail, title, rating }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <img
                src={thumbnail}
                alt="Wireless Headphones"
                className="h-44 w-full rounded-lg object-cover"
            />

            <h2 className="mt-4 text-lg font-semibold text-gray-800">
                {title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                Rating: <span className="font-medium text-yellow-500">{rating} / 5</span>
            </p>

            <p className="mt-3 text-xl font-bold text-gray-900">
                ${price}
            </p>

            <button
                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
