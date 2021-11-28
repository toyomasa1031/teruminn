basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(input.lightLevel() * 3)
    } else {
        music.stopAllSounds()
    }
})
