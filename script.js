console.log("Akash portfolio loaded successfully");

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("active");
}

/* Scroll fade animation */
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

/* Chatbot */
function toggleChatbot() {
  const chatbotBox = document.getElementById("chatbotBox");
  const mascot = document.getElementById("chatbotMascot");
  const speech = document.getElementById("mascotSpeech");

  if (chatbotBox.style.display === "flex") {
    chatbotBox.style.display = "none";

    if (mascot) {
      mascot.classList.remove("open");
    }

    if (speech) {
      speech.textContent = "Hi! Ask me anything 👋";
    }
  } else {
    chatbotBox.style.display = "flex";

    if (mascot) {
      mascot.classList.add("open");
    }

    if (speech) {
      speech.textContent = "I am listening 😊";
    }

    setTimeout(() => {
      const input = document.getElementById("chatInput");

      if (input) {
        input.focus();
      }
    }, 150);
  }
}

function handleMascotKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    toggleChatbot();
  }
}

function handleChatKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function escapeHTML(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatbotMessages");

  const userText = input.value.trim();

  if (userText === "") {
    return;
  }

  messages.innerHTML += `<div class="user-message">${escapeHTML(userText)}</div>`;

  const typingId = `typing-${Date.now()}`;
  messages.innerHTML += `<div class="bot-message" id="${typingId}">Akash Buddy is typing...</div>`;
  messages.scrollTop = messages.scrollHeight;

  const reply = getBotReply(userText.toLowerCase());

  setTimeout(() => {
    const typingBubble = document.getElementById(typingId);

    if (typingBubble) {
      typingBubble.innerHTML = reply;
    }

    messages.scrollTop = messages.scrollHeight;
  }, 350);

  input.value = "";
}

function getBotReply(message) {
  function has(words) {
    return words.some((word) => message.includes(word));
  }

  if (has(["hi", "hello", "hey", "hii", "namaste"])) {
    return "Hello 👋 I am Akash Buddy. Ask me about Akash's skills, projects, resume, research papers, Instagram, LinkedIn, GitHub, Academia or WhatsApp.";
  }

  if (has(["who are you", "your name", "name", "akash"])) {
    return "This is Akash Shinde's portfolio website. Akash is a PG-DAC student at CDAC and a Full Stack Developer focused on Java, databases and backend development.";
  }

  if (has(["education", "study", "qualification", "college", "cdac", "pg-dac", "pgdac"])) {
    return "Akash is pursuing PG-DAC at CDAC with focus on software development, databases, backend technologies and full stack development.";
  }

  if (has(["skill", "skills", "technology", "tech", "stack", "language"])) {
    return "Akash's skills are Java, JDBC, Oracle, MySQL, C#, ASP.NET Core MVC, Web API, Entity Framework Core, Microservices, GitHub and Operating Systems.";
  }

  if (has(["java"])) {
    return "Akash works with Java, JDBC, database connectivity, Oracle, MySQL and backend development.";
  }

  if (has(["spring", "springboot", "spring boot"])) {
    return "Akash is currently learning Spring Boot and MVC concepts to build Java-based web applications and backend APIs.";
  }

  if (has(["dotnet", ".net", "asp", "mvc", "web api", "ef core", "entity framework"])) {
    return "Akash works with ASP.NET Core MVC, Web API and Entity Framework Core for building database-driven web applications.";
  }

  if (has(["database", "mysql", "oracle", "db"])) {
    return "Akash has experience with MySQL and Oracle databases, CRUD operations, JDBC connectivity and stored procedures.";
  }

  if (has(["project", "projects", "work", "application", "apps"])) {
    return "Akash has worked on Course Registration System, JDBC Product Management, Oracle Order Processing and gRPC Microservices projects.";
  }

  if (has(["course registration", "course"])) {
    return "Course Registration System is an ASP.NET Core MVC + MySQL CRUD application for adding, displaying, searching, updating and deleting courses.";
  }

  if (has(["jdbc", "product"])) {
    return "JDBC Product Management is a Java JDBC project connected with MySQL database to manage product records.";
  }

  if (has(["order processing", "stored procedure", "callablestatement"])) {
    return "Oracle Order Processing is a Java + Oracle project using Stored Procedure and CallableStatement.";
  }

  if (has(["grpc", "microservice", "microservices"])) {
    return "gRPC Microservices project is a Java client-server application using gRPC communication and database connectivity.";
  }

  if (has(["resume", "cv", "biodata"])) {
    return `You can open Akash's resume here: <a href="resume/Akash_Shinde_Resume.pdf" target="_blank">Open Resume</a>`;
  }

  if (has(["paper", "papers", "pepar", "research", "publish", "published", "publication", "journal"])) {
    return `Akash has research papers listed on Academia. You can view them here: <a href="https://unipune.academia.edu/AkashShinde3" target="_blank">Open Academia</a>`;
  }

  if (has(["instagram", "insta", "ig"])) {
    return `Akash's Instagram profile: <a href="https://www.instagram.com/akash_shinde65" target="_blank">Open Instagram</a>`;
  }

  if (has(["academia", "academic"])) {
    return `Akash's Academia profile: <a href="https://unipune.academia.edu/AkashShinde3" target="_blank">Open Academia</a>`;
  }

  if (has(["contact", "phone", "mobile", "number", "call"])) {
    return `You can call Akash here: <a href="tel:+919673294751">+91 9673294751</a>`;
  }

  if (has(["whatsapp", "whats app", "chat"])) {
    return `Chat with Akash on WhatsApp: <a href="https://wa.me/919673294751" target="_blank">Open WhatsApp</a>`;
  }

  if (has(["email", "mail", "gmail"])) {
    return `You can email Akash here: <a href="mailto:luckakash65@gmail.com">luckakash65@gmail.com</a>`;
  }

  if (has(["linkedin", "linked in"])) {
    return `Akash's LinkedIn profile: <a href="https://www.linkedin.com/in/akash--shinde" target="_blank">Open LinkedIn</a>`;
  }

  if (has(["github", "git hub", "repository", "repo", "code"])) {
    return `Akash's GitHub profile: <a href="https://github.com/AkashShinde65" target="_blank">Open GitHub</a>`;
  }

  if (has(["portfolio", "website", "webside", "site"])) {
    return `Akash's portfolio website: <a href="https://akash-shinde.netlify.app" target="_blank">Open Portfolio</a>`;
  }

  if (has(["hire", "job", "internship", "developer", "role"])) {
    return "Akash is interested in Full Stack Developer, Backend Developer and Software Developer roles.";
  }

  if (has(["thank", "thanks", "thank you"])) {
    return "You're welcome 😊";
  }

  if (has(["help", "what can you do"])) {
    return "I can help you with Akash's skills, education, projects, resume, research papers, contact number, WhatsApp, Instagram, LinkedIn, GitHub, Academia and portfolio.";
  }

  return "I am a portfolio chatbot, so I can answer mainly about Akash Shinde. Ask me about skills, projects, resume, research papers, contact, WhatsApp, Instagram, LinkedIn, GitHub, Academia or portfolio.";
}

/* Lightweight fish hover only */
const heroFishCard = document.querySelector(".hero-fish-card");

if (heroFishCard) {
  heroFishCard.addEventListener("mouseenter", () => {
    heroFishCard.style.transform = "translateY(-8px) scale(1.02)";
  });

  heroFishCard.addEventListener("mouseleave", () => {
    heroFishCard.style.transform = "";
  });
}