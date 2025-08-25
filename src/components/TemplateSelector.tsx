import React from 'react';
import { Template } from '../types/Template';

interface TemplateSelectorProps {
  templates: Template[];
  currentTemplate: Template;
  onTemplateSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  currentTemplate,
  onTemplateSelect
}) => {
  const categories = ['all', 'ecommerce', 'business', 'portfolio', 'blog'];
  
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Template</h3>
      
      {categories.map(category => {
        const categoryTemplates = category === 'all' 
          ? templates 
          : templates.filter(t => t.category === category);
        
        if (categoryTemplates.length === 0) return null;
        
        return (
          <div key={category} className="mb-8">
            <h4 className="text-sm font-medium text-gray-700 mb-4 capitalize">
              {category} Templates ({categoryTemplates.length})
            </h4>
            
            <div className="space-y-3">
              {categoryTemplates.map(template => (
                <div
                  key={template.id}
                  onClick={() => onTemplateSelect(template)}
                  className={`group cursor-pointer rounded-lg border-2 overflow-hidden transition-all duration-200 ${
                    currentTemplate.id === template.id
                      ? 'border-blue-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-gray-900 text-sm">
                        {template.name}
                      </h5>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        template.category === 'ecommerce' ? 'bg-green-100 text-green-700' :
                        template.category === 'business' ? 'bg-blue-100 text-blue-700' :
                        template.category === 'portfolio' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {template.category}
                      </span>
                    </div>
                    
                    <div className="flex space-x-1 mt-2">
                      {Object.entries(template.colors).slice(0, 3).map(([name, color]) => (
                        <div
                          key={name}
                          className="w-3 h-3 rounded-full border border-gray-200"
                          style={{ backgroundColor: color }}
                          title={name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateSelector;