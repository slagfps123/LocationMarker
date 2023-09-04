//     AFRAME.registerComponent("distance", {
//       init: function () {
//         this.cam = document.querySelector("[camera]");
//          this.phoenix1 = document.querySelector("#phoenix1");
//          this.text = document.querySelector("#textz");
//        },
//        tick: function () {
//          let camPos = this.cam.object3D.position;
//          let phoenix1pos = this.phoenix1.object3D.position;
//          let distance = camPos.distanceTo(phoenix1pos).toFixed(2); // Round to 2 decimal places
//          this.text.setAttribute("value", "Distance: " + distance + " meters");
//        },
//      });

AFRAME.registerComponent("distance", {
    init: function () {
        const markerVideo1 = this.el;
        const objectPhoenix = document.getElementById("phoenix1");
        const gokuVid = document.getElementById("gokuvid");
        this.cam = document.querySelector("[camera]")
        this.phoenix1 = document.querySelector("#phoenix1")

        // When the marker is found, the `markerFound` event is triggered
        markerVideo1.addEventListener("markerFound", (event) => {
            console.log("Marker found: Phoenix1");
            // Perform actions when the marker is found
            let camPos = this.cam.object3D.position
            let phoenix1pos = this.phoenix1.object3D.position
            let distance = camPos.distanceTo(phoenix1pos)
            document.getElementById("distancetext").innerHTML=distance;
            console.log("Distance from Camera to Marker is " + distance);
        });
        // When the marker is lost, the `markerLost` event is triggered
        markerVideo1.addEventListener("markerLost", (event) => {
            console.log("Marker lost: Phoenix1");
        });
      
    }
});
