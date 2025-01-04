import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold">eCommerce Shop</h3>
          <p className="mt-4">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us and Subscribe */}
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Follow us on GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              aria-label="Follow us on Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 ">
        <div className="container border-t border-gray-700 pt-4 mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 eCommerce Shop. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
