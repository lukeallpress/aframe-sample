  AFRAME.registerComponent("change-height", {
      init: function() {
          var player = document.querySelector("a-camera")
          window.addEventListener("keydown", (e) => {
              if (e.code === "KeyR") {
                  var pos = player.getAttribute("position")
                  pos.y += 1;
                  player.setAttribute("position", pos);
              }
          })
      }
  })


  AFRAME.registerComponent('change-color-on-hover', {
      schema: {
          color: { default: 'red' }
      },

      init: function() {
          var data = this.data;
          var el = this.el; // <a-box>
          var defaultColor = el.getAttribute('material').color;

          el.addEventListener('mouseenter', function() {
              el.setAttribute('color', data.color);
              var pos = document.querySelector("a-camera").getAttribute("position")
          });

          el.addEventListener('mouseleave', function() {
              el.setAttribute('color', defaultColor);
          });
      }
  });

  AFRAME.registerComponent('reset', {
      init: function() {
          var el = this.el;
          var player = document.querySelector("a-camera")

          el.addEventListener('collide', function() {
              player.setAttribute("position", "-25.018 2.106 28.03");
          });
      }
  });
  
  var playerEl = document.querySelector('[camera]');
playerEl.addEventListener('collide', function (e) {
    console.log("boom")
})
  