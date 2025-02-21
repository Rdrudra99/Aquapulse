import Link from "next/link";
import Image from "next/image";
import { Twitter, Youtube, ChevronRight, Calendar } from "lucide-react";

const footerData = {
  product: {
    title: "Product",
    links: [
      { text: "Features", href: "/features" },
      { text: "Pricing", href: "/pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Blog", href: "/blog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { text: "Contact", href: "/contact" },
      { text: "Support", href: "/support" },
    ],
  },
  social: {
    title: "Social",
    links: [
      { text: "Twitter", href: "https://twitter.com", icon: <Twitter className="h-4 w-4" /> },
      { text: "Youtube", href: "https://youtube.com", icon: <Youtube className="h-4 w-4" /> },
    ],
  },
};

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Calendar className="w-6 h-6" />
          <span className="font-bold text-xl">Cal AI</span>
        </Link>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
          {Object.values(footerData).map((section, index) => (
            <div key={index} className="mb-5">
              <h2 className="font-semibold">{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="my-2">
                    <Link
                      href={link.href}
                      className="group inline-flex cursor-pointer items-center justify-start gap-1 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90"
                    >
                      {'icon' in link && link.icon}
                      {link.text}
                      <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto border-t py-2 grid md:grid-cols-2 h-full justify-between w-full grid-cols-1 gap-1">
          <span className="text-sm tracking-tight text-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              WhyMe
            </Link>{" "}
            - WhyMe is a cutting-edge AI content generation platform that revolutionizes content creation for businesses, marketers, and creators. Our advanced AI technology produces high-quality, SEO-optimized content for blogs, social media, product descriptions, and more. Boost your productivity and enhance your online presence with WhyMe's intelligent writing solutions.
          </span>
          <ul className="flex justify-start md:justify-end text-sm tracking-tight text-foreground">
            <li className="mr-3 md:mx-4">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
            </li>
            <li className="mr-3 md:mx-4">
              <Link href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}