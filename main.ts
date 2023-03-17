function DrawBinary (column: number, decimal: number) {
    if (decimal == 9) {
        led.plot(column, 4)
        led.unplot(column, 3)
        led.unplot(column, 2)
        led.plot(column, 1)
    } else if (decimal == 8) {
        led.unplot(column, 4)
        led.unplot(column, 3)
        led.unplot(column, 2)
        led.plot(column, 1)
    } else if (decimal == 7) {
        led.plot(column, 4)
        led.plot(column, 3)
        led.plot(column, 2)
        led.unplot(column, 1)
    } else if (decimal == 6) {
        led.unplot(column, 4)
        led.plot(column, 3)
        led.plot(column, 2)
        led.unplot(column, 1)
    } else if (decimal == 5) {
        led.plot(column, 4)
        led.unplot(column, 3)
        led.plot(column, 2)
        led.unplot(column, 1)
    } else if (decimal == 4) {
        led.unplot(column, 4)
        led.unplot(column, 3)
        led.plot(column, 2)
        led.unplot(column, 1)
    } else if (decimal == 3) {
        led.plot(column, 4)
        led.plot(column, 3)
        led.unplot(column, 2)
        led.unplot(column, 1)
    } else if (decimal == 2) {
        led.unplot(column, 4)
        led.plot(column, 3)
        led.unplot(column, 2)
        led.unplot(column, 1)
    } else if (decimal == 1) {
        led.plot(column, 4)
        led.unplot(column, 3)
        led.unplot(column, 2)
        led.unplot(column, 1)
    } else {
        led.unplot(column, 4)
        led.unplot(column, 3)
        led.unplot(column, 2)
        led.unplot(column, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
})
let elapsed = 0
let Start = 0
Start = input.runningTime()
basic.forever(function () {
    elapsed = Math.idiv(input.runningTime() - Start, 100)
    DrawBinary(4, elapsed % 10)
    elapsed = Math.floor(elapsed / 10)
    DrawBinary(2, elapsed % 10)
    elapsed = Math.floor(elapsed / 10)
    DrawBinary(1, elapsed % 10)
    elapsed = Math.floor(elapsed / 10)
    DrawBinary(0, elapsed % 10)
})
