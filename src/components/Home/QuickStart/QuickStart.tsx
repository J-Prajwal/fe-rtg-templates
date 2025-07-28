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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-blue-50/30">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Get Started in Minutes</span>
            <span className="sm:hidden">Quick Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent leading-tight">
            Quick Start Guide
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Get your project up and running in three simple steps. Follow along
            and you'll have a fully configured development environment ready to
            go.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {quickStartSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line - Hidden on mobile */}
              {index < quickStartSteps.length - 1 && (
                <div className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 z-0 hidden sm:block" />
              )}

              <div className="flex flex-col flex-row items-start gap-4 sm:gap-6 lg:gap-8 relative z-10">
                {/* Step Number */}
                <div className="flex-shrink-0 self-center sm:self-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-green-50/20 hover:from-green-50/30 hover:via-white hover:to-blue-50/30 border-0 shadow-lg">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-gray-900">
                      {index === 0 && (
                        <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      )}
                      {index === 1 && (
                        <Folder className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      )}
                      {index === 2 && (
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                      )}
                      <span className="text-sm sm:text-base lg:text-lg">
                        {step.title}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50 shadow-inner">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-xs text-gray-400 font-medium">
                          Command
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-200 h-6 px-2 text-xs"
                          onClick={() => handleCopyCommand(step.command, index)}
                        >
                          {copiedCommands[index] ? (
                            <div className="flex items-center gap-1 text-green-400">
                              <Check className="w-3 h-3" />
                              <span className="hidden sm:inline text-xs">
                                Copied!
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <Copy className="w-3 h-3" />
                              <span className="hidden sm:inline text-xs">
                                Copy
                              </span>
                            </div>
                          )}
                        </Button>
                      </div>
                      <code className="text-green-400 font-mono text-xs sm:text-sm break-all leading-relaxed block">
                        {step.command}
                      </code>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow - Hidden on mobile */}
                {index < quickStartSteps.length - 1 ? (
                  <div className="flex-shrink-0 mt-4 sm:mt-8 hidden md:block">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="flex-shrink-0 mt-4 sm:mt-8 hidden md:block">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Success Section */}
        <div className="mt-12 sm:mt-16 border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg bg-green-50">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                You're Ready!
              </h3>
              <p className="text-blue-700 text-sm sm:text-base">
                Your development environment is now running
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-blue-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
              <span className="text-blue-700 font-medium text-sm sm:text-base">
                Development Server
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-600 text-xs sm:text-sm">
                  Running
                </span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-xs sm:text-sm">
                  Local URL:
                </span>
                <code className="bg-purple-100 text-blue-800 px-2 sm:px-3 py-1 rounded text-xs font-mono break-all">
                  http://localhost:3000
                </code>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                <span className="text-gray-600 text-xs sm:text-sm">
                  Network URL:
                </span>
                <code className="bg-purple-100 text-blue-800 px-2 sm:px-3 py-1 rounded text-xs font-mono break-all">
                  http://192.168.1.100:3000
                </code>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-700">
                🎉 Your project is now ready! Start building your amazing
                application.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
              Hot Reload
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Changes are reflected instantly in your browser
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Folder className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
              File Structure
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Well-organized project structure ready for scaling
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
              Optimized Build
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Production-ready build with optimizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
