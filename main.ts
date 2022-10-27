let e = 0
input.onButtonPressed(Button.A, function () {
    e = 0
    while (e <= 4) {
        led.plot(e, 0)
        basic.pause(200)
        basic.clearScreen()
        e += 1
    }
})
basic.forever(function () {
	
})
