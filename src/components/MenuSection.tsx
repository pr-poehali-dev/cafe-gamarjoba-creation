import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const menuItems = [
  {
    category: "Стейки",
    dishes: [
      {
        name: "Рибай",
        price: "2890₽",
        description: "Мраморная говядина, 300г, идеальная прожарка на гриле",
      },
      {
        name: "Филе-миньон",
        price: "3490₽",
        description: "Нежнейшая вырезка, 250г, тает во рту",
      },
      {
        name: "Нью-Йорк",
        price: "2690₽",
        description: "Классический стейк из толстого края, 280г",
      },
      {
        name: "Томагавк",
        price: "4990₽",
        description:
          "Премиальный стейк на кости, 600г, для настоящих ценителей",
      },
    ],
  },
  {
    category: "Гриль",
    dishes: [
      {
        name: "Бараньи ребрышки",
        price: "1890₽",
        description: "Сочные ребрышки ягненка со средиземноморскими травами",
      },
      {
        name: "Свиная корейка",
        price: "1490₽",
        description: "Нежная свинина на гриле с дымком",
      },
      {
        name: "Цыпленок табака",
        price: "1290₽",
        description: "Курица под прессом с хрустящей корочкой",
      },
      {
        name: "Колбаски чоризо",
        price: "890₽",
        description: "Острые испанские колбаски на углях",
      },
    ],
  },
];

const MenuSection = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 font-montserrat">
            Наше меню
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Премиальное мясо от лучших поставщиков. Каждый кусок - произведение
            искусства.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuItems.map((category, index) => (
            <Card key={index} className="shadow-xl border-zinc-700 bg-zinc-800">
              <CardHeader className="bg-gradient-to-r from-zinc-800 to-zinc-700">
                <CardTitle className="text-2xl text-white font-montserrat">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.dishes.map((dish, dishIndex) => (
                    <div
                      key={dishIndex}
                      className="border-b border-zinc-700 pb-4 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {dish.name}
                        </h3>
                        <span className="text-lg font-bold text-red-500 ml-4">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
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
