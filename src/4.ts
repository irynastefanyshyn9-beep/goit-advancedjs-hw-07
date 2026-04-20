class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person came in. Welcome home!');
    } else {
      console.log('The door is locked. You cannot enter.');
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is now open.');
    } else {
      console.log('Wrong key! The door remains closed.');
    }
  }
}


const key = new Key(); 
const house = new MyHouse(key); 
const person = new Person(key); 

house.openDoor(person.getKey()); 
house.comeIn(person); 

export {};