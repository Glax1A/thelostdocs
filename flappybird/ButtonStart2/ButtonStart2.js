/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonStart2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("start", "./ButtonStart2/costumes/start.png", {
        x: 80,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenIReceiveMenu() {
    this.goto(-75, -95);
    this.moveAhead();
    this.visible = true;
    while (true) {
      while (!this.touching("mouse")) {
        yield;
      }
      this.y = -96;
      while (!!this.touching("mouse")) {
        yield;
      }
      this.y = -95;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Start");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStart() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
