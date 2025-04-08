import Ab3 from "@/components/aboutus/ab3";
import { siteConfig } from "@/config/site";
export const metadata = {
    title: "Terms and Conditions",
    description: "Review the terms and conditions for using Aquapulse's website, services, and solutions. Your continued use signifies agreement with our policies.",
    alternates: {
        canonical: "/terms-conditions",
    },
    openGraph: {
        title: "Terms and Conditions | Aquapulse",
        description: "Understand the legal terms governing your use of Aquapulse's digital platforms, services, and aquaculture solutions.",
        url: `${siteConfig.url}/terms-conditions`,
    },
};

export default function TermsAndConditions() {
    return (
        <section className="py-10 md:py-20 lg:py-32 ">
            <div className="mx-auto max-w-4xl space-y-8 px-6 pb-6 md:pb-16">
                <h1 className="text-4xl font-bold lg:text-5xl text-center mb-10">Terms and Conditions</h1>
                <p className="text-muted-foreground text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <div className="space-y-10">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground mb-4">
                            Welcome to Aquapulse. These Terms and Conditions govern your use of our website and services. By accessing or using Aquapulse, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                        <p className="text-muted-foreground mb-4">
                            Permission is granted to temporarily download one copy of the materials on Aquapulse for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose or for any public display;</li>
                            <li>Attempt to reverse engineer any software contained on Aquapulse;</li>
                            <li>Remove any copyright or other proprietary notations from the materials;</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                        <p className="text-muted-foreground mb-4">
                            The materials on Aquapulse are provided on an 'as is' basis. Aquapulse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
                        <p className="text-muted-foreground mb-4">
                            In no event shall Aquapulse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aquapulse, even if Aquapulse or an Aquapulse authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
                        <p className="text-muted-foreground mb-4">
                            The materials appearing on Aquapulse could include technical, typographical, or photographic errors. Aquapulse does not warrant that any of the materials on its website are accurate, complete, or current. Aquapulse may make changes to the materials contained on its website at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
                        <p className="text-muted-foreground mb-4">
                            Aquapulse has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Aquapulse of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
                        <p className="text-muted-foreground mb-4">
                            Aquapulse may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                        <p className="text-muted-foreground mb-4">
                            These Terms shall be governed and construed in accordance with the laws applicable in your jurisdiction, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions about these Terms, please contact us at contactus@aquapulse.co.in.
                        </p>
                    </section>
                </div>
            </div>
            <Ab3 />
        </section>
    )
}
