const animals = [
  {
    dog: "Jack",
    price: 100,
    id: false,
    age: 1,
    content: "Я хороший пес!",
  },
  {
    dog: "Bobby",
    price: 300,
    id: true,
    age: 5,
    content: "Я хороший пес!",
  },
  {
    cat: "Barsik",
    price: 200,
    id: true,
    content: "Я хороший кот!",
  },
  {
    cat: "Chacky",
    price: 500,
    id: false,
    age: 7,
    content: "Я хороший кот!",
  },
];

const result = animals.find(function (item) {
  return item.age < 5;
});
console.log(result);
