try {
    const counter1 = new Counter()
} catch (error) {
    console.error(error)
}

const Counter = class Counter {

    // this is NOT a valid JS!
    // but works in most modern browsers (eg. Chrome)
    number = 0

    // this won't go to the prototype!
    // this will be internal object property as number above
    inc = () => {
        this.number = this.number + 1
    }

}

const counter2 = new Counter()

console.log(counter2)