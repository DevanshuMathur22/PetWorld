import { motion } from "framer-motion"

import {
  ShieldCheck,
  Star,
  PawPrint,
} from "lucide-react"

const trustItems = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Certified & Verified",
    desc: "All pets are vaccinated and pedigree-certified for complete peace of mind.",
    color: "from-emerald-500 to-teal-500",
  },

  {
    id: 2,
    icon: Star,
    title: "Happy Families",
    desc: "500+ families have found their perfect companion and trusted our care.",
    color: "from-amber-400 to-orange-500",
  },

  {
    id: 3,
    icon: PawPrint,
    title: "Premium Pet Care",
    desc: "Raised with expert veterinary care, nutrition, hygiene, and unconditional love.",
    color: "from-pink-500 to-rose-500",
  },
]

export default function Trust() {
  return (
    <section
      id="Trust"
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
        <div className="max-w-3xl mx-auto text-center">
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
            Trusted Pet Services
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
              Trusted by
              <br />
              Pet Lovers
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
            We provide healthy, ethically raised, and
            professionally cared pets trusted by hundreds
            of happy families.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
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
                  p-8
                  shadow-[0_25px_100px_rgba(0,0,0,0.08)]
                "
              >
                {/* 🔥 GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-amber-400/10 blur-3xl" />

                {/* 🔥 LIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]" />

                <div className="relative z-10">
                  {/* 🔥 ICON */}
                  <div
                    className={`
                      w-16 h-16
                      rounded-2xl
                      bg-gradient-to-br ${item.color}
                      flex items-center justify-center
                      shadow-lg
                    `}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* 🔥 TITLE */}
                  <h3 className="mt-6 text-2xl font-semibold text-black">
                    {item.title}
                  </h3>

                  {/* 🔥 DESC */}
                  <p className="mt-4 text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* 🔥 LINE */}
                  <div className="mt-7 h-[2px] w-full overflow-hidden rounded-full bg-black/5">
                    <div
                      className={`
                        h-full
                        w-1/2
                        rounded-full
                        bg-gradient-to-r ${item.color}
                      `}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}