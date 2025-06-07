
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Camera, MapPin, Users, Clock, Star } from "lucide-react";

const VirtualCampusTour = () => {
  const [currentTour, setCurrentTour] = useState("overview");

  const tourSections = [
    {
      id: "overview",
      title: "Campus Overview",
      duration: "5 mins",
      highlights: 8,
      description: "Get a bird's eye view of our state-of-the-art campus facilities"
    },
    {
      id: "classrooms",
      title: "Smart Classrooms",
      duration: "3 mins",
      highlights: 12,
      description: "Experience our AI-powered interactive learning environments"
    },
    {
      id: "library",
      title: "Digital Library",
      duration: "4 mins",
      highlights: 15,
      description: "Explore our vast collection of Islamic and academic resources"
    },
    {
      id: "dormitory",
      title: "Student Dormitories",
      duration: "6 mins",
      highlights: 10,
      description: "See our comfortable and modern residential facilities"
    },
    {
      id: "facilities",
      title: "Recreation Facilities",
      duration: "4 mins",
      highlights: 9,
      description: "Discover our sports, dining, and wellness amenities"
    }
  ];

  const liveStats = [
    { label: "Virtual Tours Taken", value: "15,000+", icon: Camera },
    { label: "Campus Facilities", value: "50+", icon: MapPin },
    { label: "Interactive Hotspots", value: "200+", icon: Star },
    { label: "Average Tour Rating", value: "4.9/5", icon: Users }
  ];

  const features = [
    "360° Panoramic Views",
    "Interactive Information Points",
    "Real-time Student Testimonials",
    "Faculty Meet & Greet Sessions",
    "Live Campus Activity Feed",
    "Virtual Reality Compatibility",
    "Multi-language Commentary",
    "Bookmark Favorite Locations"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Immersive Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            Virtual Campus Tour Like No Other Institution
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience DQAA's campus from anywhere in the world with our cutting-edge virtual tour technology. 
            See why students choose us over every competitor.
          </p>
        </div>

        {/* Live Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {liveStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-apple-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Icon className="w-8 h-8 text-dqaa-500 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-dqaa-500 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-dqaa-500">Choose Your Tour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tourSections.map((section) => (
                  <div
                    key={section.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      currentTour === section.id
                        ? 'border-dqaa-500 bg-dqaa-50'
                        : 'border-gray-200 hover:border-dqaa-300'
                    }`}
                    onClick={() => setCurrentTour(section.id)}
                  >
                    <h4 className="font-semibold text-gray-800 mb-1">{section.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{section.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {section.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {section.highlights} highlights
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Tour Display */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-dqaa-500">
                    {tourSections.find(s => s.id === currentTour)?.title}
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Live Tour Available
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-dqaa-100 to-dqaa-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Start Virtual Tour</h3>
                    <p className="text-white/90">Experience DQAA like never before</p>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                    360° Interactive View
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tour Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-dqaa-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-dqaa-500 text-white hover:bg-dqaa-600 flex-1">
                      Start Full Tour Experience
                    </Button>
                    <Button variant="outline" className="text-dqaa-500 border-dqaa-200">
                      VR Mode
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Features */}
        <Card className="mt-12 bg-gradient-to-r from-gray-50 to-dqaa-50">
          <CardContent className="py-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-semibold text-dqaa-500 mb-4">
                Why Our Virtual Tour Beats All Competitors
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.slice(4).map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-dqaa-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VirtualCampusTour;
