const btn = document.getElementById('btnMotor');
const vel = document.getElementById('velocimetro');
btn.addEventListener('click', () => {
 vel.textContent = "Velocidad: 20 km/h (Marcha mínima)";
 btn.style.backgroundColor = "#10b981";
});