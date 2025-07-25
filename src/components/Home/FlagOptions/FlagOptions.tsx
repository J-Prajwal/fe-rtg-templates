import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Copy } from 'lucide-react';
import { flagCategories } from '@/utils/template';

const FlagOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedFlag, setCopiedFlag] = useState<string | null>(null);
  const [copiedExample, setCopiedExample] = useState(false);

  const categories = [
    'all',
    ...flagCategories.map(cat => cat.title.toLowerCase()),
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? flagCategories
      : flagCategories.filter(
          cat => cat.title.toLowerCase() === selectedCategory
        );

  const handleCopyFlag = async (flag: string) => {
    await navigator.clipboard.writeText(flag);
    setCopiedFlag(flag);
    setTimeout(() => setCopiedFlag(null), 2000);
  };

  const handleCopyExample = async () => {
    await navigator.clipboard.writeText(
      'npx get-template react my-app --typescript --tailwind --router --testing'
    );
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Customize Your Template
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
            Powerful Flags & Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Customize your template with these powerful flags and options. Mix
            and match to create the perfect setup for your project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                  : 'hover:bg-gray-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Flags Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <Card
              key={index}
              className="group h-full hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-blue-50/20 hover:from-blue-50/30 hover:via-white hover:to-purple-50/30 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-900 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-1">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {category.flags.map((flagInfo, flagIndex) => (
                    <div
                      key={flagIndex}
                      className="group/flag p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="font-mono text-xs bg-gray-900 text-green-400 hover:bg-gray-800 transition-colors duration-200">
                          {flagInfo.flag}
                        </Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-400 hover:text-purple-600 opacity-0 group-hover/flag:opacity-100 transition-all duration-200 h-6 px-2 cursor-pointer"
                          onClick={() => handleCopyFlag(flagInfo.flag)}
                        >
                          {copiedFlag === flagInfo.flag ? (
                            <div className="flex items-center gap-1 text-green-600">
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
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {flagInfo.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-3xl p-8 border border-purple-200/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent">
              Combine Multiple Flags
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              You can combine multiple flags to create your perfect setup.
              Here's an example:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">
                  Example Command
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-green-400"
                  onClick={handleCopyExample}
                >
                  {copiedExample ? (
                    <div className="flex items-center gap-1 text-green-600">
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
              <code className="text-green-400 font-mono text-lg block break-all leading-relaxed">
                npx get-template react my-app --typescript --tailwind --router
                --testing
              </code>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  React Template
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <p className="text-sm font-medium text-gray-700">TypeScript</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Tailwind CSS
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Testing Setup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagOptions;
