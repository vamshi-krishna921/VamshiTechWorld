import java from "../assets/java-course.jpg";
import git from "../assets/git-course.jpg";
import docker from "../assets/devops-course.jpg";

const courses = [
  {
    id: "java",
    title: "Java + DSA + Automation",
    mode: "ONLINE",
    image: java,
    status: "Active",
    description:
      "Comprehensive training covering Core Java, Data Structures & Algorithms, and Test Automation. Build real-world projects and master interview-level problem-solving.",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    syllabus: [
      "FlowCharts",
      "BAcktracking",
      "Variables & Data Types in Java",
      "Time & Space Complexity ",
      "Operators",
      "if-else Statements",
      "Master 60+ foundation questions",
      "Functions & Methods",
      "Greedy Algorithms",
      "OOPs",
      "Data Structures: Arrays, Strings, ArrayLists, 2D Arrays Stacks, Patterns, Queues, Heaps/Priority Queues, LinkedLists, Hashing, Trees, Segment Trees, Graphs",
      "Algorithm Design and Analysis",
      "Sorting and Searching Algorithms: Dynamic Programming, Recursion, Divide & Conquer,",
      "Dynamic Programming",
      "200+ Coding Questions ",
      "Automation (n8n)",
    ],
    enrollLink: "https://forms.gle/E7kszxvgRiBDjjVM6",
  },
  {
    id: "git",
    title: "Git and GitHub",
    mode: "ONLINE",
    image: git,
    status: "Coming Soon",
    description:
      "Master version control with Git and collaborate effectively using GitHub. Learn branching strategies, pull requests, and team workflows.",
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    syllabus: [
      "Git fundamentals and setup",
      "Basic commands: commit, push, pull",
      "Branching and merging strategies",
      "Resolving merge conflicts",
      "GitHub collaboration workflows",
      "Pull requests and code reviews",
      "Git branching models (GitFlow)",
      "Advanced Git operations",
    ],
  },
  {
    id: "docker",
    title: "Docker",
    mode: "ONLINE",
    image: docker,
    status: "Coming Soon",
    description:
      "A deep dive into containerization with Docker. Learn to build, ship, and run distributed applications using Docker's powerful ecosystem, from local development to production-ready deployments.",
    duration: "8 weeks",
    level: "Intermediate",
    syllabus: [
      "Introduction to Virtualization and Containerization",
      "Docker Fundamentals: Images, Containers, and Volumes",
      "Creating Custom Docker Images with Dockerfile",
      "Docker Networking and Storage",
      "Orchestrating Containers with Docker Compose",
      "Container Registries (Docker Hub, AWS ECR)",
      "Monitoring and Logging for Containerized Applications",
      "Real-world Project: Deploying a Multi-container Application",
    ],
  },
];

export default courses;
