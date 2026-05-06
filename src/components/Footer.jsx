import { motion } from "framer-motion"

import {
  PawPrint,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8f8f8] pt-24">
      {/* 🔥 TOP BORDER */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full bg-amber-300/20 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🔥 MAIN */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pb-16">
          {/* 🔥 BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex items-center justify-center
                  w-12 h-12
                  rounded-full
                  bg-gradient-to-br
                  from-amber-500
                  to-orange-500
                  shadow-lg
                "
              >
                <PawPrint className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-3xl font-semibold text-black">
                PetWorld
              </h2>
            </div>

            <p className="mt-6 text-slate-500 leading-relaxed">
              Your trusted partner in finding forever
              homes for loving pets. Bringing happiness,
              care, and companionship since 2005.
            </p>

            {/* 🔥 SOCIAL */}
            <div className="mt-8 flex items-center gap-4">
              {[
                Facebook,
                Instagram,
                Twitter,
              ].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  href="#"
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    border border-black/5
                    bg-white/70
                    backdrop-blur-xl
                    shadow-lg
                    transition
                    hover:bg-amber-500
                    hover:text-white
                  "
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 🔥 LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Home",
                "About",
                "Breeds",
                "Gallery",
                "Pricing",
                "Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item}`}
                    className="
                      text-slate-500
                      transition
                      hover:text-amber-600
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔥 BREEDS */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Popular Breeds
            </h3>

            <ul className="mt-6 space-y-4 text-slate-500">
              <li>German Shepherd</li>
              <li>Labrador</li>
              <li>Golden Retriever</li>
              <li>Persian Cat</li>
              <li>Maine Coon</li>
            </ul>
          </div>

          {/* 🔥 CONTACT */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5">
              {[
                {
                  icon: Mail,
                  text: "xyz@gmail.com",
                },

                {
                  icon: Phone,
                  text: "+91 9876544488",
                },

                {
                  icon: MapPin,
                  text: "Jaipur, Rajasthan",
                },
              ].map((item, i) => {
                const Icon = item.icon

                return (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="
                        flex items-center justify-center
                        w-11 h-11
                        rounded-2xl
                        bg-amber-400/10
                      "
                    >
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>

                    <p className="text-slate-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            border-t border-black/5
            py-6
          "
        >
          <p className="text-sm text-slate-500">
            © 2026 PetWorld. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="hover:text-amber-600 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-amber-600 transition"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}