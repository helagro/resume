const unscramble = s => atob(s.slice(0, Math.floor(s.length / 2)).split("").reverse().join("") + s.slice(Math.floor(s.length / 2)))

document.getElementById("32649").textContent = unscramble("XdvB0bydWYsVGaRsb29rLmNvbQ==")

