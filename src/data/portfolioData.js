// AI / Machine Learning Portfolio Data
// All content for Tejo Mahesh Aarepalli's portfolio website

const portfolioData = {
  personalInfo: {
    name: "TEJO MAHESH AAREPALLI",
    title: "AI / Machine Learning Engineer",
    location: "Des Plaines, IL",
    phone: "+1 (224) 486-9160",
    email: "maheshaarepalli11@gmail.com",
    github: "https://github.com/tejoaarepalli",
    profileImage: "/image.png",
    resume: "/AWL-4686-12032026-0325-resume_tejo-mahesh-aarepalli_aiml.pdf"
  },

  summary: "AI / Machine Learning Engineer with 2+ years of experience building machine learning, deep learning, and Generative AI solutions across healthcare and financial domains. Experienced in developing end-to-end ML pipelines, LLM applications, and NLP systems using Python, PyTorch, TensorFlow, Scikit-learn, and Apache Spark. Hands-on experience implementing Retrieval-Augmented Generation (RAG), prompt engineering, and LLM fine-tuning with Hugging Face and LoRA, along with deploying scalable ML services using MLflow, Docker, FastAPI, Kafka, and Airflow for enterprise analytics and AI applications.",

  skills: {
    programmingDataProcessing: [
      "Python",
      "SQL",
      "PySpark",
      "Pandas",
      "NumPy"
    ],
    machineLearningDeepLearning: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Hyperparameter Optimization",
      "Ensemble Learning",
      "Time Series Forecasting",
      "Classification",
      "Regression",
      "Clustering"
    ],
    mlFrameworks: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "LightGBM"
    ],
    generativeAiLlms: [
      "Large Language Models (LLMs)",
      "Generative AI",
      "Prompt Engineering",
      "LLM Fine-Tuning (LoRA, PEFT)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Hugging Face Transformers",
      "Embeddings",
      "Vector Search"
    ],
    naturalLanguageProcessing: [
      "Text Classification",
      "Named Entity Recognition (NER)",
      "Semantic Search",
      "Information Extraction"
    ],
    mlOpsDeployment: [
      "MLflow",
      "Experiment Tracking",
      "Model Deployment",
      "Model Monitoring",
      "Docker"
    ],
    dataEngineeringBigData: [
      "ETL/ELT Pipelines",
      "Apache Spark",
      "Apache Kafka",
      "Apache Airflow",
      "Databricks",
      "Batch & Streaming Data Processing"
    ],
    cloudAiPlatforms: [
      "AWS (S3, EC2, SageMaker)",
      "Azure Machine Learning",
      "Google Vertex AI"
    ],
    aiApisBackend: [
      "FastAPI",
      "Flask",
      "REST APIs"
    ],
    databasesWarehousing: [
      "Snowflake",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "BigQuery"
    ]
  },

  experience: [
    {
      company: "Broadridge Financial Solutions",
      role: "AI / ML Engineer",
      location: "Nov 2025 - Present",
      duration: "Present",
      achievements: [
        "Constructed a Retrieval-Augmented Generation (RAG) system using Python, LangChain, Hugging Face Transformers, and vector embeddings that indexed financial research and regulatory filings, enabling semantic search across 3M+ documents and cutting analyst research time by 40%.",
        "Structured NLP pipelines with PyTorch and Hugging Face models to extract financial entities and compliance references from unstructured filings, increasing automated document intelligence accuracy to 92%.",
        "Designed streaming data pipelines with Apache Spark, Kafka, and Airflow to process market feeds and transaction datasets in near real time, supporting ML feature pipelines handling 250K+ records per minute.",
        "Developed deep learning time-series forecasting models using TensorFlow and PyTorch trained on trading indicators and market signals, improving short-term price prediction accuracy by 18% for portfolio analytics.",
        "Optimized LLM responses through prompt engineering and prompt optimization using LangChain and embedding models, improving contextual answer relevance and reducing hallucination rates by 30% in the internal research assistant.",
        "Built automated machine learning training pipelines with Python, Scikit-learn, XGBoost, and MLflow to manage experiment tracking, model evaluation, and versioning for financial anomaly detection models.",
        "Deployed containerized model inference services using Docker, FastAPI, and REST APIs that integrated AI models into Broadridge research platforms, enabling secure scalable access for 200+ analysts.",
        "Implemented model monitoring and explainability workflows with MLflow and feature importance analysis, enabling transparent predictions and supporting regulatory compliance for AI-driven financial analytics systems."
      ]
    },
    {
      company: "Cloudadorn Technology Solutions",
      role: "Machine Learning Engineer",
      location: "Dec 2024 - Nov 2025",
      duration: "2024 - 2025",
      achievements: [
        "Created fraud detection and credit risk models using Python, Scikit-learn, and XGBoost on enterprise transaction datasets, improving fraud classification precision by 21% across payment monitoring systems.",
        "Engineered distributed feature engineering pipelines with PySpark and Apache Spark to transform behavioral and transactional attributes from 50M+ financial records, enabling scalable model training for fraud analytics.",
        "Implemented automated machine learning experimentation workflows using Python, Scikit-learn, and MLflow that tracked model performance and training iterations, reducing model development cycles by 35%.",
        "Built deep learning anomaly detection models using PyTorch on sequential transaction patterns, increasing suspicious activity detection recall by 17% for AML monitoring systems.",
        "Constructed Retrieval-Augmented Generation pipelines using LangChain, Hugging Face Transformers, embeddings, and vector search to analyze regulatory reports and financial documents, enabling faster compliance insight retrieval.",
        "Fine-tuned transformer-based NLP models using Hugging Face and LoRA techniques on financial text corpora, improving entity extraction accuracy from compliance documentation to 90%.",
        "Designed real-time data ingestion pipelines using Apache Kafka and Apache Airflow to integrate payment streams and customer data feeds, enabling fraud risk scoring for 200K+ transactions per hour.",
        "Deployed containerized ML inference services using Docker, FastAPI, and REST APIs to operationalize fraud prediction models within enterprise analytics platforms used by risk investigation teams."
      ]
    },
    {
      company: "Sahrudaya Healthcare",
      role: "Data Scientist",
      location: "Apr 2022 - Jan 2023",
      duration: "2022 - 2023",
      achievements: [
        "Developed patient readmission risk prediction models using Python, Scikit-learn, and XGBoost trained on EHR datasets and ICD coded records, improving early identification of high risk patients by 19% for clinical care teams.",
        "Engineered feature engineering workflows with Python, Pandas, and PySpark to transform structured EHR attributes and patient history data into model ready datasets, enabling scalable training across 1M+ patient records.",
        "Built NLP pipelines using PyTorch and Hugging Face Transformers to extract medical entities from physician notes and discharge summaries, increasing automated clinical information extraction accuracy to 91%.",
        "Optimized model performance using hyperparameter tuning and experiment tracking with MLflow which improved predictive accuracy of healthcare risk models and reduced experimentation time by 30%.",
        "Created disease progression and patient risk stratification models with Scikit-learn and XGBoost that analyzed demographics and treatment patterns, enabling clinicians to prioritize preventive care for high risk populations.",
        "Designed distributed healthcare data pipelines using Apache Spark and PySpark that integrated claims data, EHR records, and clinical datasets to generate reliable features for predictive modeling workflows.",
        "Integrated machine learning inference services through FastAPI and REST APIs which allowed clinical dashboards to retrieve real time patient risk predictions during treatment planning.",
        "Established model evaluation and monitoring pipelines using MLflow that tracked prediction performance across healthcare datasets and ensured stable deployment of patient outcome prediction models."
      ]
    }
  ],

  projects: [
    {
      title: "Enterprise Generative AI Knowledge Assistant",
      description: "Built document ingestion and preprocessing pipelines using Python, PySpark, Apache Spark, and Databricks on AWS to process large volumes of enterprise documents and research reports, enabling scalable data preparation for LLM based knowledge retrieval.",
      technologies: ["Python", "PySpark", "LangChain", "Hugging Face", "Azure ML", "Docker", "FastAPI"],
      liveUrl: "#",
      repoUrl: "https://github.com/tejoaarepalli",
      image: "/enterprise_ai.png"
    },
    {
      title: "Fraud Detection Machine Learning Platform",
      description: "Engineered data ingestion and feature processing pipelines using PySpark, Apache Spark, Apache Kafka, and Databricks to transform high volume transaction streams into model ready datasets for fraud analytics.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Apache Kafka", "MLflow", "Azure ML", "FastAPI"],
      liveUrl: "#",
      repoUrl: "https://github.com/tejoaarepalli",
      image: "/fraud_detection.png"
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Campbellsville University",
      location: "Kentucky, USA",
      duration: "Graduate"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University Kakinada",
      location: "Andhra Pradesh, India",
      duration: "Graduate"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Machine Learning Engineer",
      provider: "Amazon Web Services",
      year: "2024",
      credentialUrl: "#"
    },
    {
      name: "Google Cloud Certified - Generative AI Studio",
      provider: "Google Cloud",
      year: "2024",
      credentialUrl: "#"
    },
    {
      name: "Machine Learning Specialization",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Deep Learning Specialization",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Machine Learning Engineering for Production (MLOps)",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Generative AI for Developers",
      provider: "LinkedIn Learning",
      year: "2024",
      credentialUrl: "#"
    }
  ],

  contact: {
    email: "maheshaarepalli11@gmail.com",
    phone: "+1 (224) 486-9160",
    github: "https://github.com/tejoaarepalli",
    location: "Des Plaines, IL"
  }
};

export default portfolioData;
