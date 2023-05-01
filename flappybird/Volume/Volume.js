/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Volume extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("play", "./Volume/costumes/play.png", { x: 20, y: 15 }),
      new Costume("pause", "./Volume/costumes/pause.png", { x: 20, y: 15 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.gameMute = "false";
    while (true) {
      while (
        !(this.keyPressed("m") || (this.touching("mouse") && this.mouse.down))
      ) {
        yield;
      }
      while (
        !!(this.keyPressed("m") || (this.touching("mouse") && this.mouse.down))
      ) {
        yield;
      }
      if (this.toString(this.stage.vars.gameMute) === "true") {
        this.stage.vars.gameMute = "false";
        this.costume = "play";
      } else {
        this.stage.vars.gameMute = "true";
        this.costume = "pause";
      }
      this.broadcast("game.mute");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.effects.pixelate = 100;
    this.goto(-224, -168);
    this.costume = "play";
    for (let i = 0; i < 25; i++) {
      this.effects.pixelate -= 4;
      yield;
    }
    this.moveAhead();
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 5; i++) {
      this.x -= 2;
      this.y -= 2;
      yield* this.wait(0.015);
      this.x += 2;
      this.y += 2;
      yield* this.wait(0.015);
      yield;
    }
  }
}
