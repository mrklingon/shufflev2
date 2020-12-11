input.onButtonPressed(Button.A, function () {
    Draw = Deck.shift()
    Discard.push(Draw)
    basic.showString("" + (Draw))
})
function Show_Shuffle () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # # #
            # # # . .
            . . # # #
            # # # . .
            . . # # #
            `)
        basic.showLeds(`
            . . # # #
            . . # # #
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.showLeds(`
            . . # # #
            # # # . .
            . . # # #
            # # # . .
            . . # # #
            `)
        basic.showLeds(`
            . . # # #
            . . # # #
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.AB, function () {
    Stack_Deck()
})
input.onButtonPressed(Button.B, function () {
    CreateDeck()
})
input.onGesture(Gesture.Shake, function () {
    Shuffle_Deck()
})
function Stack_Deck () {
    Deck = []
    for (let value of Suits) {
        for (let Face of DCHS) {
            Draw = Chase.shift()
            Deck.push("" + Face + Draw)
            Chase.push(Draw)
        }
    }
    Discard = []
    for (let index = 0; index < randint(1, 32); index++) {
        Draw = Deck.shift()
        Deck.push(Draw)
    }
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Stack_Deck()
})
function CreateDeck () {
    Deck = []
    for (let value2 of Suits) {
        for (let Face2 of Card) {
            Deck.push("" + Face2 + value2)
        }
    }
    Discard = []
}
function Shuffle_Deck () {
    Show_Shuffle()
    CreateDeck()
    for (let index = 0; index < 999; index++) {
        Draw = Deck.removeAt(randint(0, Deck.length - 1))
        Deck.push(Draw)
    }
}
let Deck: string[] = []
let Draw = ""
let Chase: string[] = []
let Discard: string[] = []
let DCHS: string[] = []
let Card: string[] = []
let Suits: string[] = []
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Target)
    basic.showLeds(`
        . # # . .
        # # # # .
        # # # # .
        . # # . .
        # # # # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.House)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
Suits = ["D", "C", "H", "S"]
Card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
DCHS = ["A", "4", "7", "10", "K", "3", "6", "9", "Q", "2", "5", "8", "J"]
CreateDeck()
Discard = []
Chase = Suits
