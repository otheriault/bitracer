input.onButtonPressed(Button.A, function () {
    racer.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    racer.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    speed += -100
})
let score = 0
let racer: game.LedSprite = null
racer = game.createSprite(2, 4)
let speed = 800
let obstacles: game.LedSprite[] = []
while (game.isRunning()) {
    obstacles.push(game.createSprite(randint(0, 4), 0))
    basic.pause(speed)
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.Y, 1)
        if (obstacle.isTouching(racer)) {
            game.setScore(score)
            game.gameOver()
        }
        if (obstacle.get(LedSpriteProperty.Y) == 4) {
            score += 1
            obstacle.delete()
        }
    }
    basic.pause(speed)
}
