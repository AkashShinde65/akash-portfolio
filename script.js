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

/* Simple Portfolio Chatbot */
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

  const reply = getBotReply(userText.toLowerCase());

  setTimeout(() => {
    messages.innerHTML += `<div class="bot-message">${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 400);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

function getBotReply(message) {
  function has(words) {
    return words.some((word) => message.includes(word));
  }

  if (has(["hi", "hello", "hey", "hii", "namaste"])) {
    return "Hello 👋 I am Akash Bot. You can ask me about Akash's skills, projects, resume, research papers, contact, WhatsApp, LinkedIn, GitHub, Academia and portfolio.";
  }

  if (has(["who are you", "your name", "name", "akash"])) {
    return "This is Akash Shinde's portfolio website. Akash is a PG-DAC student at CDAC and a Java Full Stack Developer.";
  }

  if (has(["education", "study", "qualification", "college", "cdac", "pg-dac", "pgdac"])) {
    return "Akash is pursuing PG-DAC at CDAC with focus on software development, databases, backend technologies and full stack development.";
  }

  if (has(["skill", "skills", "technology", "tech", "stack", "language"])) {
    return "Akash's skills are Java, JDBC, Oracle, MySQL, C#, ASP.NET Core MVC, Web API, Entity Framework Core, Microservices and GitHub.";
  }

  if (has(["java"])) {
    return "Akash works with Java, JDBC, database connectivity, Oracle, MySQL and backend development.";
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

  if (
    has([
      "paper",
      "papers",
      "pepar",
      "research",
      "publish",
      "published",
      "publication",
      "journal"
    ])
  ) {
    return `Akash has 4 research papers listed on Academia. You can view them here: <a href="https://unipune.academia.edu/AkashShinde3" target="_blank">Open Academia</a>`;
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
    return "Akash is interested in Java Full Stack Developer, Backend Developer and Software Developer roles.";
  }

  if (has(["thank", "thanks", "thank you"])) {
    return "You're welcome 😊";
  }

  if (has(["help", "what can you do"])) {
    return "I can help you with Akash's skills, education, projects, resume, research papers, contact number, WhatsApp, LinkedIn, GitHub, Academia and portfolio.";
  }

  return `I am a portfolio chatbot, so I can answer mainly about Akash Shinde. Ask me about skills, projects, resume, research papers, contact, WhatsApp, LinkedIn, GitHub, Academia or portfolio.`;
}