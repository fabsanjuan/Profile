import { TorusGeometry, PointsMaterial, Points } from 'three';

function createTorus() {
    const geometry = new TorusGeometry(2, 0.5, 12, 48);
    const material = new PointsMaterial({color: 'navajowhite', size: 0.05});
    const torus = new Points(geometry, material);
    torus.position.set(0, 0, 0);

    // Set torus animation.
    torus.tick = (delta) => {
        torus.rotation.y += (0.2 * delta);
    }

    return torus;   
}
export { createTorus };