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
            <video className="w-full h-full" controls>
            <source src="assets/prabin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </Card>
      </div>
    </section>
  );
}