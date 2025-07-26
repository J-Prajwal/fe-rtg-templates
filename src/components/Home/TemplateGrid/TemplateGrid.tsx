import { useState } from 'react';
import { Search, Sparkles, Zap, Code, Database, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { templates } from '../../../utils/template';
import { TemplateCard } from './TemplateCard';

const TemplateGrid = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTemplates = templates.filter(template => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === 'all' ||
      template.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      template.tags.some(tag =>
        tag.toLowerCase().includes(selectedCategory.toLowerCase())
      );

    return matchesSearch && matchesCategory;
  });

  // Todo: Once ready the other template then open the below
  const categories = ['all', 'react'];
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'react':
        return <Code className="w-4 h-4" />;
      case 'next':
        return <Zap className="w-4 h-4" />;
      case 'node':
        return <Database className="w-4 h-4" />;
      case 'nestjs':
        return <Shield className="w-4 h-4" />;
      case 'fastapi':
        return <Code className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      id="templates"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Choose Your Template
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Ready-to-Use Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pick the perfect combination of tools for your next project. From
            React to FastAPI, we've got you covered with modern,
            production-ready templates.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search templates by name, description, or tags..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="pl-12 h-14 text-lg transition-all duration-200 ring-0 focus:ring-0 focus:outline-none focus:border-none"
            />
          </div>

          {/* Todo: Once ready the other template then open the Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'hover:bg-gray-50'
                }`}
              >
                {getCategoryIcon(category)}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing{' '}
            <span className="font-semibold text-blue-600">
              {filteredTemplates.length}
            </span>{' '}
            templates
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TemplateCard
                title={template.title}
                description={template.description}
                command={template.command}
                tags={template.tags}
                popular={false}
              />
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No templates found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search terms or category filter to find what
              you're looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplateGrid;
