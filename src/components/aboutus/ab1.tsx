import Image from 'next/image'

export default function AboutHero() {
    return (
        <article className="py-20 md:py-20">
            <div className="mx-auto max-w-6xl space-y-16 px-8 lg:px-12">
                {/* Hero Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                        Who We <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Are</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Aquapulse is a trailblazing aqua-tech company revolutionizing aquaculture with sustainable practices, cutting-edge technology, and expert advisory services.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                        src="/aqua/about.png"
                        alt="Aquapulse Team at Work"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                </div>

                {/* Description Content */}
                <div className="relative space-y-6 text-muted-foreground">
                    <p>
                        Our team comprises some of the finest aquaculture professionals with deep industry knowledge and expertise. We focus on efficient resource utilization, minimizing human efforts, and making aquaculture a modern, world-class industry.
                    </p>
                    <p>
                        Aquapulse stands at the forefront of the aquaculture revolution, driving change with a commitment to innovation, sustainability, and excellence. Join us as we pave the way for a sustainable future in aquaculture.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground pt-4">How We Make a Difference</h2>
                    <p>
                        At Aquapulse, we are dedicated to transforming the aquaculture industry by providing end-to-end solutions that enhance productivity, efficiency, and sustainability. Our comprehensive approach supports aqua farmers and input dealers through every stage of the aquaculture process, backed by precise data and advanced technology.
                    </p>
                    <p>
                        By leveraging cutting-edge technologies such as artificial intelligence, we ensure optimal support during all culture stages. Our goal is to build a robust network of farmers, aqua input dealers, and the export community, strengthening the industry's business foundations and driving sustainable growth.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground pt-6">Vision & Mission</h2>

                    <h3 className="font-bold text-lg pt-2">Vision</h3>
                    <p>
                        To be a global leader in sustainable aquaculture, driving innovation and excellence to ensure the highest quality seafood while preserving and enhancing aquatic ecosystems for future generations.
                    </p>

                    <h3 className="font-bold text-lg pt-4">Mission</h3>
                    <p>
                        Our mission at Aquapulse is to revolutionize the aquaculture industry by integrating advanced technologies and sustainable practices.
                    </p>

                    <p>We aim to:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Innovate:</strong> Develop and implement cutting-edge solutions, such as AI, and expert systems, to enhance productivity and sustainability.</li>
                        <li><strong>Support:</strong> Provide comprehensive support and advisory services to aqua farmers and input dealers, ensuring efficient operations and regulatory compliance.</li>
                        <li><strong>Sustain:</strong> Promote environmentally responsible practices that minimize post-harvest losses and ensure the long-term viability of aquatic ecosystems.</li>
                        <li><strong>Connect:</strong> Facilitate market linkages and export opportunities to empower farmers and strengthen the industry’s economic foundations.</li>
                        <li><strong>Lead:</strong> Set new standards in aquaculture through continuous improvement, collaboration, and commitment to excellence.</li>
                    </ul>

                    <p className="pt-4">
                        Join us as we pave the way for a more sustainable, efficient, and prosperous future in aquaculture.
                    </p>

                    <div className="pt-6">
                        <blockquote className="border-l-4 pl-4">
                            <p>
                                "Aquapulse has completely transformed the way we manage our farms. Their technology and advisory support have streamlined our operations and increased productivity."
                            </p>
                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Ananya Mohapatra <abbr title="Chief Executive Officer">Founder</abbr></cite>
                                <div className='flex justify-start items-center'>
                                    <Image src="/aqua/logo.svg" alt="logo" width={40} height={20} />
                                    <span className="font-medium text-black text-lg">Aquapulse</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </article>
    )
}
