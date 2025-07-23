'use client';

import { useState } from 'react';
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar";
import { IndianRupee, Settings, User } from 'lucide-react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* IMAGE FIRST ON MOBILE, SECOND ON DESKTOP */}
          <div className="order-1 md:order-2 md:mt-16 flex-1 flex justify-center">
            <img
              src="/hero.png"
              alt="Gym Management"
              className="w-full max-w-xl"
            />
          </div>

          {/* TEXT SECOND ON MOBILE, FIRST ON DESKTOP */}
          <div className="order-2 -mt-12 md:mt-20 md:order-1 flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              The Future of <br />Gym Management <br className="hidden md:block" />
              <span className="text-blue-600">Starts Here</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-700 mb-8">
              ST Fitness empowers gyms to achieve operational excellence, boost member retention, and maximize revenue—plus, we handle your digital marketing and social media ads.
            </p>
            <div className="flex flex-row sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/contact" className="bg-blue-600 text-white px-2 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
                Book a Demo
              </a>
              <a href="#features" className="bg-white border border-blue-600 text-blue-600 px-2 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Client Logos */}
      <section id="clients" className="md:-mt-40 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-gray-500 text-lg mb-6">Trusted by leading gyms & studios</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/logo/mfc.webp" alt="Maharashtra Fitness Club Logo" className="h-16 grayscale opacity-70" />
            <img src="/logo/sykz.jpg" alt="Sykz Gym Logo" className="h-16 grayscale opacity-70" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All-in-One Gym Management Platform</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4">
                <Settings className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
              <p className="text-gray-600">Streamline processes, eliminate waste and boost efficiency at every level.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4">
                <User className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className="text-xl font-semibold mb-2">Boost Member Retention</h3>
              <p className="text-gray-600">Engage members with personalized communication, loyalty programs, and mobile app access.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4">
                <IndianRupee className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximize Revenue</h3>
              <p className="text-gray-600">Use real-time analytics and smart reporting to optimize your gym’s revenue streams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Club Management */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
            <div className="text-4xl mb-4 text-blue-500">⚙️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Club Management</h3>
            <p className="text-gray-700 mb-4">
              Streamline your operations with tools designed to optimize efficiency.
            </p>
            <hr className="w-full border-t border-teal-400 mb-4" />
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Centralized Facility Management
              </li>
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Class & Staff Scheduling
              </li>
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Real-Time Reporting
              </li>
            </ul>
            <a
              href="#"
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-5 rounded w-full text-center"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 2 - Sales & Marketing */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
            <div className="text-4xl mb-4 text-blue-500">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sales & Marketing</h3>
            <p className="text-gray-700 mb-4">
              Boost your revenue with powerful tools that drive membership growth and retention.
            </p>
            <hr className="w-full border-t border-teal-400 mb-4" />
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Targeted Marketing Campaigns
              </li>
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Comprehensive Lead Management
              </li>
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Performance Analytics
              </li>
            </ul>
            <a
              href="#"
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-5 rounded w-full text-center"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 3 - Financial Services */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
            <div className="text-4xl mb-4 text-blue-500">💸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
            <p className="text-gray-700 mb-4">
              Robust solutions for simplifying billing and enhancing financial management.
            </p>
            <hr className="w-full border-t border-teal-400 mb-4" />
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Automated Billing
              </li>
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Debt Collection Services
              </li>
              <li className="flex items-center text-sm font-semibold text-gray-800">
                <span className="text-teal-500 mr-2">▶</span> Financial Forecasting
              </li>
            </ul>
            <a
              href="#"
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-5 rounded w-full text-center"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-700 mb-4">"ST Fitness helped us automate our gym and double our member retention. Their marketing team brought in more leads than ever!"</p>
              <span className="font-semibold text-blue-600">Rahul S., Gym Owner</span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-700 mb-4">"The Facebook and Instagram ads managed by ST Fitness gave us a real boost in new memberships. Highly recommended!"</p>
              <span className="font-semibold text-blue-600">Priya M., Studio Manager</span>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Client" className="w-16 h-16 rounded-full mb-4" />
              <p className="text-gray-700 mb-4">"Their all-in-one platform is easy to use and the support team is always there for us. Our revenue has never been better."</p>
              <span className="font-semibold text-blue-600">Amit K., Fitness Center Owner</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-blue-600 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
    {/* Text Section */}
    <div className="text-white max-w-xl text-center md:text-left mb-10 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Ready To Thrive with Us?
      </h2>
      <p className="text-md md:text-lg mb-6">
        Discover how our innovative solutions can elevate your business. Request a demo today and see the difference firsthand. Let's grow, together!
      </p>
      <a
        href="#contact"
        className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white font-bold px-6 py-3 rounded shadow"
      >
        REQUEST A DEMO
      </a>
    </div>

    {/* Image Section */}
    <div className="relative z-10">
      <img
        src="https://www.perfectgym.com/_nuxt/image/perfectgym-request-demo-cta-ee4bc3.webp"
        alt="People collaborating"
        className="w-full max-w-lg -mb-16"
      />
    </div>
  </div>

  {/* Decorative Teal Shape (Background) */}
  <div className="absolute top-8 right-0 w-full h-full bg-[#00d6c3] transform rotate-2 md:rotate-3 origin-bottom-right z-0"></div>
</section>

      {/* Footer */}
      <Footer />
    </main>
  );
}