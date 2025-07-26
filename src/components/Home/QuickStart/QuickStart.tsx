import {
  Terminal,
  ArrowRight,
  CheckCircle,
  Play,
  Folder,
  Zap,
  Copy,
  Check,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quickStartSteps } from '@/utils/template';
import { useState } from 'react';

export const QuickStart = () => {
  const [copiedCommands, setCopiedCommands] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCopyCommand = async (command: string, stepIndex: number) => {
    await navigator.clipboard.writeText(command);
    setCopiedCommands(prev => ({ ...prev, [stepIndex]: true }));
    setTimeout(() => {
      setCopiedCommands(prev => ({ ...prev, [stepIndex]: false }));
    }, 2000);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Get Started in Minutes
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 bg-clip-text text-transparent">
            Quick Start Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get your project up and running in three simple steps. Follow along
            and you'll have a fully configured development environment ready to
            go.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {quickStartSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < quickStartSteps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-green-500 to-blue-500 transform -translate-x-1/2 z-0" />
              )}

              <div className="flex items-start gap-8 relative z-10">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-green-50/20 hover:from-green-50/30 hover:via-white hover:to-blue-50/30 border-0 shadow-lg">
                  <CardHeader className="">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-900">
                      {index === 0 && (
                        <Terminal className="w-6 h-6 text-green-600" />
                      )}
                      {index === 1 && (
                        <Folder className="w-6 h-6 text-blue-600" />
                      )}
                      {index === 2 && (
                        <Zap className="w-6 h-6 text-purple-600" />
                      )}
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-inner">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400 font-medium">
                          Command
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-200 h-6 px-2"
                          onClick={() => handleCopyCommand(step.command, index)}
                        >
                          {copiedCommands[index] ? (
                            <div className="flex items-center gap-1 text-green-400">
                              <Check className="w-3 h-3" />
                              <span className="text-xs">Copied!</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <Copy className="w-3 h-3" />
                              <span className="text-xs">Copy</span>
                            </div>
                          )}
                        </Button>
                      </div>
                      <code className="text-green-400 font-mono text-sm break-all leading-relaxed">
                        {step.command}
                      </code>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow */}
                {index < quickStartSteps.length - 1 ? (
                  <div className="flex-shrink-0 mt-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="flex-shrink-0 mt-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Success Section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border border-green-200/50 rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800">
                You're Ready!
              </h3>
              <p className="text-green-700">
                Your development environment is now running
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-green-700 font-medium">
                Development Server
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 text-sm">Running</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Local URL:</span>
                <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-mono">
                  http://localhost:3000
                </code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Network URL:</span>
                <code className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-mono">
                  http://192.168.1.100:3000
                </code>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-green-200">
              <p className="text-green-700 text-sm">
                🎉 Your project is now ready! Start building your amazing
                application.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Terminal className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Hot Reload</h4>
            <p className="text-gray-600 text-sm">
              Changes are reflected instantly in your browser
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Folder className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">File Structure</h4>
            <p className="text-gray-600 text-sm">
              Well-organized project structure ready for scaling
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Optimized Build
            </h4>
            <p className="text-gray-600 text-sm">
              Production-ready build with optimizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
