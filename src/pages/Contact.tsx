import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { scrollToTop } from "@/hooks/scroll";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  scrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "rider",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      toast("Thank you for contacting us. We'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "rider",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "24/7 emergency support for riders and drivers",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      details: "support@rideshare.com",
      description: "General inquiries and non-urgent matters",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Headquarters",
      details: "123 Tech Street, San Francisco, CA 94102",
      description: "Visit us for partnership and business inquiries",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      description: "Extended support available for emergencies",
    },
  ];

  const supportTypes = [
    {
      title: "Rider Support",
      description:
        "Help with bookings, payments, safety concerns, and account issues.",
    },
    {
      title: "Driver Support",
      description:
        "Assistance with earnings, vehicle requirements, and driver app issues.",
    },
    {
      title: "Business Inquiries",
      description:
        "Partnership opportunities, corporate accounts, and bulk services.",
    },
    {
      title: "Technical Issues",
      description:
        "App bugs, website problems, and technical support requests.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Contact <span className="text-emerald-400">Us</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We're here to help! Reach out for support, questions, or feedback.
        </p>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-emerald-50/40 dark:bg-gray-800/30 backdrop-blur-sm transition-colors">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-gray-800 dark:text-white">
                  <MessageSquare className="w-6 h-6 mr-3 text-emerald-400" />
                  Send a Message
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Fill out the form and our support team will contact you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="userType">I am a:</Label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-emerald-400 bg-transparent text-gray-800 dark:text-gray-200"
                    >
                      <option value="rider">Rider</option>
                      <option value="driver">Driver</option>
                      <option value="business">Business Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="focus:ring-emerald-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message..."
                      className="focus:ring-emerald-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-semibold transition-all"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
                  <CardHeader className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400/10 rounded-full flex items-center justify-center text-emerald-400">
                      {info.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800 dark:text-white">
                        {info.title}
                      </CardTitle>
                      <p className="text-emerald-500 font-medium">
                        {info.details}
                      </p>
                      <CardDescription className="mt-1 text-gray-500 dark:text-gray-400">
                        {info.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Types */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="py-20 bg-emerald-100/50 dark:bg-gray-800/40"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-500">
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Emergency Support */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="py-20 bg-emerald-400 text-center text-white dark:bg-emerald-500"
      >
        <h2 className="text-3xl font-bold mb-4">Need Emergency Support?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          For immediate assistance during a ride or urgent safety concerns, use
          our 24/7 emergency support options.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-emerald-500 hover:bg-emerald-100"
          >
            Emergency Hotline
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-emerald-500"
          >
            Safety Center
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
