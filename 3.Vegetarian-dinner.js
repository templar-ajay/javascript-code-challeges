/* use  Array.prototype.filter() to get the vegetarian dishes */

const dishes = [
  { name: "Salad", vegetarian: true },
  { name: "egg curry", vegetarian: false },
  { name: "Rice", vegetarian: true },
  { name: "chicken", vegetarian: false },
];

const vegetarianDishes = dishes.filter((dish) => {
  return dish.vegetarian;
});

console.log(vegetarianDishes);
