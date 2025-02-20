"use client";

import { FaBriefcase } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// About Data
const about = {
  title: "About Me",
  description: 
    "Hey there! 👋 \n\nThanks for taking the time to visit my profile! I’m a Software Engineer with nearly 4 years of experience, including 3+ years at Microsoft in Azure Cloud & AI. My expertise lies in backend engineering, cloud computing, AI/ML, and distributed systems—building scalable, high-performance solutions that drive real-world impact. \n\n" + 
    "💡 I’m passionate about technology because of its power to create meaningful change. I have a deep interest in healthcare technology and love leveraging AI and cloud innovations to make a real difference. \n\n" + 
    "🌍 Beyond engineering, I enjoy mentoring, teaching, and contributing to community and diversity initiatives. Outside of work, you’ll find me exploring the outdoors, writing, photographing, filmmaking, and enjoying great movies! \n\n" + 
    "I’m always excited to connect—let’s chat! 😊",
  info: [
    { fieldName: "Name", fieldValue: "Tejasree Parasa" },
    { fieldName: "Phone", fieldValue: "+(1) 856 924 1200" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Email", fieldValue: "p.tejasree089@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Telugu, Hindi, Spanish" },
  ],
};


// Experience Data (Timeline Format)
const experience = [
  {
    company: "Microsoft",
    location: "Hyderabad, India",
    role: "Software Engineer II: Azure Cloud & AI Domain",
    duration: "Feb 2022 – Aug 2023",
    description:
      "Led engineering for Azure Landing Zones, cutting manual effort by 90% and reducing deployment time by 85%. Designed event-driven architectures using Azure Services, C#, and CosmosDB. Optimized ML models with TensorRT, boosting accuracy to 94% and inference speed by 5×.",
  },
  {
    company: "Microsoft",
    location: "Hyderabad, India",
    role: "Software Engineer: Azure Cloud & AI Domain",
    duration: "Aug 2020 – Feb 2022",
    description:
      "Developed scalable data platforms using PySpark and Databricks, accelerating model training by 3×. Led cloud migrations, reducing support costs by 60% and modernizing 1,000+ apps.",
  },
  {
    company: "Indian Servers",
    location: "India",
    role: "Machine Learning Intern",
    duration: "Jan 2020 – Jun 2020",
    description:
      "Built a Transformer-GNN hybrid for scene understanding in autonomous navigation, enhancing object interaction. Optimized inference latency by 52% and memory footprint by 35%.",
  },
  {
    company: "iON Technologies",
    location: "India",
    role: "IoT Research Intern",
    duration: "Mar 2019 – Jun 2019",
    description:
      "Developed an IoT smart medicine box for Alzheimer's care with real-time tracking and dosage reminders, securing an R&D grant and a patent.",
  },
];

// Education Data (Separate Boxes with Key Courses)
const education = [
  {
    institution: "The Pennsylvania State University",
    location: "University Park, PA, USA",
    degree: "Master of Science in Computer Science and Engineering",
    duration: "Aug 2023 – May 2025",
    gpa: "GPA: 3.62/4.0",
    courses: [
      "Distributed Systems",
      "Data Structures and Algorithms",
      "Machine Learning",
      "Deep Learning with Graphs",
      "Advanced Operating Systems",
      "Computer Architecture & Networks",
      "Natural Language Processing",
      "Advanced Computer Vision",
    ],
    awards: [
      "Graduate Teaching Assistantship (DBMS)",
      "Graduate Women in Engineering (Executive Board)",
      "Nittany AI Club",
    ],
  },
  {
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    location: "India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "July 2016 – Sept 2020",
    gpa: "GPA: 9.0/10.0",
    courses: [
      "Database Management Systems",
      "Data Structures",
      "Object-Oriented Programming",
      "Artificial Intelligence",
      "Advanced Database Systems",
      "Cloud Computing",
      "Computer Networks",
      "Operating Systems",
    ],
    awards: [
      "Best Graduating Student",
      "President - Entrepreneurship Club",
      "Lead - CSE Innovation & ASSET Clubs",
      "Python Programming Instructor",
    ],
  },
];

// Skills Data (Structured & Readable)
const skills = [
  {
    category: "Programming",
    items: ["Python", "C", "C++", "C#", "ASP.NET", "Java", "R", "JavaScript", "Node.js", "React", "GraphQL"],
  },
  {
    category: "AI & ML",
    items: ["Neural Networks (CNNs, GNNs, GATs)", "NLP", "Computer Vision", "PyTorch", "TensorFlow", "ONNX", "MLOps", "LLMOps", "GenAI"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS", "GCP", "Kubernetes", "Docker", "CI/CD", "Terraform", "Apache Kafka"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL (Relational)", "MongoDB", "Redis (NoSQL)", "Neo4j (Graph)"],
  },
  {
    category: "Systems & Architecture",
    items: ["Distributed Systems", "Microservices", "Observability", "Linux"],
  },
  {
    category: "Frameworks & Tools",
    items: ["Spring Boot", "Flask", "Postman"],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Timeline */}
            <TabsContent value="experience">
              <h3 className="text-4xl font-bold">Experience</h3>
              <div className="relative border-l-4 border-accent ml-6">
                {experience.map((job, index) => (
                  <div key={index} className="mb-12 ml-6">
                    <div className="bg-[#232329] p-6 rounded-lg shadow-lg max-w-3xl">
                      <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                      <p className="text-white/60">{job.company} - {job.location}</p>
                      <p className="text-sm text-accent mb-3">{job.duration}</p>
                      <p className="text-white/80">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <h3 className="text-4xl font-bold">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-[#232329] p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-white/60">{edu.institution} - {edu.location}</p>
                  <p className="text-sm text-accent mb-3">{edu.duration} | {edu.gpa}</p>
                  
                  <p className="text-white/80"><strong>Leadership & Awards:</strong> {edu.awards.join(", ")}</p> <br/>
                  <p className="text-white/80"><strong>Key Courses:</strong> {edu.courses.join(", ")}</p>
                </div>
              ))}
            </TabsContent>

            {/*SKILLS*/}
            {/* Skills Section */}
<TabsContent value="skills">
  <h3 className="text-4xl font-bold mb-6">Skills</h3>
  <div className="flex flex-col gap-8">
    {skills.map((skillCategory, index) => (
      <div key={index}>
        <h4 className="text-2xl font-semibold text-accent mb-4">{skillCategory.category}</h4>
        <div className="flex flex-wrap gap-3">
          {skillCategory.items.map((skill, i) => (
            <div 
              key={i} 
              className="px-4 py-2 bg-[#232329] text-white rounded-lg shadow-md text-center transition-all duration-300 
                        hover:scale-105 hover:bg-accent hover:text-black whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</TabsContent>
{/* About Me Section */}
{/* About Me Section */}
<TabsContent value="about">
  <h3 className="text-4xl font-bold mb-6">About Me</h3>

  {/* Introduction */}
  <div className="p-6 bg-[#232329] text-white rounded-lg shadow-lg">
    <p className="text-lg text-white/80 leading-relaxed">
      {about.description.split("\n").map((line, index) => (
        <span key={index} className="block mb-3">{line}</span>
      ))}
    </p>
  </div>

  {/* Personal Information - Dynamic Boxes */}
  <div className="flex flex-wrap gap-4 mt-6 justify-center">
    {about.info.map((item, index) => (
      <div 
        key={index} 
        className="px-6 py-3 bg-[#2c2c34] text-white rounded-lg shadow-md 
                   text-center transition-all duration-300 
                   hover:scale-105 hover:bg-accent hover:text-black whitespace-nowrap"
      >
        <p className="text-sm text-white/60">{item.fieldName}</p>
        <p className="text-lg font-semibold">{item.fieldValue}</p>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div className="mt-8 text-center">
    <p className="text-lg text-white/80">🚀 Always excited to collaborate & innovate! Let’s connect!</p>
  </div>
</TabsContent>




          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
