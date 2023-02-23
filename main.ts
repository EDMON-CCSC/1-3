input.onButtonPressed(Button.A, function () {
    mode = 0
})
input.onButtonPressed(Button.B, function () {
    mode = 1
})
let reading = 0
let mode = 0
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
mode = 0
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    if (true) {
        strip.showRainbow(1, pins.map(
        reading,
        0,
        1023,
        180,
        360
        ))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
