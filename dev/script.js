function scramble(s){
    const base64 = Buffer.from(s).toString('base64')
    const halfLen = Math.floor(base64.length / 2)
    return base64.slice(0, halfLen).split("").reverse().join("") + base64.slice(halfLen)
}

const input = process.argv[2]
if(input === undefined) throw new Error("Missing argument")
console.log(input + " => " + scramble(input))