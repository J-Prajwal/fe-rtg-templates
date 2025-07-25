import { Copy, Check, Star, ExternalLink } from 'lucide-react';
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
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 hover:from-blue-50/50 hover:via-white hover:to-purple-50/50">
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        </div>
      )}

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map(tag => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge variant="outline" className="text-xs text-gray-500">
              +{tags.length - 4} more
            </Badge>
          )}
        </div>

        {/* Command Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400 font-medium">Command</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-200 h-6 px-2"
            >
              {copied ? (
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
          <div className="relative">
            <code className="text-green-400 font-mono text-sm break-all leading-relaxed">
              {command}
            </code>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={copyToClipboard}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Use Template
        </Button>
      </CardContent>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
    </Card>
  );
};
