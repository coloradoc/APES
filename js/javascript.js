document.addEventListener("DOMContentLoaded", () => {
    const sheep = document.getElementById('blue-sheep');
    const leopard = document.getElementById('snow-leopard');


    const startSheepAnimation = () =>{
        sheep.style.animation = 'moveSheep 3s ease-in-out';
    }
    const startLeopardAnimation = () =>{
        leopard.style.animation = 'moveLeopard 4s ease-in-out';
    }

    startSheepAnimation();
    startLeopardAnimation();



    // Add an event listener for the end of the leopard animation
    leopard.addEventListener('animationend', () => {
        // Reset both animations
        sheep.style.display = 'inline';
        sheep.style.animation = 'none';
        leopard.style.animation = 'none';
        sheep.offsetHeight; // Trigger reflow
        leopard.offsetHeight; // Trigger reflow
        startSheepAnimation(); // Start the sheep animation again
        startLeopardAnimation();


    });

    // Add an event listener for the end of the leopard animation
    sheep.addEventListener('animationend', () => {
        // Reset both animations
        sheep.style.display = 'none';
        console.log("hide")
    });
});