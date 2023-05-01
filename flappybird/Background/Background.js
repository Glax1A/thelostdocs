/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Background extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("day", "./Background/costumes/day.png", { x: 480, y: 360 }),
      new Costume("day-offset", "./Background/costumes/day-offset.png", {
        x: 480,
        y: 360
      }),
      new Costume("night", "./Background/costumes/night.png", {
        x: 480,
        y: 360
      }),
      new Costume("night-offset", "./Background/costumes/night-offset.png", {
        x: 480,
        y: 360
      }),
      new Costume("impossible", "./Background/costumes/impossible.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.highscores" },
        this.whenIReceiveHideHighscores
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.rate" },
        this.whenIReceiveHideRate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.rate" },
        this.whenIReceiveShowRate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.turbomode" },
        this.whenIReceiveShowTurbomode
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings2
      )
    ];

    this.vars.i = 1;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveBehind(100);
    this.visible = true;
  }

  *whenIReceiveHideHighscores() {
    this.moveBehind(100);
  }

  *whenIReceiveShowHighscores() {
    this.moveAhead();
    this.moveBehind(6);
  }

  *whenIReceiveHideRate() {
    this.moveBehind(100);
  }

  *whenIReceiveShowRate() {
    this.moveAhead();
    this.moveBehind(5);
  }

  *whenIReceiveShowTurbomode() {
    this.moveAhead();
    this.moveBehind(1);
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 5; i++) {
      this.costume = this.toString(this.stage.vars.gameTime) + "-offset";
      yield* this.wait(0.015);
      this.costume = this.stage.vars.gameTime;
      yield* this.wait(0.015);
      yield;
    }
  }

  *whenIReceiveHideSettings() {
    this.moveBehind(100);
  }

  *whenIReceiveShowSettings() {
    this.moveAhead();
    this.moveBehind(10);
  }

  *whenIReceiveMenu() {
    if (this.toString(this.stage.vars.gameTimeRandom) === "true") {
      this.vars.i = this.random(1, 2);
      if (this.toNumber(this.vars.i) === 1) {
        this.stage.vars.gameTime = "day";
      }
      if (this.toNumber(this.vars.i) === 2) {
        this.stage.vars.gameTime = "night";
      }
    }
  }

  *whenIReceiveMenu2() {
    this.costume = this.stage.vars.gameTime;
    this.moveBehind(100);
  }

  *whenIReceiveShowSettings2() {
    while (true) {
      this.costume = this.stage.vars.gameTime;
      yield;
    }
  }

  *whenIReceiveHideSettings2() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
