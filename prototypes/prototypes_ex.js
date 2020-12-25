const animals = {
    say(){
        console.log(this.name, this.voice)
    }
}
const dog = {
    name: "dog",
    voice: "woof",
};
Object.setPrototypeOf(dog,animals);
const cat = {
    name: "cat",
    voice: "meaw",
}
Object.setPrototypeOf(cat,animals);


dog.say();
cat.say();