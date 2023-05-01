/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ground", "./Ground/costumes/ground.png", { x: 480, y: 38 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ground1" },
        this.whenIReceiveGround1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.turbomode" },
        this.whenIReceiveShowTurbomode
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores
      ),
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
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu)
    ];
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

  *whenGreenFlagClicked() {
    this.goto(0, -161);
  }

  *whenIReceiveGround1() {
    this.goto(480, -161);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (!(this.compare(this.x, 0) < 0)) {
        yield;
      }
      this.broadcast("\u0007Ground2");
      while (!(this.compare(this.x, 0) > 0)) {
        yield;
      }
      yield;
    }
  }

  *whenIReceiveShowTurbomode() {
    this.moveAhead();
    this.goto(0, -161);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveShowHighscores() {
    this.moveAhead();
  }

  *whenIReceiveShowRate() {
    this.moveAhead();
  }

  *whenIReceiveShowSettings() {
    this.moveAhead();
  }

  *whenIReceiveMenu() {
    this.moveAhead();
    this.stage.vars.birdDie = "false";
    while (!(this.toString(this.stage.vars.birdDie) === "true")) {
      this.x += this.toNumber(this.stage.vars.gameScrollx);
      yield;
    }
  }
}
