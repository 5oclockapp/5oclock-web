
import React from 'react';
import { ClockIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <ClockIcon className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold text-white">5 O'Clock</span>
            </a>
            <p className="text-gray-400 max-w-xs">
              The ultimate platform for connecting vendors with customers looking for last-minute deals.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">For Vendors</h4>
            <div className="flex flex-col gap-2">
              <FooterLink href="#">How it Works</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Sign Up</FooterLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 5 O'Clock App. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors"><FacebookIcon className="h-6 w-6" /></a>
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors"><InstagramIcon className="h-6 w-6" /></a>
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors"><TwitterIcon className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
