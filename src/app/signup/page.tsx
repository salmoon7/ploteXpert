"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User } from "lucide-react";
const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-softCreamy mt-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <Input type="text" placeholder="Full Name" className="pl-10" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <Input type="email" placeholder="Email" className="pl-10" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <Input type="password" placeholder="Password" className="pl-10" />
          </div>
          <Button className="w-full bg-primary hover:bg-green-700 text-white py-2 rounded-lg">
            Sign Up
          </Button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
