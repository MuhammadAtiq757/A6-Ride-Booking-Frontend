import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Car,
  Clock,
  ShieldCheck,
  Smartphone,
  MapPin,
  CreditCard,
  Smile,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <Car className="w-6 h-6" />,
    title: "Fast & Reliable Rides",
    description:
      "GoWay ensures quick pickups and smooth rides so you reach your destination right on time.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Safe Journeys Always",
    description:
      "Verified drivers, 24/7 support, and real-time tracking for complete peace of mind.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Smart App Experience",
    description:
      "Enjoy an elegant, easy-to-use app that lets you book, track, and rate your rides effortlessly.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Multiple Payment Options",
    description:
      "From cash to cards — GoWay supports flexible, secure payment methods for your convenience.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description:
      "Whether it’s early morning or late night, GoWay drivers are always ready for you.",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Friendly Drivers",
    description:
      "Our drivers are not just professionals — they make your rides comfortable and cheerful.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Live Ride Tracking",
    description:
      "Stay updated with live GPS tracking and share your ride status with friends and family.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Top-rated Service",
    description:
      "Thousands of happy riders trust GoWay every day for its consistency and quality service.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-emerald-50/50 to-white dark:from-gray-950 dark:via-emerald-950/10 dark:to-gray-950 overflow-hidden">
      {/* Floating emerald orbs for depth */}
      <motion.div
        className="absolute -top-20 -left-20 w-[250px] h-[250px] bg-emerald-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose GoWay?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience next-level travel convenience with GoWay’s modern features built
            around <span className="text-emerald-400 font-semibold">you</span>.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full relative overflow-hidden rounded-2xl border border-emerald-100/40 dark:border-emerald-800/30 bg-white/60 dark:bg-gray-900/40 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-900/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/20">
                {/* Glow Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent" />

                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-emerald-400/10 rounded-xl flex items-center justify-center mx-auto text-emerald-500 mb-4 group-hover:bg-emerald-400/20 transition">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
