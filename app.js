const btn = document.getElementById('btnMotor');
const vel = document.getElementById('velocimetro');
btn.addEventListener('click', () => {
 vel.textContent = "Velocidad: 20 km/h (Marcha mínima)";
 btn.style.backgroundColor = "#10b981";
});
// Estudiante B activa luces
const luces = document.getElementById('luces');
luces.style.backgroundColor = "#eab308";
luces.style.color = "#000000";
luces.textContent = "Luces: Encendidas (Modo Niebla)";