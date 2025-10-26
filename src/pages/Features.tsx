import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  MapPin,
  Settings,
  Shield,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { scrollToTop } from "@/hooks/scroll";

export default function Features() {
  scrollToTop();

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const riderFeatures = [
    { icon: <Smartphone className="w-6 h-6" />, title: "Easy Booking", description: "Book rides quickly with just a few taps." },
    { icon: <MapPin className="w-6 h-6" />, title: "Real-time Tracking", description: "Track your driver in real-time." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Multiple Payment Options", description: "Pay via cards, wallets, or cash." },
    { icon: <Shield className="w-6 h-6" />, title: "Safety First", description: "Emergency button and 24/7 support." },
    { icon: <Star className="w-6 h-6" />, title: "Rate & Review", description: "Maintain service quality with ratings." },
    { icon: <Clock className="w-6 h-6" />, title: "Ride History", description: "Access all past rides easily." },
  ];

  const driverFeatures = [
    { icon: <Car className="w-6 h-6" />, title: "Flexible Schedule", description: "Drive anytime, set your own hours." },
    { icon: <BarChart className="w-6 h-6" />, title: "Earnings Dashboard", description: "Track earnings with detailed analytics." },
    { icon: <MapPin className="w-6 h-6" />, title: "Smart Navigation", description: "Optimized routes with traffic info." },
    { icon: <Users className="w-6 h-6" />, title: "Driver Community", description: "Connect and share tips with others." },
    { icon: <Shield className="w-6 h-6" />, title: "Insurance Coverage", description: "Drive with comprehensive coverage." },
    { icon: <Zap className="w-6 h-6" />, title: "Instant Payouts", description: "Get paid instantly after rides." },
  ];

  const adminFeatures = [
    { icon: <BarChart className="w-6 h-6" />, title: "Analytics Dashboard", description: "Insights on rides, drivers, and users." },
    { icon: <Users className="w-6 h-6" />, title: "User Management", description: "Manage riders and drivers efficiently." },
    { icon: <Settings className="w-6 h-6" />, title: "System Configuration", description: "Set pricing, areas, and vehicle types." },
    { icon: <Shield className="w-6 h-6" />, title: "Safety Monitoring", description: "Monitor trips and emergencies." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Financial Management", description: "Track payments and driver payouts." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Quality Assurance", description: "Handle disputes and maintain service quality." },
  ];

  const platformFeatures = [
    { title: "Advanced Matching Algorithm", description: "AI matches riders to closest drivers.", badge: "AI Powered" },
    { title: "Dynamic Pricing", description: "Smart rates based on demand and distance.", badge: "Smart Pricing" },
    { title: "Multi-Language Support", description: "Available in 20+ languages worldwide.", badge: "Global Ready" },
    { title: "Accessibility Features", description: "Options for riders with disabilities.", badge: "Inclusive" },
    { title: "Carbon Offset Program", description: "Optional carbon offsets for rides.", badge: "Eco Friendly" },
    { title: "24/7 Customer Support", description: "Support available via chat, phone, email.", badge: "Always Available" },
  ];

  const stats = [
    { value: "1M+", label: "Active Riders" },
    { value: "50K+", label: "Verified Drivers" },
    { value: "10M+", label: "Completed Rides" },
    { value: "4.9★", label: "Average Rating" },
  ];

  const renderFeatureCards = (features: typeof riderFeatures) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 to-emerald-600 text-white rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Hero */}
      <motion.section
        className="pt-24 pb-16 text-center bg-gradient-to-b from-emerald-50 dark:from-gray-800 to-white dark:to-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500">
          Platform <span className="text-foreground">Features</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the features that make RideShare the most loved platform for riders, drivers, and admins.
        </p>
      </motion.section>

      {/* Tabs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="riders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="riders" className="text-lg">For Riders</TabsTrigger>
            <TabsTrigger value="drivers" className="text-lg">For Drivers</TabsTrigger>
            <TabsTrigger value="admins" className="text-lg">For Admins</TabsTrigger>
          </TabsList>

          <TabsContent value="riders" className="space-y-12">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-4">Rider Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Safe, fast, and seamless rides at your fingertips.</p>
            </motion.div>
            {renderFeatureCards(riderFeatures)}
          </TabsContent>

          <TabsContent value="drivers" className="space-y-12">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-4">Driver Tools</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Maximize earnings and efficiency with smart tools.</p>
            </motion.div>
            {renderFeatureCards(driverFeatures)}
          </TabsContent>

          <TabsContent value="admins" className="space-y-12">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Powerful management tools for platform oversight.</p>
            </motion.div>
            {renderFeatureCards(adminFeatures)}
          </TabsContent>
        </Tabs>
      </section>

      {/* Platform Highlights */}
      <section className="py-20 bg-muted/50 dark:bg-gray-800 rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-bold sm:text-4xl mb-4">
            Platform Highlights
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-xl text-gray-600 dark:text-gray-300">
            Advanced capabilities that set us apart.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platformFeatures.map((feature, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <Card className="hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">{feature.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Platform Statistics</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Numbers that showcase our platform's success</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl font-bold text-emerald-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-500 dark:bg-emerald-600 text-center rounded-lg">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6 text-white">Experience All Features Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our platform and discover why millions choose RideShare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-emerald-500 hover:bg-emerald-50">Start as Rider</Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-emerald-500">Become a Driver</Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
