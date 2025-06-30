const container = document.getElementById('zoomContainer');
let scale = 1;
const scaleFactor = 0.1; // Adjust zoom increment

container.addEventListener('wheel', (event) => {
    event.preventDefault();
    // Zoom in/out based on wheel direction
    scale += event.deltaY * -0.001;
    // Limit zoom levels
    scale = Math.min(Math.max(0.5, scale), 3); // Between 50% and 300%
    container.style.transform = `rotateX(10deg) rotateY(5deg) scale(${scale})`;
});

// Optional: Add touch zoom (pinch to zoom) for mobile
let lastTouchDistance = null;
container.addEventListener('touchmove', (event) => {
    event.preventDefault();
    if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const currentDistance = Math.hypot(touch2.pageX - touch1.pageX, touch2.pageY - touch1.pageY);

        if (lastTouchDistance) {
            const delta = currentDistance - lastTouchDistance;
            scale += delta * 0.001;
            scale = Math.min(Math.max(0.5, scale), 3);
            container.style.transform = `rotateX(10deg) rotateY(5deg) scale(${scale})`;
        }
        lastTouchDistance = currentDistance;
    }
});

container.addEventListener('touchend', () => {
    lastTouchDistance = null;
});
