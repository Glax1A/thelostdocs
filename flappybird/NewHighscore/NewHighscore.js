/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewHighscore extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("new", "./NewHighscore/costumes/new.png", { x: 32, y: 14 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(39, -7);
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    yield* this.wait(1.5);
    if (this.toString(this.stage.vars.userSethighscore) === "true") {
      this.moveAhead();
      this.visible = true;
    }
  }

  *whenIReceiveMenu() {
    this.visible = false;
  }
}
