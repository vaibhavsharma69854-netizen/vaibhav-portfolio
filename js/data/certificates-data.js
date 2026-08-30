/**
 * certificates-data.js
 * Certifications and technical accreditations data for Vaibhav Sharma
 */

export const certificatesData = [
  {
    id: "cert-ml-spec",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford Online",
    date: "2025 - 2026",
    category: "ai-ml",
    categoryLabel: "AI / ML",
    credentialId: "DL-ML-892401-VERIFIED",
    verificationUrl: "https://coursera.org/verify/placeholder",
    description: "Supervised Learning, Neural Networks, Decision Trees, Reinforcement Learning, and practical ML model evaluation.",
    skillsCovered: ["Supervised Learning", "Deep Learning", "Gradient Descent", "Model Evaluation"],
    badgeColor: "#00f0ff",
    image: "assets/images/cert-ml.svg"
  },
  {
    id: "cert-opencv-cv",
    title: "Computer Vision & Image Processing with OpenCV",
    issuer: "OpenCV.org / Educational Platform",
    date: "2025",
    category: "ai-ml",
    categoryLabel: "AI / ML",
    credentialId: "OPENCV-CV-7832-PRO",
    verificationUrl: "https://opencv.org/verify/placeholder",
    description: "Digital image processing, spatial filters, contour analysis, real-time video streams, and object detection fundamentals.",
    skillsCovered: ["OpenCV", "Image Filtering", "Contour Detection", "Color Spaces"],
    badgeColor: "#3b82f6",
    image: "assets/images/cert-cv.svg"
  },
  {
    id: "cert-embedded-robotics",
    title: "Robotics & Embedded Systems Fundamentals",
    issuer: "Arduino & Microcontroller Academy",
    date: "2025",
    category: "robotics",
    categoryLabel: "Robotics",
    credentialId: "EMB-ROBOT-5519-ACAD",
    verificationUrl: "https://arduino.cc/verify/placeholder",
    description: "Microcontroller architecture, sensor interfacing, PWM motor drivers, timer interrupts, and hardware I/O protocols.",
    skillsCovered: ["Arduino", "PWM", "Serial Communication", "Sensor Interfacing"],
    badgeColor: "#10b981",
    image: "assets/images/cert-robotics.svg"
  },
  {
    id: "cert-python-data",
    title: "Python for Data Science & Scientific Computing",
    issuer: "Coursera / University Program",
    date: "2025",
    category: "programming",
    categoryLabel: "Programming",
    credentialId: "PY-DS-44102-CERT",
    verificationUrl: "https://coursera.org/verify/placeholder",
    description: "Data manipulation with NumPy & Pandas, algorithmic vectorization, and mathematical modeling.",
    skillsCovered: ["Python 3", "NumPy", "Pandas", "Matplotlib", "Algorithms"],
    badgeColor: "#f59e0b",
    image: "assets/images/cert-python.svg"
  },
  {
    id: "cert-cs50x",
    title: "Computer Science Principles & Algorithms (C / Python)",
    issuer: "CS50 / Harvard Online (edX)",
    date: "2024 - 2025",
    category: "programming",
    categoryLabel: "Programming",
    credentialId: "EDX-CS50-9941-VERIF",
    verificationUrl: "https://edx.org/verify/placeholder",
    description: "Low-level memory management, pointers, data structures (linked lists, hash tables, trees), and algorithm efficiency.",
    skillsCovered: ["C Programming", "Memory Management", "Data Structures", "Algorithms"],
    badgeColor: "#8b5cf6",
    image: "assets/images/cert-cs.svg"
  },
  {
    id: "cert-fullstack-dev",
    title: "Modern Web Development & Git Version Control",
    issuer: "freeCodeCamp / Open Source",
    date: "2024",
    category: "development",
    categoryLabel: "Development",
    credentialId: "FCC-WEB-330219",
    verificationUrl: "https://freecodecamp.org/certification/placeholder",
    description: "Responsive layouts, semantic HTML5, modern CSS architectures, JavaScript ES6+, Git branch workflows and collaborative GitHub.",
    skillsCovered: ["HTML5", "CSS3", "JavaScript ES6+", "Git", "GitHub"],
    badgeColor: "#ec4899",
    image: "assets/images/cert-web.svg"
  }
];

export const certCategories = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "programming", label: "Programming" },
  { id: "robotics", label: "Robotics" },
  { id: "development", label: "Development" }
];
