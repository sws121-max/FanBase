import React from 'react';
import { Template } from '../types/Template';
import WebsitePreview from './WebsitePreview';

interface PreviewAreaProps {
  template: Template;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onSectionSelect: (sectionId: string | null) => void;
  selectedSection: string | null;
}

const PreviewArea: React.FC<PreviewAreaProps> = ({
  template,
  viewMode,
  onSectionSelect,
  selectedSection
}) => {
  const getPreviewWidth = () => {
    switch (viewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      case 'desktop': return '100%';
    }
  };

  const getPreviewHeight = () => {
    switch (viewMode) {
      case 'mobile': return '667px';
      case 'tablet': return '1024px';
      case 'desktop': return '100%';
    }
  };

  return (
    <div className="h-full flex items-center justify-center p-6 bg-gray-100">
      <div 
        className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
        style={{ 
          width: getPreviewWidth(),
          height: getPreviewHeight(),
          maxWidth: viewMode === 'desktop' ? '100%' : getPreviewWidth(),
          maxHeight: viewMode === 'desktop' ? '100%' : getPreviewHeight()
        }}
      >
        <WebsitePreview
          template={template}
          onSectionSelect={onSectionSelect}
          selectedSection={selectedSection}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default PreviewArea;