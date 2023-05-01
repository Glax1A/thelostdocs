/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonOk2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ok", "./ButtonOk2/costumes/ok.png", { x: 80, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.rate" },
        this.whenIReceiveShowRate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.rate" },
        this.whenIReceiveShowRate2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -115);
    this.visible = false;
  }

  *whenIReceiveShowRate() {
    while (!(this.touching("mouse") && this.mouse.down)) {
      yield;
    }
    this.broadcast("hide.rate");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShowSettings() {
    while (!(this.touching("mouse") && this.mouse.down)) {
      yield;
    }
    if (this.toString(this.stage.vars.birdDie) === "false") {
      this.broadcast("Menu");
    }
    this.broadcast("hide.settings");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShowHighscores() {
    while (!(this.touching("mouse") && this.mouse.down)) {
      yield;
    }
    this.broadcast("hide.highscores");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShowRate2() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      while (!this.touching("mouse")) {
        yield;
      }
      this.y = -116;
      while (!!this.touching("mouse")) {
        yield;
      }
      this.y = -115;
      yield;
    }
  }

  *whenIReceiveShowHighscores2() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      while (!this.touching("mouse")) {
        yield;
      }
      this.y = -116;
      while (!!this.touching("mouse")) {
        yield;
      }
      this.y = -115;
      yield;
    }
  }

  *whenIReceiveShowSettings2() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      while (!this.touching("mouse")) {
        yield;
      }
      this.y = -116;
      while (!!this.touching("mouse")) {
        yield;
      }
      this.y = -115;
      yield;
    }
  }
}
