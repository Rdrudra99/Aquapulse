import Ab3 from '@/components/aboutus/ab3';
import { siteConfig } from '@/config/site';
import React from 'react';
export const metadata = {
    title: "Privacy Policy",
    description: "Understand how Aquapulse collects, uses, and protects your personal information in our commitment to privacy and data security.",
    alternates: {
        canonical: "/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy | Aquapulse",
        description: "Learn about Aquapulse's practices regarding the collection, use, and protection of your personal data.",
        url: `${siteConfig.url}/privacy-policy`,
    },
};


export default function PrivacyPolicy() {
    // Metadata for the Privacy Policy page
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 py-10 md:py-20 lg:py-32">
            <div className="mx-auto max-w-4xl space-y-8 px-6 pb-6 md:pb-16">
                <h1 className="text-4xl font-bold lg:text-5xl text-center mb-10">Privacy Policy</h1>
                <p className="text-muted-foreground text-sm mb-8">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="space-y-10">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground mb-4">
                            At aquapulse.co.in, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                        <p className="text-muted-foreground mb-4">
                            We may collect, use, store, and transfer different kinds of personal data about you, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Identity Data: first name, last name, username or similar identifier.</li>
                            <li>Contact Data: email address and telephone numbers.</li>
                            <li>Technical Data: internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li>Usage Data: information about how you use our website and services.</li>
                            <li>Marketing and Communications Data: your preferences in receiving marketing from us and your communication preferences.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>To register you as a new customer.</li>
                            <li>To process and deliver your service requests.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To improve our website, products/services, marketing, or customer relationships.</li>
                            <li>To recommend products or services that may be of interest to you.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
                        <p className="text-muted-foreground mb-4">
                            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                        <p className="text-muted-foreground mb-4">
                            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
                        <p className="text-muted-foreground mb-4">
                            Our Service may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
                        <p className="text-muted-foreground mb-4">
                            Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
                        <p className="text-muted-foreground mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">9. Your Legal Rights</h2>
                        <p className="text-muted-foreground mb-4">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions about this Privacy Policy, please contact us at contactus@aquapulse.co.in.
                        </p>
                    </section>
                </div>
            </div>
            <Ab3 />
        </section>
    );
}
