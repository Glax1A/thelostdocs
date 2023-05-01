/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Version extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("version", "./Version/costumes/version.png", { x: 30, y: 12 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.pixelate = 100;
    this.goto(220, -169);
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
