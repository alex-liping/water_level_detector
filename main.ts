led.enable(false)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 550) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
    }
})
