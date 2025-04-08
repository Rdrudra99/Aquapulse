import Link from 'next/link'

// const members = [
//     {
//         name: 'Pritesh Biswal',
//         role: 'DevOps Engineer',
//         avatar: '/pritesh.png',
//         link: 'https://www.linkedin.com/in/pritesh-biswal/',
//     },
//     {
//         name: 'Deepapak Pradhan',
//         role: 'Software Engineer',
//         avatar: '/deepak.png',
//         link: 'https://www.linkedin.com/in/deepak-pradhan7/',
//     },
//     {
//         name: 'Monalisha Patzoshi',
//         role: 'UX Engineer',
//         avatar: '/monalisha.jpeg',
//         link: 'https://www.linkedin.com/in/monalisa-patajoshi-228674214/',
//     },
//     {
//         name: 'Biswarupa Pattnayak',
//         role: 'SEO Specialist',
//         avatar: '/biswarupa.jpg',
//         link: 'https://www.linkedin.com/in/biswarupa-pattanayak-8a44a525a/',
//     },
//     {
//         name: 'Sahoo Jayaprakash Prafulla Kumar',
//         role: 'SEO Specialist',
//         avatar: '/jay.jpeg',
//         link: 'https://www.linkedin.com/in/sahoo-jayaprakash-prafulla-kumar-11a688201/',
//     },
//     {
//         name: 'Rudra Narayan Boitei',
//         role: 'Software Engineer',
//         avatar: '/rdrudra99.jpg',
//         link: 'https://www.linkedin.com/in/rdrudra99/',
//     },
// ];
const members = [
    {
        name: 'Ananya Mohapatra',
        role: 'Founder',
        avatar: '/aqua/Ananya.png',
        link: '#',
    },
    {
        name: 'Abhishek Dwivedy',
        role: 'Co-Founder & CEO',
        avatar: '/aqua/Abhishek.png',
        link: '#',
    },
    {
        name: 'Abhilash Dwivedy',
        role: 'Chief Growth Officer',
        avatar: '/aqua/Abhilash.png',
        link: '#',
    },
    {
        name: 'Rupak Kumar Jena',
        role: 'Area Sales Manager',
        avatar: '/aqua/RupakJena.jpg',
        link: '#',
    },
    {
        name: 'Jyotirmayee Moharana',
        role: 'Manager Fintech',
        avatar: '/aqua/Jyoti.png',
        link: '#',
    },
    {
        name: 'Barsha Nayak',
        role: 'Chief Documentation Officer',
        avatar: '/aqua/Barsha.png',
        link: '#',
    },
    {
        name: 'Preeti Poonam Bebarta',
        role: 'Technology Officer',
        avatar: '/aqua/PreetiPoonam.jpg',
        link: '#',
    },
];


export default function TeamSection() {
    return (
        <section className="bg-gray-50  dark:bg-transparent py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-5xl  px-6">
                {/* <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span> */}
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link href={member.link} target='_blank' className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linkedin
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
