import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[20vh] h-auto bg-black text-white py-10 ">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-20">
        {/* Top Section */}
        <div className="sm:flex sm:justify-between sm:items-start border-b border-gray-700 pb-8 mb-8">
          {/* About ExoApe */}
          <div className="mb-6 sm:mb-0 w-[80%] sm:w-[50%]">
            <h3 className="text-xl font-bold mb-4">About ExoApe</h3>
            <p className="text-gray-400">
              ExoApe is your gateway to futuristic solutions. We combine innovation and design to
              create extraordinary digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-400 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sm:flex sm:justify-between sm:items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ExoApe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-5 h-5"  />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
