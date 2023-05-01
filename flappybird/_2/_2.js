/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("hidden", "./_2/costumes/hidden.svg", { x: 240, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game.deleteuserscore" },
        this.whenIReceiveGameDeleteuserscore
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game.reset" },
        this.whenIReceiveGameReset
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "highscore.scrolldown" },
        this.whenIReceiveHighscoreScrolldown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "highscore.scrollup" },
        this.whenIReceiveHighscoreScrollup
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.highscores" },
        this.whenIReceiveHideHighscores
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.highscores" },
        this.whenIReceiveShowHighscores
      )
    ];

    this.vars.listShowMax = 100;
    this.vars.myUsername = 0;
    this.vars.listI = -1;
    this.vars.listIi = 12;
    this.vars.listHelper = 0;
    this.vars.listScrollVisual = 200;
    this.vars.listHelper2 = 0;
    this.vars.listIii = -2;
    this.vars.lastUser = "CS580865";
    this.vars.translate = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "!",
      '"',
      "§",
      "$",
      "%",
      "&",
      "/",
      "(",
      ")",
      "=",
      "?",
      "ß",
      "ä",
      "ö",
      "ü",
      "+",
      "-",
      "*",
      ":",
      ".",
      ",",
      ";",
      "_",
      "#",
      "{",
      "}",
      "[",
      "]",
      "²",
      "³",
      "<",
      ">",
      "|",
      "@",
      0,
      "~",
      "☁",
      "☻",
      "♥",
      "♦",
      "♣",
      "♠",
      "•",
      "◘",
      "○",
      "◙",
      "♂",
      "♀",
      "♪"
    ];
    this.vars.user = [
      "JAEWON0907",
      "IVANISAAC",
      "FIZZYPOPPIPPOP",
      "MATHICIAN",
      "PEREZJU2024",
      "THEFIERYHAZE",
      "IDECRUZ2019",
      "ICECREAMKITTYZ",
      "TOMATOEEEEEEEEEEE",
      "RETRO-GAMES",
      "RYANBACK",
      "ORUIZ1234567890",
      "WENDOVER03",
      "INOAHIPLAY",
      "JIANGM1",
      "BESTGAMES5",
      "DRAGONPRODUCTION",
      "CS449851",
      "DABAWSESOPHIA",
      "CEGORDON",
      "BLOBFISHKING101",
      "WOLF-ALEXI",
      "LSCGYKM3",
      "TOASTY_BOY",
      "HEATER123",
      "3GGEN",
      "JOSEEE_530",
      "TON999",
      "BOBBOB41",
      "55WOMBAT55",
      "PANDACAT2",
      "LSCBB3",
      "890H",
      "NEXUS797",
      "HIKARUARAI",
      "GEV07",
      "33O",
      "DIAMONDOPOLIS",
      "MNSRUBIKS",
      "ANIME_FAN15",
      "KOZYBEE",
      "TERRELLG05",
      "CODERKIDSTX",
      "NYUSZIKAR",
      "PORKCHAP",
      "I_LOVE_PUSHEEN",
      "ELCONEJITOCOOL442",
      "GARYDOS",
      "MKIMM2K",
      "BOOKSLOVER",
      "CONMOM456",
      "SQUEAKYCLEANSTUDIOS",
      "TYLER0926",
      "HMONGCOOLBOI530",
      "PATRICKWIJONO",
      "DCOLEMAN0915",
      "THAISON1",
      "TRUEGAMER95",
      "GOOGLE_NETWORK",
      "CPTURTLES",
      "PACK48",
      "ALEC2121",
      "CPETERSON4917",
      "FUNKMAN251SCRATCH",
      "NIMBLEMATIONS",
      "DIEGOB10",
      "TOM20051124",
      "RAEFWORKS_ANIMATIONS",
      "BOTTLEFLIPPER789",
      "SERPERIOR1700",
      "X126",
      "FARZATTACK",
      "DANIELCODING",
      "VENOM2005",
      "LINKKI",
      "PETPAWS16",
      "APPLEMACBOOKPRO2015",
      "NILE1",
      "ALEXANDERRUBINO05",
      "MSUMANNING",
      "SCORPIOTHEDESTROYER",
      "4NGUYEN",
      "GC123456",
      "TRUES4SAMI",
      "PSTUDEBAKER20",
      "ALEXSHAKES",
      "PROGRAMINGMASTER17",
      "JOELBON9",
      "FIREBOIT",
      "CS546448",
      "MUTTPUG101",
      "CBLAKELY",
      "APEKATTEN",
      "REDDEY13",
      "21AUGSH",
      "CS455898",
      "COOKIECAMPO23",
      "23DANIELSELOGY",
      "COOLMARIO4",
      "MIKSUK28",
      "LOVEMARIE128",
      "REDPANDA577",
      "SQUQRED",
      "BEAMOHH",
      "X-PRO-TOM-",
      "CREEPERMANCOOL",
      "MISTERBUMP100",
      "LEGOPARTYGUY",
      "CANDLAND31AJ",
      "AWESOMEGUY3",
      "TROLLSTAR123-HD",
      "R_RAVENCLAW",
      "WASSABI76",
      "CPSTHOMAS",
      "JIHOKING",
      "GAMERBOSS1000",
      "QUARTZROCK",
      "WINDOWSBOY",
      "KAEYLAN16",
      "072605F022",
      "ICEGALAXY21",
      "SALT-WATER-CITY",
      "X_GALAXY_SCRATCHX_2",
      "VINNYTOON",
      "OLDTALLY",
      "AYANG0675",
      "WESGIBB13",
      "KFITY2021",
      "LAUMAC97986",
      "FIREYDEATH4",
      "FAZE_OBLIVION",
      "OWLGIRL03",
      "TANATE",
      "HENRYCODES",
      "-HEROINE-",
      "NICKELJORN9",
      "WORLD_LANGUAGES",
      "SUPDUDEZZZ",
      "THERECREATION",
      "MATTHEW78429",
      "SSC2016_1D19",
      "EMMAGYMNAST",
      "THE3LECTRICGAMER",
      "LORDCLUTUS",
      "NEE13",
      "RODGAMER9",
      "ANDREWK26",
      "BEN5191",
      "MINIMALION",
      "LIPMAN1234",
      "KITTY_0",
      "OURLADYOFGRACE",
      "VOOKARUSHIL",
      "SILLYTURTLE531",
      "CODINGKITTEH",
      "EMOJISMILE",
      "POKEMONKANTO",
      "ROBOREX3972",
      "PINKKNIGHT2004",
      "ULTRA-GAMER",
      "CS564840",
      "NBUENAVENTURA16",
      "EXTREMERANDOMGUY",
      "DARTMONKEYS",
      "SJCHK2E15",
      "D_I_A_V_L_O",
      "PIXIGEM",
      "JOEY131",
      "PIGGY1010YEAH",
      "NIMANGAT",
      "EEEERUY",
      "MCOLBERT2023",
      "ALEXANDRELEGOMACU",
      "XXMAJOR",
      "XYUCHEN",
      "BRADSHAWRACER",
      "19WKIMU",
      "SIEUNHAN",
      "TAYSCRATCHMASTER",
      9272005,
      "SSTTY214",
      "I-LAT",
      "SAMTHEMAN287",
      "WILLOW8888",
      "ANDRECULON",
      "THEBARFYSHOW",
      "-LAVIATHAN-",
      "NTRAIN910",
      "JB107144",
      "TRONRONI",
      "SCRATCHCRAFT99",
      "LIKENSTR",
      "STEVEN9420",
      "THE_DIAMOND_MLG_GUY",
      "AARAVK7",
      "ACRAZYBLUEBLOB",
      "ROHITS249",
      "FILLES01",
      "ILOVERICEBUBBLES",
      "ZIELINA2002"
    ];
    this.vars.score = [
      64,
      57,
      41,
      28,
      26,
      23,
      23,
      20,
      17,
      17,
      16,
      16,
      15,
      15,
      15,
      14,
      14,
      14,
      14,
      14,
      13,
      14,
      13,
      13,
      13,
      13,
      13,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      10,
      11,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
  }

  *setUsername() {
    this.vars.myUsername = 0;
    this.vars.translate = [];
    this.vars.translate.push("A");
    this.vars.translate.push("B");
    this.vars.translate.push("C");
    this.vars.translate.push("D");
    this.vars.translate.push("E");
    this.vars.translate.push("F");
    this.vars.translate.push("G");
    this.vars.translate.push("H");
    this.vars.translate.push("I");
    this.vars.translate.push("J");
    this.vars.translate.push("K");
    this.vars.translate.push("L");
    this.vars.translate.push("M");
    this.vars.translate.push("N");
    this.vars.translate.push("O");
    this.vars.translate.push("P");
    this.vars.translate.push("Q");
    this.vars.translate.push("R");
    this.vars.translate.push("S");
    this.vars.translate.push("T");
    this.vars.translate.push("U");
    this.vars.translate.push("V");
    this.vars.translate.push("W");
    this.vars.translate.push("X");
    this.vars.translate.push("Y");
    this.vars.translate.push("Z");
    yield* this.wait(0);
    this.vars.translate.push(0);
    this.vars.translate.push(1);
    this.vars.translate.push(2);
    this.vars.translate.push(3);
    this.vars.translate.push(4);
    this.vars.translate.push(5);
    this.vars.translate.push(6);
    this.vars.translate.push(7);
    this.vars.translate.push(8);
    this.vars.translate.push(9);
    yield* this.wait(0);
    this.vars.translate.push("!");
    this.vars.translate.push('"');
    this.vars.translate.push("§");
    this.vars.translate.push("$");
    this.vars.translate.push("%");
    this.vars.translate.push("&");
    this.vars.translate.push("/");
    this.vars.translate.push("(");
    this.vars.translate.push(")");
    this.vars.translate.push("=");
    this.vars.translate.push("?");
    this.vars.translate.push("ß");
    this.vars.translate.push("ä");
    this.vars.translate.push("ö");
    this.vars.translate.push("ü");
    this.vars.translate.push("+");
    this.vars.translate.push("-");
    this.vars.translate.push("*");
    this.vars.translate.push(":");
    this.vars.translate.push(".");
    this.vars.translate.push(",");
    this.vars.translate.push(";");
    this.vars.translate.push("_");
    this.vars.translate.push("#");
    this.vars.translate.push("{");
    this.vars.translate.push("}");
    this.vars.translate.push("[");
    this.vars.translate.push("]");
    this.vars.translate.push("²");
    this.vars.translate.push("³");
    this.vars.translate.push("<");
    this.vars.translate.push(">");
    this.vars.translate.push("|");
    this.vars.translate.push("@");
    this.vars.translate.push(0);
    this.vars.translate.push("~");
    yield* this.wait(0);
    this.vars.translate.push("☁");
    this.vars.translate.push("☻");
    this.vars.translate.push("♥");
    this.vars.translate.push("♦");
    this.vars.translate.push("♣");
    this.vars.translate.push("♠");
    this.vars.translate.push("•");
    this.vars.translate.push("◘");
    this.vars.translate.push("○");
    this.vars.translate.push("◙");
    this.vars.translate.push("♂");
    this.vars.translate.push("♀");
    this.vars.translate.push("♪");
    if (this.toNumber(/* no username */ "") === 0) {
      this.vars.myUsername = "";
    } else {
      this.vars.listI = 0;
      for (let i = 0; i < /* no username */ "".length; i++) {
        this.vars.listI++;
        if (
          !this.arrayIncludes(
            this.vars.translate,
            this.letterOf(/* no username */ "", this.vars.listI - 1)
          )
        ) {
          this.vars.listI = -10000;
        }
        yield;
      }
      if (this.compare(0, this.vars.listI) < 0) {
        this.vars.listI = 0;
        this.vars.myUsername = "";
        for (let i = 0; i < /* no username */ "".length; i++) {
          this.vars.listI++;
          this.vars.listIi = 0;
          while (
            !(
              this.compare(
                this.itemOf(this.vars.translate, this.vars.listIi - 1),
                this.letterOf(/* no username */ "", this.vars.listI - 1)
              ) === 0
            )
          ) {
            this.vars.listIi++;
            yield;
          }
          if (this.toString(this.vars.listIi).length === 2) {
            this.vars.myUsername =
              this.toString(this.vars.myUsername) +
              this.toString(this.vars.listIi);
          } else {
            this.vars.myUsername =
              this.toString(this.vars.myUsername) +
              ("0" + this.toString(this.vars.listIi));
          }
          yield;
        }
      } else {
        this.vars.myUsername = "";
      }
    }
  }

  *updateUserList() {
    this.vars.user = [];
    this.vars.score = [];
    this.stage.vars.HighScoreList = [];
    if (
      this.compare(
        0,
        this.toString(this.stage.vars.ListUsernamesHighscore).length
      ) < 0
    ) {
      this.vars.listHelper = "";
      this.vars.listI = 1;
      while (!(this.compare(0, this.vars.listI) > 0)) {
        if (
          !(
            this.compare(
              this.toString(this.stage.vars.ListUsernamesHighscore).length,
              this.vars.listI
            ) < 0
          )
        ) {
          while (
            !(
              (this.toNumber(
                this.letterOf(
                  this.stage.vars.ListUsernamesHighscore,
                  this.vars.listI - 1
                )
              ) === 0 &&
                this.toNumber(
                  this.letterOf(
                    this.stage.vars.ListUsernamesHighscore,
                    this.toNumber(this.vars.listI)
                  )
                ) === 0) ||
              this.compare(
                this.toString(this.stage.vars.ListUsernamesHighscore).length,
                this.vars.listI
              ) < 0
            )
          ) {
            this.vars.listHelper =
              this.toString(this.vars.listHelper) +
              this.toString(
                this.itemOf(
                  this.vars.translate,
                  this.letterOf(
                    this.stage.vars.ListUsernamesHighscore,
                    this.vars.listI - 1
                  ) +
                    this.letterOf(
                      this.stage.vars.ListUsernamesHighscore,
                      this.toNumber(this.vars.listI)
                    ) -
                    1
                )
              );
            this.vars.listI += 2;
            yield;
          }
          if (
            !(
              this.compare(
                this.toString(this.stage.vars.ListUsernamesHighscore).length,
                this.vars.listI
              ) < 0
            )
          ) {
            this.vars.listI += 4;
            this.vars.user.push(this.vars.listHelper);
            this.vars.score.push(
              this.letterOf(
                this.stage.vars.ListUsernamesHighscore,
                this.vars.listI - 1
              )
            );
            this.stage.vars.HighScoreList.push(
              this.toString(this.vars.listHelper) +
                " - " +
                this.letterOf(
                  this.stage.vars.ListUsernamesHighscore,
                  this.vars.listI - 1
                )
            );
            for (
              let i = 0;
              i <
              this.toNumber(
                this.letterOf(
                  this.stage.vars.ListUsernamesHighscore,
                  this.toNumber(this.vars.listI) - 3
                ) +
                  this.letterOf(
                    this.stage.vars.ListUsernamesHighscore,
                    this.toNumber(this.vars.listI) - 2
                  )
              ) -
                1;
              i++
            ) {
              this.vars.listI++;
              this.vars.score.splice(
                "last",
                1,
                this.toString(
                  this.itemOf(this.vars.score, this.vars.score.length - 1)
                ) +
                  this.letterOf(
                    this.stage.vars.ListUsernamesHighscore,
                    this.vars.listI - 1
                  )
              );
              this.stage.vars.HighScoreList.splice(
                "last",
                1,
                this.toString(
                  this.itemOf(
                    this.stage.vars.HighScoreList,
                    this.stage.vars.HighScoreList.length - 1
                  )
                ) +
                  this.letterOf(
                    this.stage.vars.ListUsernamesHighscore,
                    this.vars.listI - 1
                  )
              );
              yield;
            }
            this.vars.listHelper = "";
            this.vars.listI++;
          } else {
            this.vars.listI = -1;
          }
        } else {
          this.vars.listI = -1;
        }
        yield;
      }
    }
    this.vars.listScrollVisual = this.stage.vars.HighScoreList.length;
    if (
      this.compare(
        this.vars.listShowMax,
        this.stage.vars.HighScoreList.length
      ) < 0
    ) {
      while (
        !!(
          this.compare(
            this.vars.listShowMax,
            this.stage.vars.HighScoreList.length
          ) < 0
        )
      ) {
        this.stage.vars.HighScoreList.splice(
          this.stage.vars.HighScoreList.length - 1,
          1
        );
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.HighScoreList.visible = false;
    yield* this.updateUserList();
    if (this.arrayIncludes(this.vars.user, /* no username */ "")) {
      this.vars.listIi = 0;
      while (
        !(
          this.compare(
            this.itemOf(this.vars.user, this.vars.listIi - 1),
            /* no username */ ""
          ) === 0
        )
      ) {
        this.vars.listIi++;
        yield;
      }
      this.stage.vars.userHighscore = this.itemOf(
        this.vars.score,
        this.vars.listIi - 1
      );
    }
  }

  *insertScoreAt(score, item) {
    this.vars.listHelper2 = "";
    this.vars.listIii = 1;
    for (let i = 0; i < this.toNumber(item) - 1; i++) {
      while (
        !(
          (this.toNumber(
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.vars.listIii - 1
            )
          ) === 0 &&
            this.toNumber(
              this.letterOf(
                this.stage.vars.ListUsernamesHighscore,
                this.toNumber(this.vars.listIii)
              )
            ) === 0) ||
          this.compare(
            this.toString(this.stage.vars.ListUsernamesHighscore).length,
            this.vars.listIii
          ) < 0
        )
      ) {
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          (this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          ) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii)
            ));
        this.vars.listIii += 2;
        yield;
      }
      if (
        !(
          this.compare(
            this.toString(this.stage.vars.ListUsernamesHighscore).length,
            this.vars.listIii
          ) < 0
        )
      ) {
        this.vars.listHelper2 = this.toString(this.vars.listHelper2) + "00";
        this.vars.listIii += 2;
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          (this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          ) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii)
            ));
        this.vars.listIii++;
        for (
          let i = 0;
          i <
          this.toNumber(
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii) - 2
            ) +
              this.letterOf(
                this.stage.vars.ListUsernamesHighscore,
                this.toNumber(this.vars.listIii) - 1
              )
          ) -
            0;
          i++
        ) {
          this.vars.listIii++;
          this.vars.listHelper2 =
            this.toString(this.vars.listHelper2) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.vars.listIii - 1
            );
          yield;
        }
        this.vars.listIii++;
      } else {
        this.vars.listIii = -1;
      }
      yield;
    }
    if (
      this.compare(this.toString(Math.round(this.toNumber(score))).length, 10) <
      0
    ) {
      this.vars.listHelper2 =
        this.toString(this.vars.listHelper2) +
        (this.toString(this.vars.myUsername) +
          "00" +
          ("0" +
            this.toString(
              this.toString(Math.round(this.toNumber(score))).length
            ) +
            this.toString(Math.round(this.toNumber(score)))));
    } else {
      if (
        this.compare(
          this.toString(Math.round(this.toNumber(score))).length,
          100
        ) < 0
      ) {
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          (this.toString(this.vars.myUsername) +
            "00" +
            (this.toString(
              this.toString(Math.round(this.toNumber(score))).length
            ) +
              this.toString(Math.round(this.toNumber(score)))));
      } else {
        yield* this.wait(0);
      }
    }
    while (!(this.compare(0, this.vars.listIii) > 0)) {
      if (
        !(
          this.compare(
            this.toString(this.stage.vars.ListUsernamesHighscore).length,
            this.vars.listIii
          ) < 0
        )
      ) {
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          );
        this.vars.listIii++;
      } else {
        this.vars.listIii = -2;
      }
      yield;
    }
    this.stage.vars.ListUsernamesHighscore = this.vars.listHelper2;
    this.vars.listHelper2 = "";
  }

  *removeUser(item) {
    this.vars.listHelper2 = "";
    this.vars.listIii = 1;
    for (let i = 0; i < this.toNumber(item) - 1; i++) {
      while (
        !(
          (this.toNumber(
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.vars.listIii - 1
            )
          ) === 0 &&
            this.toNumber(
              this.letterOf(
                this.stage.vars.ListUsernamesHighscore,
                this.toNumber(this.vars.listIii)
              )
            ) === 0) ||
          this.compare(
            this.toString(this.stage.vars.ListUsernamesHighscore).length,
            this.vars.listIii
          ) < 0
        )
      ) {
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          (this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          ) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii)
            ));
        this.vars.listIii += 2;
        yield;
      }
      if (
        !(
          this.compare(
            this.toString(this.stage.vars.ListUsernamesHighscore).length,
            this.vars.listIii
          ) < 0
        )
      ) {
        this.vars.listHelper2 = this.toString(this.vars.listHelper2) + "00";
        this.vars.listIii += 2;
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          (this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          ) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii)
            ));
        this.vars.listIii++;
        for (
          let i = 0;
          i <
          this.toNumber(
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii) - 2
            ) +
              this.letterOf(
                this.stage.vars.ListUsernamesHighscore,
                this.toNumber(this.vars.listIii) - 1
              )
          ) -
            0;
          i++
        ) {
          this.vars.listIii++;
          this.vars.listHelper2 =
            this.toString(this.vars.listHelper2) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.vars.listIii - 1
            );
          yield;
        }
        this.vars.listIii++;
      } else {
        this.vars.listIii = -1;
      }
      yield;
    }
    while (
      !(
        (this.toNumber(
          this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          )
        ) === 0 &&
          this.toNumber(
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii)
            )
          ) === 0) ||
        this.compare(
          this.toString(this.stage.vars.ListUsernamesHighscore).length,
          this.vars.listIii
        ) < 0
      )
    ) {
      this.vars.listIii += 2;
      yield;
    }
    if (
      !(
        this.compare(
          this.toString(this.stage.vars.ListUsernamesHighscore).length,
          this.vars.listIii
        ) < 0
      )
    ) {
      this.vars.listIii += 2;
      this.vars.listIii++;
      for (
        let i = 0;
        i <
        this.toNumber(
          this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.toNumber(this.vars.listIii) - 2
          ) +
            this.letterOf(
              this.stage.vars.ListUsernamesHighscore,
              this.toNumber(this.vars.listIii) - 1
            )
        ) -
          0;
        i++
      ) {
        this.vars.listIii++;
        yield;
      }
      this.vars.listIii++;
    } else {
      this.vars.listIii = -1;
    }
    while (!(this.compare(0, this.vars.listIii) > 0)) {
      if (
        !(
          this.compare(
            this.toString(this.stage.vars.ListUsernamesHighscore).length,
            this.vars.listIii
          ) < 0
        )
      ) {
        this.vars.listHelper2 =
          this.toString(this.vars.listHelper2) +
          this.letterOf(
            this.stage.vars.ListUsernamesHighscore,
            this.vars.listIii - 1
          );
        this.vars.listIii++;
      } else {
        this.vars.listIii = -2;
      }
      yield;
    }
    this.stage.vars.ListUsernamesHighscore = this.vars.listHelper2;
    this.vars.listHelper2 = "";
  }

  *whenIReceiveGameDeleteuserscore() {
    yield* this.updateUserList();
    yield* this.askAndWait("Enter users username to delete");
    if (this.arrayIncludes(this.vars.user, this.answer)) {
      while (!!this.arrayIncludes(this.vars.user, this.answer)) {
        this.vars.listIi = 0;
        while (
          !(
            this.compare(
              this.itemOf(this.vars.user, this.vars.listIi - 1),
              this.answer
            ) === 0
          )
        ) {
          this.vars.listIi++;
          yield;
        }
        yield* this.removeUser(this.vars.listIi);
        yield* this.updateUserList();
        yield;
      }
    }
  }

  *whenIReceiveGameReset() {
    this.stage.vars.userScore = 0;
    this.stage.vars.userPoints = 0;
    this.stage.vars.userHighscore = 0;
    yield* this.resetScore();
    yield* this.addNewScoreSortedByHighScore(0);
    yield* this.updateUserList();
  }

  *resetScore() {
    this.stage.vars.ListUsernamesHighscore = "";
    this.vars.user = [];
    this.vars.score = [];
  }

  *addNewScoreSortedByHighScore(score) {
    if (
      this.compare(
        this.toString(Math.abs(Math.round(this.toNumber(score)))).length,
        17
      ) < 0
    ) {
      if (!(this.toNumber(this.vars.myUsername) === 0)) {
        yield* this.updateUserList();
        if (this.vars.score.length === 0) {
          yield* this.addNewScoreSortedByTime(
            Math.abs(Math.round(this.toNumber(score)))
          );
        } else {
          this.vars.listIi = 1;
          while (
            !(
              this.compare(this.vars.score.length, this.vars.listIi) < 0 ||
              this.compare(
                Math.abs(Math.round(this.toNumber(score))),
                this.itemOf(this.vars.score, this.vars.listIi - 1)
              ) > 0
            )
          ) {
            this.vars.listIi++;
            yield;
          }
          if (this.compare(this.vars.score.length, this.vars.listIi) < 0) {
            yield* this.addNewScoreSortedByTime(
              Math.abs(Math.round(this.toNumber(score)))
            );
          } else {
            yield* this.insertScoreAt(
              Math.abs(Math.round(this.toNumber(score))),
              this.vars.listIi
            );
            yield* this.updateUserList();
          }
        }
      } else {
        yield* this.wait(0);
      }
    }
  }

  *addNewScoreSortedByTime(score) {
    if (
      this.compare(
        this.toString(Math.abs(Math.round(this.toNumber(score)))).length,
        17
      ) < 0
    ) {
      if (!(this.toNumber(this.vars.myUsername) === 0)) {
        if (
          this.compare(
            this.toString(Math.abs(Math.round(this.toNumber(score)))).length,
            10
          ) < 0
        ) {
          this.stage.vars.ListUsernamesHighscore =
            this.toString(this.stage.vars.ListUsernamesHighscore) +
            (this.toString(this.vars.myUsername) +
              "00" +
              ("0" +
                this.toString(
                  this.toString(Math.abs(Math.round(this.toNumber(score))))
                    .length
                ) +
                this.toString(Math.abs(Math.round(this.toNumber(score))))));
          yield* this.updateUserList();
        } else {
          if (
            this.compare(
              this.toString(Math.abs(Math.round(this.toNumber(score)))).length,
              100
            ) < 0
          ) {
            this.stage.vars.ListUsernamesHighscore =
              this.toString(this.stage.vars.ListUsernamesHighscore) +
              (this.toString(this.vars.myUsername) +
                "00" +
                (this.toString(
                  this.toString(Math.abs(Math.round(this.toNumber(score))))
                    .length
                ) +
                  this.toString(Math.abs(Math.round(this.toNumber(score))))));
            yield* this.updateUserList();
          } else {
            yield* this.wait(0);
          }
        }
      } else {
        yield* this.wait(0);
      }
    }
    this.stage.vars.ListUsernamesHighscore = this.stage.vars.ListUsernamesHighscore;
  }

  *updateRankingListWithScoreSortedByHighScore(score) {
    if (
      this.compare(
        this.toString(Math.abs(Math.round(this.toNumber(score)))).length,
        17
      ) < 0
    ) {
      if (!(this.toNumber(this.vars.myUsername) === 0)) {
        yield* this.updateUserList();
        if (this.vars.score.length === 0) {
          yield* this.addNewScoreSortedByTime(
            Math.abs(Math.round(this.toNumber(score)))
          );
        } else {
          if (this.arrayIncludes(this.vars.user, /* no username */ "")) {
            this.vars.listIi = 0;
            while (
              !(
                this.compare(
                  this.itemOf(this.vars.user, this.vars.listIi - 1),
                  /* no username */ ""
                ) === 0
              )
            ) {
              this.vars.listIi++;
              yield;
            }
            yield* this.removeUser(this.vars.listIi);
          }
          this.vars.listIi = 1;
          while (
            !(
              this.compare(this.vars.score.length, this.vars.listIi) < 0 ||
              this.compare(
                Math.abs(Math.round(this.toNumber(score))),
                this.itemOf(this.vars.score, this.vars.listIi - 1)
              ) > 0
            )
          ) {
            this.vars.listIi++;
            yield;
          }
          if (this.compare(this.vars.score.length, this.vars.listIi) < 0) {
            yield* this.addNewScoreSortedByTime(
              Math.abs(Math.round(this.toNumber(score)))
            );
          } else {
            yield* this.insertScoreAt(
              Math.abs(Math.round(this.toNumber(score))),
              this.vars.listIi
            );
            yield* this.updateUserList();
          }
        }
      } else {
        yield* this.wait(0);
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.listShowMax = 100;
    yield* this.setUsername();
    yield* this.updateUserList();
    if (this.compare(this.vars.user.length, 200) > 0) {
      yield* this.updateUserList();
      while (
        !(
          this.compare(this.vars.user.length, 200) < 0 ||
          this.vars.user.length === 200
        )
      ) {
        this.vars.lastUser = this.itemOf(
          this.vars.user,
          this.vars.user.length - 1
        );
        while (!!this.arrayIncludes(this.vars.user, this.vars.lastUser)) {
          this.vars.listIi = 0;
          while (
            !(
              this.compare(
                this.itemOf(this.vars.user, this.vars.listIi - 1),
                this.vars.lastUser
              ) === 0
            )
          ) {
            this.vars.listIi++;
            yield;
          }
          yield* this.removeUser(this.vars.listIi);
          yield* this.updateUserList();
          yield;
        }
        yield;
      }
    }
    if (1 === 0) {
      yield* this.setUsername();
      yield* this.updateUserList();
      yield* this.resetScore();
      yield* this.addNewScoreSortedByTime(1);
      yield* this.addNewScoreSortedByHighScore(1);
      yield* this.updateRankingListWithScoreSortedByHighScore(1);
    }
  }

  *whenIReceiveGameOver() {
    if (!(/* no username */ "" === "HyperPixel")) {
      yield* this.updateUserList();
      if (this.compare(this.stage.vars.userHighscore, 0) > 0) {
        yield* this.updateRankingListWithScoreSortedByHighScore(0);
        if (this.arrayIncludes(this.vars.user, /* no username */ "")) {
          this.vars.listIi = 0;
          while (
            !(
              this.compare(
                this.itemOf(this.vars.user, this.vars.listIi - 1),
                /* no username */ ""
              ) === 0
            )
          ) {
            this.vars.listIi++;
            yield;
          }
          if (
            this.compare(
              this.itemOf(this.vars.score, this.vars.listIi - 1),
              this.stage.vars.userHighscore
            ) < 0
          ) {
            yield* this.updateRankingListWithScoreSortedByHighScore(
              this.stage.vars.userHighscore
            );
          }
        }
      }
      yield* this.updateUserList();
    }
  }

  *whenIReceiveHighscoreScrolldown() {
    if (
      this.compare(
        this.stage.vars.HighScoreList.length,
        this.vars.listScrollVisual
      ) > 0
    ) {
      this.vars.listScrollVisual++;
      if (
        this.toNumber(
          this.itemOf(
            this.stage.vars.HighScoreList,
            this.vars.listScrollVisual - 1
          )
        ) === 0
      ) {
        0;
      }
    }
  }

  *whenIReceiveHighscoreScrollup() {
    if (this.compare(1, this.vars.listScrollVisual) < 0) {
      this.vars.listScrollVisual--;
      if (
        this.toNumber(
          this.itemOf(
            this.stage.vars.HighScoreList,
            this.vars.listScrollVisual - 1
          )
        ) === 0
      ) {
        0;
      }
    }
  }

  *whenIReceiveHideHighscores() {
    this.stage.watchers.HighScoreList.visible = false;
  }

  *whenIReceiveShowHighscores() {
    yield* this.updateUserList();
    this.stage.watchers.HighScoreList.visible = true;
    this.vars.listScrollVisual = 1;
  }
}
