      AFRAME.registerComponent("distance", {
        init: function () {
          this.cam = document.querySelector("[camera]");
          this.phoenix1 = document.querySelector("#phoenix1");
          this.text = document.querySelector("#textz");
        },
        tick: function () {
          let camPos = this.cam.object3D.position;
          let phoenix1pos = this.phoenix1.object3D.position;
          let distance = camPos.distanceTo(phoenix1pos).toFixed(2); // Round to 2 decimal places
          this.text.setAttribute("value", "Distance: " + distance + " meters");
        },
      });
