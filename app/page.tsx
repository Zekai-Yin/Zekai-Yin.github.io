"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Mail, FileText, Linkedin, ExternalLink, GraduationCap, Briefcase, Users, Award, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Reusable Components for the new layout ---

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "bg-slate-500/10 backdrop-blur-lg border border-slate-400/20 rounded-2xl shadow-lg transition-all duration-300 hover:border-slate-400/40 hover:shadow-xl",
      className,
    )}
  >
    {children}
  </div>
)

const SectionHeader = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3">
    <Icon className="w-10 h-10 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent" />
    <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  </h2>
)

// --- Main Page Component ---

export default function AcademicHomepageV6() {
  const publications = [
    {
      title: "ZeroVO: Visual Odometry with Minimal Assumptions",
      authors: "Lei Lai*, Zekai Yin*, Eshed Ohn-Bar",
      venue: "CVPR 2025",
      link: "https://example.com/zerovo", // Replace with actual link
      imageUrl: "/placeholder.svg?width=800&height=400",
      description:
        "A novel visual odometry algorithm with minimal assumptions, achieving zero-shot generalization across diverse cameras and environments.",
    },
    {
      title: "Robot Structure Prior Guided Temporal Attention for Camera-to-Robot Pose Estimation",
      authors: "Yang Tian*, Jiyao Zhang*, Zekai Yin*, Hao Dong",
      venue: "CVPR 2023",
      link: "https://example.com/sgtapose", // Replace with actual link
      imageUrl: "/placeholder.svg?width=800&height=400",
      description:
        "Tackled camera-to-robot pose estimation from image sequences using temporal cross-attention for real-time performance.",
    },
    {
      title: "BranchOut: Capturing Realistic Multimodality in Autonomous Driving Decisions",
      authors: "Hee Jae Kim, Zekai Yin, Lei Lai, Jason Lee, Eshed Ohn-Bar",
      venue: "CoRL 2025 (Submitted)",
      link: "#", // Replace with actual link when available
      imageUrl: "/placeholder.svg?width=800&height=400",
      description:
        "A GMM-based diffusion model designed to capture human-like, multimodal driving decisions in diverse contexts.",
    },
  ]

  const researchExperience = [
    {
      labName: "H2X Lab",
      university: "Boston University",
      duration: "January 2024 - Present",
      points: [
        "Proposed ZeroVO (Zero-Shot Visual Odometry) as a co-first author, presenting a novel visual odometry algorithm with the minimum assumption: only two images without knowing the camera intrinsics. Achieves zero-shot generalization across diverse cameras and environments, overcoming limitations tied to specific sensors and environments. This paper was accepted by IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2025).",
        "Fused the real-scale world text and geometric information with correspondence features, achieving lower translation and rotation error than the former methods without further alignment.",
        "Investigated the influence of high-generalizability descriptive insights of the scene derived from Vision-Language Models, pseudo-lidar generated from metric depth, and optical flow-guided-scene flow on the visual odometry task.",
        "Collected a dataset using Grand Theft Auto with 600 on-road and 600 off-road driving videos (300,000 images) in various driving conditions (speed, weather, driving style, camera parameters, etc.).",
        "Proposed a Gaussian Mixture Model (GMM)-based diffusion model designed to explicitly capture human-like, multimodal driving decisions in diverse contexts. Achieving state-of-the-art performance on current benchmarks, and reveals weaknesses in standard evaluation practices.",
        "Developed a human-in-the-loop simulation benchmark with an improved IDM-based reactive driving simulation combining Virtual-Reality and Racing-Game Wheel pads. Reconstructed the validation set of the nuScenes dataset using nerf-based methods (Nerfacto) and Gaussian-splatting-based models (OmniRE, HugSIM) and conducted user studies on it. Collected over 20,000 feasible and diverse driving trajectories.",
        "Helped collect action data from visually impaired people and their guide dogs using the XSense motion capture system, enriching the diversity of the navigation dataset for real-world applications. Made 3D visualizations with animation using Python-controlled Blender.",
        "Integrated the Viper X300S robotic arm into a Visual-Language-Action manipulation model pipeline using ROS2 and Python, collected real-world data to fine-tune the model, and conducted real-world experiments.",
      ],
    },
    {
      labName: "PKU-Agibot Lab",
      university: "Peking University",
      duration: "July 2022 - May 2023",
      points: [
        "Proposed SGTAPose (Structure-Guided-Temporal-Attention Pose) as a co-first author, tackled camera-to-robot pose estimation from single-view successive frames of an image sequence using temporal cross-attention to estimate camera-to-robot pose in real-time, and achieved a higher precision than traditional hand-eye calibration. This paper was accepted by IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2023).",
        "Developed the first synthetic video dataset for camera-to-robot pose estimation using Blender (180,000 images).",
        "Used Ros, Libfranka, Pybullet, Franka-Control, and Ctype to improve the control and motion planning system for the Franka Panda Emika robotic arm to conduct real-world experiments.",
        "Designed the Refiner module, used the Levenberg-Marquart algorithm to refine the PNP solver by adding a weight to each point according to its reprojection error.",
        "Combined SAM (Segment Anything Model) and 6D pose estimation model and created a pipeline for the Xarm6 robotic arm for stacking objects, pouring water, and handover objects.",
      ],
    },
  ]

  const renderAuthors = (authors: string) => {
    return authors.split(/(Zekai Yin\*?)/g).map((part, index) =>
      part.startsWith("Zekai Yin") ? (
        <strong key={index} className="text-pink-400">
          {part}
        </strong>
      ) : (
        <span key={index}>{part}</span>
      ),
    )
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Animated Aurora Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
            radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(355, 98%, 76%, 1) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(256, 96%, 68%, 1) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
            radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)
          `,
          animation: "aurora 20s infinite linear",
        }}
      ></div>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">Zekai Yin</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            AI Researcher specializing in Computer Vision, Robotics, and Autonomous Systems.
          </p>
          <p className="text-lg text-red-400 font-semibold mb-8">(Actively Seeking Full-time Opportunities)</p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full px-6"
              asChild
            >
              <a href="https://www.linkedin.com/in/zekai-yin-b5901428b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-full px-6"
              asChild
            >
              <a href="mailto:zekaiyin2025job@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-slate-500 text-slate-300 hover:bg-slate-500 hover:text-white rounded-full px-6"
            >
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-24 md:space-y-32 pb-24">
        {/* Research Experience Section */}
        <section id="research-experience">
          <SectionHeader icon={Sparkles}>Research Experience</SectionHeader>
          <div className="space-y-12">
            {researchExperience.map((exp, index) => (
              <GlassCard key={index} className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-pink-400 mb-1">{exp.labName}</h3>
                <p className="text-lg text-slate-300 mb-1">{exp.university}</p>
                <p className="text-sm text-cyan-400 mb-6">{exp.duration}</p>
                <ul className="list-disc list-outside ml-5 space-y-3 text-sm text-slate-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications">
          <SectionHeader icon={ExternalLink}>Publications</SectionHeader>
          <div className="space-y-12">
            {publications.map((pub, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{pub.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 mb-3">{renderAuthors(pub.authors)}</p>
                    <p className="text-sm text-slate-300 mb-4 flex-grow">{pub.description}</p>
                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-700">
                      <span className="text-md font-semibold text-cyan-400">{pub.venue}</span>
                      {pub.link && (
                        <Button variant="link" asChild className="text-pink-400 hover:text-pink-300 px-0">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            View Publication <ExternalLink className="ml-1 w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={pub.imageUrl || "/placeholder.svg"}
                      alt={`Pipeline for ${pub.title}`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Skills Bento Grid */}
        <section id="skills">
          <SectionHeader icon={Award}>Core Competencies</SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <GlassCard className="p-6 md:col-span-2">
              <h3 className="font-bold text-lg text-pink-400 mb-2">Languages & Frameworks</h3>
              <p className="text-sm">
                Python, C++, C, MATLAB, PyTorch, TensorFlow, Scikit-learn, JAX, Keras, HuggingFace
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg text-cyan-400 mb-2">ML Engineering</h3>
              <p className="text-sm">MLflow, Weights & Biases, Docker, Kubernetes, ONNX, TensorRT, Ray</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg text-cyan-400 mb-2">Data Processing</h3>
              <p className="text-sm">NumPy, Pandas, Matplotlib, SciPy, Dask, Spark, Luigi</p>
            </GlassCard>
            <GlassCard className="p-6 md:col-span-2">
              <h3 className="font-bold text-lg text-pink-400 mb-2">Computer Vision</h3>
              <p className="text-sm">
                OpenCV, Detectron2, YOLO, SAM, NeRF, 3D Reconstruction, Gaussian Splatting, Pose Estimation
              </p>
            </GlassCard>
            <GlassCard className="p-6 md:col-span-3">
              <h3 className="font-bold text-lg text-slate-100 mb-2">Robotics, Simulation & Mechanics</h3>
              <p className="text-sm">
                ROS, ROS2, Blender, PyBullet, Libfranka, Franka-Control, CAD, Fusion 360, 3D Printing, Carpentry
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience">
          <SectionHeader icon={Briefcase}>Work Experience</SectionHeader>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-1">Machine Learning Engineer Intern</h3>
              <p className="text-md text-slate-300 mb-1">Nanjing Zealen Technology</p>
              <p className="text-xs text-cyan-400 mb-3">Feb 2023 - May 2023</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                <li>Used PyTorch and ST-GCN for 24-hour wind power prediction.</li>
                <li>Explored XGBoost and Temporal Fusion Transformer for pollution trend prediction.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-1">Software Development Intern</h3>
              <p className="text-md text-slate-300 mb-1">Beijing Siling Robot Technology</p>
              <p className="text-xs text-cyan-400 mb-3">Jan 2021 - Feb 2021</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                <li>Assisted with coding interaction interfaces and APIs (C++, QT).</li>
                <li>Helped with robot arm OS installation.</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Leadership Experience Section */}
        <section id="leadership-experience">
          <SectionHeader icon={Users}>Leadership & Initiatives</SectionHeader>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-1">Tutor and Course Organizer</h3>
              <p className="text-md text-slate-300 mb-1">Yuanpei College, Peking University</p>
              <p className="text-xs text-cyan-400 mb-3">Mar 2020 - Jul 2023</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                <li>Founded carpentry course, developing curriculum and safety protocols.</li>
                <li>Instructed 150+ students; won 2022 YuanPei Special Contribution Award.</li>
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-1">Founder and Leader</h3>
              <p className="text-md text-slate-300 mb-1">Yuanpei College 3D Printing and Designing Lab</p>
              <p className="text-xs text-cyan-400 mb-3">Feb 2023 - Jul 2023</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-300">
                <li>Established college's first 3D printing lab with CAD-to-fabrication workflow.</li>
                <li>Designed graduation gifts using parametric modeling and additive manufacturing.</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <SectionHeader icon={GraduationCap}>Education</SectionHeader>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-1">Master of Science in Artificial Intelligence</h3>
              <p className="text-md text-slate-300 mb-1">Boston University</p>
              <p className="text-xs text-cyan-400 mb-3">Sep 2023 - Jan 2025</p>
              <p className="text-sm text-slate-300">Advisor: Eshed Ohn-Bar</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-1">Bachelor of Science in Data Science</h3>
              <p className="text-md text-slate-300 mb-1">Peking University</p>
              <p className="text-xs text-cyan-400 mb-3">Sep 2019 - Jul 2023</p>
              <p className="text-sm text-slate-300">Advisor: Hao Dong</p>
            </GlassCard>
          </div>
        </section>
      </main>

      <footer className="text-center py-10 border-t border-slate-800">
        <p className="text-sm text-slate-400">Designed & Built by Zekai Yin</p>
        <p className="text-xs text-slate-500 mt-1">&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  )
}
