import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 font-montserrat">
              О ресторане
            </h2>
            <p className="text-xl text-gray-400">Философия идеального мяса</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-xl border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 font-montserrat">
                    Наша история
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    HACHA — это место, где мясо становится искусством. Мы
                    создали пространство для ценителей настоящего вкуса, где
                    каждый стейк готовится с математической точностью и страстью
                    мастера.
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Наши повара работают только с премиальным мясом от
                    проверенных поставщиков. Каждый кусок проходит строгий отбор
                    и выдержку в специальных камерах для достижения идеальной
                    текстуры.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Гриль — наше оружие, огонь — наша стихия. Мы превращаем
                    простые ингредиенты в незабываемые впечатления.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-zinc-700 bg-gradient-to-br from-zinc-800 to-black">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    🔥 Мастерство
                  </h4>
                  <p className="text-gray-300">
                    Повара с 15+ летним опытом работы с премиальным мясом
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-zinc-700 bg-gradient-to-br from-zinc-800 to-black">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    🥩 Качество
                  </h4>
                  <p className="text-gray-300">
                    Мраморная говядина высшего качества с фермерских хозяйств
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-zinc-700 bg-gradient-to-br from-zinc-800 to-black">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    ⚡ Точность
                  </h4>
                  <p className="text-gray-300">
                    Идеальная прожарка благодаря современному оборудованию
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
