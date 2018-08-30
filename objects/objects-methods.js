let restaurant = {
    name: 'Indigo',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
       this.guestCount = this.guestCount - partySize
    }
}

// seatParty
// removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(10)
console.log(restaurant.checkAvailability(4))