/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonMod extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ok", "./ButtonMod/costumes/ok.png", { x: 80, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-75, -60);
    this.visible = false;
    this.stage.vars.moderators.push("HyperPixel");
    this.stage.vars.moderators.push("theONLYsiemer");
  }

  *whenIReceiveStart() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("Moderator");
  }

  *whenIReceiveMenu() {
    if (this.arrayIncludes(this.stage.vars.moderators, /* no username */ "")) {
      this.visible = true;
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
}
