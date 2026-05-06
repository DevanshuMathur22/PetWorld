import { motion } from "framer-motion"

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react"

export default function Contact() {
  return (
    <section
      id="Contact"
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
            Get In Touch
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
              Contact
              <br />
              PetWorld
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
            Have questions about adoption or available
            breeds? Reach out and our team will help you
            find your perfect companion.
          </p>
        </div>

        {/* 🔥 CONTENT */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 🔥 LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border border-white/20
              bg-white/70
              backdrop-blur-2xl
              p-8
              shadow-[0_20px_70px_rgba(0,0,0,0.06)]
            "
          >
            {/* glow */}
            <div className="absolute inset-0 bg-amber-400/5 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-semibold text-black">
                Contact Information
              </h3>

              <p className="mt-4 text-slate-500 leading-relaxed">
                We are available to answer all your
                adoption and pet care related questions.
              </p>

              {/* 🔥 INFO */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "xyz@gmail.com",
                  },

                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 9876544488",
                  },

                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Jaipur, Rajasthan",
                  },
                ].map((item, i) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={i}
                      className="
                        flex items-center gap-4
                        rounded-2xl
                        border border-black/5
                        bg-white/60
                        p-4
                      "
                    >
                      <div
                        className="
                          flex items-center justify-center
                          w-12 h-12
                          rounded-2xl
                          bg-amber-400/10
                        "
                      >
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          {item.title}
                        </p>

                        <h4 className="font-medium text-black">
                          {item.value}
                        </h4>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 🔥 MAP */}
              <div className="mt-10 overflow-hidden rounded-[28px] border border-black/5">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  className="w-full h-[260px]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* 🔥 RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border border-white/20
              bg-white/70
              backdrop-blur-2xl
              p-8
              shadow-[0_20px_70px_rgba(0,0,0,0.06)]
            "
          >
            {/* glow */}
            <div className="absolute inset-0 bg-orange-400/5 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-semibold text-black">
                Send Message
              </h3>

              <p className="mt-4 text-slate-500 leading-relaxed">
                Fill out the form below and we’ll get back
                to you as soon as possible.
              </p>

              {/* 🔥 FORM */}
              <form
                action="http://localhost:5170/contact"
                method="POST"
                className="mt-10 space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border border-black/10
                    bg-white/70
                    px-5 py-4
                    outline-none
                    transition
                    focus:border-amber-400
                    focus:ring-4
                    focus:ring-amber-100
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border border-black/10
                    bg-white/70
                    px-5 py-4
                    outline-none
                    transition
                    focus:border-amber-400
                    focus:ring-4
                    focus:ring-amber-100
                  "
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border border-black/10
                    bg-white/70
                    px-5 py-4
                    outline-none
                    transition
                    resize-none
                    focus:border-amber-400
                    focus:ring-4
                    focus:ring-amber-100
                  "
                />

                {/* 🔥 BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  className="
                    flex items-center justify-center gap-3
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-amber-500
                    to-orange-500
                    px-6 py-4
                    font-medium
                    text-white
                    shadow-lg
                  "
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}