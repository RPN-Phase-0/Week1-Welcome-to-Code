var input = 5
var output = ""

for (var row = 1; row <= input; row++) {
    for (var col = 1; col <= row; col++) {
        output += "*"
    }
    output += "\n"
}

console.log(output)
