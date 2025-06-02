import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-montserrat">
              Контакты
            </h2>
            <p className="text-xl text-gray-400">Добро пожаловать в HACHA</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-zinc-800/60 to-black/60 border-zinc-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  📍 Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg mb-4">
                  ул. Мясницкая, 42
                  <br />
                  Москва, 101000
                </p>
                <p className="text-gray-400">
                  Рядом с метро "Чистые пруды"
                  <br />3 минуты пешком от станции
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-800/60 to-black/60 border-zinc-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  🕐 Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-300">
                  <p>Понедельник - Четверг: 18:00 - 24:00</p>
                  <p>Пятница - Суббота: 18:00 - 02:00</p>
                  <p>Воскресенье: 18:00 - 23:00</p>
                </div>
                <p className="text-gray-400 mt-4">Кухня работает до закрытия</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-800/60 to-black/60 border-zinc-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  📞 Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xl mb-2">+7 (495) 987-65-43</p>
                <p className="text-gray-400">
                  Бронирование столов
                  <br />
                  Консультации по меню
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-800/60 to-black/60 border-zinc-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  💌 Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg mb-2">
                  info@hacha-restaurant.ru
                </p>
                <p className="text-gray-400">
                  Корпоративные мероприятия
                  <br />
                  Частные ужины
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold border-none"
            >
              Забронировать стол
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
