//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(thickness,creaminess,sugar,fancyDesign){
        this.thickness = thickness
        this.creaminess = creaminess
        this.sugar = sugar
        this.fancyDesign = fancyDesign
    }
    Cream(){
        console.log('This bitch creamy')
    }
    Syrup(){
        console.log('Why are you putting syrup in my damned espresso?!')
    }
    Steam(){
        console.log('Stop using my hot water')
    }
}
let gaggia = new EspressoMachine('THICC', 'CREAMY', 'OVERLY SWEET', 'THIS BITCH LOOK LIKE A PICKACHU')