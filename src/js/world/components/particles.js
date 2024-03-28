import { MathUtils, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points } from "three";

function createParticles() {
    const particleCoords = [];

    for (let i = 0; i < 2500; i++) {
        const x = MathUtils.randFloatSpread(10);
        const y = MathUtils.randFloatSpread(10);
        const z = MathUtils.randFloatSpread(10);
        particleCoords.push(x, y, z);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(particleCoords, 3));
    const material = new PointsMaterial({color: 'white', size: 0.01})
    const particles = new Points(geometry, material);

    particles.tick = (delta) => {
        particles.rotation.x += (0.01 * delta);
        particles.rotation.y += -(0.007 * delta);
    }

    return particles;
}
export { createParticles };
