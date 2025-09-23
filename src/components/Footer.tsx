import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaThreads } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-2 text-[#fdc700bf]">SECTIONS</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Books & Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Fiction & Poetry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Humor & Cartoons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Magazine
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-transparent">.</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Crossword
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Video
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    100th Anniversary
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Goings On
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#fdc700bf]">MORE</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Manage Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Shop Bhitti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Buy Covers and Cartoons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Condé Nast Store
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-transparent">.</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Digital Access
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Newsletters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    Jigsaw Puzzle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fdc700bf]">
                    RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <a href="#" className="hover:text-[#fdc700bf]">
            About
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Careers
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Contact
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            F.A.Q.
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Media Kit
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Press
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Accessibility Help
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            User Agreement
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#fdc700bf]">
            Your California Privacy Rights
          </a>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-xs text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-center md:text-left">
              © 2025 Condé Nast. All rights reserved. Bhitti may earn a portion
              of sales from products that are purchased through our site as part
              of our Affiliate Partnerships with retailers. The material on this
              site may not be reproduced, distributed, transmitted, cached or
              otherwise used, except with the prior written permission of Condé
              Nast.{" "}
              <a href="#" className="underline">
                Ad Choices
              </a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="w-6 h-6">
                <BsInstagram className="w-full h-full" />
              </span>
              <span className="w-6 h-6">
                <FaThreads className="w-full h-full" />
              </span>
              <span className="w-6 h-6">
                <RiTwitterXFill className="w-full h-full" />
              </span>
              <span className="w-6 h-6">
                <FaFacebookF className="w-full h-full" />
              </span>
              <span className="w-6 h-6">
                <FaLinkedinIn className="w-full h-full" />
              </span>
              <span className="w-6 h-6">
                <BsYoutube className="w-full h-full" />
              </span>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="underline">
              Your Privacy Information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
