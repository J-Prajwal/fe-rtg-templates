import { useState } from 'react';
import { Copy, Check, Zap, Terminal, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const mainCommand: string = 'npx rtg-template react my-app';
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
    <div
      className="h-auto sm:h-screen relative w-full flex flex-col justify-center items-center overflow-hidden pt-24"
      style={{
        backgroundColor: '#f8f8f9',
        backgroundImage: `
    linear-gradient(#f2f2f7 2px, transparent 2px),
    linear-gradient(to right, #f2f2f7 2px, #f8f8f9 2px)
    `,
        backgroundSize: '36px 36px',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1.5 rounded-full text-white font-medium shadow-lg mb-8">
          <Zap className="w-4 h-4" />
          <span className="text-sm">Ready to Go Production Templates</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
          Generate Production Ready
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Apps Instantly
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Skip the setup, start coding. Generate production-ready applications
          with your favorite tools in seconds.
        </p>

        {/* Command Section */}
        <div className="max-w-3xl mx-auto mb-8">
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
                size="lg"
                className="text-gray-400 hover:text-green-400 hover:bg-gray-700/50 transition-all duration-200 ml-4 h-12 w-12"
              >
                {isCopied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {legendMap.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 ">
              <div className={`${item.bgColor} rounded-full h-2 w-2`} />
              <span className="text-sm font-medium text-gray-700">
                {item.title}
              </span>
              {item.icon}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
