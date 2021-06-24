// UI functions must hook into the state of the drum machine
import { keysForDrums } from "./config";

export default function setupUI(drumMachine) {
  bindSoundsToCells(drumMachine);
  bindTransportControls(drumMachine);
}

function bindTransportControls(drumMachine) {
  let startStopButton = document.getElementsByClassName("start-stop-button")[0];
  startStopButton.onclick = () => drumMachine.togglePlay();
  let editButton = document.getElementsByClassName("edit-button")[0];
  editButton.onclick = () => drumMachine.toggleEdit();
}

function bindSoundsToCells(drumMachine) {
  let drumCellButtons = Array.from(
    document.getElementsByClassName("drum-cell-button")
  );
  drumCellButtons.forEach((drum, i) => {
    if (drum.id !== "") {
      drum.onclick = mapSoundToCell(drumMachine, drum);
      mapSoundToKey(drumMachine, drum.id, keysForDrums[i]);
      // drum.onclick = function () {
      //   if (!drumMachine.editing) {
      //     drumMachine.setCurrentSound(drum.id);
      //     drumMachine.playSound(drumMachine.drums[drum.id]);
      //   }else{
      //     drumMachine
      //   }

      // };
    }
  });
}

function mapSoundToCell(drumMachine, drum) {
  const drumId = drum.id;
  const drumNum = drum.getAttribute("num");
  return function () {
    if (!drumMachine.editing) {
      drumMachine.setCurrentSound(drumId);
      drumMachine.playSound(drumMachine.drums[drumId]);
    } else {
      // in the case that the drumMachine is in edit mode, when drum cells are
      // clicked they should toggle the `currentSound` in the stepContainer
      // corresponding to the cell that was clicked on
      // ex. If i click on the 5th step cell while in edit mode, the `currentSound`
      // should be toggled for the 5th stepContainer in the sequencer
      // drumMachine
      // console.log("bang");
      drumMachine.toggleStep(drumNum)
    }
  };
}

function mapToggleToCell(drumMachine, drumNum) {
  let currentStep = drumMachine.sequencer[drumNum];
  currentStep[drumMachine.currentSound] =
    !currentStep[drumMachine.currentSound];
    
  console.log(currentStep);
}

function mapSoundToKey(drumMachine, drumName, key) {
  addEventListener("keydown", function (e) {
    if (e.key === key) {
      drumMachine.playSound(drumMachine.drums[drumName]);
    }
  });
}
