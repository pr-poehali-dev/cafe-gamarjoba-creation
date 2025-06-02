import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-montserrat tracking-wider">
          HACHA
        </h1>
        <p className="text-2xl md:text-3xl text-red-500 mb-4 font-open-sans tracking-wide">
          МЯСНОЙ РЕСТОРАН
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Лучшие стейки в городе. Идеальная прожарка. Настоящий вкус мяса.
          Откройте для себя мир премиального мяса в атмосфере современного
          стейк-хауса.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg border-none"
          >
            Смотреть меню
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
          >
            Бронь стола
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
