function Character(name , streangth , health) {
    this.name = name;
    this.streangth = streangth;
    this.health = health;
    this.elements = new UIElements(this.name)

}
function UIElements (name){
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-make-health`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.progress = document.querySelector(`.${name}-health span`);
}
Character.prototype.attack = function (opponent) {
    if (opponent.health >0) {
        opponent.health -= this.streangth;
        opponent.elements.progress.style.width = `${opponent.health}%`
    }
    else {
        opponent.elements.attackBtn.remove();
        opponent.elements.healthBtn.remove();
        opponent.elements.alive.innerHTML = `${opponent.name} is dead`
    }
}


Character.prototype.makeHealth = function() {

    if (this.health < 100) {
    this.health +=10;
    this.elements.progress.style.width = `${this.health}%`
    
}

}

let naruto = new Character('naruto', 10 , 100);
let sasuke = new Character('sasuke', 5 , 100);

naruto.elements.attackBtn.addEventListener('click', function (){
    naruto.attack(sasuke)    
})
sasuke.elements.attackBtn.addEventListener('click', function (){
    sasuke.attack(naruto)    
})
naruto.elements.healthBtn.addEventListener('click', function(){
    naruto.makeHealth()
})
sasuke.elements.healthBtn.addEventListener('click', function(){
    sasuke.makeHealth()
})