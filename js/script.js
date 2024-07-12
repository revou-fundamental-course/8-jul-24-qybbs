function calculateBMI() {
  // Ambil nilai dari input berat badan, tinggi badan, usia, dan jenis kelamin
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Konversi cm ke meter
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Validasi input, pastikan semua nilai diisi dengan benar
  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Hitung nilai BMI
  const bmi = weight / (height * height);
  let status = "";
  let statusClass = "";

  // Tentukan status berdasarkan nilai BMI
  if (bmi < 18.5) {
    status = "Kekurangan Berat Badan";
    statusClass = "status-underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal atau Ideal";
    statusClass = "status-normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Kelebihan Berat badan";
    statusClass = "status-overweight";
  } else {
    status = "Kegemukan atau Obesitas";
    statusClass = "status-obese";
  }

  // Tampilkan hasil BMI dan status
  document.getElementById("bmi-value").textContent = `BMI Anda: ${bmi.toFixed(
    1
  )}`;
  document.getElementById("bmi-status").textContent = `Status: ${status}`;
  document.getElementById("bmi-status").className = statusClass;

  // Sembunyikan form kalkulator dan tampilkan hasil
  document.getElementById("container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
}

function resetResult() {
  // Sembunyikan hasil dan reset nilai text pada elemen hasil
  document.getElementById("result-container").style.display = "none";
  document.getElementById("bmi-value").textContent = "";
  document.getElementById("bmi-status").textContent = "";
}

function backToCalculator() {
  // Tampilkan kembali form kalkulator
  document.getElementById("container").style.display = "block";
}
