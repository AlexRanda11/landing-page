import { Code, Web, Build, People } from "@mui/icons-material";

interface Skill {
    name: string;
    proficiency: number;
    description?: string;
}

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: 'Programming Languages',
        icon: Code,
        skills: [
            {
                name: 'JavaScript/TypeScript',
                proficiency: 60,
                description: 'Strong experience with type-safe JavaScript development.'
            },
            { 
                name: 'Java', 
                proficiency: 60, 
                description: 'Proficient in object-oriented programming, design patterns, and backend development with experience in Spring Boot applications.'
            },
            { 
                name: 'Python', 
                proficiency: 40, 
                description: 'Experience with data processing and scripting.' 
            },
            { 
                name: 'C/C++', 
                proficiency: 20, 
                description: 'Foundational knowledge of systems programming and performance-critical applications.' 
            },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        icon: Web,
        skills: [
            {
                name: 'React.js/InterStellar [LBG Framework]', 
                proficiency: 60, 
                description: 'Extensive experience with hooks, context API, and functional components.' 
            },
            { 
                name: 'Spring Boot', 
                proficiency: 60, 
                description: 'Deep expertise in building scalable microservices and RESTful APIs with Spring Boot.' 
            },
            { 
                name: 'Node.js Express', 
                proficiency: 60, 
                description: 'Proficient with Express.js and building robust backend services.' 
            },
            { 
                name: 'Python Flask', 
                proficiency: 40, 
                description: 'Experience building lightweight web applications and APIs with Flask.' 
            },
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: Build,
        skills: [
            { 
                name: 'Kasm Workspaces', 
                proficiency: 60, 
                description: 'Experienced with containerized workspace management and remote development environments.' 
            },
            { 
                name: 'Dynatrace', 
                proficiency: 40, 
                description: 'Solid understanding of application performance monitoring and observability.' 
            },
            { 
                name: 'Google Cloud Platform', 
                proficiency: 40, 
                description: 'Working knowledge of GCP services including Compute Engine, Cloud Storage, and App Engine.' 
            },
            { 
                name: 'AppDynamics', 
                proficiency: 20, 
                description: 'Foundational knowledge of application performance management and monitoring.' 
            },
        ]
    },
    {
        title: 'Soft Skills',
        icon: People,
        skills: [
            { 
                name: 'Coaching & Feedback', 
                proficiency: 60,
                description: 'Experienced in providing constructive feedback and mentoring team members.'
            },
            { 
                name: 'Team Collaboration', 
                proficiency: 60,
                description: 'Strong ability to work effectively across cross-functional teams.'
            },
            { 
                name: 'Critical Thinking', 
                proficiency: 60,
                description: 'Approach problems analytically and develop thoughtful, data-driven solutions.'
            },
            { 
                name: 'Customer Centricity', 
                proficiency: 60,
                description: 'Focused on understanding user needs and delivering customer-centric solutions.'
            },
        ]
    }
]

export const skillCardContent = {
    skills: skillsData,
    skillsTitle: 'Skills & Professional Overview',
    skillsDescription: 'This page provides a dynamic overview of my professional journey, key skills, and experience. For a comprehensive version, please feel free to download my CV below.',
}