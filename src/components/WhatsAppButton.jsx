import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const WhatsAppButton = ({
  children = 'Order on WhatsApp',
  message,
  size = 'md',
  variant = 'solid',
  className = '',
}) => {
  const msg = message || siteConfig.whatsappMessage;
  const href = `${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(msg)}`;

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const variants = {
    solid: 'bg-[#25D366] hover:bg-[#1eb859] text-white shadow-lg shadow-green-200',
    outline: 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white',
    orange: 'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-orange-200',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center font-body font-semibold rounded-full
        transition-all duration-200 active:scale-95
        ${sizes[size]} ${variants[variant]} ${className}
      `}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      {children}
    </a>
  );
};

export default WhatsAppButton;
