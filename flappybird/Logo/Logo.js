/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Logo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Flappy-Bird", "./Logo/costumes/Flappy-Bird.png", {
        x: 480,
        y: 360
      }),
      new Costume("blank", "./Logo/costumes/blank.png", { x: 0, y: 0 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }
}
