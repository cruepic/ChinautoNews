function getData() {
   fetch('BDD.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 

      // Navigation
      let menuContainer = document.getElementById("menu");
          // displayMenu(journal, themes, menuContainer);
      // Header
      let siteTitleContainer = document.getElementById('Site-title');
      let journal = data.journal;
          displayNameSite(journal, siteTitleContainer);
      //themes
      let themeContainer = document.getElementById('themes');
      let themes = data.journal.themes;
        themes.forEach(theme => {
          displayThemes(theme, themeContainer);
        });
      
      //main article
      let mainArticleContainer = document.getElementById('main-article');
      let mainArticles = data.journal.mainArticle;
      
  
        displayMainArticles(mainArticles, mainArticleContainer);
     
      //other articles
      let articleContainer = document.getElementById('other-articles');

      let articles = data.journal.articles;
      articles.forEach(article => {
        displayArticles(article, articleContainer);
      });
       
       
       
      //authors
      let authorContainer = document.getElementById('authors');
      let authors = data.journal.auteurs;
      authors.forEach(author => {
        displayAuthors(author, authorContainer);
      });

      // Footer
      let footerContainer = document.getElementById('footer');
        displayFooter(journal, footerContainer);

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

function displayMenu(journal, theme, menuContainer) {
  let logo = journal.logo
  let journalTitle = journal.name;
  let themeName = theme.nom;
  let nav = `
      <div id="logo" >
          <a href="#"><img src="${logo}" alt="${journalTitle}"></a>
      </div>

      <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
      </div>

      <ul id="menu">
          <li><a href="#">${themeName}</a></li>
      </ul>
  `;
  menuContainer.insertAdjacentHTML('beforeend', nav);
}

function displayNameSite(journal, siteTitleContainer) {
  let journalTitle = journal.name;  
  let journalSlogan = journal.slogan;
  let journalCta = journal.texteAppelAction;

  let title = `
    <div class="title-site">
      <h2 id="journal-name">${journalTitle}</h2>
      <h4 id="slogan">${journalSlogan}</h4>
      <h3 class="nwsltr">${journalCta}</h3>
    </div>
  `;
  siteTitleContainer.insertAdjacentHTML('beforeend', title);
 }

 function displayThemes(theme, themeContainer) {
  let themeName = theme.nom;
  let themeDescription = theme.description;

  let newTheme = `
      <div class="theme">
        <h3 class="title">${themeName}</h3>
        <p class="subtitle">${themeDescription}</p>
      </div>
    </div>
  `;
    themeContainer.insertAdjacentHTML('beforeend', newTheme);
 }

function displayMainArticles(mainArticle, mainArticleContainer) {
  let title = mainArticle.titre;
  let description = mainArticle.description;
  let date = mainArticle.date;
  let thumbnail = mainArticle.image;
  
  //themes
  let themeTitle = mainArticle.theme;
  let page = "#";
  
  // content injection depending on class
  let newMainArticle = `
    <div class="main-article">
      <div class="main-image">
        <img class="header-img" src='${thumbnail}'>
      </div>
      <div class="content">
        <h2 class="title">${title}</h2>
        <h3 class="subtitle">${themeTitle} - ${date}</h3>
        <h4 class="content">${description}</h4>
        <button class="read-more" ><a href="${page}">Lire Plus</a></button>
      </div>
    </div>
  `;
    mainArticleContainer.insertAdjacentHTML('beforeend', newMainArticle);
}


function displayArticles(article, articleContainer) {
  let title = article.titre;
  let date = article.date;
  let thumbnail = article.image;
  
  //themes
  let themeTitle = article.theme;
  let page = "#";

  // content injection depending on class
  let newArticle = `
    <div class="other-article">
      <div class="main-image">
        <img class="thumbnail" src='${thumbnail}'>
      </div>
      <div class="content">
        <h3 class="title">${title}</h3>
        <p class="subtitle">${themeTitle} - ${date}</p>
        <button class="read-more" ><a href="${page}">Lire Plus</a></button>
      </div>
    </div>
    `;
    articleContainer.insertAdjacentHTML('beforeend', newArticle);
}

function displayAuthors(author, authorContainer) {
  let authorName = author.prenom;
  let authorExp = author.typeExperience;
  let authorDesc = author.presentation;
  let authorAvatar = author.avatar;
  let newAuthor = `
    <div class="author">
      <img class="avatar" src="${authorAvatar}" alt="">
      <h2 class="author-name">${authorName}</h2>
      <h3 class="experience">${authorExp}</h3>
      <p class="description">${authorDesc}</p>
    <div>
  `;

    authorContainer.insertAdjacentHTML('beforeend', newAuthor);

}

function displayFooter(journal, footerContainer) {
  let journalTitle = journal.name;
  const currentYear = new Date().getFullYear();

  let sign = `
    <div class="title-site">
      <h4>${journalTitle} - ${currentYear}</h4>
    </div>
  `;
  footerContainer.insertAdjacentHTML('beforeend', sign);
 }