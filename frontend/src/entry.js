import loadSamples from './loadSamples';
import DrumMachine from './drumMachine';
import { getTempoFromKnob } from './util';
import setUpUI from './ui';

let step1 = { kick: true };
let step2 = { ch: true };
let step3 = { ch: true };
let step4 = { ch: true };
let step5 = { kick: true, clap: true };
let step6 = { ch: true };
let step7 = { ch: true };
let step8 = { clap: true };

function logKnobValue(){
  console.log(this.value)
}

document.addEventListener("DOMContentLoaded", () => {
  const knob = document.querySelector("input-knob");
  // knob.getTempoFromKnob = getTempoFromKnob.bind(this)
  knob.addEventListener("knob-move-end", () => {
    // const internalKnob = knob;
    const stringToNum = parseFloat(knob.value);
    console.log(getTempoFromKnob(stringToNum))
  })
  setUpUI(drumMachine);

  let bd = document.getElementsByClassName('drum-cell-button');

  bd.onclick = function () {
    playSound(drumMachine.drums.bd);
  };

  let steps = [step1, step2, step3, step4, step5, step6, step7, step8];

  // setInterval(play, 125, howls, steps, stepNum)

  function play(howls, steps) {
    let step = stepNum % 8;
    stepNum++;
    // console.log(step)

    for (let keys in steps[step]) {
      howls[keys].play();
    }
  }

});

function playSound(howl){
  howl.play();
}