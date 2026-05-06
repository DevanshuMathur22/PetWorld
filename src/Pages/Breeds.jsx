import { motion } from "framer-motion"

import ger from "../assets/images/ger.jpg"
import la from "../assets/images/la.jpg"
import Persian from "../assets/images/Persian.jpg"

const pets = [
  {
    id: 1,
    title: "Golden Retriever Puppy",
    img: la,
    type: "Dog 🐶",
    desc: "Healthy, vaccinated, playful and perfect companion for families.",
  },

  {
    id: 2,
    title: "Persian Cat",
    img: Persian,
    type: "Cat 🐱",
    desc: "Beautiful pedigree Persian kitten with calm and loving nature.",
  },

  {
    id: 3,
    title: "German Shepherd",
    img: ger,
    type: "Dog 🐕",
    desc: "Strong, intelligent, loyal and ideal for protection and companionship.",
  },
]

export default function Breeds() {
  return (
    <section
      id="Breeds"
      className="
        relative
        overflow-hidden
        bg-[#f8f8f8]
        py-28
      "
    >
      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-amber-300/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-orange-300/20 blur-3xl" />

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
            Featured Pets
          </span>

          <h2
            className="
              mt-6
              text-5xl md:text-7xl
              font-semibold
              tracking-tight
              leading-[0.95]
            "
          >
            <span className="bg-gradient-to-b from-amber-700 via-amber-600 to-orange-500 bg-clip-text text-transparent">
              Featured Breeds
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-500
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Healthy, vaccinated, and ethically raised pets
            carefully nurtured with love and expert care.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pets.map((pet, index) => (
            <motion.div
              key={pet.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/20
                bg-white/70
                backdrop-blur-2xl
                shadow-[0_25px_100px_rgba(0,0,0,0.08)]
              "
            >
              {/* 🔥 IMAGE */}
              <div className="relative overflow-hidden">
                {/* overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <img
                  src={pet.img}
                  alt={pet.title}
                  className="
                    h-[340px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* type */}
                <div
                  className="
                    absolute
                    top-5 left-5
                    z-20
                    rounded-full
                    border border-white/10
                    bg-white/20
                    backdrop-blur-xl
                    px-4 py-2
                    text-sm
                    text-white
                  "
                >
                  {pet.type}
                </div>
              </div>

              {/* 🔥 CONTENT */}
              <div className="relative p-7">
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-black">
                    {pet.title}
                  </h3>

                  <p className="mt-4 text-slate-500 leading-relaxed">
                    {pet.desc}
                  </p>

                  {/* button */}
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      mt-7
                      rounded-full
                      bg-gradient-to-r
                      from-amber-500
                      to-orange-500
                      px-6 py-3
                      font-medium
                      text-white
                      shadow-lg
                    "
                  >
                    More Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}