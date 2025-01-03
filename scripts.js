// Tworzenie gwiazd w tle
function createStars() {
    const starsCount = 100;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Losowe pozycje
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Losowa animacja migotania
        star.style.animation = `twinkle-star ${Math.random() * 3 + 2}s infinite`;
        
        document.body.appendChild(star);
    }
}

// Inicjalizacja przy załadowaniu strony
document.addEventListener('DOMContentLoaded', createStars);