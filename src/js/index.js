import { World } from './world/World.js';

function main() {
    const container = document.querySelector('#scene-container');  // Target the html element that holds the scene.
    const world = new World(container);  // Create instance of world and render the scene on the html container.
    world.start();
}
main();