import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-6 font-montserrat drop-shadow-2xl shadow-black">
          Гамарджоба генацвале
        </h1>
        <p className="text-2xl md:text-3xl text-yellow-300 mb-4 font-open-sans drop-shadow-xl shadow-black">
          Грузинское кафе с душой
        </p>
        <p className="text-lg md:text-xl text-yellow-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg shadow-black">
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
            className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white px-8 py-4 text-lg"
          >
            Забронировать стол
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
