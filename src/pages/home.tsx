import React from "react";
import { motion } from "framer-motion";
import { Globe2, TrendingUp, BarChart3 } from "lucide-react";

const FrontPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-900 text-white flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">
          The PAV Nigeria App
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-2">
          Your Global Trade Partner
        </p>
        <p className="text-sm md:text-base text-gray-300 mb-8">
          Real-time International Commodity Prices for Nigerian Non-Oil Exporters
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <Feature icon={<Globe2 />} title="Global Access" />
          <Feature icon={<TrendingUp />} title="Market Insights" />
          <Feature icon={<BarChart3 />} title="Live Data" />
        </div>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed">
          Empowering Nigerian exporters with real-time access to international
          commodity prices. Stay informed, make data-driven decisions, and
          navigate global trade with confidence.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 rounded-full bg-green-600 hover:bg-green-500 font-semibold shadow-lg"
        >
          Explore Market Prices
        </motion.button>
      </motion.div>

   
    </div>
  );
};

const Feature = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
    <div className="text-green-400">{icon}</div>
    <span className="text-sm mt-2 text-gray-200">{title}</span>
  </motion.div>
);

export default FrontPage;
