import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-6 font-montserrat">
          Гамарджоба генацвале
        </h1>
        <p className="text-2xl md:text-3xl text-amber-800 mb-4 font-open-sans">
          Грузинское кафе с душой
        </p>
        <p className="text-lg md:text-xl text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Добро пожаловать в мир настоящей грузинской кухни! Здесь каждое блюдо
          готовится с любовью, а каждый гость становится частью большой
          грузинской семьи.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 text-lg"
          >
            Посмотреть меню
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-amber-800 text-amber-800 hover:bg-amber-100 px-8 py-4 text-lg"
          >
            Забронировать стол
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
