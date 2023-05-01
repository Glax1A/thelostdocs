/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Score extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Score/costumes/0.png", { x: 14, y: 20 }),
      new Costume("1", "./Score/costumes/1.png", { x: 6, y: 20 }),
      new Costume("2", "./Score/costumes/2.png", { x: 14, y: 20 }),
      new Costume("3", "./Score/costumes/3.png", { x: 14, y: 20 }),
      new Costume("4", "./Score/costumes/4.png", { x: 14, y: 20 }),
      new Costume("5", "./Score/costumes/5.png", { x: 14, y: 20 }),
      new Costume("6", "./Score/costumes/6.png", { x: 14, y: 20 }),
      new Costume("7", "./Score/costumes/7.png", { x: 14, y: 20 }),
      new Costume("8", "./Score/costumes/8.png", { x: 14, y: 20 }),
      new Costume("9", "./Score/costumes/9.png", { x: 14, y: 20 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver2
      )
    ];

    this.vars.i = 0;
    this.vars.findUserscore = "false";
  }

  *whenIReceiveMenu() {
    this.goto(0, 140);
    this.visible = false;
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *startAsClone() {
    if (this.toString(this.vars.findUserscore) === "true") {
      this.costume =
        this.toNumber(
          this.letterOf(this.stage.vars.userScore, this.vars.i - 1)
        ) + 1;
    }
    if (this.toString(this.vars.findUserscore) === "false") {
      this.costume =
        this.toNumber(
          this.letterOf(this.stage.vars.userHighscore, this.vars.i - 1)
        ) + 1;
    }
    this.visible = true;
    this.moveAhead();
  }

  *whenIReceiveGameOver() {
    this.visible = false;
    this.vars.findUserscore = "true";
    this.goto(84, 13);
    this.vars.i = this.toString(this.stage.vars.userScore).length;
    yield* this.wait(1.5);
    for (let i = 0; i < this.toString(this.stage.vars.userScore).length; i++) {
      this.createClone();
      this.x -= 16;
      this.vars.i--;
      yield;
    }
    this.vars.findUserscore = "false";
    this.goto(84, -28);
    this.vars.i = this.toString(this.stage.vars.userHighscore).length;
    for (
      let i = 0;
      i < this.toString(this.stage.vars.userHighscore).length;
      i++
    ) {
      this.createClone();
      this.x -= 16;
      this.vars.i--;
      yield;
    }
  }

  *whenIReceiveGameOver2() {
    if (!(/* no username */ "" === "HyperPixel")) {
      this.stage.vars.userPoints += this.toNumber(this.stage.vars.userScore);
      this.stage.vars.GamesPlayed++;
      this.stage.vars.LatestScore = this.stage.vars.userScore;
      if (
        this.compare(this.stage.vars.userScore, this.stage.vars.userHighscore) >
        0
      ) {
        this.stage.vars.userHighscore = this.stage.vars.userScore;
        this.stage.vars.userSethighscore = "true";
      }
    }
  }
}
