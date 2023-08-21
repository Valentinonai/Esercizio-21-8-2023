class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static confronto(User1, User2) {
    console.log(
      User1.age > User2.age
        ? `${User1.firstName} è più vecchio di ${User2.firstName}`
        : User1.age < User2.age
        ? `${User1.firstName} è più giovane di ${User2.firstName}`
        : `${User1.firstName} e ${User2.firstName} hanno la stessa età`
    );
  }
}

const utente1 = new User("Mario", "Rossi", 40, "Italia");
const utente2 = new User("Giovanni", "Bianchi", 28, "Spagna");
const utente3 = new User("Maria", "Verdi", 57, "Francia");
const utente4 = new User("Pietro", "Gialli", 40, "Germania");

console.log("Utente1 e Utente2");
User.confronto(utente1, utente2);
console.log("Utente2 e Utente3");
User.confronto(utente2, utente3);
console.log("Utente3 e Utente4");
User.confronto(utente3, utente4);
console.log("Utente1 e Utente4");
User.confronto(utente1, utente4);
