/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bird extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1 bird 1", "./Bird/costumes/1 bird 1.png", { x: 32, y: 24 }),
      new Costume("1 bird 2", "./Bird/costumes/1 bird 2.png", { x: 32, y: 24 }),
      new Costume("1 bird 3", "./Bird/costumes/1 bird 3.png", { x: 32, y: 24 }),
      new Costume("1 bird 4", "./Bird/costumes/1 bird 4.png", { x: 32, y: 24 }),
      new Costume("2 bird 1", "./Bird/costumes/2 bird 1.png", { x: 32, y: 24 }),
      new Costume("2 bird 2", "./Bird/costumes/2 bird 2.png", { x: 32, y: 24 }),
      new Costume("2 bird 3", "./Bird/costumes/2 bird 3.png", { x: 32, y: 24 }),
      new Costume("2 bird 4", "./Bird/costumes/2 bird 4.png", { x: 32, y: 24 }),
      new Costume("3 bird 1", "./Bird/costumes/3 bird 1.png", { x: 32, y: 24 }),
      new Costume("3 bird 2", "./Bird/costumes/3 bird 2.png", { x: 32, y: 24 }),
      new Costume("3 bird 3", "./Bird/costumes/3 bird 3.png", { x: 32, y: 24 }),
      new Costume("3 bird 4", "./Bird/costumes/3 bird 4.png", { x: 32, y: 24 })
    ];

    this.sounds = [
      new Sound("sfx_swooshing", "./Bird/sounds/sfx_swooshing.wav"),
      new Sound("sfx_point", "./Bird/sounds/sfx_point.wav"),
      new Sound("sfx_wing", "./Bird/sounds/sfx_wing.wav"),
      new Sound("sfx_hit", "./Bird/sounds/sfx_hit.wav"),
      new Sound("sfx_die", "./Bird/sounds/sfx_die.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Tap" }, this.whenIReceiveTap),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.BROADCAST, { name: "Tap" }, this.whenIReceiveTap2),
      new Trigger(Trigger.BROADCAST, { name: "Flap" }, this.whenIReceiveFlap),
      new Trigger(Trigger.BROADCAST, { name: "Flap" }, this.whenIReceiveFlap2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver4
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu2),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game.mute" },
        this.whenIReceiveGameMute
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver5
      )
    ];

    this.vars.displayCostume = 3;
  }

  *whenIReceiveTap() {
    while (
      !(
        this.touching(this.sprites["Pipe"].andClones()) ||
        this.compare(this.y, -123.9) < 0
      )
    ) {
      yield;
    }
    this.broadcast("Game Over");
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 100;
  }

  *whenIReceiveMenu() {
    this.stage.vars.flapSpeed = 0.1;
    if (this.toString(this.stage.vars.birdCostumeRandom) === "true") {
      this.stage.vars.birdCostume = this.random(1, 3);
      if (this.toNumber(this.stage.vars.birdCostume) === 1) {
        this.costume = "1 bird 1";
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 2) {
        this.costume = "2 bird 1";
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 3) {
        this.costume = "3 bird 1";
      }
    }
    while (!(this.toString(this.stage.vars.birdDie) === "false")) {
      yield;
    }
    this.vars.displayCostume = 1;
    while (!(this.toString(this.stage.vars.birdDie) === "true")) {
      if (this.toNumber(this.stage.vars.birdCostume) === 1) {
        if (this.costumeNumber === 4) {
          this.costume = "1 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(this.toNumber(this.stage.vars.flapSpeed));
        }
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 2) {
        if (this.costumeNumber === 8) {
          this.costume = "2 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(this.toNumber(this.stage.vars.flapSpeed));
        }
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 3) {
        if (this.costumeNumber === 12) {
          this.costume = "3 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(this.toNumber(this.stage.vars.flapSpeed));
        }
      }
      this.costumeNumber++;
      this.vars.displayCostume++;
      yield* this.wait(this.toNumber(this.stage.vars.flapSpeed));
      yield;
    }
    if (this.toNumber(this.stage.vars.birdCostume) === 1) {
      this.costume = "1 bird 2";
    }
    if (this.toNumber(this.stage.vars.birdCostume) === 2) {
      this.costume = "2 bird 2";
    }
    if (this.toNumber(this.stage.vars.birdCostume) === 3) {
      this.costume = "3 bird 2";
    }
    return;
  }

  *whenIReceiveGameOver() {
    if (this.touching(this.sprites["Pipe"].andClones())) {
      yield* this.playSoundUntilDone("sfx_hit");
      yield* this.startSound("sfx_die");
    } else {
      yield* this.startSound("sfx_hit");
    }
    return;
  }

  *whenIReceiveTap2() {
    while (!(this.toString(this.stage.vars.birdDie) === "true")) {
      while (!(this.keyPressed("space") || this.mouse.down)) {
        yield;
      }
      if (this.toString(this.stage.vars.birdPlay) === "true") {
        this.broadcast("Flap");
      }
      while (!!(this.keyPressed("space") || this.mouse.down)) {
        yield;
      }
      yield;
    }
  }

  *whenIReceiveFlap() {
    if (this.toString(this.stage.vars.birdPlay) === "true") {
      yield* this.startSound("sfx_wing");
      while (!(this.direction === 72)) {
        if (this.toString(this.stage.vars.birdPlay) === "true") {
          this.direction -= 9;
        }
        yield;
      }
      yield* this.wait(0.5);
      while (!(this.direction === 180)) {
        if (this.toString(this.stage.vars.birdPlay) === "true") {
          this.direction += 9;
          yield* this.wait(0.02);
        }
        yield;
      }
    }
    return;
  }

  *whenIReceiveFlap2() {
    this.stage.vars.birdGravity = 8.5;
    while (!(this.toString(this.stage.vars.birdDie) === "true")) {
      if (this.compare(0, this.stage.vars.birdGravity) > 0) {
        if (this.toString(this.stage.vars.birdPlay) === "true") {
          this.y += this.toNumber(this.stage.vars.birdGravity);
          this.stage.vars.birdGravity -= 0.9;
        }
      } else {
        if (this.toString(this.stage.vars.birdPlay) === "true") {
          this.y += this.toNumber(this.stage.vars.birdGravity);
          this.stage.vars.birdGravity -= 0.9;
        }
      }
      yield;
    }
    return;
  }

  *whenIReceiveGameOver2() {
    if (this.x === 124) {
      this.stage.vars.birdGravity = 0;
    }
    while (
      !(
        this.touching(this.sprites["Ground"].andClones()) ||
        this.touching(this.sprites["Ground2"].andClones())
      )
    ) {
      this.y += this.toNumber(this.stage.vars.birdGravity);
      this.stage.vars.birdGravity -= 0.6;
      yield;
    }
    this.y = -124;
    return;
  }

  *whenIReceiveGameOver3() {
    while (!(this.direction === 180)) {
      this.direction += 9;
      yield* this.wait(0.02);
      yield;
    }
    return;
  }

  *whenIReceiveGameOver4() {
    this.stage.vars.birdDie = "true";
    this.stage.vars.birdPlay = "false";
    this.stage.vars.birdGravity = 0;
    this.broadcast("Flash");
    yield* this.broadcastAndWait("scoreclones.delete");
    this.moveAhead();
    return;
  }

  *whenIReceiveStart() {
    this.goto(-80, 0);
  }

  *whenIReceiveMenu2() {
    this.goto(100, 55);
    this.direction = 90;
    this.size = 100;
  }

  *whenIReceiveMenu3() {
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

  *whenIReceiveGameMute() {
    if (this.toString(this.stage.vars.gameMute) === "true") {
      this.audioEffects.volume = 0;
    } else {
      this.audioEffects.volume = 100;
    }
  }

  *whenIReceiveGameOver5() {
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
}
