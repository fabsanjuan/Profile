import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createTorus } from './components/torus.js';
import { createParticles } from './components/particles.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';


// private variable implementation.
let scene;
let camera;
let renderer;
let loop;

class World {
    constructor(container) {
        // Scene
        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();
        loop = new Loop(scene, camera, renderer);

        container.append(renderer.domElement);
        const light = createLights();

        // Objects
        const torus = createTorus();
        const particles = createParticles();
        loop.updateTables.push(torus, particles);
        scene.add(torus, particles, light);

        // 
        const resizer = new Resizer(container, camera, renderer);
    }
    render() {
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}

export { World };