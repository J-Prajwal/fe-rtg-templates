import { Terminal, ArrowRight, CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { quickStartSteps } from '@/utils/template';

export const QuickStart = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Quick Start Guide
          </h2>
          <p className="text-xl text-gray-600">
            Get your React application up and running in three simple steps
          </p>
        </div>

        <div className="space-y-6">
          {quickStartSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-blue-500" />
                    {step.title}
                  </CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <code className="text-green-400 font-mono">
                      {step.command}
                    </code>
                  </div>
                </CardContent>
              </Card>

              {index < quickStartSteps.length - 1 && (
                <div className="flex-shrink-0 mt-8">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-green-800">You're Ready!</h3>
          </div>
          <p className="text-green-700">
            Your React application is now running on{' '}
            <code className="bg-green-100 px-2 py-1 rounded">
              http://localhost:3000
            </code>
            . Start building your amazing project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
