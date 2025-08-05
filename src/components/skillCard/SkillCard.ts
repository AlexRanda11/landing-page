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
                name: 'TypeScript',
                proficiency: 90,
                description: 'Strong experience with type-safe JavaScript development.'
            },
            { 
                name: 'JavaScript', 
                proficiency: 95, 
                description: 'Expertise in modern JavaScript (ES6+).'
            },
            { 
                name: 'Python', 
                proficiency: 75, 
                description: 'Experience with data processing and scripting.' 
            },
            { 
                name: 'HTML/CSS', 
                proficiency: 98, 
                description: 'Mastery in building semantic HTML and responsive CSS.' 
            },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        icon: Web,
        skills: [
            {
                name: 'React.js', 
                proficiency: 90, 
                description: 'Extensive experience with hooks, context API, and functional components.' 
            },
            { 
                name: 'Material UI', 
                proficiency: 95, 
                description: 'Daily use for building beautiful and responsive UIs.' 
            },
            { 
                name: 'Node.js', 
                proficiency: 70, 
                description: 'Familiarity with Express.js for backend development.' 
            },
            { 
                name: 'Tailwind CSS', 
                proficiency: 85, 
                description: 'Proficient in utility-first CSS for rapid styling.' 
            },
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: Build,
        skills: [
            { 
                name: 'Git/GitHub', 
                proficiency: 90, 
                description: 'Version control, collaborative development, and CI/CD workflows.' 
            },
            { 
                name: 'VS Code', 
                proficiency: 95, 
                description: 'Primary IDE, proficient with extensions and debugging.' 
            },
            { 
                name: 'Figma', 
                proficiency: 70, 
                description: 'Experience with UI/UX prototyping and design systems.' 
            },
            { 
                name: 'Firebase', 
                proficiency: 65, 
                description: 'Basic experience with Firestore and Authentication.' 
            },
        ]
    },
    {
        title: 'Soft Skills',
        icon: People,
        skills: [
            { name: 'Problem-Solving', proficiency: 90 },
            { name: 'Team Collaboration', proficiency: 85 },
            { name: 'Communication', proficiency: 88 },
            { name: 'Adaptability', proficiency: 92 },
        ]
    }
]

export const skillCardContent = {
    skills: skillsData
}