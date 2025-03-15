export const navBar = {
    HOME: 'HOME',
    SKILLS: 'SKILLS',
    EDUCATION: 'EDUCATION',
    FEEDBACKS: 'FEEDBACKS',
    WORK: 'WORK',
    CONTACT: 'CONTACT'
};

export const skills = [
    { name: "Golang", mark: "90%" },
    { name: "Javascript", mark: "90%" },
    { name: "NodeJs", mark: "80%" },
    { name: "Typescript", mark: "80%" },
    { name: "MySQL", mark: "90%" },
    { name: "Redis", mark: "90%" },
    { name: "Nginx", mark: "95%" },
    { name: "Docker", mark: "90%" },
    { name: "Aws", mark: "70%" },
    { name: "Kubernetes", mark: "70%" },
    { name: "Grafana", mark: "90%" },
    { name: "Vector", mark: "90%" },
    { name: "Prometheus", mark: "90%" },
    { name: "JAVA", mark: "80%" },
    { name: "C", mark: "80%" },
    { name: "MongoDB", mark: "80%" },
    { name: "HTML 5", mark: "85%" },
    { name: "CSS 3", mark: "80%" },
    { name: "React Js", mark: "90%" },
    { name: "React Native", mark: "80%" },
    { name: "Spring Boot", mark: "70%" },
    { name: "Git", mark: "90%" },
    { name: "Clickhouse", mark: "70%" },
];

export const myWork = [
    {
        company: "Iouring pvt. limited",
        projects: [
            {
                productName: "NxtOption",
                technologies: "Golang, ReactJs, MySql, Nginx, Docker, Prometheus, Grafana, Vector, Clickhouse, Redis, Azure",
                description: "An online simplest Options Trading platform that you could ever ask for. A perfect blend of performance and experience, NxtOption offers you a plethora of features that just make your option trading experience a seamless one.",
                url: "https://app.nxtoption.com",
                logo: "https://app.nxtoption.com/static/media/applogo.b255c27decbed8261e40981b991bec4b.svg",
                roles: [
                    "Leading and developing backend team.",
                    "Configuring and Managing devops activities.",
                    "Exploring domain related requirements.",
                    "Actively managing production systems."
                ]
            },
            {
                productName: "Nxtrad",
                technologies: "Golang, Springboot, MySql, Nginx, Firebase",
                description: "A white labeled trading solution which comes with both mobile and web applications and supports large RMS vendor like Odin(63Moons) and kambala.",
                url: "https://nxtrade-dev-api.iouring.in/webapp/auth/login",
                logo: "https://nxtrade-dev-api.iouring.in/webapp/static/media/app-logo.485dbdfd97feaa052d3bb7374fd87d0b.svg",
                roles: [
                    "Leading and developing backend team.",
                    "Configuring and Managing devops activities.",
                    "Exploring domain related requirements.",
                    "Actively managing production systems."
                ]
            }
        ]
    },
    {
        company: "Market Simplified India",
        projects: [
            {
                productName: "Shubh Trade", technologies: "Java, React Js,Redux Js, SQL",
                description: "An online Indian trade platform with both NSE and BSE exchanges with huge number of active users. Listed in top 10 brokerage applications in India.",
                url: "https://shubhweb.indiabulls.com/",
                logo: "https://examly.io/wp-content/uploads/2017/10/examly-logo-white-2-1-uai-258x76.png"
            },
            {
                productName: "SHIELD", technologies: "Java, React Js(Hooks), MySQL, RabbitMQ, Firebase",
                description: "Push notification console for admins, who can easily send push notifications for all, selected or based on user subscription. Best feature of this application is admin can selected based on platform like Android,IOS or Web. I have done integration with firebase, report generation for delivery, click and goal conversions, developed console UI for admins, also SDK to received push notification using serviceworkers. Also it is an SDK which can be easily integrated to other applications for push notification.",
                url: "https://mobile-ktrader.kgi.sg/console-shield/base",
                logo: "https://examly.io/wp-content/uploads/2017/10/examly-logo-white-2-1-uai-258x76.png"
            },
            {
                productName: "Kotak Mahindra Bank", technologies: "Java, Nginx, OracleSql",
                description: "Kotak Mahindra Bank is one of India's leading private-sector banks",
                url: "https://www.kotak.com/en/kotak-private-banking.html",
                logo: "https://www.kotak.com/content/dam/Kotak/kotak-logo.png"
            },
            {
                productName: "Upstox Rifle", technologies: "Typescript, Node JS(Express), Redis, Kafka, MongoDB, MySQL, AWS",
                description: "Upstox API is a set of rest APIs that provide data required to build a complete investment and trading platform. Execute orders in real time, manage user portfolio, stream live market data (using Websocket), and more",
                url: "https://developer.upstox.com",
                logo: "https://examly.io/wp-content/uploads/2017/10/examly-logo-white-2-1-uai-258x76.png"
            }
        ]
    },
    {
        company: "Placement Season",
        projects: [
            {
                productName: "Examly", technologies: "Angular 4, PrimeNg, Hapi Js, MySQL, Sequelize Js",
                description: "Examly is an AI Powered, Mobile First, Learning & Assessment Tool for corporates and coaching centers of all sizes, white labeling is highlighting feature of it, based on test data we can track upto individual student performance.",
                url: "https://examly.io",
                logo: "https://examly.io/wp-content/uploads/2017/10/examly-logo-white-2-1-uai-258x76.png"
            }
        ]
    },
    {
        company: "Self",
        projects: [
            {
                productName: "Hankerbee",
                technologies: "Java, MySQL, React Native,Redux Js, Google Maps",
                description: "A Food delivery application, which is also included bakery and super markets, live updates, order tracking with live location are the highlighting features of this application."
            }
        ]
    }
];

export const feedback = [
    {
        feedback: "Revanth is an excellent contributor to the project and hence the company. He takes interests to take up any responsibility and goes to any extent in fulfilling the task requirements. And Shows excellent capability and interest to learn and adapt to latest technologies and libraries. He is a technology enthusiast and often comes up with ideas and concepts of latest frameworks and technologies. He from this few months of experience has grabbed a handful of skills to both work in front-end and middleware technologies.  He is an effective communicator and possess good team working skills.",
        by: "Vijayakanth P", position: "Team Lead(Market Simplified)",
        ratings: 5
    },
    {
        feedback: "Revanth has shown the highest levels of commitments  and ownership in taking up initiatives to complete tasks on time. He has been proactive on this especially when doing impact analysis on specific changes. That has helped in yielding better quality releases. He is also well aware of his boundaries and knows when to seek help. He is adaptable and has the willingness to learn. Never misses an opportunity to learn and contribute. Has been able to consistently perform under pressure. Has been a single man army for Frontend in a complex project like Indiabulls.",
        by: "Hiran Ramankutty", position: "Project Lead(Market Simplified)",
        ratings: 4
    },
    {
        feedback: "He is adept at learning new libraries and exploring new technologies. He is a quick learner of frontend and backend technologies. He is an approachable person, Helps peers and cross functional teams in solving problems and concluding the solutions. He is a highly motivated person and committed to his work. His sense of ownership brings quality to the software, team as well as deliverables. He is instrumental in taking control of the Upstox project which is of a different eco-system compared to Marketsimplified. Given immense confidence to both internal and external teams on the project deliverables.",
        by: "Harikrishnan R", 
        position: "Chied Technology Officer(Market Simplified)",
        ratings: 5
    }
];
