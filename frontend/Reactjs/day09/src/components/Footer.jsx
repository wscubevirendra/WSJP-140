
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Restaurant Info */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-500">
            Food<span className="text-white">Hut.</span>
          </h2>

          <p className="mb-5 leading-7 text-gray-400">
            Delicious food, fresh ingredients, and unforgettable
            dining experiences. Visit us for your next favorite meal.
          </p>

          <div className="flex gap-4">
            <a href="#facebook" className="hover:text-orange-500">
              Facebook
            </a>
            <a href="#instagram" className="hover:text-orange-500">
              Instagram
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#menu" className="hover:text-orange-500">Our Menu</a></li>
            <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Opening Hours
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Monday - Friday: 10 AM - 10 PM</li>
            <li>Saturday: 11 AM - 11 PM</li>
            <li>Sunday: 11 AM - 9 PM</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>123 Food Street, Jaipur, India</li>
            <li>
              <a href="tel:+911234567890" className="hover:text-orange-500">
                +91 12345 67890
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@foodhut.com"
                className="hover:text-orange-500"
              >
                hello@foodhut.com
              </a>
            </li>
          </ul>

          <a
            href="#reservation"
            className="mt-5 inline-block rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} FoodHut. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-orange-500">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-orange-500">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
