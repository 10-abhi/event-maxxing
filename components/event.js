'use client'

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ButtonForLanding } from "./button";
import Image from "next/image";

const EventsSection = () => {
  const [currentId, setCurrentId] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const events = [
    {
      id: 1,
      title: "AI Webflow Challlenge",
      date: "June 15, 2024",
      description: "Participate in our AI Webflow Challenge, a coding competition where developers, designers and students can showcase their skills and compete for prizes. The challenge is open to individuals and teams of up to 4 people.",
      imageUrl: "/events/aiWebflowChallenge.jpg",
    },
    {
      id: 2,
      title: "BizVision 2024",
      date: "July 20-22, 2024",
      description: "Showcase innovative ideas and concepts through presentations, product demos, and exhibitions. A unique opportunity to network with industry leaders and like-minded professionals.",
      imageUrl: "/events/bizVision.jpg",
    },
    {
      id: 3,
      title: "Crafty Craft",
      date: "August 5, 2024",
      description: "Join us for a free event where industry experts and researchers will share their latest research in AI, robotics, and machine learning. This event is perfect for students, professionals, and anyone interested in refining their research skills.",
      imageUrl: "/events/craftyCraft.jpg",
    },
    {
      id: 4,
      title: "Project Prism",
      date: "August 5, 2024",
      description: "Explore the world of AI and robotics with our panel of industry experts and researchers. This event is perfect for students, professionals, and anyone interested in learning about the latest advancements and innovations in the field.",
      imageUrl: "/events/projectPrism.jpg",
    },
    {
      id: 5,
      title: "Prompt Tale",
      date: "August 5, 2024",
      description: "Leverage advanced meta prompt techniques to craft compelling narrative text for an AI-driven image generation model, enabling the creation of high-quality visual content.",
      imageUrl: "/events/promptTale.jpg",
    },
    {
      id: 6,
      title: "TCS Placement Talk",
      date: "August 5, 2024",
      description: "Get an opportunity to learn more about Tata Consultancy Services (TCS) and their recruitment process. Interact with the HRs and get tips on how to crack the placement drive.",
      imageUrl: "/events/tcsPlacementTalk.jpg",
    }
  ];

  const prevSlide = () => {
    setCurrentId((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentId((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="min-h-screen w-full bg-black text-white px-4 py-8 md:px-8 lg:px-16">
      {/* Header */}
      <div className="flex justify-center text-4xl font-extrabold mb-12">
        <span className="text-white">Eve</span>
        <span className="text-violet-500">nts</span>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-violet-900/50 p-2 rounded-full hover:bg-violet-900 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-violet-900/50 p-2 rounded-full hover:bg-violet-900 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Event Card */}
          <div
            className="relative overflow-hidden rounded-xl border-2 border-violet-900 bg-black/50 backdrop-blur-sm"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative flex justify-center">
              <Image
                // className="w-96 object-cover transition-transform duration-500 hover:scale-105"
                src={events[currentId].imageUrl}
                width={320}
                height={320}
                alt={events[currentId].title}
              />

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {events.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentId ? "bg-violet-500 w-4" : "bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-violet-400">
                {events[currentId].title}
              </h3>
              <p className="text-gray-300 mt-4 text-lg">
                {events[currentId].description}
              </p>
              <p className="text-violet-300 mt-4 font-medium">
                Date: {events[currentId].date}
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-8">
          <ButtonForLanding />
        </div>
      </div>
    </div>
  );
};

export default EventsSection;