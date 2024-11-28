// The instanceof operator is a way to narrow down the type of a variable. It is used to check if an object is an instance of a class.

class Bird {
    fly() {
        console.log('Flying...');
    }
    layEggs() {
        console.log('Laying eggs...');
    }
}

const pet = new Bird();

if (pet instanceof Bird) {
    pet.fly();
} else {
    console.log('pet is not a Bird');
    
}