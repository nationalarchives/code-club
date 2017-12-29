class Roman {

    set_numerals() {
        this.thousands = this.set_numeral(1000, "M");
        this.nine_hundreds = this.set_numeral(900, "CM");
        this.five_hundreds = this.set_numeral(500, "D");
        this.four_hundreds = this.set_numeral(400, "CD");
        this.hundreds = this.set_numeral(100, "C");
        this.nineties = this.set_numeral(90, "XC");
        this.fifties = this.set_numeral(50, "L");
        this.forties = this.set_numeral(40, "XL");
        this.tens = this.set_numeral(10, "X");
        this.nines = this.set_numeral(9, "IX");
        this.fives = this.set_numeral(5, "V");
        this.fours = this.set_numeral(4, "IV");
        this.ones = this.set_numeral(1, "I");
    }

    set_numeral(integer, numeral) {
        let outputString = '';

        if (this.remaining < integer) return outputString;

        for (let i = 0; i < Math.floor(this.remaining / integer); i++) {
            outputString += numeral;
        }

        this.remaining = (this.remaining % integer);

        return outputString;
    }

    get full_numeral() {
        return this.thousands +
            this.nine_hundreds +
            this.five_hundreds +
            this.four_hundreds +
            this.hundreds +
            this.nineties +
            this.fifties +
            this.forties +
            this.tens +
            this.nines +
            this.fives +
            this.fours +
            this.ones;
    }

    constructor(int) {
        if (isNaN(int)) throw new Error('Bad input');
        this.remaining = int;
        this.set_numerals();
    }
}

module.exports = Roman;