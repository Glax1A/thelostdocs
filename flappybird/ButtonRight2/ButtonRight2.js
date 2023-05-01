/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonRight2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("right", "./ButtonRight2/costumes/right.png", {
        x: 38,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(100, 75);
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("next.time");
  }

  *whenIReceiveHideSettings() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
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
