AFRAME.registerComponent('rotate', {
    schema: { type: 'selector' },

    init: function () { },

    tick: function () {
        this.el.object3D.rotation.y += 0.01;
    }
})

let marker;
AFRAME.registerComponent('hide-if-marker-not-visible', {


    init: function () {
        // Set up the tick throttling.
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);

        marker = document.querySelector("a-marker")
    },

    /**
     * Tick function that will be wrapped to be throttled.
     */
    tick: function (t, dt) {

        if (marker.object3D.visible == true) {
            // MARKER IS PRESENT
            this.el.object3D.visible = true;
        } else {
            // MARKER IS HIDDEN
            this.el.object3D.visible = false;

        }
    }
});