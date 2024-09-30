/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

window.onerror = function (message, url, line) {
    alert(message + ', ' + url + ', ' + line);
  };


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}




var water = document.getElementById("water")
var body = document.getElementById("body")
var waterTimeout = false

// Your initialization code here

$("#scouter").on("click touch", () => {


    var wavetimer
    var falltimer
    falltimer = setInterval(fallbottom, 1000/20)

    setTimeout(() => {
        clearInterval(wavetimer)
        clearInterval(falltimer)

    }, 3000);
  
    setTimeout(() => {
        wavetimer = setInterval(wave, 1000 / 6);
        $(".water").css("animation-name", "rising")
        $("#flw1").css("animation-name", 'toLeftWave')
        $("#flw2").css("animation-name", "toRightWave")
        
    }, 200);
})

$("#scoutLead").on("click touch", () => {


    var wavetimer
    var falltimer
    falltimer = setInterval(fall, 1000/20)

    setTimeout(() => {
        clearInterval(wavetimer)
        clearInterval(falltimer)

    }, 3000);
  
    setTimeout(() => {
        wavetimer = setInterval(wave, 1000 / 6);
        $(".water").css("animation-name", "rising")
        $("#flw1").css("animation-name", 'toLeftWave')
        $("#flw2").css("animation-name", "toRightWave")
        
    }, 600);
})
function fall(){
    let faller = document.createElement("div")
    faller.className = "waterFaller"
    faller.style.top = $("#scoutLead").offset().top + "px"
    faller.style.left = ($("#scoutLead").offset().left + $("#scoutLead").width()/2) + "px"
    body.appendChild(faller)
    setTimeout(() => { body.removeChild(faller) }, 1000)
}
function fallbottom(){
    let faller = document.createElement("div")
    faller.className = "waterFaller"
    faller.style.top = $("#scouter").offset().top + "px"
    faller.style.left = ($("#scouter").offset().left + $("#scouter").width()/2) + "px"
    body.appendChild(faller)
    setTimeout(() => { body.removeChild(faller) }, 1000)
}


function wave() {
    
    
    leftSpn = $("#flw1").offset().left
    rightSpn = $("#flw2").offset().left
    let waterSection = document.createElement("div")
    waterSection.className = "waterElem"
    waterSection.style.left = leftSpn + "px"
    water.appendChild(waterSection)
    setTimeout(() => { water.removeChild(waterSection) }, 2000)

    let waterSection2 = document.createElement("div")
    waterSection2.className = "waterElem"
    waterSection2.style.left = rightSpn + "px"
    water.appendChild(waterSection2)
    setTimeout(() => { water.removeChild(waterSection2) }, 2000)
    // let waterSection = $("<div>").appendTo(".water").ad

    

}

// window.addEventListener("mousemove", (event)=>{
//     let waterSection = document.createElement("div")
//     waterSection.className = "waterElem"
//     waterSection.style.left = event.clientX + "px"
//     water.appendChild(waterSection)
//     setTimeout(()=>{water.removeChild(waterSection)}, 2000)
//     // let waterSection = $("<div>").appendTo(".water").addClass("waterElem").css("left", "" + event.clientX + "px")
//     // setTimeout(()=>{ waterSection.remove()},2000)
// })

