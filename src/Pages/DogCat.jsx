import { motion } from "framer-motion"

import {
  Dog,
  Cat,
} from "lucide-react"

import ger from "../assets/images/ger.jpg"
import cats from "../assets/images/cat1.jpg"
import catss from "../assets/images/cat2.jpg"
import doggs from "../assets/images/dog6.jpg"
import cat from "../assets/images/cat.jpg"
import la from "../assets/images/la.jpg"

const items = [
  {
    id: 1,
    img: la,
    title: "Golden Retriever",
    text: "Friendly, loving and perfect family companion.",
    type: "Dog 🐶",
    icon: Dog,
  },

  {
    id: 2,
    img: ger,
    title: "German Shepherd",
    text: "Loyal, intelligent and naturally protective.",
    type: "Dog 🐕",
    icon: Dog,
  },

  {
    id: 3,
    img: cats,
    title: "Persian Cat",
    text: "Gentle, calm and affectionate personality.",
    type: "Cat 🐱",
    icon: Cat,
  },

  {
    id: 4,
    img: catss,
    title: "Siamese Cat",
    text: "Elegant, social and playful companion.",
    type: "Cat 🐾",
    icon: Cat,
  },

  {
    id: 5,
    img: doggs,
    title: "Labrador",
    text: "Kid-friendly, playful and energetic breed.",
    type: "Dog 🐾",
    icon: Dog,
  },

  {
    id: 6,
    img: cat,
    title: "Maine Coon",
    text: "Large, fluffy and extremely sociable cat.",
    type: "Cat 🐱",
    icon: Cat,
  },
]

export default function DogCat() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-24">
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
            Premium Pet Collection
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
              Dog & Cat Breeds
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
            Healthy, certified, and ethically raised pets
            with proper care and companionship.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/20
                  bg-white/70
                  backdrop-blur-2xl
                  shadow-[0_20px_70px_rgba(0,0,0,0.06)]
                "
              >
                {/* 🔥 IMAGE */}
                <div className="relative overflow-hidden">
                  {/* overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      h-[230px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* badge */}
                  <div
                    className="
                      absolute
                      top-4 left-4
                      z-20
                      rounded-full
                      border border-white/10
                      bg-white/20
                      backdrop-blur-xl
                      px-3 py-1.5
                      text-xs
                      text-white
                    "
                  >
                    {item.type}
                  </div>
                </div>

                {/* 🔥 CONTENT */}
                <div className="relative p-5">
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

                  <div className="relative z-10">
                    {/* icon */}
                    <div
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-amber-400/10
                        flex items-center justify-center
                      "
                    >
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>

                    {/* title */}
                    <h3 className="mt-4 text-xl font-semibold text-black">
                      {item.title}
                    </h3>

                    {/* desc */}
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {item.text}
                    </p>

                    {/* button */}
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        mt-5
                        rounded-full
                        bg-gradient-to-r
                        from-amber-500
                        to-orange-500
                        px-5 py-2.5
                        text-sm
                        font-medium
                        text-white
                        shadow-lg
                      "
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}