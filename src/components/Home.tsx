import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, ExternalLink } from "lucide-react";

interface HomeProps {
  onNavigate: (
    page: "home" | "about" | "projects" | "contact",
  ) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Data Visualization",
    "Statistical Modeling",
    "Python",
    "R",
    "SQL",
    "Cloud Computing",
    "Big Data",
    "Data Analysis",
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Predictive Customer Churn Model",
      description:
        "Developed a machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.",
      image:"src/assets/11.jpeg",
      tags: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    },
    {
      id: 2,
      title: "Sales Data Analysis Dashboard",
      description:
        "Built an interactive dashboard analyzing sales trends and KPIs, providing actionable insights for business decisions.",
      image:"src/assets/22.jpeg",
      tags: ["Python", "Plotly", "Streamlit", "SQL"],
    },
    {
      id: 3,
      title: "Image Classification CNN",
      description:
        "Implemented a convolutional neural network for medical image classification achieving 91% validation accuracy.",
      image: "src/assets/33.jpeg",
      tags: ["TensorFlow", "Keras", "Computer Vision", "CNN"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[320px] sm:min-h-[480px] rounded-lg bg-gradient-to-r from-[#0000001a] to-[#00000066] bg-cover bg-center bg-no-repeat m-2 sm:m-4"
          style={{
            backgroundImage: "url('src/assets/miracle.jpeg')"
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 sm:p-8 text-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-[-1px] sm:tracking-[-2px] font-['Space_Grotesk']">
                Prabin Thakur Portfolio
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-sm sm:text-base font-normal leading-relaxed text-white font-['Space_Grotesk']">
                Explore my projects and skills in data science,
                machine learning, and AI.
              </p>
            </div>
            <Button
              onClick={() => onNavigate("about")}
              className="mt-4 !bg-[deepskyblue] hover:!bg-[deepskyblue]/80 !text-[#0f1717] font-bold font-['Space_Grotesk'] h-10 sm:h-12 px-4 sm:px-5 rounded-lg text-sm sm:text-base"
            >
              About me
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-12 font-['Space_Grotesk']">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#26363b] border-none rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#99b2bd] mb-3 sm:mb-4 font-['Space_Grotesk'] line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#0f1717] text-white border-none text-xs font-['Space_Grotesk']"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="w-full sm:w-auto !bg-[deepskyblue] hover:!bg-[deepskyblue]/80 !text-[#0f1717] font-medium font-['Space_Grotesk'] text-xs sm:text-sm"
                  >
                    View Project{" "}
                    <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6 sm:mt-8">
            <Button
              onClick={() => onNavigate("projects")}
              variant="outline"
              className="!border-[deepskyblue] !text-[deepskyblue] hover:!bg-[deepskyblue] hover:!text-[#0f1717] font-['Space_Grotesk'] text-sm sm:text-base"
            >
              View All Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-20">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 font-['Space_Grotesk']">
            My Toolkit
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                className="bg-[#26363b] text-white border-none h-7 sm:h-8 px-3 sm:px-4 font-medium font-['Space_Grotesk'] text-xs sm:text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}