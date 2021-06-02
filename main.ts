controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
let myDart: Dart = null
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . 1 2 1 1 1 1 1 2 1 . . . 
    . . . 1 1 2 1 1 1 1 1 2 1 1 . . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . 1 1 1 2 1 1 1 1 1 2 1 1 1 . 
    . . . 1 1 2 1 1 1 1 1 2 1 1 . . 
    . . . . 1 2 1 1 1 1 1 2 1 . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
