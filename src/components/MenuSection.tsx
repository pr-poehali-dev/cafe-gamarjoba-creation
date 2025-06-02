import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const menuItems = [
  {
    category: "Горячие блюда",
    dishes: [
      {
        name: "Хачапури по-аджарски",
        price: "890₽",
        description: "Лодочка из теста с сыром, яйцом и сливочным маслом",
      },
      {
        name: "Хинкали",
        price: "80₽/шт",
        description: "Сочные пельмени с мясом и пряными травами",
      },
      {
        name: "Чахохбили",
        price: "1290₽",
        description: "Тушеная курица в томатном соусе с кинзой",
      },
      {
        name: "Мцвади",
        price: "1590₽",
        description: "Шашлык из свинины, маринованный в гранатовом соке",
      },
    ],
  },
  {
    category: "Салаты и закуски",
    dishes: [
      {
        name: "Пхали из шпината",
        price: "490₽",
        description: "Паштет из шпината с орехами и специями",
      },
      {
        name: "Лобио",
        price: "590₽",
        description: "Фасоль в пряном соусе с кинзой",
      },
      {
        name: "Сациви",
        price: "790₽",
        description: "Курица в ореховом соусе с чесноком",
      },
      {
        name: "Бадриджани",
        price: "690₽",
        description: "Рулетики из баклажанов с ореховой начинкой",
      },
    ],
  },
];

const MenuSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-4 font-montserrat">
            Наше меню
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Authentic Georgian cuisine prepared with traditional recipes passed
            down through generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuItems.map((category, index) => (
            <Card key={index} className="shadow-lg border-amber-200">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                <CardTitle className="text-2xl text-amber-900 font-montserrat">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.dishes.map((dish, dishIndex) => (
                    <div
                      key={dishIndex}
                      className="border-b border-amber-100 pb-4 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-amber-900">
                          {dish.name}
                        </h3>
                        <span className="text-lg font-bold text-red-700 ml-4">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
