    
// // class Latte { String name() { return "Латте"; } }
// // class Tea   { String name() { return "Чай"; } }

// // class Cafe {
// //     private final String kind;

// //     Cafe(String kind) {
// //         this.kind = kind;
// //     }

// //     void order() {
// //         if (kind.equals("coffee")) {
// //             Latte l = new Latte();
// //             System.out.println("Готовим и выдаём: " + l.name());
// //         } else if (kind.equals("tea")) {
// //             Tea t = new Tea();
// //             System.out.println("Готовим и выдаём: " + t.name());
// //         } else {
// //             throw new IllegalArgumentException(kind);
// //         }
// //     }
// // }


// class Drink {
//     name() {
//         throw new Error("name() metodi amalga oshirilishi kerak");
//     }
// }

// class Latte extends Drink {
//     name() {
//         return "Латте";
//     }
// }

// class Tea extends Drink {
//     name() {
//         return "Чай";
//     }
// }

// class Cafe {
//     constructor(drink) {
//         this.drink = drink;
//     }

//     order() {
//         console.log("Готовим и выдаём: " + this.drink.name());
//     }
// }

// const coffeeCafe = new Cafe(new Latte());
// coffeeCafe.order();

// const teaCafe = new Cafe(new Tea());
// teaCafe.order();
