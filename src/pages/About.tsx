import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Globe, Heart, Shield, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const values = [
    { icon: <Heart className="w-6 h-6" />, title: "Customer First", description: "Our riders and drivers come first in every decision." },
    { icon: <Shield className="w-6 h-6" />, title: "Safety & Security", description: "Rigorous protocols for peace of mind." },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", description: "Constantly pushing boundaries to improve mobility." },
    { icon: <Globe className="w-6 h-6" />, title: "Sustainability", description: "Eco-friendly options for a greener planet." },
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "CEO", bio: "Visionary leader transforming urban mobility.", image: "SJ" },
    { name: "Michael Chen", role: "CTO", bio: "Tech innovator building scalable platforms.", image: "MC" },
    { name: "Emily Rodriguez", role: "COO", bio: "Expert in logistics and operations.", image: "ER" },
    { name: "David Kim", role: "Head of Safety", bio: "Dedicated to rider and driver safety.", image: "DK" },
  ];

  const milestones = [
    { year: "2020", title: "Founded", description: "Started with a bold vision." },
    { year: "2021", title: "1M Rides", description: "First major milestone." },
    { year: "2022", title: "50 Cities", description: "Expanded across North America." },
    { year: "2023", title: "Carbon Neutral", description: "Green initiatives implemented." },
    { year: "2024", title: "Global Expansion", description: "Launching internationally." },
  ];

  return (
    <div className="space-y-32 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* Hero */}
      <section className="py-24 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500 mb-6">
            About <span className="text-foreground">GoWay</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Connecting communities through safe, sustainable, and innovative transportation since 2020.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Our Core Values
          </motion.h2>
          <motion.p className="text-xl text-gray-600 dark:text-gray-300" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
            Principles that guide us every day
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <Card className="text-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-tr from-emerald-400 to-emerald-600 text-white rounded-xl shadow-lg">
                    {v.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{v.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="text-center max-w-7xl mx-auto mb-16">
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Meet Our Leadership Team
          </motion.h2>
          <motion.p className="text-xl text-gray-600 dark:text-gray-300" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
            Experienced leaders driving innovation and safety
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="text-center hover:shadow-2xl transition-shadow bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-tr from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                    {t.image}
                  </div>
                  <CardTitle>{t.name}</CardTitle>
                  <CardDescription className="text-emerald-500 font-medium">{t.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="text-center max-w-7xl mx-auto mb-16">
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Our Journey
          </motion.h2>
          <motion.p className="text-xl text-gray-600 dark:text-gray-300" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
            Key milestones that define our growth
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {milestones.map((m, i) => (
            <motion.div key={i} className="flex items-start space-x-6" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {m.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <motion.div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a rider seeking convenience or a driver seeking opportunity, become part of the mobility revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-emerald-500 text-white hover:bg-emerald-600">
              Start Riding
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              Become a Driver
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
