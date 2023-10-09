class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
    }
  }
}

const user1 = new User("mattia", "pigola", 30, "milano");

console.log(user1);

const user2 = new User("andrea", "bianchi", 29, "milano");

const confronto = user1.confrontaEta(user2);

console.log(confronto);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  stessaProprietaria(altroPet) {
    return this.ownerName === altroPet.ownerName;
  }
}

const pet1 = new Pet("Fido", "Mattia", "Cane", "Labrador");
const pet2 = new Pet("Pluto", "Pino", "Gatto", "Siberiano");
const pet3 = new Pet("Fuffy", "Mattia", "Gatto", "Persiano");

console.log(pet1.stessaProprietaria(pet2));
console.log(pet1.stessaProprietaria(pet3));

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  const listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${newPet.petName}, Owner Name: ${newPet.ownerName}, Species: ${newPet.species}, Breed: ${newPet.breed}`;
  petList.appendChild(listItem);

  petForm.reset();
});
