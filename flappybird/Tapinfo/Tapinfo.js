/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tapinfo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tapinfo", "./Tapinfo/costumes/tapinfo.png", {
        x: 230,
        y: 172
      }),
      new Costume("tapinfo2", "./Tapinfo/costumes/tapinfo2.png", {
        x: 230,
        y: 172
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.effects.clear();
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.effects.ghost = 0;
    this.costume = "tapinfo";
    while (true) {
      yield* this.wait(0.75);
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveStart2() {
    yield* this.wait(0.25);
    while (!(this.keyPressed("space") || this.mouse.down)) {
      yield;
    }
    this.broadcast("Tap");
    this.broadcast("Flap");
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    return;
  }

  *whenIReceiveMenu() {
    this.visible = false;
  }
}
