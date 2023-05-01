/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("logo", "./Title/costumes/logo.png", { x: 192, y: 44 }),
      new Costume("gameover", "./Title/costumes/gameover.png", {
        x: 188,
        y: 38
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Tap" }, this.whenIReceiveTap),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveTap() {
    this.visible = false;
  }

  *whenIReceiveMenu() {
    this.goto(-23, 55);
    this.costume = "logo";
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveMenu2() {
    yield* this.wait(0.1);
    while (!(this.toString(this.stage.vars.birdPlay) === "true")) {
      if (this.toString(this.stage.vars.birdDie) === "false") {
        for (let i = 0; i < 10; i++) {
          if (this.toString(this.stage.vars.birdPlay) === "false") {
            this.y -= 0.5;
          }
          yield;
        }
        for (let i = 0; i < 10; i++) {
          if (this.toString(this.stage.vars.birdPlay) === "false") {
            this.y += 0.5;
          }
          yield;
        }
      }
      yield;
    }
    return;
  }

  *whenIReceiveGameOver() {
    this.goto(0, 104);
    this.costume = "gameover";
    yield* this.wait(0.75);
    this.moveAhead();
    this.visible = true;
    yield* this.glide(0.1, 0, 108);
    yield* this.glide(0.2, 0, 100);
  }
}
