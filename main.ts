let y = 0
let x = 0
let keys = ""
keyboard.startKeyboardService()
let dead_zone = 15
basic.showLeds(`
    . # . . #
    . # . # .
    . # # . .
    . # . # .
    . # . . #
    `)
basic.forever(function () {
    keys = ""
    if (input.buttonIsPressed(Button.B)) {
        keys = "" + keys + keyboard.modifiers(keyboard._Modifier.shift)
    }
    x = input.rotation(Rotation.Roll)
    if (x >= dead_zone) {
        keys = "" + keys + "d"
    } else if (x <= 0 - dead_zone) {
        keys = "" + keys + "a"
    }
    y = input.rotation(Rotation.Pitch)
    if (y >= dead_zone) {
        keys = "" + keys + "s"
    } else if (y <= 0 - dead_zone) {
        keys = "" + keys + "w"
    }
    if (input.buttonIsPressed(Button.A)) {
        keys = "" + keys + " "
    }
    if (keys == "") {
        keyboard.releaseKeys()
    } else {
        keyboard.sendSimultaneousKeys(keys, true)
    }
    basic.pause(15)
})
