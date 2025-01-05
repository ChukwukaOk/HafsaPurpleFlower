document.querySelector('.flower').addEventListener('mousemove', (e) => {
    const petals = document.querySelectorAll('.petal');
    const center = document.querySelector('.center');
    
    // Calculate distance from center of flower
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - 100;
    const y = e.clientY - rect.top - 100;
    
    // Make petals follow mouse slightly
    petals.forEach((petal, index) => {
        const angle = (index * 60) * Math.PI / 180;
        const offsetX = Math.cos(angle) * (x * 0.1);
        const offsetY = Math.sin(angle) * (y * 0.1);
        petal.style.transform = `rotate(${index * 60}deg) translate(${offsetX}px, ${offsetY}px)`;
    });
    
    // Make center glow stronger on hover
    center.style.boxShadow = `0 0 30px #8b00ff`;
});

document.querySelector('.flower').addEventListener('mouseleave', () => {
    const petals = document.querySelectorAll('.petal');
    const center = document.querySelector('.center');
    
    // Reset petals position
    petals.forEach((petal, index) => {
        petal.style.transform = `rotate(${index * 60}deg)`;
    });
    
    // Reset center glow
    center.style.boxShadow = `0 0 20px #8b00ff`;
});
