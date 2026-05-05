"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceId = "service_0xpk2hc";
    const templateId = "template_q362fyp";
    const publicKey = "Ctaa2IGzVE1jD0PbR";

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/tour11.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase" style={{ color: "#722F37" }}>
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Let’s Plan Your Next Trip
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              {
                icon: MapPin,
                title: "Location",
                value: "Lagos, Nigeria",
                link: "https://www.google.com/maps?q=Lagos+Nigeria",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+234 708 859 5713",
                link: "http://wa.me/2347088595713",
              },
              {
                icon: Mail,
                title: "Email",
                value: "olanike.igbaroola@gmail.com",
                link: "mailto:olanike.igbaroola@gmail.com",
              },
              {
                icon: FaInstagram,
                title: "Instagram",
                value: "@13thluxe_event",
                link: "https://instagram.com/13thluxe_event",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gray-700 group-hover:border-gray-500 transition">
                  <item.icon style={{ color: "#722F37" }} />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-white transition">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* TITLE */}
            <div>
              <h3 className="text-3xl font-medium mb-3 text-white">
                Send a note
              </h3>
              <p className="text-gray-400 text-sm">
                Short, clear messages get faster replies. Expect a response within a few working days.
              </p>
            </div>

            {/* NAME */}
            <div>
              <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
                NAME
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border border-gray-700 px-4 py-4 focus:outline-none focus:border-gray-400 transition text-white"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
                EMAIL
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border border-gray-700 px-4 py-4 focus:outline-none focus:border-gray-400 transition text-white"
                required
              />
            </div>

            {/* COMPANY */}
            <div>
              <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
                COMPANY / ORGANISATION
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full bg-transparent border border-gray-700 px-4 py-4 focus:outline-none focus:border-gray-400 transition text-white"
              />
            </div>

            {/* TOPIC */}
            <div>
              <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
                TOPIC
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full bg-black border border-gray-700 px-4 py-4 focus:outline-none focus:border-gray-400 transition text-white"
                required
              >
                <option value="">Advisory</option>
                <option value="travel">Travel</option>
                <option value="rental">Car Rental</option>
                <option value="protocol">Airport Protocol</option>
                <option value="security">Security</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
                MESSAGE
              </label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border border-gray-700 px-4 py-4 focus:outline-none focus:border-gray-400 transition text-white"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 text-white text-sm tracking-[0.2em] uppercase font-medium disabled:opacity-60 transition"
              style={{ backgroundColor: "#722F37" }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status && (
              <p className="text-sm text-gray-400">{status}</p>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;