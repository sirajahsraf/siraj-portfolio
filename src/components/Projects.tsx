import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Filter } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "machine-learning", label: "Machine Learning" },
    { id: "data-analysis", label: "Data Analysis" },
    { id: "deep-learning", label: "Deep Learning" },
    { id: "web-apps", label: "Web Applications" },
  ];

  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction System",
      description:
        "Developed an end-to-end machine learning pipeline to predict customer churn for a telecommunications company. The model achieved 94% accuracy using ensemble methods and helped the company reduce churn by 15%.",
      image:
        "/assets/11.jpeg",
      tags: [ 
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "Flask",
      ],
      category: "machine-learning",
      github: "https://github.com/username/churn-prediction",
      demo: "https://churn-predictor-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Sales Analytics Dashboard",
      description:
        "Built an interactive dashboard for sales data analysis with real-time visualizations. Features include KPI tracking, trend analysis, and predictive forecasting capabilities.",
      image:"/assets/22.jpeg",
      tags: [
        "Python",
        "Plotly",
        "Streamlit",
        "SQL",
        "PostgreSQL",
      ],
      category: "data-analysis",
      github: "https://github.com/username/sales-dashboard",
      demo: "https://sales-analytics-app.com",
      featured: true,
    },
    {
      id: 3,
      title: "Image Classification",
      description:
        "Implemented a convolutional neural network for classifying chest X-rays to detect pneumonia. Achieved 91% validation accuracy using transfer learning with ResNet50.",
      image:"/assets/33.jpeg",
      tags: [
        "TensorFlow",
        "Keras",
        "Computer Vision",
        "CNN",
        "Transfer Learning",
      ],
      category: "deep-learning",
      github:
        "https://github.com/username/medical-classification",
      demo: "https://medical-classifier.com",
      featured: true,
    },
    {
      id: 4,
      title: "Sentiment Analysis API",
      description:
        "Created a REST API for real-time sentiment analysis of social media posts using BERT transformer model. Deployed on AWS with auto-scaling capabilities.",
      image:"/assets/senti.png",
      tags: ["PyTorch", "BERT", "FastAPI", "AWS", "Docker"],
      category: "deep-learning",
      github: "https://github.com/username/sentiment-api",
      demo: "https://sentiment-api.herokuapp.com",
      featured: false,
    },
    {
      id: 5,
      title: "Stock Price Predictor",
      description:
        "Developed a time series forecasting model to predict stock prices using LSTM networks. Includes technical indicators and market sentiment analysis.",
      image:"/assets/stock.png",
      tags: [
        "Python",
        "LSTM",
        "TensorFlow",
        "Alpha Vantage API",
        "Matplotlib",
      ],
      category: "machine-learning",
      github: "https://github.com/username/stock-predictor",
      demo: "https://stock-predictor-app.com",
      featured: false,
    },
    {
      id: 6,
      title: "Data Science Portfolio Website",
      description:
        "Designed and developed this responsive portfolio website to showcase my data science projects and skills. Built with modern web technologies.",
      image:"/assets/portfolio.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      category: "web-apps",
      github: "https://github.com/username/portfolio",
      demo: "https://alexchen-portfolio.com",
      featured: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[960px] mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Projects
            </h1>
            <p className="text-lg sm:text-xl text-[#99b2bd] font-['Space_Grotesk']">
              A collection of my data science projects and
              applications
            </p>
          </div>

          {/* Filter Categories */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Filter className="h-4 w-4 text-[#99b2bd]" />
              <span className="text-xs sm:text-sm text-[#99b2bd] font-['Space_Grotesk']">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(category.id)
                  }
                  variant={
                    selectedCategory === category.id
                      ? "default"
                      : "outline"
                  }
                  size="lg"
                  className={
                    selectedCategory === category.id
                      ? "!bg-[deepskyblue] !text-white hover:!bg-[deepskyblue]/80 font-['Space_Grotesk'] text-xs sm:text-sm"
                      : "!border-[#26363b] !text-white hover:!bg-[#26363b] font-['Space_Grotesk'] text-xs sm:text-sm"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#26363b] border-none rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] flex-1">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-[deepskyblue] text-[#0f1717] font-['Space_Grotesk'] text-xs flex-shrink-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-[#99b2bd] mb-4 font-['Space_Grotesk'] leading-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#0f1717] text-white border-none font-['Space_Grotesk'] text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      className="!bg-[deepskyblue] hover:!bg-[deepskyblue]/80 !text-[#0f1717] font-medium font-['Space_Grotesk'] text-xs sm:text-sm"
                      onClick={() =>
                        window.open(project.demo, "_blank")
                      }
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="!border-[#26363b] !text-white hover:!bg-[#26363b] font-['Space_Grotesk'] text-xs sm:text-sm"
                      onClick={() =>
                        window.open(project.github, "_blank")
                      }
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#99b2bd] font-['Space_Grotesk']">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}