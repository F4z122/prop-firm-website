document.addEventListener("DOMContentLoaded", function () {
    // Hero Slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
    });

    // GSAP Animations
    gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".hero-content p", { duration: 1.5, y: -30, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from(".hero-content .btn", { duration: 2, scale: 0.5, opacity: 0, delay: 1, ease: "elastic" });

    // 3D Cash Model
    function create3DModel(canvasId) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(150, 150);
        document.getElementById(canvasId).appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        const loader = new THREE.GLTFLoader();
        loader.load('cash.glb', function (gltf) {
            const model = gltf.scene;
            model.scale.set(2, 2, 2);
            scene.add(model);
            
            function animate() {
                requestAnimationFrame(animate);
                model.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();
        });

        camera.position.z = 5;
    }

    create3DModel('cash-10k');
    create3DModel('cash-50k');
    create3DModel('cash-100k');
});
