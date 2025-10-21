import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8 } },
});

export default function HeroSection() {
  const { data: userInfo } = useUserInfoQuery(undefined);

  return (
    <section className="relative w-full pt-16 pb-24 lg:pt-28 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-[120px] animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-400/30 rounded-full blur-[160px] animate-blob animation-delay-2000"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={fadeUp(0)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500 tracking-tight"
            >
              Move Smarter with <span>GoWay</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            >
              Get to your destination safely, quickly, and affordably. GoWay
              connects riders with trusted drivers anytime, anywhere.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp(0.4)}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              {userInfo?.data?.role === "DRIVER" ? (
                <Link to="/pick-a-ride">
                  <Button className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-3 text-lg flex items-center gap-2">
                    Pick a Ride <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/ride-request">
                    <Button className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-3 text-lg flex items-center gap-2">
                      Request a Ride <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/be-a-driver">
                    <Button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-3 text-lg">
                      Be a Driver
                    </Button>
                  </Link>
                </>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.8)}
              className="mt-12 grid grid-cols-3 gap-6 sm:gap-8 text-center"
            >
              {[
                { value: "2M+", label: "Rides Completed" },
                { value: "80K+", label: "Drivers Onboard" },
                { value: "4.95", label: "User Satisfaction" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp(0.8 + i * 0.2)}>
                  <div className="text-2xl font-bold text-foreground dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
