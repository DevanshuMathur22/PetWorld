import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  Menu,
  X,
  PawPrint,
} from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navbar = [
    { name: "Home", path: "#Home" },
    { name: "About", path: "#About" },
    { name: "Breeds", path: "#Breeds" },
    { name: "Gallery", path: "#Gallery" },
    { name: "Pricing", path: "#Pricing" },
    { name: "Contact", path: "#Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          max-w-7xl
          mx-auto
          rounded-full
          border border-white/20
          bg-white/60
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          {/* 🔥 LOGO */}
          <a
            href="#Home"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex items-center justify-center
                w-11 h-11
                rounded-full
                bg-gradient-to-br
                from-amber-500
                to-orange-500
                shadow-lg
              "
            >
              <PawPrint className="w-5 h-5 text-white" />
            </div>

            <h1
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-black
              "
            >
              PetWorld
            </h1>
          </a>

          {/* 🔥 DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-2">
            {navbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="
                    relative
                    rounded-full
                    px-5 py-2.5
                    text-sm
                    font-medium
                    text-slate-600
                    transition-all
                    duration-300
                    hover:bg-white/70
                    hover:text-black
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* 🔥 CTA */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#Contact"
              className="
                rounded-full
                bg-gradient-to-r
                from-amber-500
                to-orange-500
                px-6 py-3
                text-sm
                font-medium
                text-white
                shadow-lg
              "
            >
              Contact Us
            </motion.a>
          </div>

          {/* 🔥 MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              flex items-center justify-center
              w-11 h-11
              rounded-full
              bg-white/70
              backdrop-blur-xl
              border border-black/5
            "
          >
            {open ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>

        {/* 🔥 MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                md:hidden
                px-6
                pb-6
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[28px]
                  border border-white/20
                  bg-white/70
                  backdrop-blur-2xl
                  p-5
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                "
              >
                <ul className="flex flex-col gap-2">
                  {navbar.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.path}
                        onClick={() => setOpen(false)}
                        className="
                          flex items-center
                          rounded-2xl
                          px-4 py-3
                          text-base
                          font-medium
                          text-slate-700
                          transition
                          hover:bg-amber-50
                          hover:text-amber-700
                        "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* 🔥 MOBILE CTA */}
                <motion.a
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="#Contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-5
                    flex items-center justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-amber-500
                    to-orange-500
                    px-6 py-3
                    text-sm
                    font-medium
                    text-white
                    shadow-lg
                  "
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}