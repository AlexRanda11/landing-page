const badges = [
    {
        title: 'Track 5: Advanced React',
        issuer: 'Skillsoft',
        issueDate: 'March 2026',
        expiryDate: '',
        description: 'Skillsoft issued completion badges are earned based on viewing the percentage required or receiving a passing score when assessment is required. In this track of the Web Apps with React and Redux Aspire Journey, the focus is on advanced React techniques and topics, including custom hooks, error boundaries, the Context API, and optimization.'
    },
    {
        title: 'Associate Cloud Engineer',
        issuer: 'Google Cloud',
        issueDate: 'October 2023',
        expiryDate: '',
        description: 'The Associate Cloud Engineer certification validates foundational skills in deploying, managing, and maintaining applications on Google Cloud Platform. This credential demonstrates proficiency in working with Compute Engine, Cloud Storage, networking, and other core GCP services. It represents the ability to provision and configure cloud infrastructure, manage cloud resources, and implement security best practices within a GCP environment.'
    },
    {
        title: 'AppDynamics Qualified Technical Instructor',
        issuer: 'Cisco',
        issueDate: 'March 28, 2023',
        expiryDate: 'August 3, 2024',
        description: 'An AppDynamics Technical Instructor who holds this credential has extended their product currency by maintaining a valid AppDynamics certification.'
    },
    {
        title: 'AppDynamics Verified Technical Instructor',
        issuer: 'Cisco',
        issueDate: 'March 28, 2023',
        expiryDate: '',
        description: 'An instructor who holds this credential has successfully completed the learning, assessment and co-teaching obligations required to be recognized as an AppDynamics Technical Instructor.'
    },
    {
        title: 'AppDynamics Certified Associate Performance Analyst',
        issuer: 'Cisco',
        issueDate: 'August 4, 2022',
        expiryDate: 'August 4, 2025',
        description: 'An AppDynamics Certified Associate Performance Analyst is able to monitor applications and analyze performance issues using AppDynamics core Application Performance Management, Application Analytics, Infrastructure Visibility, and End User Monitoring technologies.'
    },
    {
        title: 'AppDynamics Verified Core APM',
        issuer: 'Cisco',
        issueDate: 'May 9, 2022',
        expiryDate: '',
        description: 'The holder of this credential has a strong foundation in Application Performance Management, including proactively monitoring the health of an application, Business Transaction discovery and management, troubleshooting and the use of troubleshooting tools.'
    },
    {
        title: 'IBM Carbon Design System Developer Essentials - React',
        issuer: 'IBM',
        issueDate: 'October 6, 2021',
        expiryDate: '',
        description: 'This badge earner demonstrates knowledge about building user interfaces with IBM\'s open-source Carbon Design System React components. This badge earner demonstrates the ability to install Carbon React components in their project, use and populate these components with data, build custom components, and deploy a project to IBM Cloud.'
    },
    {
        title: 'IBM Agile Explorer',
        issuer: 'IBM',
        issueDate: 'September 4, 2021',
        expiryDate: '',
        description: 'The Agile Explorer has a foundational understanding of Agile values, principles, and practices that allows them to initiate an Agile conversation with co-workers and colleagues. This badge is available to IBM employees only.'
    },
    {
        title: 'IBM Business Framing Practitioner',
        issuer: 'IBM',
        issueDate: 'March 13, 2021',
        expiryDate: '',
        description: 'The badge earner is able to employ Garage Business Framing to advance client conversations, whether in tech-sales, pre-sales, post-sales, or anywhere.'
    },
    {
        title: 'IBM Certified Developer - Cloud Pak for Applications v4.1',
        issuer: 'IBM Professional Certification',
        issueDate: 'March 11, 2021',
        expiryDate: '',
        description: 'This badge is awarded to candidates that have passed the IBM Cloud Pak for Applications v4.1 Developer certification exam. An IBM Certified Application Developer is a technical professional that understands the concepts essential to modernizing existing applications and developing and deploying new cloud native applications using Cloud Pak for Applications. They have experience configuring products and developing complex high business value solutions using containerized products.'
    },
    {
        title: 'IBM Cloud Pak for Applications - Architect',
        issuer: 'IBM',
        issueDate: 'September 27, 2020',
        expiryDate: '',
        description: 'The badge earner understands the capabilities delivered by IBM Cloud Pak for Applications, and has gained the architect level skills needed to assist with designing and developing applications from a monolithic architecture to microservices with DevOps methodologies and modernization toolkits.'
    },
    {
        title: 'IBM Cloud Pak for Applications - Developer',
        issuer: 'IBM',
        issueDate: 'September 27, 2020',
        expiryDate: '',
        description: 'The badge earner understands the capabilities delivered by IBM Cloud Pak for Applications, and has gained the developer skills needed to move applications from a monolithic architecture to microservices with DevOps methodologies and modernization toolkits.'
   },
    {
        title: 'IBM Cloud Pak for Applications - Administrator',
        issuer: 'IBM',
        issueDate: 'September 27, 2020',
        expiryDate: '',
        description: 'The badge earner understands the capabilities delivered by IBM Cloud Pak for Applications, and has gained administrator skills needed to work with applications built for Kubernetes, using agile DevOps processes.'
    },
    {
        title: 'IBM Cloud Pak for Applications - Explorer',
        issuer: 'IBM',
        issueDate: 'September 27, 2020',
        expiryDate: '',
        description: 'The badge earner understands the capabilities delivered by IBM Cloud Pak for Applications, and has gained the skills needed to assist with designing and developing cloud-native applications with DevOps capabilities, and moving applications from a monolithic architecture to microservices, by using modernization toolkits.'
    },
    {
        title: 'IBM Recognised Speaker/Presenter',
        issuer: 'IBM',
        issueDate: 'July 21, 2020',
        expiryDate: '',
        description: 'This badge holder has demonstrated their knowledge and expertise as a Speaker who has presented to large groups at a conference or an industry or client event. They are Subject Matter Experts (SMEs) on the topic(s) presented. As a Speaker, they have been recognized for their ability to influence people’s vision and understanding of their subject area'
    },
    {
        title: 'IBM Quantum Conversations',
        issuer: 'IBM',
        issueDate: 'July 18, 2020',
        expiryDate: '',
        description: 'The badge earner demonstrates foundational knowledge in how to speak about quantum computing as a key differentiator for IBM in the context of our clients\' industries and topics such as potential industry applications, the programs and services offered by IBM Quantum, and the core concepts of quantum computing technology. The badge earner is also able to identify the components of a successful, industry-focused message and how to direct leads to the IBM Quantum team.'
    },
    {
        title: 'IBM Cloud Private: Deploying Microservices with Kubernetes',
        issuer: 'Coursera',
        issueDate: 'September 29, 2019',
        expiryDate: '',
        description: 'The badge earner is able to articulate IBM Cloud Private features and benefits, identify and describe IBM Cloud components and architecture, install and configure IBM Cloud Private, and work with the IBM Cloud Private management console. The individual can use Helm to package application resources for deployment, and deploy a microservices application on IBM Cloud Private.'
    },
    {
        title: 'IBM Cloud Private Infrastructure and Architecture',
        issuer: 'IBM',
        issueDate: 'September 23, 2019',
        expiryDate: '',
        description: 'This badge earner demonstrates knowledge on IBM Cloud Private. The earner understands the architecture and infrastructure requirements for deploying microservices-based cloud native applications on IBM Cloud Private. The earner also understands the Cloud Professional Services available from IBM.'
    },
    {
        title: 'Get started with Kubernetes and IBM Cloud Container Service',
        issuer: 'IBM',
        issueDate: 'May 22, 2018',
        expiryDate: '',
        description: 'The badge earner understands core concepts of Kubernetes: VMs vs. containers, Kubernetes architectural model, key resources, and pods. The badger earner also knows how to build a Docker image and deploy an app on Kubernetes in the IBM Cloud Container Service, control app deployments while minimizing time with infrastructure management, and add Watson services to applications.'
    },
    {
        title: 'Build Chatbots with Watson Conversation',
        issuer: 'IBM',
        issueDate: 'March 29, 2018',
        expiryDate: '',
        description: 'Earners of this badge have built a working chatbot application by using IBM Watson Conversation and the Weather Company Data service. To build this app, earners understand key concepts such as intents, entities, and dialog flow. They also know how to work with the app declaratively and programmatically by using the Watson SDK for Node.js.'
    },
    {
        title: 'Enterprise Design Thinking Practitioner',
        issuer: 'IBM',
        issueDate: 'March 16, 2018',
        expiryDate: '',
        description: 'The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their every day work.'
    },
    {
        title: 'IBM Garage for Cloud Advocate',
        issuer: 'IBM',
        issueDate: 'March 5, 2018',
        expiryDate: '',
        description: 'The IBM Garage Method for Cloud Advocate has demonstrated the ability to implement the IBM Garage Method for Cloud through hands-on experience using the tools that will allow them to implement the methodology with their team. The badge earner understands how to track and manage a project using a ranked backlog and a kanban board, use a toolchain and delivery pipeline to enable continuous integration and delivery, manage their deployed application, and analyze the usage of their application.'
    },
    {
        title: 'IBM Garage Methodology Explorer',
        issuer: 'IBM',
        issueDate: 'March 4, 2018',
        expiryDate: '',
        description: 'The IBM Garage Methodology Explorer has demonstrated an understanding of the practices in the Garage Methodology. The individual has learned the phases in the methodology and the key practices in each phase, including the IBM Design Thinking, Agile, DevOps, and Analytics practices needed to help their team evolve their process and continuously deliver innovative solutions.'
    },
    {
        title: 'Cognitive Delivery Foundation',
        issuer: 'IBM',
        issueDate: 'February 27, 2018',
        expiryDate: '',
        description: 'This badge earner has foundation level skills in Cognitive products / solutions that prepare them for a delivery role on a Cognitive project.'
    },
    {
        title: 'Discover Blue',
        issuer: 'IBM',
        issueDate: 'February 19, 2018',
        expiryDate: '',
        description: 'Discover Blue is an internship program for top business and technical Undergraduates focused on technology affinity. The badge earner lived IBM\'s purpose to be essential and has proven through dedication to learn new technology, adapting to a new environment, and understanding a multi-national Corporate framework. This individual is recognized for their problem solving skills, ability to think beyond the box, being a change agent, and ability to work within deadlines while in a team environment.'
    },
    {
        title: 'IBM Blockchain Foundation Developer',
        issuer: 'IBM',
        issueDate: 'February 16, 2018',
        expiryDate: '',
        description: 'Earners of this badge have deep knowledge of blockchain concepts, such as smart contracts, ledgers, business networks, participants, and Hyperledger Composer. Badge earners also know how to model and build a simple blockchain network and a JavaScript application that queries the ledger.'
    },
    {
        title: 'IBM Blockchain Foundation Consulting',
        issuer: 'IBM',
        issueDate: 'February 9, 2018',
        expiryDate: '',
        description: 'The earner has an understanding of Blockchain principles & practices and how they can be used to advise an org. considering adopting Blockchain. They can articulate the following: the history of Blockchain; what Blockchain is and how it works; structure and components that make up the Blockchain; why it is considered "disruptive" and its general business application; differences between Blockchain platforms, their merits & implementations; technical components; and how it is developed/deployed.'
    },
    {
        title: 'Docker Essentials: A Developer Introduction',
        issuer: 'IBM',
        issueDate: 'February 1, 2018',
        expiryDate: '',
        description: 'Earners of this badge know what Docker containers are and their benefits. The individual knows how to run containers from Docker Hub, create Docker containers, and how to solve basic problems of orchestration (reconciliation, scaling, high availability, service discovery). The badge earner also understands best practices for using DockerFiles and the basics of how to use tools such as the IBM Cloud Kubernetes Service.'
    },
    {
        title: 'IBM Watson Data Platform - Sales Foundations',
        issuer: 'IBM',
        issueDate: 'September 29, 2017',
        expiryDate: '',
        description: 'The badge holder has demonstrated a clear understanding of how the IBM Watson Data Platform solves real world challenges. These skills enable the badge holder to provide greater business value to their clients as a trusted advisor. (This badge is only available for IBM employees and IBM Business Partner employees.)'
    },
    {
        title: 'IBM Certified Application Developer - Cloud Platform V2',
        issuer: 'IBM Professional Certification',
        issueDate: 'August 23, 2017',
        expiryDate: '',
        description: 'This IT professional understands concepts essential to the development of Cloud native applications. They have successfully demonstrated experience using the latest features of the IBM Bluemix Platform for planning and implementing cloud ready applications, enhancing applications using managed services, and using DevOps services and toolchains to manage applications.'
    },
    {
        title: 'Cloud Application Developer Certification Preparation V2',
        issuer: 'IBM',
        issueDate: 'August 13, 2017',
        expiryDate: '',
        description: 'This badge earner has completed an online course or workshop and shown an understanding of IBM Cloud service models and the capabilities of IBM Bluemix. They have learned how to create, deploy, monitor and scale applications in Bluemix and how to use other services in Bluemix to enhance their applications. They have seen how Bluemix Continuous Delivery can help them manage their code and automate deployments in Bluemix.'
    },
    {
        title: 'Node-RED: basics to bots',
        issuer: 'IBM',
        issueDate: 'July 11, 2017',
        expiryDate: '',
        description: 'This badge earner understands how to create simple to complex applications in the Node-RED flow editor. These applications include a Node-RED boilerplate that uses JavaScript and built in IBM Bluemix; a REST API; Watson cognitive applications that can translate text, analyze tone, replay audio and video, and send tweets to Twitter; and a Facebook Messenger bot that uses the Watson Conversation service.'
    },
    {
        title: 'IBM Blockchain Essentials',
        issuer: 'IBM',
        issueDate: 'July 8, 2017',
        expiryDate: '',
        description: 'This badge earner has developed an understanding of Blockchain principles and practices and how they can be applied within a business environment. They have an understanding of Blockchain and distributed ledger systems, the important concepts and key use cases of Blockchain and how assets can be transferred in a Blockchain network.'
    },
    {
        title: 'IBM Cloud Essentials',
        issuer: 'IBM',
        issueDate: 'June 26, 2017',
        expiryDate: '',
        description: 'This badge holder has a understanding of the essentials of IBM Cloud. Through an online course they have learned about the IBM Cloud platform and gained hands-on experience using the Cloud Foundry command-line interface and the IBM Eclipse tools for IBM Cloud. The badge earner has used these tools to deploy and modify basic applications using a managed service in IBM Cloud.'
    },
    {
        title: 'Penetration Testing and Security Analysis',
        issuer: 'ITSec Analytics',
        issueDate: 'July 2016',
        expiryDate: '',
        description: 'Comprehensive training in penetration testing methodologies and security analysis techniques. This course covers vulnerability identification, exploitation frameworks, network reconnaissance, and security assessment practices. It provides hands-on experience in conducting authorized security testing, analyzing system weaknesses, and documenting findings to help organizations strengthen their cybersecurity defenses.'
    }
]

export const badgesContent = {
    badgesTitle: 'Certifications & Credly Badges',
    badgesDescription: 'The various badges and professional certifications I\'ve collected over the years.',
    badges
}