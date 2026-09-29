const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace this number with your real WhatsApp number.
// Indonesia format: 628xxxxxxxxxx (no +, spaces or leading 0)
const whatsappNumber = "6281215100213"; // 请改成您的真实WhatsApp号码

const waButton = document.getElementById("waButton");
waButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin menanyakan layanan PT Teguh Jaya Teknik.")}`;

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
`Halo PT Teguh Jaya Teknik,

Nama: ${name}
Perusahaan: ${company || "-"}
WhatsApp/Phone: ${phone}
Service: ${service || "-"}
Detail proyek: ${message || "-"}

Mohon informasi dan penawaran. Terima kasih.`;

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
});
