import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bird from "./Bird/Bird.js";
import Pipe from "./Pipe/Pipe.js";
import Ground from "./Ground/Ground.js";
import Ground2 from "./Ground2/Ground2.js";
import ButtonStart2 from "./ButtonStart2/ButtonStart2.js";
import ButtonScore from "./ButtonScore/ButtonScore.js";
import ButtonOk from "./ButtonOk/ButtonOk.js";
import ButtonOk2 from "./ButtonOk2/ButtonOk2.js";
import ButtonRate from "./ButtonRate/ButtonRate.js";
import ButtonMod from "./ButtonMod/ButtonMod.js";
import ButtonUp from "./ButtonUp/ButtonUp.js";
import ButtonDown from "./ButtonDown/ButtonDown.js";
import ButtonLeft from "./ButtonLeft/ButtonLeft.js";
import ButtonRight from "./ButtonRight/ButtonRight.js";
import ButtonLeft2 from "./ButtonLeft2/ButtonLeft2.js";
import ButtonRight2 from "./ButtonRight2/ButtonRight2.js";
import ButtonSettings from "./ButtonSettings/ButtonSettings.js";
import Volume from "./Volume/Volume.js";
import NewHighscore from "./NewHighscore/NewHighscore.js";
import Scoreboard from "./Scoreboard/Scoreboard.js";
import Sparkle from "./Sparkle/Sparkle.js";
import Tapinfo from "./Tapinfo/Tapinfo.js";
import Title from "./Title/Title.js";
import GameScore from "./GameScore/GameScore.js";
import Score from "./Score/Score.js";
import SettingsBird from "./SettingsBird/SettingsBird.js";
import GameTime from "./GameTime/GameTime.js";
import Background from "./Background/Background.js";
import Effects from "./Effects/Effects.js";
import Rate from "./Rate/Rate.js";
import Copyleft from "./Copyleft/Copyleft.js";
import Version from "./Version/Version.js";
import Logo from "./Logo/Logo.js";
import ReadMe from "./ReadMe/ReadMe.js";
import _ from "./_/_.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bird: new Bird({
    x: 100,
    y: 52,
    direction: 90,
    costumeNumber: 11,
    size: 100,
    visible: true,
    layerOrder: 21
  }),
  Pipe: new Pipe({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Ground: new Ground({
    x: -129,
    y: -161,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  }),
  Ground2: new Ground2({
    x: 350.5,
    y: -161,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 27
  }),
  ButtonStart2: new ButtonStart2({
    x: -75,
    y: -95,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  }),
  ButtonScore: new ButtonScore({
    x: 75,
    y: -95,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 31
  }),
  ButtonOk: new ButtonOk({
    x: -75,
    y: -95,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  ButtonOk2: new ButtonOk2({
    x: 0,
    y: -115,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  ButtonRate: new ButtonRate({
    x: 75,
    y: -60,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 25
  }),
  ButtonMod: new ButtonMod({
    x: -75,
    y: -60,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  ButtonUp: new ButtonUp({
    x: 206,
    y: 45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  ButtonDown: new ButtonDown({
    x: 206,
    y: 5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  ButtonLeft: new ButtonLeft({
    x: -90,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  ButtonRight: new ButtonRight({
    x: 100,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  ButtonLeft2: new ButtonLeft2({
    x: -90,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  ButtonRight2: new ButtonRight2({
    x: 100,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  ButtonSettings: new ButtonSettings({
    x: -200,
    y: -168,
    direction: 90,
    costumeNumber: 1,
    size: 35,
    visible: true,
    layerOrder: 34
  }),
  Volume: new Volume({
    x: -224,
    y: -168,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 32
  }),
  NewHighscore: new NewHighscore({
    x: 39,
    y: -7,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Scoreboard: new Scoreboard({
    x: 0,
    y: -220,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Sparkle: new Sparkle({
    x: -76,
    y: -24,
    direction: 90,
    costumeNumber: 3,
    size: 70,
    visible: false,
    layerOrder: 24
  }),
  Tapinfo: new Tapinfo({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Title: new Title({
    x: -23,
    y: 52,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 30
  }),
  GameScore: new GameScore({
    x: 0,
    y: 140,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 35
  }),
  Score: new Score({
    x: 0,
    y: 140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 36
  }),
  SettingsBird: new SettingsBird({
    x: -2,
    y: -10,
    direction: 90,
    costumeNumber: 16,
    size: 200,
    visible: false,
    layerOrder: 15
  }),
  GameTime: new GameTime({
    x: 0,
    y: 75,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Background: new Background({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Effects: new Effects({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 37
  }),
  Rate: new Rate({
    x: 6,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Copyleft: new Copyleft({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Version: new Version({
    x: 220,
    y: -169,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 33
  }),
  Logo: new Logo({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 26
  }),
  ReadMe: new ReadMe({
    x: -51,
    y: 13,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  _: new _({
    x: -198,
    y: -167,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 7
  }),
  _2: new _2({
    x: -88,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  _3: new _3({
    x: 68,
    y: -18,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
