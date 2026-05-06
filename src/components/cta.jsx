import { motion } from "framer-motion"

import {
  PhoneCall,
  PawPrint,
} from "lucide-react"

import { FaWhatsapp } from "react-icons/fa"

export default function Cta() {
  return (
    <>
      {/* 🔥 SIDE BOOKING BUTTON */}
      <motion.a
        initial={{
          x: 100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        href="#Contact"
        className="
          fixed
          top-1/2
          right-0
          z-50
          hidden md:flex
          -translate-y-1/2
          items-center justify-center
          gap-3
          overflow-hidden
          rounded-l-2xl
          border border-white/20
          bg-white/70
          backdrop-blur-2xl
          px-4 py-5
          shadow-[0_15px_50px_rgba(0,0,0,0.12)]
        "
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-orange-400/10" />

        <div className="relative z-10 flex items-center gap-2">
          <PawPrint className="w-4 h-4 text-amber-600" />

          <span
            className="
              text-sm
              font-medium
              tracking-wide
              text-slate-700
            "
          >
            Book Adoption
          </span>
        </div>
      </motion.a>

      {/* 🔥 FLOATING CTA */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
        {/* 🔥 WHATSAPP */}
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
          href="https://wa.me/918619965700"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            overflow-hidden
            flex items-center gap-3
            rounded-full
            border border-white/20
            bg-white/70
            backdrop-blur-2xl
            px-5 py-3
            shadow-[0_15px_50px_rgba(0,0,0,0.10)]
          "
        >
          {/* glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-green-500/10 blur-3xl" />

          {/* icon */}
          <div
            className="
              relative z-10
              flex items-center justify-center
              w-11 h-11
              rounded-full
              bg-green-500
              shadow-lg
            "
          >
            <FaWhatsapp className="text-white text-xl" />
          </div>

          {/* text */}
          <div className="relative z-10 hidden sm:block">
            <p className="text-xs text-slate-500">
              Chat With Us
            </p>

            <h4 className="text-sm font-medium text-black">
              WhatsApp
            </h4>
          </div>
        </motion.a>

        {/* 🔥 CALL */}
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
          href="tel:+918619965763"
          className="
            group
            relative
            overflow-hidden
            flex items-center gap-3
            rounded-full
            border border-white/20
            bg-white/70
            backdrop-blur-2xl
            px-5 py-3
            shadow-[0_15px_50px_rgba(0,0,0,0.10)]
          "
        >
          {/* glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-amber-500/10 blur-3xl" />

          {/* icon */}
          <div
            className="
              relative z-10
              flex items-center justify-center
              w-11 h-11
              rounded-full
              bg-gradient-to-r
              from-amber-500
              to-orange-500
              shadow-lg
            "
          >
            <PhoneCall className="w-5 h-5 text-white" />
          </div>

          {/* text */}
          <div className="relative z-10 hidden sm:block">
            <p className="text-xs text-slate-500">
              Call Anytime
            </p>

            <h4 className="text-sm font-medium text-black">
              +91 8619965700
            </h4>
          </div>
        </motion.a>
      </div>
    </>
  )
}