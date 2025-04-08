import Link from "next/link";

export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Get answers to common questions about our products and services.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        {/* Question 1 */}
                        <div className="pb-6">
                            <h3 className="font-medium">What services does Aquapulse offer?</h3>
                            <p className="text-muted-foreground mt-4">
                                Aquapulse provides a range of services including supply chain optimization, market linkage and export facilitation, regulatory compliance and farm certification support, environmental monitoring and management, expert advisory and technical support, and virtual farming assistance with digital solutions.
                            </p>
                        </div>

                        {/* Question 2 */}
                        <div className="py-6">
                            <h3 className="font-medium">How can I contact Aquapulse for support?</h3>
                            <p className="text-muted-foreground mt-4">
                                You can reach out to us via email at <Link href="mailto:contactus@aquapulse.co.in" className="text-blue-600">contactus@aquapulse.co.in</Link> or call our toll-free number at <Link href="tel:18008910550" className="text-blue-600">1800 891 0550</Link>
                            </p>
                        </div>

                        {/* Question 3 */}
                        <div className="py-6">
                            <h3 className="font-medium">Where is Aquapulse located?</h3>
                            <p className="text-muted-foreground mt-4">
                                Our headquarters are located in Bhubaneswar, Odisha, India.
                            </p>
                        </div>

                        {/* Question 4 */}
                        <div className="py-6">
                            <h3 className="font-medium">Does Aquapulse offer solutions for disease management in aquaculture?</h3>
                            <p className="text-muted-foreground mt-4">
                                Yes, we provide expert advisory services and technological solutions to prevent and manage diseases, ensuring healthy and sustainable aquaculture practices.
                            </p>
                        </div>

                        {/* Question 5 */}
                        <div className="py-6">
                            <h3 className="font-medium">How can I stay updated with Aquapulse's latest publications and resources?</h3>
                            <p className="text-muted-foreground mt-4">
                                You can explore our 'Library' section on the website, which features various editions of 'Tales of Aquaculture' and other valuable resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
