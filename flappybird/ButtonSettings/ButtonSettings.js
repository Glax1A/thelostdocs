/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ButtonSettings extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("settings", "./ButtonSettings/costumes/settings.png", {
        x: 48,
        y: 46
      })
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.highscores" },
        this.whenIReceiveHideHighscores
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 35;
    this.effects.pixelate = 100;
    this.goto(-200, -168);
    this.costume = "play";
    for (let i = 0; i < 25; i++) {
      this.effects.pixelate -= 4;
      yield;
    }
    this.moveAhead();
  }

  *whenIReceiveMenu() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    yield* this.wait(1.5);
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveHideSettings() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("show.settings");
    this.visible = false;
  }

  *whenIReceiveHideRate() {
    this.visible = true;
  }

  *whenIReceiveShowRate() {
    this.visible = false;
  }

  *whenIReceiveShowHighscores() {
    this.visible = false;
  }

  *whenIReceiveHideHighscores() {
    this.visible = true;
  }
}
