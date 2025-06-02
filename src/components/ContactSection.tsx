import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-montserrat">
              Контакты
            </h2>
            <p className="text-xl opacity-90">Приходите к нам в гости!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white/20 to-red-200/20 border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  📍 Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-lg mb-4">
                  ул. Грузинская, 15
                  <br />
                  Москва, 123456
                </p>
                <p className="text-white/80">
                  Рядом с метро "Белорусская"
                  <br />5 минут пешком от станции
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/20 to-red-200/20 border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  🕐 Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-white/90">
                  <p>Понедельник - Четверг: 12:00 - 23:00</p>
                  <p>Пятница - Суббота: 12:00 - 01:00</p>
                  <p>Воскресенье: 12:00 - 22:00</p>
                </div>
                <p className="text-white/80 mt-4">Кухня работает до 22:30</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/20 to-red-200/20 border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  📞 Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-xl mb-2">+7 (495) 123-45-67</p>
                <p className="text-white/80">
                  Бронирование столов
                  <br />
                  Доставка на дом
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/20 to-red-200/20 border-white/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-montserrat">
                  💌 Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-lg mb-2">
                  info@gamarjoba-cafe.ru
                </p>
                <p className="text-white/80">
                  Вопросы и предложения
                  <br />
                  Организация мероприятий
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
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
