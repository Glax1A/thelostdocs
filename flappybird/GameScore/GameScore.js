/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameScore extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./GameScore/costumes/0.png", { x: 24, y: 36 }),
      new Costume("1", "./GameScore/costumes/1.png", { x: 8, y: 36 }),
      new Costume("2", "./GameScore/costumes/2.png", { x: 24, y: 36 }),
      new Costume("3", "./GameScore/costumes/3.png", { x: 24, y: 36 }),
      new Costume("4", "./GameScore/costumes/4.png", { x: 24, y: 36 }),
      new Costume("5", "./GameScore/costumes/5.png", { x: 24, y: 36 }),
      new Costume("6", "./GameScore/costumes/6.png", { x: 24, y: 36 }),
      new Costume("7", "./GameScore/costumes/7.png", { x: 24, y: 36 }),
      new Costume("8", "./GameScore/costumes/8.png", { x: 24, y: 36 }),
      new Costume("9", "./GameScore/costumes/9.png", { x: 24, y: 36 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.scoreDigit = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveMenu() {
    this.goto(0, 140);
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    this.stage.vars.userScore = 0;
    this.stage.vars.scoreClones = 0;
    this.costume = 0;
    this.visible = false;
    while (!(this.toString(this.stage.vars.birdDie) === "true")) {
      while (
        !(
          this.toString(this.stage.vars.birdPlay) === "false" ||
          this.compare(
            this.toString(this.stage.vars.userScore).length,
            this.stage.vars.scoreClones
          ) > 0
        )
      ) {
        yield;
      }
      if (
        this.toString(this.stage.vars.birdDie) === "false" &&
        this.toString(this.stage.vars.birdPlay) === "true"
      ) {
        this.createClone();
        yield* this.wait(0.25);
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    this.deleteThisClone();
  }

  *startAsClone() {
    this.stage.vars.scoreClones++;
    this.vars.scoreDigit = this.stage.vars.scoreClones;
    this.visible = true;
    this.moveAhead();
    while (true) {
      if (this.toString(this.stage.vars.birdPlay) === "true") {
        this.goto(
          (this.toNumber(this.stage.vars.scoreClones) - 1) * -9 +
            17 * (this.toNumber(this.vars.scoreDigit) - 1),
          140
        );
        this.costume =
          this.toNumber(
            this.letterOf(this.stage.vars.userScore, this.vars.scoreDigit - 1)
          ) + 1;
      }
      yield;
    }
  }
}
