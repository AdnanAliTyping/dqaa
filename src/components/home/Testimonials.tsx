
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "The integration of Hifz and academic education at DQAA has been transformative for my child. They're not only memorizing the Quran but excelling in their academic subjects too.",
    author: "Ahmed Rahman",
    role: "Parent of a Hifz Program Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    quote: "Becoming quadrilingual has opened up so many opportunities for me. DQAA's focus on language proficiency alongside Islamic education has been invaluable for my personal and academic growth.",
    author: "Fatima Abdullah",
    role: "Alumna, Class of 2021",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    quote: "The AI and technology integration at DQAA is impressive. I've gained both strong Islamic values and cutting-edge technical skills that have prepared me for the modern world.",
    author: "Mohammed Hassan",
    role: "Current Student, Grade 10",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-dqaa-500 to-dqaa-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Voices of Our Community
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear what our students, alumni, and parents have to say about their experience at DQAA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            setApi={(api) => {
              api?.on("select", () => {
                setCurrent(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white rounded-lg p-8 relative">
                    <QuoteIcon className="h-12 w-12 text-gold-400/20 absolute top-6 left-6" />
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 relative">
                        <blockquote className="text-lg text-gray-700 italic mb-4 relative z-10">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-semibold text-dqaa-600">{testimonial.author}</div>
                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative mr-2 static bg-white/20 hover:bg-white/40 border-none text-white" />
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="relative ml-2 static bg-white/20 hover:bg-white/40 border-none text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
