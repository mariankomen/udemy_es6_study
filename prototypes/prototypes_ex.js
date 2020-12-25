const animals = {
    say(){
        console.log(this.name, 'say', this.voice)
    }
}

function CreateAnimal(name, voice){
    let result = Object.create(animals);
    result.name = name;
    result.voice = voice;
    return result;
}

const dog = CreateAnimal("Dog", "Woof");
const cat = CreateAnimal("Cat", "meaw");
dog.say();
cat.say();