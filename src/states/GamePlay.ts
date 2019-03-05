import { GameAssetKeys } from "/assets"

export class GamePlay extends Phaser.State
{
    public static key = "GamePlay"
    public key = GamePlay.key

    map: Phaser.Tilemap
    layer: Phaser.TilemapLayer
    player: Phaser.Sprite
    facing: 'left' | 'right' | 'idle' = 'left'
    jumpTimer = 0
    cursors: Phaser.CursorKeys
    jumpButton: Phaser.Key
    bg: Phaser.TileSprite

    init()
    {
        console.log("State", this.key)
    }

    create()
    {
        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game.stage.backgroundColor = '#000000'

        this.bg = this.game.add.tileSprite(0, 0, 800, 600, GameAssetKeys.background2)
        this.bg.fixedToCamera = true

        this.map = this.game.add.tilemap('level1')

        this.map.addTilesetImage(GameAssetKeys["tiles-1"])

        this.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51])

        this.layer = this.map.createLayer('Tile Layer 1')

        //  Un-comment this on to see the collision tiles
        // layer.debug = true

        this.layer.resizeWorld()

        this.game.physics.arcade.gravity.y = 250

        this.player = this.game.add.sprite(32, 32, GameAssetKeys.dude)
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE)

        this.player.body.bounce.y = 0.2
        this.player.body.collideWorldBounds = true
        this.player.body.setSize(20, 32, 5, 16)

        this.player.animations.add('left', [0, 1, 2, 3], 10, true)
        this.player.animations.add('turn', [4], 20, true)
        this.player.animations.add('right', [5, 6, 7, 8], 10, true)

        this.game.camera.follow(this.player)

        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    }

    update()
    {
        const { game, player, cursors, jumpButton, layer } = this

        game.physics.arcade.collide(player, layer)

        player.body.velocity.x = 0

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -150

            if (this.facing != 'left')
            {
                player.animations.play('left')
                this.facing = 'left'
            }
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 150

            if (this.facing != 'right')
            {
                player.animations.play('right')
                this.facing = 'right'
            }
        }
        else
        {
            if (this.facing != "idle")
            {
                player.animations.stop()

                if (this.facing == 'left')
                {
                    player.frame = 0
                }
                else
                {
                    player.frame = 5
                }

                this.facing = 'idle'
            }
        }

        if (jumpButton.isDown && player.body.onFloor() && game.time.now > this.jumpTimer)
        {
            player.body.velocity.y = -250
            this.jumpTimer = game.time.now + 750
        }

    }

    render()
    {
        // game.debug.text(game.time.physicsElapsed, 32, 32)
        // game.debug.body(player)
        // game.debug.bodyInfo(player, 16, 24)
    }
}
