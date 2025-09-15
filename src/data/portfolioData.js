// Cybersecurity Portfolio Data
// All content for Raviteja Alli's portfolio website

const portfolioData = {
  personalInfo: {
    name: "RAVITEJA ALLI",
    title: "Cybersecurity Engineer",
    location: "Tampa, FL",
    phone: "+1(813)760-3213",
    email: "ravitejaalli55@gmail.com",
    linkedIn: "https://www.linkedin.com/in/raviteja-alli",
    profileImage: "/image.jpeg",
    resume: "/RESUME_RAVI_TEJA_ALLI.pdf"
  },

  summary: "Cybersecurity Engineer with 4+ years of experience in IAM, Security Operations, Cloud Security, and Incident Response. Skilled in implementing RBAC, MFA, and privileged access management across cloud and on-premises systems. Experienced in monitoring security events with SIEM tools (Splunk, QRadar, Azure Sentinel), automating workflows with SOAR (Demisto, Phantom), and ensuring compliance with NIST, ISO 27001, and GDPR standards. Adept at vulnerability management, threat intelligence, and mentoring teams to enhance organizational security posture.",

  skills: {
    identityAccessManagement: [
      "Okta",
      "Azure AD",
      "AWS IAM",
      "CyberArk",
      "SailPoint",
      "Privileged Access Management (PAM)",
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "Role-Based Access Control (RBAC)",
      "Access Certification",
      "Identity Governance"
    ],
    securitySocTools: [
      "Splunk",
      "IBM QRadar",
      "ArcSight",
      "Elastic Security",
      "CrowdStrike Falcon",
      "Carbon Black",
      "Rapid7 InsightIDR",
      "Palo Alto Firewalls",
      "Fortinet",
      "Cisco ASA",
      "Wireshark"
    ],
    threatIntelVulnMgmt: [
      "MISP",
      "ThreatConnect",
      "Recorded Future",
      "MITRE ATT&CK Framework",
      "Nessus",
      "Qualys",
      "OpenVAS",
      "Tenable.io"
    ],
    cloudSecurityIamIntegration: [
      "AWS Security Hub",
      "AWS GuardDuty",
      "Azure Security Center",
      "Azure Sentinel",
      "GCP Security Command Center",
      "Cloud IAM Policies",
      "VPC Security",
      "Security Groups",
      "Network ACLs"
    ],
    incidentResponseAutomation: [
      "Cortex XSOAR (Demisto)",
      "Phantom",
      "ServiceNow Security Operations",
      "Ansible",
      "Python scripting",
      "PowerShell scripting for automated incident response"
    ],
    networkSystemSecurity: [
      "TCP/IP",
      "VPN",
      "IDS/IPS",
      "Network Segmentation",
      "Secure Network Architecture",
      "Firewall Configuration",
      "Endpoint Security",
      "Windows & Linux Hardening"
    ],
    securityAnalysisTesting: [
      "Penetration Testing (Metasploit, Burp Suite, Nmap)",
      "Log Analysis",
      "SIEM Alerts",
      "JMeter",
      "Dynatrace",
      "AppDynamics"
    ],
    operatingSystemsScripting: [
      "Windows 10/11",
      "Linux (Ubuntu, RedHat, CentOS)",
      "MacOS",
      "Python",
      "Bash",
      "PowerShell"
    ]
  },

  // experience: [
  //   {
  //     company: "TechCorp Security Solutions",
  //     role: "Senior Cybersecurity Engineer",
  //     location: "Tampa, FL",
  //     duration: "2022 - Present",
  //     achievements: [
  //       "Led implementation of zero-trust security architecture, reducing security incidents by 40%",
  //       "Architected and deployed enterprise-wide privileged access management solution using CyberArk",
  //       "Automated security incident response workflows using Phantom SOAR, decreasing response time by 60%",
  //       "Conducted advanced threat hunting operations using MITRE ATT&CK framework",
  //       "Mentored junior security analysts and led security awareness training programs"
  //     ]
  //   },
  //   {
  //     company: "CloudGuard Enterprises",
  //     role: "Cybersecurity Analyst",
  //     location: "Orlando, FL",
  //     duration: "2020 - 2022",
  //     achievements: [
  //       "Monitored and analyzed security events using Splunk and IBM QRadar SIEM platforms",
  //       "Implemented multi-factor authentication across 500+ user accounts using Okta",
  //       "Performed vulnerability assessments and penetration testing using Nessus and Metasploit",
  //       "Developed Python scripts for automated log analysis and threat detection",
  //       "Maintained compliance with NIST Cybersecurity Framework and ISO 27001 standards"
  //     ]
  //   },
  //   {
  //     company: "SecureNet Solutions",
  //     role: "IAM Specialist",
  //     location: "Tampa, FL", 
  //     duration: "2019 - 2020",
  //     achievements: [
  //       "Designed and implemented role-based access control policies for cloud and on-premises systems",
  //       "Integrated Azure AD with multiple SaaS applications for single sign-on capabilities",
  //       "Conducted access certification campaigns and remediated privileged access violations",
  //       "Collaborated with development teams to implement secure authentication mechanisms",
  //       "Reduced manual user provisioning processes by 80% through automation"
  //     ]
  //   }
  // ],

//   experience: [
//   {
//     company: "Northern Trust Bank",
//     role: "IAM Engineer",
//     location: "Chicago, IL",
//     duration: "Jan 2025 - Present",
//     achievements: [
//       "Automated Azure AD, CyberArk, and ServiceNow provisioning, cutting onboarding time and removing orphaned accounts.",
//       "Secured banking platforms via CyberArk session management, reducing audit exceptions and insider threat exposure.",
//       "Enhanced Splunk and Sentinel detection with MITRE ATT&CK, cutting detection time and false positives.",
//       "Built Cortex XSOAR phishing playbooks, blocking domains and resetting accounts, reducing analyst workload significantly.",
// "Integrated Qualys and Tenable with ServiceNow, raising patch compliance and reducing remediation time drastically.",
//   "Led SailPoint and Azure reviews, revoking 1,200 stale entitlements, reducing privilege creep by 40%.",
//   "Enforced Azure Policy guardrails, standardizing least-privilege roles and preventing critical cloud misconfigurations.",
//   "Correlated CrowdStrike with Splunk, enabling rapid breach isolation and halving repeat endpoint incidents.",

// ]
//   },
//   {
//     company: "TechCorp Security Solutions",
//     role: "Senior Cybersecurity Engineer",
//     location: "Tampa, FL",
//     duration: "2022 - Present",
//     achievements: [
//       "Led implementation of zero-trust security architecture, reducing security incidents by 40%",
//       "Architected and deployed enterprise-wide privileged access management solution using CyberArk",
//       "Automated security incident response workflows using Phantom SOAR, decreasing response time by 60%",
//       "Conducted advanced threat hunting operations using MITRE ATT&CK framework",
//       "Mentored junior security analysts and led security awareness training programs"
//     ]
//   },
//   {
//     company: "CloudGuard Enterprises",
//     role: "Cybersecurity Analyst",
//     location: "Orlando, FL",
//     duration: "2020 - 2022",
//     achievements: [
//       "Monitored and analyzed security events using Splunk and IBM QRadar SIEM platforms",
//       "Implemented multi-factor authentication across 500+ user accounts using Okta",
//       "Performed vulnerability assessments and penetration testing using Nessus and Metasploit",
//       "Developed Python scripts for automated log analysis and threat detection",
//       "Maintained compliance with NIST Cybersecurity Framework and ISO 27001 standards"
//     ]
//   },
//   {
//     company: "SecureNet Solutions",
//     role: "IAM Specialist",
//     location: "Tampa, FL",
//     duration: "2019 - 2020",
//     achievements: [
//       "Designed and implemented role-based access control policies for cloud and on-premises systems",
//       "Integrated Azure AD with multiple SaaS applications for single sign-on capabilities",
//       "Conducted access certification campaigns and remediated privileged access violations",
//       "Collaborated with development teams to implement secure authentication mechanisms",
//       "Reduced manual user provisioning processes by 80% through automation"
//     ]
//   }
// ]
// ,

experience: [
  {
    company: "Northern Trust Bank",
    role: "IAM Engineer",
    location: "Chicago, IL",
    duration: "Jan 2025 - Present",
    achievements: [
      "Streamlined access provisioning by engineering automated workflows in Azure AD, CyberArk, and ServiceNow, cutting onboarding time from two days to under eight hours and eliminating thousands of orphaned accounts.",
      "Secured critical banking platforms by deploying CyberArk privileged session management with credential rotation and recording, which reduced audit exceptions by 80% and significantly lowered insider threat exposure.",
      "Developed and fine-tuned detection logic in Splunk ES and Azure Sentinel, aligning with MITRE ATT&CK to improve threat visibility; this brought down mean-time-to-detect by 75% and reduced false positives by nearly a third.",
      "Built automated response playbooks in Cortex XSOAR that handled phishing alerts end-to-end, blocking malicious domains and resetting compromised accounts, ultimately reducing analyst workload by 70%.",
      "Elevated patching effectiveness by integrating Qualys and Tenable scan data with ServiceNow, driving patch compliance on critical vulnerabilities to 92% and cutting remediation windows from seven weeks to under two.",
      "Coordinated quarterly access reviews through SailPoint IdentityNow and Azure entitlement campaigns, revoking more than 1,200 stale entitlements and shrinking privilege creep incidents by 40% across core systems.",
      "Reduced cloud security risks by enforcing Azure Security Center and Policy-based guardrails, standardizing least-privilege roles and preventing misconfigurations that had previously exposed sensitive workloads.",
      "Contained endpoint breaches by leveraging CrowdStrike Falcon telemetry with Splunk correlation, enabling rapid isolation within two hours and lowering repeat incident occurrences by half."
    ]
  },
  {
    company: "Defmax Technologies Pvt Ltd",
    role: "CyberSecurity Engineer",
    location: "Hyderabad, India",
    duration: "Jul 2019 – Jul 2023",
    achievements: [
      "Designed and enforced identity and access management policies across AWS, Azure, and Okta, implementing least privilege and multi-factor authentication, which reduced unauthorized access incidents by 25%.",
      "Conducted regular user access reviews and access certification campaigns, identifying orphaned accounts and privilege creep, resulting in a 30% improvement in compliance with internal security policies.",
      "Monitored authentication logs and cloud IAM activity using Splunk and Azure Sentinel to detect suspicious logins, enabling timely mitigation and reducing security incident exposure by 20%.",
      "Automated IAM workflows with Python and PowerShell scripts for onboarding, offboarding, and role changes, reducing manual errors and accelerating access provisioning by 40%.",
      "Collaborated with SOC analysts to integrate IAM alerts into SIEM and SOAR platforms like Demisto and Phantom, streamlining incident response and improving response efficiency by 35%.",
      "Conducted risk assessments on privileged accounts and configured Privileged Access Management (PAM) solutions such as CyberArk, mitigating insider threats and ensuring policy enforcement across critical systems.",
      "Developed and executed IAM training sessions for employees and junior security engineers, enhancing awareness and reducing misconfigurations or risky access practices by 20%.",
      "Implemented role-based access control (RBAC) and segregation of duties (SoD) across enterprise systems, aligning with NIST, ISO 27001, and GDPR standards, strengthening overall identity governance."
    ]
  }
],

  projects: [
    {
      title: "Phishing Detection and Response Automation",
      description: "Designed and implemented a comprehensive zero-trust security architecture across an enterprise environment with over 1,000 endpoints, integrating strict access controls, continuous monitoring, and adaptive authentication to minimize attack surface and significantly reduce potential security breaches.",
      technologies: ["Azure AD", "CyberArk", "Palo Alto", "Microsoft Intune", "Splunk"],
      liveUrl: "#",
      repoUrl: "#",
      image: "/project-zerotrust.jpg"
    },
    {
      title: "Threat Hunting with MITRE ATT&CK ",
      description: "Built an intelligent threat detection system by integrating advanced machine learning algorithms with SIEM platforms, enabling real-time anomaly detection, proactive alerting, and automated correlation of suspicious events to significantly enhance threat visibility and reduce incident response times.",
      technologies: ["Python", "Splunk", "Phantom", "TensorFlow", "AWS"],
      liveUrl: "#", 
      repoUrl: "#",
      image: "/project-threatdetection.jpg"
    },
    {
      title: "Cloud Security Posture Management",
      description: "Developed a real-time security monitoring dashboard for multi-cloud environments, aggregating logs and telemetry from AWS, Azure, and GCP into a unified interface that improved cross-cloud visibility, streamlined incident triage, and accelerated security operations response times.",
      technologies: ["React", "AWS Security Hub", "Azure Sentinel", "Grafana", "Python"],
      liveUrl: "#",
      repoUrl: "#", 
      image: "/project-dashboard.jpg"
    },
    // {
    //   title: "Identity Lifecycle Management",
    //   description: "Implemented automated identity lifecycle management system with role mining and certification",
    //   technologies: ["SailPoint", "PowerShell", "Azure AD", "ServiceNow", "REST APIs"],
    //   liveUrl: "#",
    //   repoUrl: "#",
    //   image: "/project-identity.jpg"
    // }
  ],

  // education: [
  //   {
  //     degree: "Master of Science in Cybersecurity",
  //     institution: "University of South Florida",
  //     location: "Tampa, FL",
  //     duration: "2017 - 2019",
  //     gpa: "3.8/4.0"
  //   },
  //   {
  //     degree: "Bachelor of Science in Computer Science",
  //     institution: "Florida Institute of Technology", 
  //     location: "Melbourne, FL",
  //     duration: "2013 - 2017",
  //     gpa: "3.6/4.0"
  //   }
  // ],


  education: [
  {
    degree: "Master of Science in Computer Science",
    institution: "Saint Leo University",
    location: "Tampa, FL",
    duration: "Aug 2023 - Jun 2025"
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Teegala Krishna Reddy Engineering College",
    location: "Hyderabad, India",
    duration: "Aug 2016 - Apr 2019"
  }
]
,
  // certifications: [
  //   {
  //     name: "Certified Information Systems Security Professional (CISSP)",
  //     provider: "ISC2",
  //     year: "2021",
  //     credentialUrl: "#"
  //   },
  //   {
  //     name: "AWS Certified Security - Specialty",
  //     provider: "Amazon Web Services",
  //     year: "2022", 
  //     credentialUrl: "#"
  //   },
  //   {
  //     name: "Certified Ethical Hacker (CEH)",
  //     provider: "EC-Council",
  //     year: "2020",
  //     credentialUrl: "#"
  //   },
  //   {
  //     name: "CompTIA Security+",
  //     provider: "CompTIA",
  //     year: "2019",
  //     credentialUrl: "#"
  //   },
  //   {
  //     name: "Microsoft Azure Security Engineer Associate",
  //     provider: "Microsoft",
  //     year: "2021",
  //     credentialUrl: "#"
  //   },
  //   {
  //     name: "Splunk Certified Security Analyst",
  //     provider: "Splunk",
  //     year: "2020",
  //     credentialUrl: "#"
  //   }
  // ],


  certifications: [
  {
    name: "Google Cybersecurity Professional Certificate",
    provider: "Coursera",
    year: "2025",
    credentialUrl: "#"
  },
  {
    name: "IBM Cybersecurity Analyst Professional Certificate",
    provider: "Coursera",
    year: "2025",
    credentialUrl: "#"
  },
  {
    name: "Microsoft Cybersecurity Analyst Professional Certificate",
    provider: "Coursera",
    year: "2024",
    credentialUrl: "#"
  },
  {
    name: "Learning Identity and Access Management",
    provider: "LinkedIn Learning",
    year: "2024",
    credentialUrl: "#"
  }
]
,
  contact: {
    email: "ravitejaalli55@gmail.com",
    phone: "+1(813)760-3213",
    linkedIn: "https://www.linkedin.com/in/raviteja-alli",
    location: "Tampa, FL"
  }
};

export default portfolioData;
