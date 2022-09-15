input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    music.playMelody("C5 B C5 G F G D C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("yas")
    music.playMelody("B B D D C5 C5 C C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    music.playMelody("G A B C5 A G F E ", 120)
})
music.playMelody("C5 B C5 A C5 G C5 F ", 120)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
