import React from "react";
// We no longer need to import the social icons, but we'll keep the Next.js Image import
import Image from "next/image";
import { TicketIcon } from "lucide-react"; // Keeping this if it's used elsewhere, but not for the social links

// Helper component for social icons (using Next.js Image)
const SocialIconLink: React.FC<{
  href: string;
  imagePath: string;
  altText: string;
}> = ({ href, imagePath, altText }) => (
  <a
    href={href}
    className="text-white bg-black/50 border border-gray-700/50 hover:border-teal-400/50 transition-colors duration-300 
               p-3 rounded-xl shadow-lg flex items-center justify-center w-10 h-10"
    target="_blank" // Recommended for social links
    rel="noopener noreferrer"
  >
    {/* Use Next.js Image component for the social icon */}
    <Image
      src={imagePath}
      alt={altText}
      width={20} // Icon width (adjust as needed)
      height={20} // Icon height (adjust as needed)
      className="object-contain" // Ensures the image scales correctly within the container
    />
  </a>
);

// Helper component for navigation links
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 px-4 text-sm font-light"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  // You should ensure the '/assets/logo-footer.png' path points to the
  // "5' O Clock" logo shown in the image.
  const logoPath = "/assets/Mask group (1).png";

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Main content area: Centered and simplified */}
      <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
        {/* 1. Logo */}
        <div className="mb-10">
          <Image
            src={logoPath}
            alt="5' O Clock logo"
            width={200} // Set a specific width for the logo
            height={60} // Set a specific height
            className="w-[200px] h-[86]" // Adjust sizing if necessary
          />
        </div>

        {/* 2. Social Media Icons (using Image components) */}
        <div className="flex gap-4 mb-12">
          <SocialIconLink
            href="https://instagram.com"
            imagePath="/assets/Component 45.png" // <<< REPLACE with your Instagram image path
            altText="Instagram"
          />

          <SocialIconLink
            href="https://tiktok.com"
            imagePath="/assets/Component 46.png" // <<< REPLACE with your TikTok image path
            altText="TikTok"
          />

          <SocialIconLink
            href="https://linkedin.com"
            imagePath="/assets/Component 47.png" // <<< REPLACE with your LinkedIn image path
            altText="LinkedIn"
          />

          {/* The last icon is the 'X' (formerly Twitter) icon */}
          <SocialIconLink
            href="https://x.com"
            imagePath="/assets/Component 48.png" // <<< REPLACE with your X image path
            altText="X (formerly Twitter)"
          />
        </div>

        {/* 3. Navigation Links */}
        <div className="flex justify-center flex-wrap gap-2 mb-20">
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Feature</NavLink>
          <NavLink href="#">How It Works</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </div>
      </div>

      {/* --- */}

      {/* Bottom Bar: Copyright and Legal Links */}
      <div className="border-t border-gray-800/50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          {/* Copyright */}
          <p className="text-gray-500 font-light">
            &copy; {new Date().getFullYear()} 5' O Clock
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <NavLink href="#">Terms & Conditions</NavLink>
            <NavLink href="#">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
