import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image className="text-blue-600" src={"/logo.png"} width={32} height={32} alt="ST Fitness Logo"/>
              <span className="text-2xl font-bold">ST Fitness</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transform your GYM by ST Fitness. We provide world-class facilities, expert marketing solutions, and
              complete GYM Management to help you grow your gym.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Scientifictrainingfitness/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/s.t.fitness.india/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-12 w-12 text-blue-500" />
                <span className="text-gray-300">B 2/210 Laram Centre S.V. Road, Andheri West, Mumbai 400058</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">83694 75377 / 99676 51568 / 83694 75377</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">info@stfitnessindia.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            ©  {new Date().getFullYear()} ST Fitness India. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
            <br/>
            <span className="text-gray-500">Designed & Developed by </span>
            <a href="https://ashish-prasad.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white ml-1">
              Ashish Prasad
            </a>
            <br/>
          </p>
        </div>
      </div>
    </footer>
  )
}
