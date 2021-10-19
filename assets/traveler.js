class Traveler {
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    }

    get food () {
        return this._food;
    }

    set food (food) {
        this._food = food;
    }

    get isHealthy () {
        return this._isHealthy;
    }
    
    set isHealthy (isHealthy) {
        this._isHealthy = isHealthy;
    }

    hunt(){
        this._food += 2
    }

    eat(){
        if (this._food > 0) {
            this._food -= 1;
            this._isHealthy = true;
        } else{
            this._isHealthy = false;
        }
    }
}