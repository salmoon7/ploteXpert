"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  UploadCloud,
  BadgeCheck,
  Globe,
  Layers,
} from "lucide-react";

const WhyPlotXpert = () => {
  const features = [
    {
      title: "Fraud Prevention",
      description:
        "We digitally verify every property to prevent scams in real estate transactions.",
      icon: <ShieldCheck size={40} className="text-[#002147]" />,
    },
    {
      title: "Legal Verification",
      description:
        "Our legal practitioners validate land documents, ensuring authenticity and trust.",
      icon: <FileCheck size={40} className="text-[#002147]" />,
    },
    {
      title: "Direct Uploads",
      description:
        "Upload properties directly—no middlemen needed if all documents are complete.",
      icon: <UploadCloud size={40} className="text-[#002147]" />,
    },
    {
      title: "Property Validity Check",
      description:
        "Instantly verify the legitimacy of any land or building listed on our platform.",
      icon: <BadgeCheck size={40} className="text-[#002147]" />,
    },
    {
      title: "Global Accessibility",
      description:
        "Access verified properties anytime, anywhere, with a secure online verification system.",
      icon: <Globe size={40} className="text-[#002147]" />,
    },
    {
      title: "Secure Transactions",
      description:
        "Ensure safe and legally-backed property purchases with our verification process.",
      icon: <Layers size={40} className="text-[#002147]" />,
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-16 px-6 md:px-16 lg:px-32">
      <h2
        className="text-4xl font-bold text-center text-[#002147] mb-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Why PlotXpert?
      </h2>
      <p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        The real estate market is filled with risks and fraudulent activities.
        PlotXpert provides **a digitally verified** system to ensure secure and
        trustworthy transactions.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-200 flex flex-col items-center text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-[#002147] mt-4 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyPlotXpert;
