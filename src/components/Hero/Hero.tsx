import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Zap, Terminal, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDBackground from './ThreeDBackground';

type LegendColors =
  | 'bg-green-400'
  | 'bg-blue-400'
  | 'bg-purple-400'
  | 'bg-orange-400';

interface ILegendItem {
  title: string;
  bgColor: LegendColors;
  icon: React.ReactNode;
}

const Hero = () => {
  const mainCommand: string = 'npx get-template react my-app';
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const legendMap: ILegendItem[] = [
    {
      title: 'TypeScript Ready',
      bgColor: 'bg-green-400',
      icon: <Star className="w-3 h-3" />,
    },
    {
      title: 'Tailwind CSS',
      bgColor: 'bg-blue-400',
      icon: <Zap className="w-3 h-3" />,
    },
    {
      title: 'Multiple Frameworks',
      bgColor: 'bg-purple-400',
      icon: <Terminal className="w-3 h-3" />,
    },
    {
      title: 'Production Ready',
      bgColor: 'bg-orange-400',
      icon: <Check className="w-3 h-3" />,
    },
  ];

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(mainCommand);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1.5 rounded-full text-white font-medium shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Zap className="w-4 h-4" />
          <span className="text-sm">Ready to Go Production Templates</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Generate Production Ready
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Apps Instantly
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Skip the setup, start coding. Generate production-ready applications
          with your favorite tools in seconds.
        </motion.p>

        {/* Command Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-3 h-3 text-green-400" />
              <span className="text-green-400 font-medium">Terminal</span>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
              <code className="text-green-400 font-mono text-lg md:text-xl flex-1 text-left">
                {mainCommand}
              </code>
              <Button
                onClick={copyToClipboard}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-green-400 hover:bg-gray-700/50 transition-all duration-200 ml-4"
              >
                {isCopied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {legendMap.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${item.bgColor} rounded-full h-2 w-2`} />
              <span className="text-sm font-medium text-gray-700">
                {item.title}
              </span>
              {item.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button
            size="lg"
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => {
              const templatesSection = document.getElementById('templates');
              if (templatesSection) {
                templatesSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Explore Templates
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
