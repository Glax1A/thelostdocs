/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonOk extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ok", "./ButtonOk/costumes/ok.png", { x: 80, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-75, -95);
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    yield* this.wait(1.5);
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
    this.broadcast("Menu");
    this.broadcast("Start");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
