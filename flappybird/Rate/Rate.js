/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rate extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("message", "./Rate/costumes/message.svg", { x: 240, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.rate" },
        this.whenIReceiveShowRate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.rate" },
        this.whenIReceiveHideRate
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(6, 0);
    this.visible = false;
  }

  *whenIReceiveShowRate() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveHideRate() {
    this.visible = false;
  }
}
