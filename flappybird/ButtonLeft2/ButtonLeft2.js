/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonLeft2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("left", "./ButtonLeft2/costumes/left.png", { x: 38, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-90, 75);
    this.visible = false;
  }

  *whenIReceiveHideSettings() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("previous.time");
  }

  *whenIReceiveShowSettings() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      while (!this.touching("mouse")) {
        yield;
      }
      this.y = 74;
      while (!!this.touching("mouse")) {
        yield;
      }
      this.y = 75;
      yield;
    }
  }
}
