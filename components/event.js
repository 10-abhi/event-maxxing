'use client'

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ButtonForLanding } from "./button";

const EventsSection = () => {
  const [currentId, setCurrentId] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const events = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "Event 1",
      description: "This is event 1",
      date: "2024-01-01",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/301",
      title: "Event 2",
      description: "This is event 2",
      date: "2024-01-02",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/302",
      title: "Event 3",
      description: "This is event 3",
      date: "2024-01-03",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/303",
      title: "Event 4",
      description: "This is event 4",
      date: "2023-01-01",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/304",
      title: "Event 5",
      description: "This is event 5",
      date: "2023-01-02",
    },
    {
      id: 6,
      image: "https://picsum.photos/200/305",
      title: "Event 6",
      description: "This is event 6",
      date: "2023-01-03",
    },
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
              <img
                className="w-96 object-cover transition-transform duration-500 hover:scale-105"                src={events[currentId].image}
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