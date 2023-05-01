/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonScore extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("score", "./ButtonScore/costumes/score.png", { x: 80, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveMenu() {
    this.goto(75, -95);
    this.moveAhead();
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.y = -96;
      } else {
        this.y = -95;
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveGameOver() {
    yield* this.wait(1.5);
    this.moveAhead();
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.y = -96;
      } else {
        this.y = -95;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("show.highscores");
  }
}
