import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import cats from "../assets/images/cat1.jpg"
import dog from "../assets/images/dog.jpg"
import annie from "../assets/images/annie.jpg"
import pet from "../assets/images/pet.jpg"
import pet3 from "../assets/images/pet3.jpg"
import dog6 from "../assets/images/dog6.jpg"
import cat2 from "../assets/images/cat2.jpg"

const images = [
  {
    image: cats,
    title: "Persian Cat",
    desc: "Elegant, calm and affectionate companion.",
  },

  {
    image: dog,
    title: "Golden Retriever",
    desc: "Friendly and family loving breed.",
  },

  {
    image: annie,
    title: "Healthy Pets",
    desc: "Raised with expert care and love.",
  },

  {
    image: pet,
    title: "Happy Companions",
    desc: "Perfect furry friends for families.",
  },

  {
    image: pet3,
    title: "Premium Care",
    desc: "Vaccinated and ethically raised pets.",
  },

  {
    image: dog6,
    title: "Labrador",
    desc: "Playful, energetic and loyal breed.",
  },

  {
    image: cat2,
    title: "Siamese Cat",
    desc: "Beautiful, social and intelligent cat.",
  },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [pause])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    )
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-28">
      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-40 -left-40 w-[380px] h-[380px] rounded-full bg-amber-300/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[380px] h-[380px] rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-black/10
              bg-white/70
              px-5 py-2
              text-sm
              text-slate-600
              backdrop-blur-xl
              shadow-lg
            "
          >
            Pet Gallery
          </span>

          <h2
            className="
              mt-6
              text-4xl md:text-6xl
              font-semibold
              tracking-tight
              leading-[0.95]
            "
          >
            <span className="bg-gradient-to-b from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
              Happy Moments
              <br />
              With Our Pets
            </span>
          </h2>

          <p
            className="
              mt-5
              text-base md:text-lg
              text-slate-500
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Explore our premium collection of healthy,
            playful, and loving companions.
          </p>
        </div>

        {/* 🔥 SLIDER */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[36px]
            border border-white/20
            bg-white/60
            backdrop-blur-2xl
            shadow-[0_25px_100px_rgba(0,0,0,0.08)]
          "
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* 🔥 IMAGE */}
          <div className="relative h-[280px] sm:h-[420px] md:h-[620px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="absolute inset-0"
              >
                {/* overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <img
                  src={images[current].image}
                  alt={images[current].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* 🔥 CONTENT */}
            <div
              className="
                absolute
                bottom-0 left-0
                z-20
                p-6 md:p-10
              "
            >
              <motion.h3
                key={images[current].title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  text-3xl md:text-5xl
                  font-semibold
                  text-white
                "
              >
                {images[current].title}
              </motion.h3>

              <motion.p
                key={images[current].desc}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  mt-4
                  max-w-xl
                  text-sm md:text-lg
                  text-white/80
                "
              >
                {images[current].desc}
              </motion.p>
            </div>

            {/* 🔥 BUTTONS */}
            <button
              onClick={prevSlide}
              className="
                absolute
                left-5 top-1/2
                z-20
                -translate-y-1/2
                flex items-center justify-center
                w-12 h-12
                rounded-full
                border border-white/10
                bg-white/10
                backdrop-blur-xl
                text-white
                transition
                hover:bg-amber-500
              "
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="
                absolute
                right-5 top-1/2
                z-20
                -translate-y-1/2
                flex items-center justify-center
                w-12 h-12
                rounded-full
                border border-white/10
                bg-white/10
                backdrop-blur-xl
                text-white
                transition
                hover:bg-amber-500
              "
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 🔥 DOTS */}
            <div
              className="
                absolute
                bottom-6 left-1/2
                z-20
                -translate-x-1/2
                flex gap-3
              "
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`
                    transition-all duration-300
                    rounded-full

                    ${
                      i === current
                        ? "w-10 h-3 bg-amber-400"
                        : "w-3 h-3 bg-white/60"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}