import {PerspectiveCamera} from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        35,  // fov
        1,  //aspect ratio
        0.1,  // near clip
        100,  // far clip
    );
    camera.position.set(0, 0, 13);
    return camera;
}
export {createCamera};