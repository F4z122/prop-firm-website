function create3DModel(canvasId) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(150, 150);

    const canvas = document.getElementById(canvasId);
    if (canvas) {
        canvas.innerHTML = ""; // Clear any existing content
        canvas.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry(1, 0.5, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cash = new THREE.Mesh(geometry, material);
    scene.add(cash);

    camera.position.z = 2;

    function animate() {
        requestAnimationFrame(animate);
        cash.rotation.y += 0.02;
        renderer.render(scene, camera);
    }

    animate();
}

// Call this function for each canvas element
document.addEventListener("DOMContentLoaded", function () {
    create3DModel("canvas-id"); // Replace "canvas-id" with your actual HTML element ID
});
