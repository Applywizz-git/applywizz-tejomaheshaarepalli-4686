import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Shield,
      value: '4+',
      label: 'Years Experience',
      description: 'In Cybersecurity'
    },
    {
      icon: Award,
      value: '6',
      label: 'Certifications',
      description: 'Industry Leading'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Users Protected',
      description: 'Enterprise Scale'
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Security Improvement',
      description: 'Incident Reduction'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyber-teal">
                Cybersecurity Professional
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portfolioData.summary}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans across Identity & Access Management, Security Operations, 
                  Cloud Security, and Incident Response. I'm passionate about building secure, 
                  resilient systems that protect organizations from evolving cyber threats.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-cyber text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Core <span className="text-gradient">Competencies</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cyber-teal" />
                </div>
                <h4 className="font-semibold mb-2">Identity & Access Management</h4>
                <p className="text-sm text-muted-foreground">
                  Zero-trust architecture, privileged access management, and multi-factor authentication
                </p>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-cyber-green" />
                </div>
                <h4 className="font-semibold mb-2">Security Operations</h4>
                <p className="text-sm text-muted-foreground">
                  SIEM monitoring, incident response, and automated threat detection
                </p>
              </div>
              <div className="card-glow p-6 text-center">
                <div className="w-16 h-16 bg-cyber-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-cyber-amber" />
                </div>
                <h4 className="font-semibold mb-2">Cloud Security</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-cloud security, compliance frameworks, and vulnerability management
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;