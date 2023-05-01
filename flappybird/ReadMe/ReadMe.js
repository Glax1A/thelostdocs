/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ReadMe extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./ReadMe/costumes/blank.png", { x: 0, y: 0 })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
