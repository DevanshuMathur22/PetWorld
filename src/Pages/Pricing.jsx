import { motion } from "framer-motion"

import {
  PawPrint,
  ShieldCheck,
  Crown,
} from "lucide-react"

import cats from "../assets/images/cat1.jpg"
import pet3 from "../assets/images/pet3.jpg"
import pu from "../assets/images/pu.jpg"

const plans = [
  {
    id: 1,
    title: "Puppies",
    price: "Starting ₹8,000",
    desc: "Vaccinated, dewormed and health-checked puppies raised with care.",
    img: pu,
    badge: "Popular 🐶",
    icon: PawPrint,
  },

  {
    id: 2,
    title: "Kittens",
    price: "Starting ₹6,000",
    desc: "Pedigree certified kittens with proper litter training and care.",
    img: cats,
    badge: "Best Value 🐱",
    icon: ShieldCheck,
  },

  {
    id: 3,
    title: "Premium Breeds",
    price: "₹15,000+",
    desc: "Rare and premium breeds with complete documentation and support.",
    img: pet3,
    badge: "Premium ⭐",
    featured: true,
    icon: Crown,
  },
  {
    id: 4,
    title: "Senior Pets",
    price: "Starting ₹4,000",
    desc: "Well-cared-for senior pets ready for a loving home.",
    img: cats,
    badge: "Companionship 🐾",
    icon: ShieldCheck,
  }
]

export default function Pricing() {
  return (
    <section
      id="Pricing"
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
            Adoption Plans
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
              Adoption
              <br />
              Information
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
            Healthy, vaccinated, and ethically raised pets
            with transparent pricing and proper care.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon

            return (
              <motion.div
                key={plan.id}
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
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border border-white/20
                  bg-white/70
                  backdrop-blur-2xl
                  shadow-[0_20px_70px_rgba(0,0,0,0.06)]

                  ${
                    plan.featured
                      ? "ring-2 ring-amber-400/40 scale-[1.02]"
                      : ""
                  }
                `}
              >
                {/* 🔥 GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

                {/* 🔥 IMAGE */}
                <div className="relative overflow-hidden">
                  {/* overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <img
                    src={plan.img}
                    alt={plan.title}
                    className="
                      h-[250px]
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
                      px-4 py-2
                      text-xs
                      text-white
                    "
                  >
                    {plan.badge}
                  </div>
                </div>

                {/* 🔥 CONTENT */}
                <div className="relative p-6">
                  {/* icon */}
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-amber-400/10
                      flex items-center justify-center
                    "
                  >
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>

                  {/* title */}
                  <h3 className="mt-5 text-2xl font-semibold text-black">
                    {plan.title}
                  </h3>

                  {/* price */}
                  <p className="mt-3 text-2xl font-semibold text-amber-600">
                    {plan.price}
                  </p>

                  {/* desc */}
                  <p className="mt-4 text-slate-500 leading-relaxed">
                    {plan.desc}
                  </p>

                  {/* features */}
                  <div className="mt-6 space-y-3">
                    {[
                      "Vaccinated",
                      "Health Checked",
                      "Premium Care",
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-amber-500" />

                        <p className="text-sm text-slate-600">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* button */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      mt-7
                      w-full
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
                    Adopt Now 🐾
                  </motion.button>
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