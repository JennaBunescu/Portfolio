"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Briefcase, MessageCircle, Heart, ArrowRight, Sparkles, Code, Settings, Cpu, Star, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ParticleBackground from "./components/particle-background"
import TypewriterEffect from "./components/typewriter-effect"
import ScrollTypewriter from "./components/scroll-typewriter"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [currentPage, setCurrentPage] = useState("professional")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateToPage = (page: string) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const menuItems = [
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "personal", label: "Personal", icon: Heart },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  const projects = [
    {
      title: "Real-Time Hand Gesture Recognition",
      description:
        "Built a real-time hand gesture recognition system using OpenCV, Mediapipe, and scikit-learn, enabling precise control of macOS applications and media playback.",
      tech: ["Python", "OpenCV", "Tkinter", "Mediapipe", "scikit-learn"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
    {
      title: "MyGarden - Garden Management Game",
      description:
        "Developed a full-stack gardening web server using Next.js and TypeScript, implementing interactive plant management, mini-games, and a token-based economy for an engaging user experience.",
      tech: ["React", "Node.js", "PostgreSQL", "Spring Security"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
    {
      title: "Let Him Shoot - Basketball Dashboard",
      description:
        "Produced a full-stack scouting platform using Next.js and React, integrating RESTful APIs from Sportradar to fetch, cache, and render NCAA basketball stats with low-latency performance.",
      tech: ["React", "Next.js", "SQLite"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
    },
  ]

  const experiences = [
    {
      company: "Whitworth University",
      role: "Undergraduate Research Assistant",
      period: "Summer 2025",
      description:
        "Developed a 96% accurate COVID-19 diagnosis device utilizing light sensing and temperature control on embedded software in Python.",
      skills: ["Python", "RaspberryPi", "Digital Logic"],
    },
    {
      company: "Whitworth University",
      role: "Teaching Assistant",
      period: "Spring 2025",
      description:
        "Developed responsive web applications and improved user experience metrics by 40%. Collaborated with design teams on UI/UX improvements.",
      skills: ["Physics", "Calculus", "Communication"],
    },
    // {
    //   company: "StartupXYZ",
    //   role: "Junior Developer",
    //   period: "2019 - 2020",
    //   description:
    //     "Built and maintained web applications using modern JavaScript frameworks. Participated in agile development processes.",
    //   skills: ["JavaScript", "React", "CSS", "Git", "Agile"],
    // },
  ]

  const journeyEvents = [
    {
      year: "2025",
      events: [
        {
          title: "Undergraduate Research Assistantship",
          description: "Got to work with the Microdevices Lab on a COVID-19 diagnosis device utilizing light sensing and temperature control on embedded software in Python.",
          image: "/placeholder.svg?height=150&width=200",
          side: "left",
        },
        {
          title: "Began my Computer Science Journey",
          description: "Changed majors to Computer Science and began learning backend development.",
          image: "/placeholder.svg?height=150&width=200",
          side: "right",
        },
      ],
    },
    {
      year: "2023",
      events: [
        {
          title: "Computer Engineering Projects",
          description:
            "Developed a Remote Control car with Arduino; created a DAC for microcontrollers using operational amplifiers.",
          image: "/placeholder.svg?height=150&width=200",
          side: "left",
        },
        {
          title: "Campus Leadership",
          description: "Became Vice President of the Women's STEM club on campus and a writer for the Whitworthian school paper.",
          image: "/placeholder.svg?height=150&width=200",
          side: "right",
        },
        {
          title: "Joined Whitworth as an Engineering Major",
          description:
            "Began developing Engineering skills, with a focus on Electrical and Computer Engineering.",
          image: "/placeholder.svg?height=150&width=200",
          side: "left",
        },
      ],
    },
  ]

  const skills = {
    languages: ["JavaScript", "Python", "Java", "C++", "Swift"],
    software: ["React", "Next.js", "Node.js", "Spring Boot", "Docker", "AWS", "SQL", "Postman"],
    microcontrollers: ["Arduino", "Raspberry Pi", "ESP32", "STM32"],
  }

  const hobbies = [
    {
      title: "Baking",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Playing Piano",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Reading",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Chess",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cooking",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Traveling",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const entertainment = [
    {
      title: "Dune",
      description: "Heir of a duke leads revolt on a desert planet.",
      type: "Movie",
      genre: "Sci-Fi",
      year: "2021",
      image: "/images/dune.jpg",
    },
    {
      title: "Interstellar",
      description: "A father flies through space to save humanity.",
      type: "Movie",
      genre: "Sci-Fi",
      year: "2014",
      image: "/images/interstellar.jpg",
    },
    {
      title: "Friends",
      description: "“Six friends navigate life, love, and coffee.",
      type: "TV Show",
      genre: "Sitcom",
      year: "1994-2004",
      image: "/images/friends.webp",
    },
    {
      title: "The Devil Wears Prada",
      description: "Girl fetches coffee, loses soul, gains wardrobe",
      type: "Movie",
      genre: "Comedy/Drama",
      year: "2006",
      image: "/images/devilwearsprada.jpg",
    },
    {
      title: "The Internship",
      description: "Two guys try to survive an internship at Google.",
      type: "Movie",
      genre: "Comedy",
      year: "2013",
      image: "/images/internship.jpg",
    },
    {
      title: "The Princess Diaries",
      description: "A clumsy teen discovers she is a princess.",
      type: "Movie",
      genre: "Family/Coming of Age",
      year: "2001",
      image: "/images/princess.webp",
    },
  ]

  const artPortfolio = [
    {
      title: "Fruit Tart",
      description: "Strawberries and peaches + apricot jam glaze.",
      type: "Digital Art",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cinnamon Rolls",
      description: "Delicious, comforting, and gooey.",
      type: "Baking",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Landscape Painting",
      description: "Oil painting of mountain scenery at sunset",
      type: "Traditional Art",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sourdough Bread",
      description: "Artisan bread with 7-day fermentation process",
      type: "Baking",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Character Design",
      description: "Fantasy character concept for game development",
      type: "Digital Art",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const futurePlans = [
    // {
    //   title: "Build ",
    //   description: "Building an AI-powered design tool for developers",
    //   timeline: "2025",
    // },
    // {
    //   title: "Write Technical Book",
    //   description: "Publishing a book about modern web development practices",
    //   timeline: "2026",
    // },
    // {
    //   title: "Global Speaking Tour",
    //   description: "Speaking at tech conferences across 5 continents",
    //   timeline: "2025-2026",
    // },
    // {
    //   title: "Open Source Foundation",
    //   description: "Establishing a foundation to support open source projects",
    //   timeline: "2027",
    // },
  ]

  const renderProfessionalPage = () => (
    <div className="min-h-screen">
      {/* Home Subsection - Left Aligned */}
      <div className="min-h-screen flex items-center px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="text-5xl md:text-7xl font-bold mb-12">
              <TypewriterEffect
                text="Hi, I'm Jenna Leigh"
                className="bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Software Engineering Student
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-2xl">
              Passionate about helping my community and using my developer skills to make an impact. I thrive on challenges that push me to think differently and learn continuously.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#A855F7] hover:from-[#4C1D95] hover:via-[#7C3AED] hover:to-[#A855F7] transform hover:rotate-1 hover:shadow-2xl transition-all duration-300 shadow-lg w-fit px-10 py-5 cursor-pointer"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#4C1D95] dark:border-[#60A5FA] hover:bg-gradient-to-r hover:from-[#EDE9FE] hover:to-[#4C1D95]/10 dark:hover:from-[#1E40AF]/20 dark:hover:to-[#60A5FA]/20 transform hover:-rotate-1 hover:shadow-lg transition-all duration-300 bg-transparent w-fit px-10 py-5 cursor-pointer"
                onClick={() => navigateToPage("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Subsection - Creative Card Layout */}
      <div className="min-h-screen py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollTypewriter
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Story Card */}
            <div className="lg:col-span-2">
              <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent">
                      My Journey
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    I’m a rising junior studying Computer Science, set to graduate in Spring 2027. After spending my first two years exploring Engineering, 
                    I discovered that my true passion and strengths lie in Computer Science. 
                    Since then, I’ve been dedicated to turning my ideas into reality, with a dream to build projects that positively impact thousands of people. 
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    I specialize in backend development using Java but also have a strong appreciation for clean, thoughtful visual design. 
                    Writing clean, maintainable code is important to me, and I’m always eager to stay current with industry trends and best practices.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                      My approach combines technical expertise with creative problem-solving, always keeping the user
                      experience at the forefront of every project. I enjoy collaborating with diverse teams and
                      believe that the best solutions come from combining different perspectives and expertise.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                    When I’m not coding, you’ll find me baking delicious treats, getting lost in a good book, 
                    and playing piano. I also cherish spending time with friends over good food and great conversation, 
                    whether it’s trying out new restaurants or revisiting old favorites. 
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats & Highlights - Repositioned */}
            <div className="lg:col-span-1 space-y-4 flex flex-col justify-center">
              <div className="relative mb-8">
                <div className="w-52 h-52 mx-auto bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#A855F7] rounded-full animate-pulse-slow opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-44 h-44 bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] rounded-full animate-spin-slow opacity-40"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=180&width=180"
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-2 border-white dark:border-slate-800"
                  />
                </div>
              </div>

              <Card className="bg-gradient-to-br from-[#4C1D95]/10 to-[#7C3AED]/10 backdrop-blur-sm border-[#4C1D95]/30 dark:border-[#60A5FA]/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#4C1D95] dark:text-[#b185db] mb-2">1+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#7C3AED]/10 to-[#A855F7]/10 backdrop-blur-sm border-[#7C3AED]/30 dark:border-[#60A5FA]/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#7C3AED] dark:text-[#b185db] mb-2">7+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#A855F7]/10 to-[#4C1D95]/10 backdrop-blur-sm border-[#A855F7]/30 dark:border-[#60A5FA]/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#A855F7] dark:text-[#b185db] mb-2">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Algorithm Problems Solved</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Subsection - Centered */}
      <div className="min-h-screen py-20 px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollTypewriter
            text="Experience"
            className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 group hover:border-[#A855F7]/50 dark:hover:border-[#4C1D95]/50 hover:-translate-y-1"
              >
                <CardHeader className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="text-left">
                      <CardTitle className="text-xl bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent mb-3">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-700 dark:text-[#b185db]">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-4 md:mt-0 w-fit border-[#4C1D95] dark:border-[#60A5FA] text-[#4C1D95] dark:text-[#b185db] bg-[#EDE9FE] dark:bg-[#1E40AF]/20 px-6 py-3"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-left">{exp.description}</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-[#EDE9FE] dark:bg-[#1E40AF]/30 text-[#4C1D95] dark:text-[#b185db] px-4 py-2 hover:shadow-md hover:shadow-[#4C1D95]/30 transition-all duration-300 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Subsection - Centered */}
      <div className="min-h-screen py-20 px-12">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollTypewriter
            text="Projects"
            className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 group hover:border-[#A855F7]/50 dark:hover:border-[#4C1D95]/50 overflow-hidden hover:rotate-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent group-hover:from-[#7C3AED] group-hover:to-[#A855F7] transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-left">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#EDE9FE] dark:bg-[#1E40AF]/30 text-[#4C1D95] dark:text-[#b185db] text-xs px-4 py-2 border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-[#EDE9FE] dark:hover:bg-[#1E40AF]/20 bg-transparent px-6 py-3 hover:shadow-lg hover:shadow-[#4C1D95]/30 transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-[#EDE9FE] dark:hover:bg-[#1E40AF]/20 bg-transparent px-6 py-3 hover:shadow-lg hover:shadow-[#4C1D95]/30 transition-all duration-300 cursor-pointer"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section - Organized with Icons in Cards */}
      <div className="min-h-screen py-20 px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollTypewriter
            text="Skills"
            className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />

          {/* Animated Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#4C1D95]/30 to-transparent"
              style={{
                left: "20%",
                top: "20%",
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            />
            <div
              className="absolute w-px h-24 bg-gradient-to-b from-transparent via-[#7C3AED]/30 to-transparent"
              style={{
                right: "25%",
                top: "40%",
                transform: `translateY(${scrollY * -0.08}px)`,
              }}
            />
            <div
              className="absolute w-24 h-px bg-gradient-to-r from-transparent via-[#A855F7]/30 to-transparent"
              style={{
                left: "30%",
                bottom: "30%",
                transform: `translateX(${scrollY * 0.05}px)`,
              }}
            />
          </div>

          <div className="space-y-16">
            {/* Programming Languages */}
            <Card
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent mb-6">
                      Programming Languages
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-[#4C1D95]/10 to-[#7C3AED]/10 border border-[#4C1D95]/30 dark:border-[#60A5FA]/30 rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-[#b185db] hover:shadow-md hover:shadow-[#4C1D95]/20 dark:hover:shadow-[#60A5FA]/20 hover:bg-gradient-to-r hover:from-[#4C1D95]/20 hover:to-[#7C3AED]/20 dark:hover:from-[#60A5FA]/20 dark:hover:to-[#93C5FD]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Software & Tools */}
            <Card
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-8 flex-row-reverse">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent mb-6 text-right">
                      Software & Tools
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-end">
                      {skills.software.map((software, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-[#7C3AED]/10 to-[#A855F7]/10 border border-[#7C3AED]/30 dark:border-[#60A5FA]/30 rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-[#b185db] hover:shadow-md hover:shadow-[#7C3AED]/20 dark:hover:shadow-[#60A5FA]/20 hover:bg-gradient-to-r hover:from-[#7C3AED]/20 hover:to-[#A855F7]/20 dark:hover:from-[#60A5FA]/20 dark:hover:to-[#93C5FD]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                        >
                          {software}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Microcontrollers */}
            <Card
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#A855F7] to-[#4C1D95] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent mb-6">
                      Microcontrollers
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.microcontrollers.map((micro, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-[#A855F7]/10 to-[#4C1D95]/10 border border-[#A855F7]/30 dark:border-[#60A5FA]/30 rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-[#b185db] hover:shadow-md hover:shadow-[#A855F7]/20 dark:hover:shadow-[#60A5FA]/20 hover:bg-gradient-to-r hover:from-[#A855F7]/20 hover:to-[#4C1D95]/20 dark:hover:from-[#60A5FA]/20 dark:hover:to-[#93C5FD]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                        >
                          {micro}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Journey Timeline - Centered */}
      <div className="min-h-screen py-20 px-12">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollTypewriter
            text="My Journey"
            className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#4C1D95] to-[#A855F7] h-full z-0"></div>

            {journeyEvents.map((yearData, yearIndex) => (
              <div key={yearData.year} className="mb-20 relative z-10">
                {/* Year Badge */}
                <div className="flex justify-center mb-12">
                  <div className="bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg z-20 relative">
                    {yearData.year}
                  </div>
                </div>

                {/* Events */}
                {yearData.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`flex items-center mb-16 ${event.side === "left" ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className="w-5/12">
                      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 hover:border-[#7C3AED] hover:-translate-y-1 hover:rotate-1">
                        <CardHeader className="pb-6">
                          <CardTitle className="text-lg bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent">
                            {event.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-20 relative"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Personal Section */}
      <div className="py-20 px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-[#c77dff]/5 via-[#7C3AED]/5 to-[#4C1D95]/5 backdrop-blur-sm border-2 border-[#c77dff]/30 dark:border-[#c77dff]/40 hover:shadow-2xl hover:shadow-[#c77dff]/30 transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c77dff]/10 via-transparent to-[#4C1D95]/10 opacity-50"></div>
            <CardContent className="p-16 relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <Star className="w-16 h-16 text-[#c77dff] animate-pulse" />
                  <div className="absolute inset-0 w-16 h-16 bg-[#c77dff]/20 rounded-full animate-ping"></div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#c77dff] to-[#4C1D95] bg-clip-text text-transparent">
                Want to know more about me?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
                Discover my hobbies, interests, and creative work in the personal section. Get to know the person behind the code!
              </p>
              <Button
                onClick={() => navigateToPage("personal")}
                className="bg-gradient-to-r from-[#c77dff] via-[#7C3AED] to-[#4C1D95] hover:from-[#c77dff] hover:via-[#7C3AED] hover:to-[#4C1D95] transform hover:rotate-1 hover:shadow-2xl hover:shadow-[#c77dff]/40 transition-all duration-300 shadow-lg px-12 py-6 text-lg cursor-pointer group"
              >
                <Heart className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Explore Personal
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderPersonalPage = () => (
    <div className="min-h-screen py-20 px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollTypewriter
          text="Personal"
          className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
        />

        {/* Hobbies Section */}
        <div className="mb-20">
          <ScrollTypewriter
            text="Hobbies & Interests"
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/30 dark:border-[#60A5FA]/30 hover:border-[#4C1D95] hover:border-2 dark:hover:border-[#60A5FA] dark:hover:border-2 transition-all duration-300 overflow-hidden group h-80 hover:shadow-xl hover:shadow-[#4C1D95]/20 hover:-translate-y-1 hover:rotate-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hobby.image || "/placeholder.svg"}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#4C1D95] dark:text-[#b185db] mb-2">{hobby.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Entertainment Section */}
        <div className="mb-20">
          <ScrollTypewriter
            text="Movies & Shows"
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainment.map((item, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/30 dark:border-[#60A5FA]/30 hover:border-[#4C1D95] hover:border-2 dark:hover:border-[#60A5FA] dark:hover:border-2 transition-all duration-300 overflow-hidden group h-80 hover:shadow-xl hover:shadow-[#4C1D95]/20 hover:-translate-y-1 hover:rotate-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#4C1D95] text-white">
                      {item.type === "Movie" ? "🎬" : "📺"} {item.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#4C1D95] dark:text-[#b185db] mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{item.description}</p>
                  <Badge variant="secondary" className="bg-[#EDE9FE] text-[#4C1D95] text-xs">
                    {item.genre}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Art & Baking Portfolio */}
        <div className="mb-20">
          <ScrollTypewriter
            text="Creative Portfolio"
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artPortfolio.map((item, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/30 dark:border-[#60A5FA]/30 hover:border-[#4C1D95] hover:border-2 dark:hover:border-[#60A5FA] dark:hover:border-2 transition-all duration-300 overflow-hidden group h-80 hover:shadow-xl hover:shadow-[#4C1D95]/20 hover:-translate-y-1 hover:rotate-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#7C3AED] text-white text-xs">{item.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#4C1D95] dark:text-[#b185db] mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

{/* 
        <div className="mb-20">
          <ScrollTypewriter
            text="Future Plans"
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
          />
          <div className="grid md:grid-cols-2 gap-10">
            {futurePlans.map((plan, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-[#4C1D95]/50 dark:border-[#60A5FA]/50 hover:shadow-xl hover:shadow-[#4C1D95]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent">
                      {plan.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="border-[#4C1D95] dark:border-[#60A5FA] text-[#4C1D95] dark:text-[#b185db] bg-[#EDE9FE] dark:bg-[#1E40AF]/20 px-4 py-2"
                    >
                      {plan.timeline}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Contact Prompt */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-[#c77dff]/5 via-[#7C3AED]/5 to-[#4C1D95]/5 backdrop-blur-sm border-2 border-[#c77dff]/30 dark:border-[#c77dff]/40 hover:shadow-2xl hover:shadow-[#c77dff]/30 transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c77dff]/10 via-transparent to-[#4C1D95]/10 opacity-50"></div>
              <CardContent className="p-16 relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <Send className="w-16 h-16 text-[#c77dff] animate-pulse" />
                    <div className="absolute inset-0 w-16 h-16 bg-[#c77dff]/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#c77dff] to-[#4C1D95] bg-clip-text text-transparent">
                  Contact me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
                  I'm excited to get to know you!
                </p>
                <Button
                  onClick={() => navigateToPage("contact")}
                  className="bg-gradient-to-r from-[#c77dff] via-[#7C3AED] to-[#4C1D95] hover:from-[#c77dff] hover:via-[#7C3AED] hover:to-[#4C1D95] transform hover:rotate-1 hover:shadow-2xl hover:shadow-[#c77dff]/40 transition-all duration-300 shadow-lg px-12 py-6 text-lg cursor-pointer group"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Get In Touch
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

const renderContactPage = () => (
  <div className="min-h-screen py-20 px-12 flex items-center justify-center">
    <div className="max-w-2xl mx-auto text-center w-full">
      <ScrollTypewriter
        text="Contact Me"
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-[#dac3e8] to-[#613dc1] bg-clip-text text-transparent"
      />
      
      <div className="space-y-12">
        {/* Email */}
        <div className="group">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Email</p>
          <a 
            href="mailto:jennaleigh311@gmail.com"
            className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 hover:text-[#4C1D95] dark:hover:text-[#b185db] transition-colors duration-300 cursor-pointer"
          >
            jennaleigh311@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"></div>

        {/* Social Links */}
        <div className="group">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">Connect</p>
          <div className="flex gap-8 justify-center">
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-[#4C1D95] dark:hover:text-[#b185db] transition-colors duration-300 cursor-pointer"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-[#4C1D95] dark:hover:text-[#b185db] transition-colors duration-300 cursor-pointer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"></div>

        {/* Status */}
        <div className="group">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Status</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">Available for new projects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500 relative overflow-x-hidden">
      <ParticleBackground isDark={isDark} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-[#4C1D95]/50 dark:border-[#60A5FA]/50 h-14">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-start items-center h-14">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                Jenna's Portfolio
              </h1>
            </div>

            {/* Desktop Menu - Better spacing */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.id)}
                    className={`flex items-center space-x-2 px-3 py-1 transition-all duration-300 text-sm cursor-pointer ${
                      currentPage === item.id
                        ? "text-[#4C1D95] dark:text-[#b185db] font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#4C1D95] dark:hover:text-[#b185db]"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                )
              })}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="hover:rotate-12 transition-transform duration-300 hover:bg-[#EDE9FE] dark:hover:bg-[#1E40AF]/50 ml-6 cursor-pointer"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-4 ml-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="hover:rotate-12 transition-transform duration-300 hover:bg-[#EDE9FE] dark:hover:bg-[#1E40AF]/50 cursor-pointer"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-[#4C1D95]/50 dark:border-[#60A5FA]/50">
            <div className="px-8 py-8 space-y-4">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-2 transition-all duration-300 text-sm cursor-pointer ${
                      currentPage === item.id
                        ? "text-[#4C1D95] dark:text-[#b185db] font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#4C1D95] dark:hover:text-[#b185db]"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10">
        {currentPage === "professional" && renderProfessionalPage()}
        {currentPage === "personal" && renderPersonalPage()}
        {currentPage === "contact" && renderContactPage()}
      </main>
    </div>
  )
}
