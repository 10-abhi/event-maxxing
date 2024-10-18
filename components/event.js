"use client";
import { Dice1 } from "lucide-react";
import { useEffect, useState } from "react";

const EventsSection = () => {
  const [selected, setSelected] = useState("current");

  const [currentId, setcurrentId] = useState(1);

  const [isHovered, setisHovered] = useState(false);

  const prevSlide = () => {
    setcurrentId(currentId - 1);
  };
  const nextSlide = () => {

    if(currentId == 6){
      setcurrentId(1);
      return;
    }
    setcurrentId(currentId + 1);
 
  };

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      // return () => {
      //   clearInterval(interval);
      // };
    }
    console.log('currentId: '+ currentId);
  }, [isHovered, currentId]);

  const handleMouseOver = () => {
    setisHovered(true);
  };
  const handleMouseLeave = () => {
    setisHovered(false);
  };

  const events = [
    {
      id: 1,
      image:
        "https://picsum.photos/200/301",
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

  return (
    <div className="flex justify-center h-screen w-screen bg-black text-white">
      <div className="h-3/4 w-full rounded-lg p-4 md:p-8">
        <div className="flex  items-center justify-center ">
          <div className="flex w-3/4  flex-row items-center justify-center gap-24 border" onMouseEnter={()=> handleMouseOver()} onMouseLeave={()=> handleMouseLeave()}>
            <img
              className="h-3/4 md:h w-96"
              src={events[currentId]?.image}
              alt={events[currentId]?.title}
            />

            <div className="">
              <h3 className="text-xl font-bold">{events[currentId]?.title}</h3>
              <p className="text-gray-700 mt-2">
                {events[currentId]?.description}
              </p>
              <p className="text-gray-500 mt-4">
                Date: {events[currentId]?.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
