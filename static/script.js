let animationSpeed = 250; // default speed (ms)

// Update speed dynamically
const speedSlider = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");

if (speedSlider) {
  speedSlider.addEventListener("input", function () {
    animationSpeed = parseInt(this.value);
    speedValue.textContent = `${animationSpeed} ms`;
  });
}

async function visualize() {
  const input = document.getElementById("arrayInput").value;
  const numbers = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));

  if (numbers.length === 0) {
    alert("Please enter valid numbers separated by commas!");
    return;
  }

  const response = await fetch("/visualize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ array: numbers, algorithm: "bubble" })
  });

  const data = await response.json();
  const steps = data.steps;
  const container = document.getElementById("barsContainer");
  container.innerHTML = "";

  // Create bars initially
  numbers.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = value * 4 + "px";
    container.appendChild(bar);
  });

  const bars = document.getElementsByClassName("bar");

  // Animate each step
  for (let i = 0; i < steps.length; i++) {
    await new Promise(r => setTimeout(r, animationSpeed)); // adjustable speed

    const step = steps[i];

    for (let j = 0; j < bars.length; j++) {
      bars[j].style.height = step[j] * 4 + "px";
      bars[j].style.background = "#2ecc71";
    }

    if (i > 0) {
      const prev = steps[i - 1];
      for (let k = 0; k < step.length; k++) {
        if (prev[k] !== step[k]) {
          bars[k].style.background = "#e74c3c";
          await new Promise(r => setTimeout(r, animationSpeed / 2));
          bars[k].style.background = "#27ae60";
        }
      }
    }
  }

  // Final animation
  for (let bar of bars) {
    await new Promise(r => setTimeout(r, animationSpeed / 4));
    bar.style.background = "#3498db";
  }
}
