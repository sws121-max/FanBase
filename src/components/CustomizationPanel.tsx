import React from 'react';
import { Template } from '../types/Template';
import { Type, Palette, Layout, Settings } from 'lucide-react';

interface CustomizationPanelProps {
  template: Template;
  selectedSection: string | null;
  onUpdate: (updates: Partial<Template>) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  template,
  selectedSection,
  onUpdate
}) => {
  const handleHeaderUpdate = (field: string, value: any) => {
    onUpdate({
      header: {
        ...template.header,
        [field]: value
      }
    });
  };

  const handleSectionUpdate = (sectionId: string, field: string, value: any) => {
    const updatedSections = template.body.sections.map(section =>
      section.id === sectionId
        ? { ...section, [field]: value }
        : section
    );
    
    onUpdate({
      body: {
        ...template.body,
        sections: updatedSections
      }
    });
  };

  const handleColorUpdate = (colorName: string, colorValue: string) => {
    onUpdate({
      colors: {
        ...template.colors,
        [colorName]: colorValue
      }
    });
  };

  const selectedSectionData = template.body.sections.find(s => s.id === selectedSection);

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Customize Content</h3>
      
      {/* Header Customization */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Layout className="w-5 h-5 text-gray-500 mr-2" />
          <h4 className="text-sm font-medium text-gray-700">Header Settings</h4>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Site Title</label>
            <input
              type="text"
              value={template.header.title}
              onChange={(e) => handleHeaderUpdate('title', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md text-sm"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Navigation</label>
            <textarea
              value={template.header.navigation.join(', ')}
              onChange={(e) => handleHeaderUpdate('navigation', e.target.value.split(', '))}
              className="w-full p-2 border border-gray-200 rounded-md text-sm h-16"
              placeholder="Home, About, Services, Contact"
            />
          </div>
          
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={template.header.hasSearch}
                onChange={(e) => handleHeaderUpdate('hasSearch', e.target.checked)}
                className="mr-2"
              />
              <span className="text-xs font-medium text-gray-600">Include Search Bar</span>
            </label>
          </div>
        </div>
      </div>

      {/* Section-specific Customization */}
      {selectedSectionData && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Type className="w-5 h-5 text-gray-500 mr-2" />
            <h4 className="text-sm font-medium text-gray-700">
              {selectedSectionData.type} Section
            </h4>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={selectedSectionData.title}
                onChange={(e) => handleSectionUpdate(selectedSectionData.id, 'title', e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-md text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Content</label>
              <textarea
                value={selectedSectionData.content}
                onChange={(e) => handleSectionUpdate(selectedSectionData.id, 'content', e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-md text-sm h-20"
              />
            </div>
          </div>
        </div>
      )}

      {/* Global Sections */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Settings className="w-5 h-5 text-gray-500 mr-2" />
          <h4 className="text-sm font-medium text-gray-700">All Sections</h4>
        </div>
        
        <div className="space-y-2">
          {template.body.sections.map((section, index) => (
            <div
              key={section.id}
              className={`p-3 border rounded-md cursor-pointer transition-colors ${
                selectedSection === section.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => {/* This would be handled by parent component */}}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium capitalize">{section.type}</span>
                <span className="text-xs text-gray-500">Section {index + 1}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 truncate">{section.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Color Customization */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Palette className="w-5 h-5 text-gray-500 mr-2" />
          <h4 className="text-sm font-medium text-gray-700">Colors</h4>
        </div>
        
        <div className="space-y-3">
          {Object.entries(template.colors).map(([colorName, colorValue]) => (
            <div key={colorName} className="flex items-center justify-between">
              <label className="text-xs font-medium text-gray-600 capitalize">
                {colorName}
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={colorValue}
                  onChange={(e) => handleColorUpdate(colorName, e.target.value)}
                  className="w-8 h-8 rounded border border-gray-200 cursor-pointer"
                />
                <span className="text-xs text-gray-500 font-mono">{colorValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;