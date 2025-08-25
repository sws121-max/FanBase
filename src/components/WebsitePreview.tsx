import React from 'react';
import { Template } from '../types/Template';
import { Search, Menu, ShoppingCart, User, Star, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface WebsitePreviewProps {
  template: Template;
  onSectionSelect: (sectionId: string | null) => void;
  selectedSection: string | null;
  viewMode: 'desktop' | 'tablet' | 'mobile';
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({
  template,
  onSectionSelect,
  selectedSection,
  viewMode
}) => {
  const isMobile = viewMode === 'mobile';

  const renderHeader = () => (
    <header 
      className={`${template.header.style} ${isMobile ? 'px-4 py-3' : 'px-6 py-4'} sticky top-0 z-50`}
      onClick={() => onSectionSelect('header')}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>
              {template.header.title}
            </h1>
          </div>

          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              {template.header.navigation.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            {template.header.hasSearch && !isMobile && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-opacity-20 rounded-md bg-opacity-10 backdrop-blur-sm text-sm"
                />
              </div>
            )}
            
            {template.category === 'ecommerce' && (
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-80" />
            )}
            
            {isMobile ? (
              <Menu className="w-6 h-6 cursor-pointer" />
            ) : (
              <User className="w-5 h-5 cursor-pointer hover:opacity-80" />
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderSection = (section: any, index: number) => {
    const isSelected = selectedSection === section.id;
    
    return (
      <section
        key={section.id}
        className={`${section.style} ${isMobile ? 'px-4 py-8' : 'px-6 py-16'} cursor-pointer transition-all relative ${
          isSelected ? 'ring-2 ring-blue-500 ring-inset' : 'hover:bg-opacity-95'
        }`}
        onClick={() => onSectionSelect(section.id)}
      >
        {isSelected && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
            Editing
          </div>
        )}
        
        <div className="max-w-7xl mx-auto">
          {section.type === 'hero' && (
            <div className="text-center">
              <h2 className={`font-bold mb-6 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
                {section.title}
              </h2>
              <p className={`mb-8 opacity-90 max-w-2xl mx-auto ${isMobile ? 'text-base' : 'text-xl'}`}>
                {section.content}
              </p>
              <button 
                className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
                style={{ backgroundColor: template.colors.primary }}
              >
                Get Started
              </button>
            </div>
          )}

          {section.type === 'features' && (
            <div>
              <div className="text-center mb-16">
                <h2 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                  {section.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {section.content}
                </p>
              </div>
              
              <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
                {['Strategy', 'Development', 'Support'].map((feature, idx) => (
                  <div key={idx} className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: template.colors.primary }}
                    >
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600">
                      Professional {feature.toLowerCase()} services tailored to your needs.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section.type === 'products' && (
            <div>
              <div className="text-center mb-16">
                <h2 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                  {section.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {section.content}
                </p>
              </div>
              
              <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
                {[1, 2, 3].map((product) => (
                  <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Product {product}</h3>
                      <p className="text-gray-600 text-sm mb-4">Amazing product description here.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold" style={{ color: template.colors.primary }}>
                          $99.99
                        </span>
                        <button 
                          className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: template.colors.primary }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section.type === 'gallery' && (
            <div>
              <div className="text-center mb-16">
                <h2 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                  {section.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {section.content}
                </p>
              </div>
              
              <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'md:grid-cols-4'}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <img
                      src={`https://images.pexels.com/photos/${3000000 + item}/pexels-photo-${3000000 + item}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      alt={`Gallery item ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {section.type === 'about' && (
            <div className={`grid gap-12 items-center ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
              <div>
                <h2 className={`font-bold text-gray-900 mb-6 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.content}
                </p>
                <div className="space-y-4">
                  {['Expert Team', 'Quality Service', '24/7 Support'].map((item) => (
                    <div key={item} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: template.colors.primary }}
                      ></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-6 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity inline-flex items-center"
                  style={{ backgroundColor: template.colors.primary }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
          )}

          {section.type === 'contact' && (
            <div>
              <div className="text-center mb-16">
                <h2 className={`font-bold text-gray-900 mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                  {section.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {section.content}
                </p>
              </div>
              
              <div className={`grid gap-12 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'contact@example.com' },
                    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                    { icon: MapPin, label: 'Address', value: '123 Business St, City, State' }
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${template.colors.primary}20` }}
                      >
                        <contact.icon className="w-6 h-6" style={{ color: template.colors.primary }} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{contact.label}</h3>
                        <p className="text-gray-600">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: template.colors.primary }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderFooter = () => (
    <footer 
      className={`${template.footer.style} ${isMobile ? 'px-4 py-6' : 'px-6 py-8'}`}
      onClick={() => onSectionSelect('footer')}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`${isMobile ? 'text-center' : 'flex justify-between items-center'}`}>
          <p className={`${isMobile ? 'mb-4' : 'mb-0'}`}>
            {template.footer.content}
          </p>
          <div className={`flex ${isMobile ? 'justify-center' : 'justify-end'} space-x-6`}>
            {template.footer.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:opacity-80 transition-opacity text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="w-full h-full overflow-y-auto">
      {renderHeader()}
      
      <main>
        {template.body.sections.map((section, index) => renderSection(section, index))}
      </main>
      
      {renderFooter()}
    </div>
  );
};

export default WebsitePreview;