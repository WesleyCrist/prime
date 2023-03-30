export default class Calc {

    #num

    constructor(num) {
        if(num < 1 || num > 2147483647) throw new RangeError('Valor fora dos limites') // 32 bits
        this.#num = num
    }

    check = () => {
        let cond = 1
        const cousin = []
        do {
            if((this.#num % cond) === 0) cousin.push(cond)
            cond++
        } while(cond <= this.#num)
        return {
            sent: this.#num,
            divisible: cousin,
            cousin: `${this.#num} is it cousin? ${cousin.length === 2 ? true : false}`
        }
    }
}
