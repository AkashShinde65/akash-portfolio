console.log("Akash portfolio loaded successfully");

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("active");
}

const fadeElements = document.querySelectorAll(".fade-up");

function showOnScroll() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
// Simple Portfolio Chatbot
function toggleChatbot() {
  const chatbotBox = document.getElementById("chatbotBox");

  if (chatbotBox.style.display === "flex") {
    chatbotBox.style.display = "none";
  } else {
    chatbotBox.style.display = "flex";
  }
}

function handleChatKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatbotMessages");

  const userText = input.value.trim();

  if (userText === "") {
    return;
  }

  messages.innerHTML += `<div class="user-message">${userText}</div>`;

  const reply = getBotReply(userText.toLowerCase());

  setTimeout(() => {
    messages.innerHTML += `<div class="bot-message">${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 400);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

function getBotReply(message) {
  if (message.includes("hi") || message.includes("hello")) {
    return "Hello 👋 I am Akash Bot. How can I help you?";
  }

  if (message.includes("skill") || message.includes("technology")) {
    return "Akash's skills are Java, JDBC, Oracle, MySQL, C#, ASP.NET Core MVC, Web API, EF Core, Microservices and GitHub.";
  }

  if (message.includes("project")) {
    return "Akash has projects like Course Registration System, JDBC Product Management, Oracle Order Processing and gRPC Microservices.";
  }

  if (message.includes("resume")) {
    return `You can open Akash's resume here: <a href="resume/Akash_Shinde_Resume.pdf" target="_blank">Open Resume</a>`;
  }

  if (message.includes("contact") || message.includes("phone") || message.includes("call")) {
    return `You can call Akash here: <a href="tel:+919673294751">+91 9673294751</a>`;
  }

  if (message.includes("whatsapp") || message.includes("chat")) {
    return `Chat with Akash on WhatsApp: <a href="https://wa.me/919673294751" target="_blank">Open WhatsApp</a>`;
  }

  if (message.includes("linkedin")) {
    return `Akash's LinkedIn: <a href="https://www.linkedin.com/in/akash--shinde" target="_blank">Open LinkedIn</a>`;
  }

  if (message.includes("github")) {
    return `Akash's GitHub: <a href="https://github.com/AkashShinde65" target="_blank">Open GitHub</a>`;
  }

  if (message.includes("academia")) {
    return `Akash's Academia profile: <a href="https://unipune.academia.edu/AkashShinde3" target="_blank">Open Academia</a>`;
  }

  if (message.includes("portfolio") || message.includes("website")) {
    return `Portfolio website: <a href="https://akash-shinde.netlify.app" target="_blank">Open Portfolio</a>`;
  }

  return "You can ask me about skills, projects, resume, contact, WhatsApp, LinkedIn, GitHub or Academia.";
}