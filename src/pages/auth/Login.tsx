import { LoginForm } from "@/components/modules/authentication/LoginForm";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2">
          <Link
            to="/"
            className="text-2xl flex items-center gap-3 font-bold text-primary dark:text-primary-light hover:text-primary/90 transition group relative"
          >
            <motion.div
              className="relative"
              animate={{
                x: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

            </motion.div>
            <span className=" transition-all duration-300">
              GoWay
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
