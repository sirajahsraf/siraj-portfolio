import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
} from "lucide-react";

export function About() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Inspiria Knowledge Campus",
      year: "2024 - 2028",
      gpa: "8.9/10",
      relevant: [
        "Machine Learning",
        "Statistical Analysis",
        "Database Systems",
        "Python Programming",
      ],
    },
  ];

  const experience = [
    {
      title: "Data Science Intern",
      company: "TechCorp Analytics",
      period: "Summer 2025",
      description:
        "Developed predictive models for customer behavior analysis, resulting in 15% improvement in retention rates.",
      technologies: ["Python", "TensorFlow", "SQL", "Tableau"],
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      period: "2023 - Present",
      description:
        "Contributing to research on natural language processing and working on sentiment analysis projects.",
      technologies: ["PyTorch", "NLTK", "Transformers", "Git"],
    },
  ];

  const achievements = [
    "Dean's List - Fall 2024, Spring 2025",
    "Winner - University Data Science Competition 2023",
    "Published Research Paper on NLP Applications",
    "Google Analytics Certified",
    "AWS Cloud Practitioner Certified",
  ];

  const interests = [
    "Machine Learning Research",
    "Open Source Contributions",
    "Data Visualization",
    "Competitive Programming",
    "Tech Blogging",
    "Mentoring",
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[960px] mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-[#99b2bd] font-['Space_Grotesk']">
              Passionate data science student dedicated to
              solving real-world problems through data-driven
              insights
            </p>
          </div>

          {/* Profile Section */}
          <Card className="bg-[#26363b] border-none rounded-lg mb-6 sm:mb-8">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="flex justify-center lg:justify-start">
                  <div className="rounded-lg overflow-hidden max-w-48 sm:max-w-56 lg:max-w-64">
                    <ImageWithFallback
                      src="assets/siraj.png"
                      alt="Professional headshot"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-['Space_Grotesk']">
                    Siraj Ashraf
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start text-[#99b2bd] mb-4 font-['Space_Grotesk']">
                    <MapPin className="h-4 w-4 mr-2" />
                    Siliguri, India
                  </div>
                  <p className="text-sm sm:text-base text-[#99b2bd] leading-6 mb-4 sm:mb-6 font-['Space_Grotesk']">
                    I am a dedicated data science researcher
                    with a passion for transforming raw data
                    into actionable insights. My expertise spans
                    machine learning, statistical modeling, and
                    data visualization. I thrive on solving
                    complex problems and am constantly learning
                    new technologies to stay at the forefront of
                    this rapidly evolving field.
                  </p>
                  <p className="text-sm sm:text-base text-[#99b2bd] leading-6 font-['Space_Grotesk']">
                    When I'm not analyzing datasets or building
                    models, you can find me contributing to
                    open-source projects, writing technical
                    blogs, or mentoring fellow students. I
                    believe in the power of data to drive
                    positive change and am excited to apply my
                    skills to real-world challenges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-[#26363b] border-none rounded-lg mb-6 sm:mb-8">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center text-white font-['Space_Grotesk'] text-lg sm:text-xl">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-[deepskyblue] pl-6 pb-6"
                >
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    {edu.degree}
                  </h3>
                  <p className="text-[deepskyblue] font-medium font-['Space_Grotesk']">
                    {edu.institution}
                  </p>
                  <p className="text-[#99b2bd] text-sm mb-2 font-['Space_Grotesk']">
                    {edu.year} • GPA: {edu.gpa}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map((course) => (
                      <Badge
                        key={course}
                        className="bg-[#0f1717] text-white border-none font-['Space_Grotesk']"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-[#26363b] border-none rounded-lg mb-6 sm:mb-8">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center text-white font-['Space_Grotesk'] text-lg sm:text-xl">
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-[deepskyblue] pl-6 pb-6 last:pb-0"
                >
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    {exp.title}
                  </h3>
                  <p className="text-[deepskyblue] font-medium font-['Space_Grotesk']">
                    {exp.company}
                  </p>
                  <p className="text-[#99b2bd] text-sm mb-3 font-['Space_Grotesk']">
                    {exp.period}
                  </p>
                  <p className="text-[#99b2bd] mb-3 font-['Space_Grotesk']">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[#0f1717] text-white border-none font-['Space_Grotesk']"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements & Interests */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="bg-[#26363b] border-none rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-white font-['Space_Grotesk']">
                  <Award className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-[#99b2bd] font-['Space_Grotesk'] flex items-start"
                    >
                      <span className="text-[deepskyblue] mr-2">
                        •
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#26363b] border-none rounded-lg">
              <CardHeader>
                <CardTitle className="text-white font-['Space_Grotesk']">
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      className="bg-[#0f1717] text-white border-none font-['Space_Grotesk']"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
