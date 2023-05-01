/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SettingsBird extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1 bird 1", "./SettingsBird/costumes/1 bird 1.png", {
        x: 32,
        y: 24
      }),
      new Costume("1 bird 2", "./SettingsBird/costumes/1 bird 2.png", {
        x: 32,
        y: 24
      }),
      new Costume("1 bird 3", "./SettingsBird/costumes/1 bird 3.png", {
        x: 32,
        y: 24
      }),
      new Costume("1 bird 4", "./SettingsBird/costumes/1 bird 4.png", {
        x: 32,
        y: 24
      }),
      new Costume("2 bird 1", "./SettingsBird/costumes/2 bird 1.png", {
        x: 32,
        y: 24
      }),
      new Costume("2 bird 2", "./SettingsBird/costumes/2 bird 2.png", {
        x: 32,
        y: 24
      }),
      new Costume("2 bird 3", "./SettingsBird/costumes/2 bird 3.png", {
        x: 32,
        y: 24
      }),
      new Costume("2 bird 4", "./SettingsBird/costumes/2 bird 4.png", {
        x: 32,
        y: 24
      }),
      new Costume("3 bird 1", "./SettingsBird/costumes/3 bird 1.png", {
        x: 32,
        y: 24
      }),
      new Costume("3 bird 2", "./SettingsBird/costumes/3 bird 2.png", {
        x: 32,
        y: 24
      }),
      new Costume("3 bird 3", "./SettingsBird/costumes/3 bird 3.png", {
        x: 32,
        y: 24
      }),
      new Costume("3 bird 4", "./SettingsBird/costumes/3 bird 4.png", {
        x: 32,
        y: 24
      }),
      new Costume("0 bird 1", "./SettingsBird/costumes/0 bird 1.png", {
        x: 32,
        y: 24
      }),
      new Costume("0 bird 2", "./SettingsBird/costumes/0 bird 2.png", {
        x: 32,
        y: 24
      }),
      new Costume("0 bird 3", "./SettingsBird/costumes/0 bird 3.png", {
        x: 32,
        y: 24
      }),
      new Costume("0 bird 4", "./SettingsBird/costumes/0 bird 4.png", {
        x: 32,
        y: 24
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.settings" },
        this.whenIReceiveShowSettings2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.settings" },
        this.whenIReceiveHideSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "previous.costume" },
        this.whenIReceivePreviousCostume
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next.costume" },
        this.whenIReceiveNextCostume
      )
    ];

    this.vars.displayCostume = 4;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.birdCostume = 0;
    this.stage.vars.birdCostumeRandom = "true";
    this.goto(-2, -10);
    this.direction = 90;
    this.size = 200;
    this.visible = false;
  }

  *whenIReceiveShowSettings() {
    this.moveAhead();
    this.visible = true;
    this.vars.displayCostume = 0;
    if (
      this.toNumber(this.stage.vars.birdCostume) === 0 ||
      this.toString(this.stage.vars.birdCostumeRandom) === "true"
    ) {
      this.costume = "0 bird 1";
      this.stage.vars.birdCostumeRandom = "true";
    } else {
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
    while (true) {
      if (this.toString(this.stage.vars.birdCostumeRandom) === "true") {
        if (this.costumeNumber === 16) {
          this.costume = "0 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(0.1);
        }
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 1) {
        if (this.costumeNumber === 4) {
          this.costume = "1 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(0.1);
        }
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 2) {
        if (this.costumeNumber === 8) {
          this.costume = "2 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(0.1);
        }
      }
      if (this.toNumber(this.stage.vars.birdCostume) === 3) {
        if (this.costumeNumber === 12) {
          this.costume = "3 bird 1";
          this.vars.displayCostume = 1;
          yield* this.wait(0.1);
        }
      }
      this.costumeNumber++;
      this.vars.displayCostume++;
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveShowSettings2() {
    this.goto(-2, -10);
    yield* this.wait(0.1);
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.y -= 1;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.y += 1;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveHideSettings() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceivePreviousCostume() {
    if (this.compare(this.stage.vars.birdCostume, 1) < 0) {
      this.stage.vars.birdCostume = 3;
    } else {
      this.stage.vars.birdCostume--;
    }
    this.costume =
      this.toString(this.stage.vars.birdCostume) +
      " bird " +
      this.toString(this.vars.displayCostume);
    if (!(this.toNumber(this.stage.vars.birdCostume) === 0)) {
      this.stage.vars.birdCostumeRandom = "false";
    } else {
      this.stage.vars.birdCostumeRandom = "true";
    }
  }

  *whenIReceiveNextCostume() {
    if (this.compare(this.stage.vars.birdCostume, 2) > 0) {
      this.stage.vars.birdCostume = 0;
    } else {
      this.stage.vars.birdCostume++;
    }
    this.costume =
      this.toString(this.stage.vars.birdCostume) +
      " bird " +
      this.toString(this.vars.displayCostume);
    if (!(this.toNumber(this.stage.vars.birdCostume) === 0)) {
      this.stage.vars.birdCostumeRandom = "false";
    } else {
      this.stage.vars.birdCostumeRandom = "true";
    }
  }
}
