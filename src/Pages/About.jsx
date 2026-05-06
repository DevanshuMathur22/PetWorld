"use client"

import { motion } from "framer-motion"
import {
  HeartHandshake,
  ShieldCheck,
  PawPrint,
} from "lucide-react"

import heros from "../assets/images/heros.jpg"

const stats = [
  {
    number: "500+",
    label: "Happy Families",
  },

  {
    number: "100%",
    label: "Healthy Pets",
  },

  {
    number: "20+",
    label: "Years Experience",
  },
]

export default function About() {
  return (
    <section
      id="About"
      className="
        relative
        overflow-hidden
        py-28
        md:py-36
      "
    >
      {/* 🔥 BG IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-110
        "
        style={{
          backgroundImage: `url(${heros})`,
          filter: "blur(12px)",
        }}
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-amber-400/20 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-orange-400/20 blur-3xl" />

      {/* 🔥 FLOATING ICONS */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          hidden md:flex
          absolute top-20 left-16
          w-20 h-20
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          items-center justify-center
        "
      >
        <PawPrint className="w-9 h-9 text-amber-300" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          hidden md:flex
          absolute bottom-20 right-16
          w-20 h-20
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          items-center justify-center
        "
      >
        <HeartHandshake className="w-9 h-9 text-amber-300" />
      </motion.div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-white/10
            backdrop-blur-3xl
            shadow-[0_30px_120px_rgba(0,0,0,0.25)]
            p-8 md:p-14
          "
        >
          {/* 🔥 INNER LIGHT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]" />

          <div className="relative z-10">
            {/* 🔥 BADGE */}
            <div className="flex justify-center">
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/10
                  bg-white/10
                  px-5 py-2
                  text-sm
                  text-white/80
                  backdrop-blur-xl
                "
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                Trusted Pet Breeding Center
              </span>
            </div>

            {/* 🔥 HEADING */}
            <div className="mt-8 text-center">
              <h2
                className="
                  text-5xl md:text-7xl
                  font-semibold
                  tracking-tight
                  leading-[0.95]
                "
              >
                <span className="bg-gradient-to-b from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-3xl
                  mx-auto
                  text-base md:text-xl
                  leading-relaxed
                  text-white/75
                "
              >
                We are a trusted pet breeding center,
                proudly connecting loving families with
                happy and healthy pets since{" "}
                <span className="font-semibold text-amber-300">
                  2005
                </span>
                . Every pet receives proper nutrition,
                certified vaccinations, and expert medical
                care through ethical and responsible
                breeding practices.
              </p>

              <p
                className="
                  mt-8
                  text-xl md:text-2xl
                  font-medium
                  text-amber-200
                "
              >
                🐾 Helping families find their forever
                friend 🐾
              </p>
            </div>

            {/* 🔥 FEATURES */}
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: PawPrint,
                  title: "Ethical Breeding",
                  desc: "Safe and responsible breeding practices.",
                },

                {
                  icon: ShieldCheck,
                  title: "Health Certified",
                  desc: "Vaccinated and medically checked pets.",
                },

                {
                  icon: HeartHandshake,
                  title: "Trusted Care",
                  desc: "20+ years of trusted companionship.",
                },
              ].map((item, i) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border border-white/10
                      bg-white/10
                      backdrop-blur-2xl
                      p-6
                    "
                  >
                    {/* glow */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

                    <div className="relative z-10">
                      <div
                        className="
                          w-14 h-14
                          rounded-2xl
                          bg-amber-400/15
                          flex items-center justify-center
                        "
                      >
                        <Icon className="w-7 h-7 text-amber-300" />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-white/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* 🔥 STATS */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border border-white/10
                    bg-white/10
                    backdrop-blur-2xl
                    p-6
                    text-center
                  "
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

                  <div className="relative z-10">
                    <h3 className="text-4xl font-semibold text-amber-300">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-white/70">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}