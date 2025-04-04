// headerModule.js

export function createHeader() {
  const headerElement = document.createElement("header");
  headerElement.innerHTML = `
    <div class="logo">Company Name</div>
    <nav>
      <a href="new.html">Home</a>
      <a href="about.html">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  `;

  const style = document.createElement("style");
  style.textContent = `
    header {
      padding: 10px 30px;
      display: flex;
      justify-content: space-around;
    }
    header nav a {
      text-decoration: none;
    }
    header nav {
      margin-left: auto;
    }
    header nav a {
      margin: 0 20px;
    }
  `;

  return { headerElement, style };
}
