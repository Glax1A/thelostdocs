/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Effects extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("white", "./Effects/costumes/white.png", { x: 480, y: 360 }),
      new Costume("black", "./Effects/costumes/black.png", { x: 480, y: 360 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Flash" }, this.whenIReceiveFlash),
      new Trigger(Trigger.BROADCAST, { name: "Fade" }, this.whenIReceiveFade)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 0;
    this.visible = false;
    this.goto(0, 0);
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveFlash() {
    this.costume = "white";
    this.effects.ghost = 0;
    this.moveAhead();
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveFade() {
    this.costume = "black";
    this.effects.ghost = 100;
    this.moveAhead();
    this.visible = true;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
  }
}
