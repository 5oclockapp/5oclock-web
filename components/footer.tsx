import React from "react";
import Image from "next/image";

// Social Icon Component
const SocialIconLink: React.FC<{
  href: string;
  imagePath: string;
  altText: string;
}> = ({ href, imagePath, altText }) => (
  <a
    href={href}
    className="text-white bg-black/50 border border-gray-700/50 transition-colors duration-300 
               p-3 rounded-xl shadow-lg flex items-center justify-center w-12 h-12"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src={imagePath}
      alt={altText}
      width={28}
      height={28}
      className="object-contain"
    />
  </a>
);

// Navigation Link Component
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
  const logoPath = "/assets/Mask group (1).png";

  return (
    <footer
      className="relative bg-black text-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 5px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 5px)
        `,
        backgroundSize: "40px 40px", // adjust spacing of the grid
      }}
    >
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-12 flex flex-col items-center justify-center z-10">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src={logoPath}
            alt="5' O Clock logo"
            width={200}
            height={60}
            className="w-[200px] h-auto"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 mb-10">
          <SocialIconLink
            href="https://instagram.com"
            imagePath="/assets/Component 45.png"
            altText="Instagram"
          />
          <SocialIconLink
            href="https://tiktok.com"
            imagePath="/assets/Component 46.png"
            altText="TikTok"
          />
          <SocialIconLink
            href="https://linkedin.com"
            imagePath="/assets/Component 47.png"
            altText="LinkedIn"
          />
          <SocialIconLink
            href="https://x.com"
            imagePath="/assets/Component 48.png"
            altText="X (formerly Twitter)"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Feature</NavLink>
          <NavLink href="#">How It Works</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800/50 py-4 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <p className="text-gray-500 font-light">
            &copy; {new Date().getFullYear()} 5' O Clock
          </p>

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
