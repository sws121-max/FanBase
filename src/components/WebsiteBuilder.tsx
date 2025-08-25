import React, { useState } from 'react';
import { ArrowLeft, Monitor, Tablet, Smartphone, Eye, Code, Save, Download } from 'lucide-react';
import { Template } from '../types/Template';
import TemplateSelector from './TemplateSelector';
import CustomizationPanel from './CustomizationPanel';
import PreviewArea from './PreviewArea';
import { templates } from '../data/templates';

interface WebsiteBuilderProps {
  template: Template;
  onBack: () => void;
}

type ViewMode = 'desktop' | 'tablet' | 'mobile';
type PanelMode = 'templates' | 'customize' | 'preview';

const WebsiteBuilder: React.FC<WebsiteBuilderProps> = ({ template: initialTemplate, onBack }) => {
  const [currentTemplate, setCurrentTemplate] = useState<Template>(initialTemplate);
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [activePanel, setActivePanel] = useState<PanelMode>('templates');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const viewModeConfig = {
    desktop: { width: '100%', icon: Monitor, label: 'Desktop' },
    tablet: { width: '768px', icon: Tablet, label: 'Tablet' },
    mobile: { width: '375px', icon: Smartphone, label: 'Mobile' }
  };

  const handleTemplateChange = (newTemplate: Template) => {
    setCurrentTemplate(newTemplate);
  };

  const handleContentUpdate = (updates: Partial<Template>) => {
    setCurrentTemplate(prev => ({ ...prev, ...updates }));
  };

  const handleExport = () => {
    // In a real app, this would generate and download the website files
    const websiteData = JSON.stringify(currentTemplate, null, 2);
    const blob = new Blob([websiteData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTemplate.name.toLowerCase().replace(/\s+/g, '-')}-website.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Gallery
          </button>
          <div className="h-6 w-px bg-gray-300" />
          <h1 className="text-xl font-semibold text-gray-900">
            {currentTemplate.name}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Panel Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              { id: 'templates', icon: Code, label: 'Templates' },
              { id: 'customize', icon: Eye, label: 'Customize' },
              { id: 'preview', icon: Monitor, label: 'Preview' }
            ].map(panel => (
              <button
                key={panel.id}
                onClick={() => setActivePanel(panel.id as PanelMode)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activePanel === panel.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <panel.icon className="w-4 h-4 mr-2" />
                {panel.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.entries(viewModeConfig).map(([mode, config]) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode as ViewMode)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === mode
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <config.icon className="w-4 h-4 mr-2" />
                {config.label}
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-300" />

          {/* Action Buttons */}
          <button
            onClick={handleExport}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>

          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Save className="w-4 h-4 mr-2" />
            Save
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        {activePanel !== 'preview' && (
          <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            {activePanel === 'templates' && (
              <TemplateSelector
                templates={templates}
                currentTemplate={currentTemplate}
                onTemplateSelect={handleTemplateChange}
              />
            )}
            {activePanel === 'customize' && (
              <CustomizationPanel
                template={currentTemplate}
                selectedSection={selectedSection}
                onUpdate={handleContentUpdate}
              />
            )}
          </div>
        )}

        {/* Preview Area */}
        <div className="flex-1 bg-gray-100 overflow-hidden">
          <PreviewArea
            template={currentTemplate}
            viewMode={viewMode}
            onSectionSelect={setSelectedSection}
            selectedSection={selectedSection}
          />
        </div>

        {/* Right Sidebar - Design Options */}
        {activePanel === 'customize' && (
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Options</h3>
              
              {/* Color Palette */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Color Palette</h4>
                <div className="grid grid-cols-5 gap-2">
                  {Object.entries(currentTemplate.colors).map(([colorName, colorValue]) => (
                    <div key={colorName} className="text-center">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-200 mx-auto mb-1 cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: colorValue }}
                        title={colorName}
                      />
                      <span className="text-xs text-gray-600 capitalize">{colorName}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Typography</h4>
                <select className="w-full p-2 border border-gray-200 rounded-lg">
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Lato</option>
                </select>
              </div>

              {/* Layout Options */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Layout</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Full Width</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Centered Content</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Responsive Design</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteBuilder;