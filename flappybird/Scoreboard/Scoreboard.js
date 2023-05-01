/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Scoreboard extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("nomedal", "./Scoreboard/costumes/nomedal.png", {
        x: 225,
        y: 116
      }),
      new Costume("bronzemedal", "./Scoreboard/costumes/bronzemedal.png", {
        x: 225,
        y: 116
      }),
      new Costume("silvermedal", "./Scoreboard/costumes/silvermedal.png", {
        x: 225,
        y: 116
      }),
      new Costume("goldmedal", "./Scoreboard/costumes/goldmedal.png", {
        x: 225,
        y: 116
      }),
      new Costume("platinummedal", "./Scoreboard/costumes/platinummedal.png", {
        x: 225,
        y: 116
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Tap" }, this.whenIReceiveTap),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenIReceiveTap() {
    while (!(this.toNumber(this.stage.vars.userScore) === 10)) {
      yield;
    }
    this.costume = "bronzemedal";
    this.stage.vars.userEarnmedal = 1;
    while (!(this.toNumber(this.stage.vars.userScore) === 20)) {
      yield;
    }
    this.costume = "silvermedal";
    this.stage.vars.userEarnmedal = 2;
    while (!(this.toNumber(this.stage.vars.userScore) === 30)) {
      yield;
    }
    this.costume = "goldmedal";
    this.stage.vars.userEarnmedal = 3;
    while (!(this.toNumber(this.stage.vars.userScore) === 40)) {
      yield;
    }
    this.costume = "platinummedal";
    this.stage.vars.userEarnmedal = 4;
  }

  *whenIReceiveMenu() {
    this.goto(0, -220);
    this.costume = "nomedal";
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    yield* this.wait(1.25);
    this.moveAhead();
    this.visible = true;
    yield* this.glide(0.25, 0, 0);
  }
}
