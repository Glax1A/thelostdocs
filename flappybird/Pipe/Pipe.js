/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pipe extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pipe2", "./Pipe/costumes/Pipe2.png", { x: 52, y: 329 }),
      new Costume("Pipe1", "./Pipe/costumes/Pipe1.png", { x: 52, y: 329 }),
      new Costume("Pipe", "./Pipe/costumes/Pipe.png", { x: 52, y: 329 }),
      new Costume("Pipe-1", "./Pipe/costumes/Pipe-1.png", { x: 52, y: 329 }),
      new Costume("Pipe-2", "./Pipe/costumes/Pipe-2.png", { x: 52, y: 329 })
    ];

    this.sounds = [new Sound("sfx_point", "./Pipe/sounds/sfx_point.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game.mute" },
        this.whenIReceiveGameMute
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Tap" }, this.whenIReceiveTap)
    ];
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 100;
    this.visible = false;
    this.goto(0, 0);
  }

  *startAsClone() {
    this.costume = this.random(1, 5);
    this.goto(250, 17);
    this.visible = true;
    while (!(this.compare(this.x, -250) < 0)) {
      while (!(this.toString(this.stage.vars.birdDie) === "false")) {
        yield;
      }
      this.x += this.toNumber(this.stage.vars.gameScrollx);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (!(this.compare(this.x, 96) < 0)) {
      yield;
    }
    this.stage.vars.pipeNew = "true";
  }

  *startAsClone3() {
    while (!(this.compare(this.x, -55) < 0)) {
      yield;
    }
    if (this.toString(this.stage.vars.birdPlay) === "true") {
      yield* this.startSound("sfx_point");
      this.stage.vars.userScore++;
    }
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 5; i++) {
      this.x -= 2;
      this.y -= 2;
      yield* this.wait(0.015);
      this.x += 2;
      this.y += 2;
      yield* this.wait(0.015);
      yield;
    }
  }

  *whenIReceiveGameMute() {
    if (this.toString(this.stage.vars.gameMute) === "true") {
      this.audioEffects.volume = 0;
    } else {
      this.audioEffects.volume = 100;
    }
  }

  *whenIReceiveMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveTap() {
    yield* this.wait(1.5);
    while (!(this.toString(this.stage.vars.birdDie) === "true")) {
      while (!(this.toString(this.stage.vars.pipeNew) === "true")) {
        yield;
      }
      if (this.toString(this.stage.vars.birdPlay) === "true") {
        this.createClone();
        this.stage.vars.pipeNew = "false";
      }
      yield;
    }
  }
}
