import { motion } from "framer-motion"

import {
  Star,
  Quote,
} from "lucide-react"

import human from "../assets/images/human.jpg"
import cat from "../assets/images/human2.jpg"
import ger from "../assets/images/human1.jpg"

const reviews = [
  {
    id: 1,
    img: human,
    text: "Got my Labrador from PetWorld. He’s super healthy and playful. Amazing experience overall!",
    name: "Priya Sharma",
    role: "Dog Owner",
  },

  {
    id: 2,
    img: cat,
    text: "Adopted a Persian kitten and she’s calm, beautiful, and very affectionate.",
    name: "Amit Verma",
    role: "Cat Parent",
  },

  {
    id: 3,
    img: ger,
    text: "Highly recommend PetWorld! Genuine breeders with proper care and professionalism.",
    name: "Arjun Yogi",
    role: "Pet Lover",
  },
]

export default function Reviews() {
  return (
    <section
      id="Reviews"
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
            Testimonials
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
              Customer
              <br />
              Reviews
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
            Hear from happy pet parents who trusted us
            to find their perfect furry companion.
          </p>
        </div>

        {/* 🔥 REVIEWS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((r, index) => (
            <motion.div
              key={r.id}
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border border-white/20
                bg-white/70
                backdrop-blur-2xl
                p-7
                shadow-[0_20px_70px_rgba(0,0,0,0.06)]
              "
            >
              {/* 🔥 GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

              {/* 🔥 QUOTE */}
              <div
                className="
                  absolute
                  top-5 right-5
                  opacity-10
                "
              >
                <Quote className="w-16 h-16 text-amber-500" />
              </div>

              <div className="relative z-10">
                {/* 🔥 USER */}
                <div className="flex items-center gap-4">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="
                      w-16 h-16
                      rounded-full
                      object-cover
                      border-2 border-amber-400/30
                    "
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {r.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {r.role}
                    </p>
                  </div>
                </div>

                {/* 🔥 STARS */}
                <div className="mt-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        w-4 h-4
                        fill-amber-400
                        text-amber-400
                      "
                    />
                  ))}
                </div>

                {/* 🔥 REVIEW */}
                <p
                  className="
                    mt-5
                    text-slate-600
                    leading-relaxed
                  "
                >
                  “{r.text}”
                </p>

                {/* 🔥 LINE */}
                <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-black/5">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 EXTRA STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
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

            {
              number: "4.9★",
              label: "Customer Rating",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                rounded-[24px]
                border border-white/20
                bg-white/70
                backdrop-blur-2xl
                p-6
                text-center
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
              "
            >
              <h3 className="text-3xl font-semibold text-amber-600">
                {item.number}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}