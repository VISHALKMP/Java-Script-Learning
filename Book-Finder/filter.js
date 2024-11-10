const books = [
    { title: "Book One", author: "Author A", genre: "Fiction", description: "A thrilling fiction book.", cover: "https://via.placeholder.com/150" },
    { title: "Book Two", author: "Author B", genre: "Non-Fiction", description: "A thought-provoking non-fiction book.", cover: "https://via.placeholder.com/150" },
    { title: "Book Three", author: "Author C", genre: "Science Fiction", description: "An adventurous science fiction book.", cover: "https://via.placeholder.com/150" },
  ];
  
  const mainDiv = document.getElementById("main");
  mainDiv.style.fontFamily = "Arial, sans-serif";
  
  function createUI() {
    mainDiv.innerHTML = "";
    createHeader();
    createHomePage();
  }
  
  function createHeader() {
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.padding = "20px";
    header.style.borderBottom = "2px solid #ddd";
    header.style.backgroundColor = "#003366";
    header.style.color = "#ffffff";
  
    const logoSection = document.createElement("div");
    logoSection.innerHTML = "<h2 style='margin: 0;'>My Book Site</h2>";
    header.appendChild(logoSection);
  
    const authSection = document.createElement("div");
    const loginButton = document.createElement("button");
    loginButton.innerText = "Sign In";
    loginButton.style.marginRight = "10px";
    styleButton(loginButton, "#0066cc");
    loginButton.onclick = showLoginForm;
  
    const signupButton = document.createElement("button");
    signupButton.innerText = "Sign Up";
    styleButton(signupButton, "#0066cc");
    signupButton.onclick = showSignupForm;
  
    authSection.appendChild(loginButton);
    authSection.appendChild(signupButton);
    header.appendChild(authSection);
  
    mainDiv.appendChild(header);
  }
  
  function createHomePage() {
    const homePage = document.createElement("div");
    homePage.style.padding = "20px";
    homePage.style.backgroundColor = "#f0f8ff";
  
    const searchBoxDiv = document.createElement("div");
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search books...";
    searchInput.style.width = "80%";
    searchInput.style.padding = "10px";
    searchInput.style.margin = "10px 0";
    searchInput.style.border = "1px solid #ddd";
    
    const searchButton = document.createElement("button");
    searchButton.innerText = "Search";
    styleButton(searchButton, "#0066cc");
    searchButton.onclick = () => searchBooks(searchInput.value);
  
    searchBoxDiv.appendChild(searchInput);
    searchBoxDiv.appendChild(searchButton);
    homePage.appendChild(searchBoxDiv);
  
    const popularSection = document.createElement("div");
    popularSection.style.marginTop = "20px";
    
    const sectionTitle = document.createElement("h3");
    sectionTitle.innerText = "Most Favorite and Searched Books";
    sectionTitle.style.borderBottom = "2px solid #0066cc";
    sectionTitle.style.color = "#003366";
    popularSection.appendChild(sectionTitle);
  
    const bookGrid = document.createElement("div");
    bookGrid.style.display = "grid";
    bookGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
    bookGrid.style.gap = "20px";
    bookGrid.style.marginTop = "20px";
    
    books.slice(0, 6).forEach(book => {
      const bookDiv = document.createElement("div");
      bookDiv.style.textAlign = "center";
      bookDiv.style.border = "1px solid #ddd";
      bookDiv.style.padding = "10px";
      bookDiv.style.cursor = "pointer";
      bookDiv.style.backgroundColor = "#ffffff";
      bookDiv.style.borderRadius = "5px";
      bookDiv.onclick = () => showBookDetails(book);
  
      const coverImg = document.createElement("img");
      coverImg.src = book.cover;
      coverImg.style.width = "100%";
      
      const titleText = document.createElement("h4");
      titleText.innerText = book.title;
      titleText.style.margin = "10px 0 0";
      titleText.style.color = "#003366";
      
      bookDiv.appendChild(coverImg);
      bookDiv.appendChild(titleText);
      bookGrid.appendChild(bookDiv);
    });
  
    popularSection.appendChild(bookGrid);
    homePage.appendChild(popularSection);
    mainDiv.appendChild(homePage);
  }
  
  function searchBooks(query) {
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    
    mainDiv.innerHTML = "";
    createHeader();
  
    const resultsPage = document.createElement("div");
    resultsPage.style.padding = "20px";
  
    const resultsTitle = document.createElement("h2");
    resultsTitle.innerText = `Results for "${query}"`;
    resultsTitle.style.color = "#003366";
    resultsPage.appendChild(resultsTitle);
  
    const bookListDiv = document.createElement("div");
    bookListDiv.style.display = "grid";
    bookListDiv.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
    bookListDiv.style.gap = "20px";
  
    filteredBooks.forEach(book => {
      const bookDiv = document.createElement("div");
      bookDiv.style.border = "1px solid #ddd";
      bookDiv.style.padding = "10px";
      bookDiv.style.textAlign = "center";
      bookDiv.style.cursor = "pointer";
      bookDiv.style.backgroundColor = "#ffffff";
      bookDiv.style.borderRadius = "5px";
      bookDiv.onclick = () => showBookDetails(book);
  
      const coverImg = document.createElement("img");
      coverImg.src = book.cover;
      coverImg.style.width = "100%";
  
      const titleText = document.createElement("h4");
      titleText.innerText = book.title;
      titleText.style.margin = "10px 0 0";
      titleText.style.color = "#003366";
  
      bookDiv.appendChild(coverImg);
      bookDiv.appendChild(titleText);
      bookListDiv.appendChild(bookDiv);
    });
  
    resultsPage.appendChild(bookListDiv);
    mainDiv.appendChild(resultsPage);
  }
  
  function showBookDetails(book) {
    mainDiv.innerHTML = "";
    createHeader();
    
    const detailsPage = document.createElement("div");
    detailsPage.style.padding = "20px";
    detailsPage.style.backgroundColor = "#f0f8ff";
  
    const title = document.createElement("h2");
    title.innerText = book.title;
    title.style.color = "#003366";
  
    const author = document.createElement("p");
    author.innerText = `Author: ${book.author}`;
    author.style.fontStyle = "italic";
    author.style.color = "#333";
  
    const genre = document.createElement("p");
    genre.innerText = `Genre: ${book.genre}`;
    genre.style.color = "#333";
  
    const description = document.createElement("p");
    description.innerText = `Description: ${book.description}`;
    description.style.color = "#333";
    
    const cover = document.createElement("img");
    cover.src = book.cover;
    cover.style.width = "200px";
    cover.style.marginTop = "10px";
    cover.style.borderRadius = "10px";
  
    detailsPage.appendChild(title);
    detailsPage.appendChild(author);
    detailsPage.appendChild(genre);
    detailsPage.appendChild(description);
    detailsPage.appendChild(cover);
  
    mainDiv.appendChild(detailsPage);
  }
  
  function styleButton(button, bgColor) {
    button.style.backgroundColor = bgColor;
    button.style.color = "#ffffff";
    button.style.padding = "10px 15px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
  }
  
  function showLoginForm() {
    const username = prompt("Enter your username");
    if (username) {
      localStorage.setItem("username", username);
      alert("Logged in as " + username);
    }
  }
  
  function showSignupForm() {
    const username = prompt("Create a new username");
    if (username) {
      localStorage.setItem("username", username);
      alert("Signed up successfully!");
    }
  }
  
  createUI();
  