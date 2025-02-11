function create3DModel(canvasID) {
    const canvas = document.getElementById(canvasID);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    renderer.setSize(200, 200);
    camera.position.z = 3;

    // 3D Object (Cube)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 1, roughness: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(2, 2, 5);
    scene.add(light);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

create3DModel("canvas1");
create3DModel("canvas2");
create3DModel("canvas3");
