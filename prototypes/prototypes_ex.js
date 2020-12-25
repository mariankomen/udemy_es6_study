function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function (){
    console.log(this.name, this.voice)
}
const dog = new Animal("Dog","Woof")
const cat = new Animal("Cat","Meaw")

dog.say();
cat.say();