/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sparkle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("small", "./Sparkle/costumes/small.png", { x: 2, y: 2 }),
      new Costume("medium", "./Sparkle/costumes/medium.png", { x: 6, y: 6 }),
      new Costume("big", "./Sparkle/costumes/big.png", { x: 10, y: 10 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMenu() {
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    yield* this.wait(1.5);
    this.moveAhead();
    while (!(this.compare(this.stage.vars.userEarnmedal, 0) > 0)) {
      yield;
    }
    while (!(this.toString(this.stage.vars.birdDie) === "false")) {
      this.goto(this.random(-86, -42), this.random(-30, 14));
      this.visible = true;
      this.costume = "small";
      yield* this.wait(0.075);
      this.costume = "medium";
      yield* this.wait(0.075);
      this.costume = "big";
      yield* this.wait(0.075);
      this.costume = "medium";
      yield* this.wait(0.075);
      this.costume = "small";
      yield* this.wait(0.075);
      this.visible = false;
      yield;
    }
  }
}
