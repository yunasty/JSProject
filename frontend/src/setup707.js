export function populateSliders(drumMachine){
  const slidersContainer = document.getElementById("sliders");
  const drums = drumMachine.drums;
  console.log(slidersContainer);

  drums.forEach((drum) => {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.value = 
    slidersContainer.appendChild();
  })
}

function linkSliderToDrumMachine(drumMachine, drumName){

}