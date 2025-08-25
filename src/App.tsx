import React, { useState } from 'react';
import TemplateGallery from './components/TemplateGallery';
import WebsiteBuilder from './components/WebsiteBuilder';
import { Template } from './types/Template';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [showBuilder, setShowBuilder] = useState(false);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setShowBuilder(true);
  };

  const handleBackToGallery = () => {
    setShowBuilder(false);
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!showBuilder ? (
        <TemplateGallery onTemplateSelect={handleTemplateSelect} />
      ) : (
        <WebsiteBuilder 
          template={selectedTemplate!} 
          onBack={handleBackToGallery}
        />
      )}
    </div>
  );
}

export default App;