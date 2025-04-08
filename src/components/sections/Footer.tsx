import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const sections = [
  {
    title: "Company",
    links: [
      { name: "Blog", href: "/blog" },
      { name: 'About Us', href: '/about-us' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];


const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className="py-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Tagline */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/aqua/logo.svg" alt="logo" width={32} height={16} />
              <span className="text-lg">Aquapulse</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Driving Innovation in Sustainable Seafood for a Thriving Blue Food Economy
            </p>
          </div>

          {/* App Store Badges */}
          <div className="flex gap-4">
            <Link href="https://apps.apple.com/in/app/aquapulse/id6605928392" className="transition-opacity hover:opacity-80" target="_blank">
              <Image
                src="/aqua/appstore.svg"
                alt="Download on App Store"
                width={120}
                height={40}
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=org.aquapulse&hl=en" className="transition-opacity hover:opacity-80" target="_blank">
              <Image
                src="/aqua/playstore.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {sections[0].links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-muted-foreground">
            <Link href="https://www.facebook.com/people/Aquapulse/61569414757437/" target="_blank" className="hover:text-primary">
              <FaFacebook className="size-5" />
            </Link>
            <Link href="https://x.com/Aquapulse_asia" target="_blank" className="hover:text-primary">
              <FaTwitter className="size-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/aquapulse-asia/" target="_blank" className="hover:text-primary">
              <FaLinkedin className="size-5" />
            </Link>
          </div>

          {/* Copyright and Legal */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© {new Date().getFullYear()} Aquapulse. All rights reserved.</p>
            <div className="flex justify-center gap-4">
              <Link href="#" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
