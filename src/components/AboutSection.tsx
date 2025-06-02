import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4 font-montserrat">
              О нас
            </h2>
            <p className="text-xl text-amber-700">
              Традиции грузинского гостеприимства
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-xl border-orange-200 bg-gradient-to-br from-white to-yellow-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 font-montserrat">
                    Наша история
                  </h3>
                  <p className="text-amber-800 mb-4 leading-relaxed">
                    "Гамарджоба генацвале" — это не просто кафе, это дом, где
                    встречаются друзья и семья. Мы открыли наши двери с одной
                    простой миссией: принести аутентичный вкус Грузии в сердце
                    города.
                  </p>
                  <p className="text-amber-800 mb-4 leading-relaxed">
                    Каждое блюдо готовится по традиционным рецептам,
                    передаваемым из поколения в поколение. Мы используем только
                    свежие ингредиенты и специи, привезенные прямо из Грузии.
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    Наша кухня — это место, где рождается магия грузинской
                    кулинарии, а наш зал — пространство для создания
                    незабываемых моментов.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-orange-200 bg-gradient-to-br from-white to-red-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">
                    🍷 Традиции
                  </h4>
                  <p className="text-amber-800">
                    Следуем древним грузинским традициям приготовления блюд
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-orange-200 bg-gradient-to-br from-white to-red-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">
                    🌿 Качество
                  </h4>
                  <p className="text-amber-800">
                    Используем только свежие продукты и натуральные специи
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-orange-200 bg-gradient-to-br from-white to-red-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">
                    ❤️ Гостеприимство
                  </h4>
                  <p className="text-amber-800">
                    Каждый гость для нас — дорогой друг и член семьи
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
