import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-transparent to-emerald-50/60 dark:from-emerald-900/10 dark:to-transparent">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-emerald-400/30 rounded-full blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Go the GoWay?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of smart travelers who choose{" "}
          <span className="text-emerald-400 font-semibold">GoWay</span> for
          fast, safe, and eco-friendly rides — anytime, anywhere.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-emerald-400/40 transition-all duration-300"
          >
            Download App
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white rounded-full transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Subtle top & bottom gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-gray-950 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none"></div>
    </section>
  );
}
