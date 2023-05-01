/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Copyleft extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("copyleft", "./Copyleft/costumes/copyleft.png", {
        x: 480,
        y: -310
      })
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
    this.goto(0, 0);
    this.costume = "creationrights";
    this.moveBehind(10);
    this.visible = true;
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
