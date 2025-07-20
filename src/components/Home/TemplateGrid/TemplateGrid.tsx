import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { templates } from '../../../utils/template';
import { TemplateCard } from './TemplateCard';

const TemplateGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTemplates = templates.filter(
    template =>
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Choose Your Template
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick the perfect combination of tools for your next React project
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10 h-12 text-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <TemplateCard
              key={index}
              title={template.title}
              description={template.description}
              command={template.command}
              tags={template.tags}
              popular={template.popular}
            />
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No templates found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplateGrid;
