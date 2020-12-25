const animals = {
    say(){
        console.log(this.name, 'say', this.voice)
    }
}
const dog = Object.create(animals);
dog.name = "Dog";
dog.voice = "Woof";

dog.say();