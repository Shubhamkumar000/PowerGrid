import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
export const FooterSection = () => {
  return <footer className="bg-blue-950/30 border-t border-blue-900/50 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                PowerForecast AI
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Advanced AI-powered electricity demand forecasting for India's
              power grid. Preventing blackouts, reducing waste, and optimizing
              renewable energy integration.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Technology</FooterLink>
              <FooterLink>Case Studies</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Careers</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <FooterLink>Documentation</FooterLink>
              <FooterLink>API Reference</FooterLink>
              <FooterLink>Developer Tools</FooterLink>
              <FooterLink>Knowledge Base</FooterLink>
              <FooterLink>Community Forum</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">contact@powerforecast.ai</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">+91 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Tech Park, Bengaluru
                  <br />
                  Karnataka, India 560103
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-900/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 PowerForecast AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
const FooterLink = ({
  children
}: {
  children: React.ReactNode;
}) => <li>
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
      {children}
    </a>
  </li>;
const SocialIcon = ({
  icon
}: {
  icon: React.ReactNode;
}) => <a href="#" className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 hover:bg-blue-800 hover:text-white transition-all">
    {icon}
  </a>;