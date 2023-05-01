/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _ extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("hidden", "./_/costumes/hidden.svg", { x: 240, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Moderator" },
        this.whenIReceiveModerator
      )
    ];

    this.vars.i = 18;
    this.vars.modCommand = "deleteuserscore";
    this.vars.findLetter = 0;
    this.vars.modMessage = 0;
  }

  *whenIReceiveModerator() {
    if (this.arrayIncludes(this.stage.vars.moderators, /* no username */ "")) {
      yield* this.askAndWait("");
      if (this.letterOf(this.answer, 0) === "/") {
        this.vars.i = 2;
        this.vars.findLetter = this.letterOf(this.answer, this.vars.i - 1);
        this.vars.modCommand = "";
        this.vars.modMessage = "";
        while (!(this.toNumber(this.vars.findLetter) === 0)) {
          this.vars.findLetter = this.letterOf(this.answer, this.vars.i - 1);
          if (!(this.toNumber(this.vars.findLetter) === 0)) {
            this.vars.modCommand =
              this.toString(this.vars.modCommand) +
              this.toString(this.vars.findLetter);
            this.vars.i++;
          }
          yield;
        }
        if (
          this.toString(this.vars.modCommand) === "reset" ||
          this.toString(this.vars.modCommand) === "deleteuserscore"
        ) {
          if (this.toString(this.vars.modCommand) === "reset") {
            yield* this.askAndWait(
              "Are you sure you would like to erase ALL game data? (Y/N)"
            );
            if (this.letterOf(this.answer, 0) === "Y") {
              yield* this.broadcastAndWait("game.reset");
              yield* this.sayAndWait("Done!", 2);
            }
            if (this.letterOf(this.answer, 0) === "N") {
              yield* this.sayAndWait("Request Canceled", 2);
            }
          }
          if (this.toString(this.vars.modCommand) === "deleteuserscore") {
            this.broadcast("game.deleteuserscore");
          }
        } else {
          this.restartTimer();
          for (let i = 0; i < 5; i++) {
            this.say(
              'Invailid input "' +
                this.answer +
                '" Please check your input and try again in ' +
                this.toString(5 - Math.round(this.timer)) +
                " seconds"
            );
            yield* this.wait(1);
            yield;
          }
          this.broadcast("Moderator");
        }
      } else {
        this.restartTimer();
        for (let i = 0; i < 5; i++) {
          this.say(
            'Invailid input "' +
              this.answer +
              '" Please check your input and try again in ' +
              this.toString(5 - Math.round(this.timer)) +
              " seconds"
          );
          yield* this.wait(1);
          yield;
        }
        this.broadcast("Moderator");
      }
    }
  }
}
