import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sirajashraf707@gmail.com",
      link: "mailto:sirajashraf@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8918192282",
      link: "tel:+918918192282",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Siliguri, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sirajashraf",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/sirajashraf",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/sirajashraf",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[960px] mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#99b2bd] font-['Space_Grotesk'] max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities,
              collaborations, or just chat about data science.
              Let's connect and explore how we can work
              together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="bg-[#26363b] border-none rounded-lg">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center text-white font-['Space_Grotesk'] text-lg sm:text-xl">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-white font-['Space_Grotesk']"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-[#0f1717] border-[#0f1717] text-white font-['Space_Grotesk'] mt-2"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-white font-['Space_Grotesk']"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-[#0f1717] border-[#0f1717] text-white font-['Space_Grotesk'] mt-2"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-white font-['Space_Grotesk']"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-[#0f1717] border-[#0f1717] text-white font-['Space_Grotesk'] mt-2"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-white font-['Space_Grotesk']"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-[#0f1717] border-[#0f1717] text-white font-['Space_Grotesk'] mt-2 min-h-[120px]"
                      placeholder="Tell me more about your project or question..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full !bg-[deepskyblue] hover:!bg-[deepskyblue]/80 !text-[#0f1717] font-bold font-['Space_Grotesk']"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-[#26363b] border-none rounded-lg">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-white font-['Space_Grotesk'] text-lg sm:text-xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="space-y-4 sm:space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-10 h-10 bg-[deepskyblue] rounded-lg flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-[#0f1717]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#99b2bd] font-['Space_Grotesk']">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white hover:text-[deepskyblue] transition-colors font-['Space_Grotesk']"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-['Space_Grotesk']">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#26363b] border-none rounded-lg">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-white font-['Space_Grotesk'] text-lg sm:text-xl">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="flex space-x-3 sm:space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-[#0f1717] rounded-lg flex items-center justify-center text-white transition-colors ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#99b2bd] mt-4 font-['Space_Grotesk']">
                    Connect with me on social media to stay
                    updated on my latest projects and insights!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#26363b] border-none rounded-lg">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 font-['Space_Grotesk']">
                    Let's Collaborate!
                  </h3>
                  <p className="text-sm sm:text-base text-[#99b2bd] font-['Space_Grotesk'] leading-6">
                    I'm always open to discussing interesting
                    data science projects, research
                    opportunities, or potential collaborations.
                    Whether you're a fellow student, researcher,
                    or industry professional, I'd love to hear
                    from you!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}