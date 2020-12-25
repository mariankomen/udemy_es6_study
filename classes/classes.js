class Animals{
    constructor(name,voice) {
        this.name = name;
        this.voice = voice;
    }
    say() {
        console.log(this.name, this.voice, this.canFly,this.rozmer)
    }
}

class Bird extends Animals{
    constructor(name,voice,canFly) {
        super(name,voice);
        this.canFly = canFly;
    }
}
class LOL extends Bird{
    constructor(name,voice,canFly,rozmer) {
        super(name,voice,canFly);
        this.rozmer = rozmer;
    }
}

const dog = new LOL("Dog", "Woof" , "Yes","Big")
dog.say();