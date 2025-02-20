"use client";

import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Cloud Technologies',
    description: 'Skilled in designing scalable, secure, and efficient cloud-based solutions. Proficient in tools like Terraform, Azure, and AWS, I specialize in automating infrastructure, optimizing cloud architecture, and delivering seamless deployments.',
    skillset: "Technologies: Azure, AWS, GCP, Kubernetes, Docker, CI/CD, Terraform, Apache Kafka",
  },
  {
    num: '02',
    title: 'Machine Learning & AI',
    description: 'Experienced in building and deploying intelligent systems that solve complex problems. From implementing recommendation systems to developing NLP and computer vision models, I leverage the power of data to drive meaningful outcomes.',
    skillset: "Technologies: Neural Networks (CNNs, GNNs, GATs), NLP, Computer Vision, PyTorch, TensorFlow, ONNX, MLOps, LLMOps, GenAI",
  },
  {
    num: '03',
    title: 'Distributed Systems & Software Development',
    description: 'Deeply knowledgeable in creating robust and scalable distributed architectures. With hands-on experience in microservices and cloud-native applications, I design systems that ensure reliability, high availability, and fault tolerance.',
    skillset: "Technologies: Distributed Systems, Microservices, Observability, Linux | Frameworks: Spring Boot, Flask, Postman",
  },
  {
    num: '04',
    title: 'Programming & Databases',
    description: 'Adept at crafting clean, efficient, and maintainable code across multiple languages and frameworks. Whether it’s developing web applications, optimizing existing systems, or collaborating on innovative projects, I approach every challenge with precision and creativity.',
    skillset: "Languages: Python, C, C++, C#, ASP.NET, Java, R, JavaScript, Node.js, React, GraphQL | Databases: PostgreSQL, MySQL, MongoDB, Redis, Neo4j",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* GitHub & View Work Buttons (Side by Side) */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {/* GitHub Link */}
          <Link href="https://github.com/tpcodes24" target="_blank" rel="noopener noreferrer">
            <BsGithub className="text-white text-5xl hover:text-accent transition-all duration-300 cursor-pointer" />
          </Link>

          {/* View Work Button - Navigates to /work */}
          <Link href="/work">
            <button className="bg-accent text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black">
              View Work
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* Top Section */}
              <div className="w-full flex justify-between items-center">
                <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/60">{service.description}</p>

              {/* Skillset */}
              <p className="text-white/80 text-sm italic">{service.skillset}</p>

              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
