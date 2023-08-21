const array = [];
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static owner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
  static verificaowner(pet1) {
    for (let i = 0; i <= array.length - 2; i++) {
      if (array[i].ownerName === pet1.ownerName) return true;
    }
    return false;
  }
}

const save = (event) => {
  event.preventDefault();
  array.push(
    new Pet(
      event.target.elements[0].value,
      event.target.elements[1].value,
      event.target.elements[2].value,
      event.target.elements[3].value
    )
  );
  const li = document.createElement("li");
  li.innerText = `petName: ${array[array.length - 1].petName}, ownerName: ${
    array[array.length - 1].ownerName
  }, species: ${array[array.length - 1].species}, breed: ${array[array.length - 1].breed}`;
  document.getElementById("lista").appendChild(li);
  if (array.length - 1 > 0) {
    console.log(`Il prorpietario di ${
      array[array.length - 1].petName
    } è proprietario di altri animali? ${Pet.verificaowner(array[array.length - 1])}
        `);
  }
};

const confrontoOwner = () => {
  console.log(`${array[0].petName} e ${array[2].petName} hanno lo stesso owner? ${Pet.owner(array[0], array[2])}
    `);
};
