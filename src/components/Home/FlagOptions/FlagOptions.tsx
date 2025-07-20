import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { flagCategories } from '@/utils/template';

const FlagOptions = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Available Flags
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Customize your React template with these powerful flags and options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagCategories.map((category, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {category.flags.map((flagInfo, flagIndex) => (
                    <div
                      key={flagIndex}
                      className="border-l-4 border-blue-200 pl-4"
                    >
                      <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-blue-600">
                        {flagInfo.flag}
                      </code>
                      <p className="text-sm text-gray-600 mt-1">
                        {flagInfo.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Combine Multiple Flags
          </h3>
          <p className="text-gray-600 text-center mb-6">
            You can combine multiple flags to create your perfect setup
          </p>
          <div className="bg-gray-900 rounded-lg p-4 max-w-4xl mx-auto">
            <code className="text-green-400 font-mono text-lg block text-center">
              npx rtg-react --typescript --tailwind --router --testing
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FlagOptions;
