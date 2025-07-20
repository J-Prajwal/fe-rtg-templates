import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  title: string;
  description: string;
  command: string;
  tags: string[];
  popular?: boolean;
}

export const TemplateCard = ({
  title,
  description,
  command,
  tags,
  popular,
}: TemplateCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${popular ? 'ring-2 ring-blue-500' : ''}`}
    >
      {popular && (
        <div className="absolute -top-3 left-4">
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <code className="text-green-400 font-mono text-sm flex-1 pr-2">
              {command}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-white flex-shrink-0"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
