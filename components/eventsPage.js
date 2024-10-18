"use client"
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: "Tech Innovation Summit",
    date: "June 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, New York",
    description: "Join industry leaders for a day of insights into the latest technological trends and innovations. Network with professionals and learn about cutting-edge developments.",
    imageUrl: "/api/placeholder/1200/600",
    price: "$299",
    seats: "150 seats remaining"
  },
  {
    id: 2,
    title: "Annual Music Festival",
    date: "July 20-22, 2024",
    time: "All Day Event",
    location: "Central Park, Manhattan",
    description: "Three days of non-stop music featuring top artists from around the world. Experience amazing performances, food stalls, and art installations.",
    imageUrl: "/api/placeholder/1200/600",
    price: "$199",
    seats: "500 seats remaining"
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    date: "August 5, 2024",
    time: "11:00 AM - 8:00 PM",
    location: "Grand Hotel, Chicago",
    description: "Indulge in culinary delights from top chefs. Featuring wine tasting sessions, cooking demonstrations, and gourmet food sampling.",
    imageUrl: "/api/placeholder/1200/600",
    price: "$149",
    seats: "200 seats remaining"
  }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black py-8">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-4xl font-bold text-violet-600">Events </h1>
        <p className="mt-2 text-lg text-slate-300">
          Discover and register for exciting events happening near you
        </p>
      </div>

      {/* Events List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-slate-900 bg-opacity-60 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative text-white h-64 md:h-auto md:w-1/3">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col h-full">
                    {/* Event Header */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-100 mb-2">
                        {event.title}
                      </h2>
                      
                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow">
                      {event.description}
                    </p>

                    {/* Footer with Price and Register Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {event.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {event.seats}
                        </div>
                      </div>
                      
                      <button 
                        className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-slate-400  rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        onClick={() => window.location.href = `/events/${event.id}`}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button 
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-violet-600 bg-slate-900 border border-violet-600 rounded-md hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-800 transition-colors"
          >
            Load More Events
          </button>
        </div>
      </div>
    </div>
  )
}