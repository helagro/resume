function scramble(s){
    const base64 = Buffer.from(s).toString('base64')
    const splitI = Math.floor(base64.length / 2.5)
    return base64.slice(0, splitI).split("").reverse().join("") + base64.slice(splitI)
}

const input = process.argv[2]
if(input === undefined) throw new Error("Missing argument")
console.log(input + " => " + scramble(input))