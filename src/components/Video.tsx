import { Card } from "./ui/card";

export function Video() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-12 font-['Space_Grotesk']">
          Here comes the introduction !
        </h2>
        <Card className="bg-[#26363b] border-none rounded-lg overflow-hidden">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LX_4HSqMX5g?si=4ATtcgkw6NgKgVrB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
}