led.enable(false)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 550) {
        serial.writeValue("cislo na pinu 1", pins.analogReadPin(AnalogPin.P1))
        basic.pause(500)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
