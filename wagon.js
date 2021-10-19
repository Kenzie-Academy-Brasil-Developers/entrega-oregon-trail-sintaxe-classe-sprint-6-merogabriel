class Wagon {
    constructor(capacity) {
        this._capacity = capacity
        this._passengers = []
    }

    getAvailableSeatCount() {
        if (this._capacity > this._passengers.length) {
            return this._capacity - this._passengers.length
        } else {
            return 0
        }
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this._passengers.push(traveler)
        } 
    }

    shouldQuarantine() {
        for (let i = 0; i < this._passengers.length; i++){
            const current = this._passengers[i]
            if (current.isHealthy) {
                return true
            }
        }
        return false
    }

    totalFood() {
        let total = 0
        for (let i = 0; i < this._passengers.length; i++){
            const current = this._passengers[i]
            total += current.food
        }
        return total
    }
}