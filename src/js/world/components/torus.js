import { TorusGeometry, PointsMaterial, Points } from 'three';

function createTorus() {
    const geometry = new TorusGeometry(2, 0.5, 12, 48);
    const material = new PointsMaterial({color: 'white', size: 0.05});
    const torus = new Points(geometry, material);

    // Set torus animation.
    torus.tick = (delta) => {
        torus.rotation.y += (0.2 * delta);
    }

    return torus;   
}
export { createTorus };