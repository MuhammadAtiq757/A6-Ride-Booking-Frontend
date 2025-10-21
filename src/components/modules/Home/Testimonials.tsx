import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Ariana Patel",
    location: "New York, USA",
    rating: 5,
    comment:
      "GoWay has made my daily commute a breeze! Drivers are polite and the rides are always smooth.",
  },
  {
    name: "Rahim Khan",
    location: "Dhaka, Bangladesh",
    rating: 5,
    comment:
      "Absolutely love the service! Affordable, fast, and the drivers are always on time.",
  },
  {
    name: "Sophia Chen",
    location: "Singapore",
    rating: 4,
    comment:
      "Very convenient for night rides. The app interface is clean and easy to use!",
  },
  {
    name: "Liam Smith",
    location: "London, UK",
    rating: 5,
    comment:
      "I switched from other ride apps — GoWay’s experience feels smoother and more premium.",
  },
  {
    name: "Maria Gomez",
    location: "Madrid, Spain",
    rating: 4,
    comment:
      "Reliable service! I love that I can track my driver in real time, and fares are reasonable.",
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    rating: 5,
    comment:
      "GoWay is my go-to for work commutes. Love the speed, safety, and support from the team!",
  },
  {
    name: "Hannah Lee",
    location: "Seoul, South Korea",
    rating: 5,
    comment:
      "The best part is how friendly and respectful the drivers are. GoWay really stands out!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white dark:from-gray-950 dark:via-emerald-950/10 dark:to-gray-950 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-emerald-400/15 rounded-full blur-[140px]"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hear from Our Happy Riders
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real stories from people who trust{" "}
            <span className="text-emerald-400 font-semibold">GoWay</span> to
            make every journey smooth and enjoyable.
          </motion.p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden border border-emerald-100/40 dark:border-emerald-800/30 backdrop-blur-md bg-white/60 dark:bg-gray-900/40 hover:bg-white/80 dark:hover:bg-gray-900/60 transition-all duration-500 rounded-2xl shadow-md hover:shadow-emerald-400/30">
                  <CardHeader className="relative">
                    <div className="absolute -top-3 -right-3 text-emerald-400/20">
                      <Quote className="w-14 h-14" />
                    </div>

                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-emerald-400 text-emerald-400"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1 text-emerald-400" />
                      {testimonial.location}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      “{testimonial.comment}”
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
