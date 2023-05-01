/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonRate extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ButtonRate/costumes/costume1.png", {
        x: 480,
        y: 360
      }),
      new Costume("ok2", "./ButtonRate/costumes/ok2.png", { x: 80, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(75, -60);
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("show.rate");
  }

  *whenIReceiveMenu() {
    if (!(this.toNumber(/* no username */ "") === 0)) {
      this.visible = true;
      this.moveAhead();
      while (true) {
        while (!this.touching("mouse")) {
          yield;
        }
        this.y = -61;
        while (!!this.touching("mouse")) {
          yield;
        }
        this.y = -60;
        yield;
      }
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
