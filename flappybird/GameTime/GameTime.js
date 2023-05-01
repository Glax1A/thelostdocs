/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameTime extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("day", "./GameTime/costumes/day.svg", { x: 28, y: 28 }),
      new Costume("night", "./GameTime/costumes/night.svg", { x: 29, y: 28 }),
      new Costume("randomday", "./GameTime/costumes/randomday.svg", {
        x: 29,
        y: 29
      }),
      new Costume("randomnight", "./GameTime/costumes/randomnight.svg", {
        x: 29,
        y: 29
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next.time" },
        this.whenIReceiveNextTime
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "previous.time" },
        this.whenIReceivePreviousTime
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.gameTimeRandom = "true";
    this.goto(0, 75);
    this.direction = 90;
    this.size = 100;
    this.visible = false;
  }

  *whenIReceiveNextTime() {
    if (
      this.toString(this.stage.vars.gameTime) === "day" &&
      this.toString(this.stage.vars.gameTimeRandom) === "false"
    ) {
      this.stage.vars.gameTime = "night";
      yield* this.wait(0.1);
      this.costume = "night";
    } else {
      if (
        this.toString(this.stage.vars.gameTime) === "night" &&
        this.toString(this.stage.vars.gameTimeRandom) === "false"
      ) {
        yield* this.wait(0.1);
        this.stage.vars.gameTimeRandom = "true";
      } else {
        if (this.toString(this.stage.vars.gameTimeRandom) === "true") {
          this.stage.vars.gameTimeRandom = "false";
          this.stage.vars.gameTime = "day";
          yield* this.wait(0.1);
          this.costume = "day";
        }
      }
    }
  }

  *whenIReceivePreviousTime() {
    if (
      this.toString(this.stage.vars.gameTime) === "night" &&
      this.toString(this.stage.vars.gameTimeRandom) === "false"
    ) {
      this.stage.vars.gameTime = "day";
      yield* this.wait(0.1);
      this.costume = "day";
    } else {
      if (
        this.toString(this.stage.vars.gameTime) === "day" &&
        this.toString(this.stage.vars.gameTimeRandom) === "false"
      ) {
        yield* this.wait(0.1);
        this.stage.vars.gameTimeRandom = "true";
      } else {
        if (this.toString(this.stage.vars.gameTimeRandom) === "true") {
          this.stage.vars.gameTimeRandom = "false";
          this.stage.vars.gameTime = "night";
          yield* this.wait(0.1);
          this.costume = "night";
        }
      }
    }
  }

  *whenIReceiveShowSettings() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      if (this.toString(this.stage.vars.gameTimeRandom) === "true") {
        this.costume = "random" + this.toString(this.stage.vars.gameTime);
      } else {
        if (this.toString(this.stage.vars.gameTime) === "day") {
          this.costume = "day";
        }
        if (this.toString(this.stage.vars.gameTime) === "night") {
          this.costume = "night";
        }
      }
      while (true) {
        if (this.toString(this.stage.vars.gameTimeRandom) === "true") {
          this.costume = "random" + this.toString(this.stage.vars.gameTime);
        } else {
          if (this.toString(this.stage.vars.gameTime) === "day") {
            this.costume = "day";
          }
          if (this.toString(this.stage.vars.gameTime) === "night") {
            this.costume = "night";
          }
        }
        yield;
      }
      yield;
    }
  }

  *whenIReceiveHideSettings() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
