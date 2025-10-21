import { motion } from "framer-motion";
import { MapPin, Smartphone, Car, Star } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Download the GoWay App",
    description:
      "Get started by downloading the GoWay app from the App Store or Google Play. It’s quick, lightweight, and free.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    step: "2",
    title: "Set Your Pickup Location",
    description:
      "Open the app and set your pickup and drop-off points with a single tap — our GPS does the rest.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    step: "3",
    title: "Choose Your Ride",
    description:
      "Select from economy, comfort, or premium — GoWay gives you flexibility at every price point.",
    icon: <Car className="w-6 h-6" />,
  },
  {
    step: "4",
    title: "Enjoy the Journey",
    description:
      "Track your ride in real time and arrive safely at your destination. Rate your driver for better experiences.",
    icon: <Star className="w-6 h-6" />,
  },
];

export default function Steps() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 dark:from-gray-950 dark:via-emerald-950/10 dark:to-gray-950 overflow-hidden">
      {/* Floating background glows */}
      <motion.div
        className="absolute -top-10 left-10 w-[200px] h-[200px] bg-emerald-400/20 rounded-full blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-[250px] h-[250px] bg-emerald-400/20 rounded-full blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Getting Started with GoWay
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book your first ride in just a few simple steps and experience the
            smoothest way to move around.
          </motion.p>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400/70 to-emerald-600/70 dark:from-emerald-500/70 dark:to-emerald-400/70 hidden sm:block" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6 sm:ml-0 ml-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step icon */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  {step.icon}
                </div>

                {/* Step content */}
                <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-md border border-emerald-100/30 dark:border-emerald-800/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot for timeline */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[22px] top-[70px] w-[2px] h-[calc(100%-70px)] bg-emerald-300/50 hidden sm:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
