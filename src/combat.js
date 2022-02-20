function Combat(){
    if (!(this instanceof Combat)) {
        return new Combat();
    }

}

Combat.prototype.round = 0;

module.exports = Combat;