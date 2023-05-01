/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonUp extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("up", "./ButtonUp/costumes/up.png", { x: 38, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.highscores" },
        this.whenIReceiveHideHighscores
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(206, 45);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (!(this.touching("mouse") || this.keyPressed("up arrow"))) {
        yield;
      }
      this.y = 44;
      while (!!(this.touching("mouse") || this.keyPressed("up arrow"))) {
        yield;
      }
      this.y = 45;
      yield;
    }
  }

  *whenIReceiveHideHighscores() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShowHighscores() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      if (
        (this.touching("mouse") && this.mouse.down) ||
        this.keyPressed("up arrow")
      ) {
        this.broadcast("highscore.scrollup");
      }
      yield;
    }
  }
}
