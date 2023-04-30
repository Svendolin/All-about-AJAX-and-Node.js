![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-AJAX-and-Node.js?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-AJAX-and-Node.js?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-AJAX-and-Node.js?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-AJAX-and-Node.js?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-AJAX-and-Node.js?color=yellow&style=for-the-badge)


***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/8be26d91eb231fec0b8856359979ac09f27173fd/topics/ajax/ajax.png" /> 

<img align="left" alt="API" width="35px" src="https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w" /> 

<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />

# &nbsp;- ALL ABOUT AJAX, APIs and Node.js - ✔

This "All about AJAX and Node.js"-repository catches up its focus on all the AJAX and Node.js processes I've made, commented and written through the years as a **SAE-Web Development** student with exercise lessons every week as well as tutorial videos on _Youtube_.
        
Direct Link to the place where I'm studying are you going to find [HERE](https://www.sae.edu/che/de?utm_source=PS01&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLVIaD_aUt7y4brT7tqMW9o7tskgb1vjQqJFkzQwkwdN_40_Ls7MgAEaAtXxEALw_wcB)


⚫🔴🟡 IMPORTANT: Comments in each file are commented in german⚫🔴🟡
<br />
<br />


***
## Folder Directory
***

| Topic | Content  | 
|:--------------| :--------------|
| 01_Fetch Async Await |  XML HTTP Request (_01 , 02_) // FETCH with: `.then` or `ASYNC` or `JQUERY` (_03 , 04 , 05_)  // API FETCH with: `ASYNC` or `JQUERY` (_06 , 07 , 08_)  |
| 02_Ajax and PHP | PHP AJAX SIMPLE (_01_) // CONTACT FORM and LOGIN (_02 , 03_) // Amiibo API (_04_) // MOVIE API (_05_) |
| 03_Node.js | Node.js => `Node Server`, `Express Server` (_01 , 02_) // More Express with `ROUTING` (_03-01_),  `MIDDLEWARE` (_03-02_), `EJS`-Template Engine + `Nodemon` (_03-03_), WeatherAPI (_04_) |
| 04_Projects | Random Joke API (_01_) // Search and Play your Song ITUNES-API (_02_)  |
| 05&nbsp;MoreAjaxWithYT| xxx - STAY TUNED!   |

<br />
<br />

***
## Technologies and Installation ✅
***

JQUERY - INSTALLATION:
* https://cdnjs.com/libraries/jquery (if you would like to use JQUERY in your project)
* XAMPP or MAMP if you want to combine AJAX with PHP to work with apache servers
<br />

Node.js - INSTALLATION:
* https://nodejs.org/en/ (Recommend LTS for an unbuggy / non-risky experience)
<br />

Express.js - INSTALLATION:
* https://expressjs.com/ (Home is where to start, --save is not urgently needed in your Terminal)
<br />

Express.js TEMPLATES (PUG, MUSTACHE, EJS) - INSTALLATION:
* https://expressjs.com/en/guide/using-template-engines.html (Overview)
* https://www.npmjs.com/package/ejs (EJS)
<br />

REQUEST (TO FETCH API SERVERSIDE) - INSTALLATION:
* https://www.npmjs.com/package/request (deprecated! - Not to 100% safe anymore)
* Alternate is AXIOS: https://axios-http.com/
<br />

NODEMON - INSTALLATION:
* https://www.npmjs.com/package/nodemon 
* (Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected).

FOR PHP Projects (using XAMPP / MAMP or WAMP):

* https://github.com/Svendolin/All-about-PHP
<br />


<br />
<br />

***
<img align="left" alt="API" width="35px" src="https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w" /> 

## &nbsp;API - Useful Assistance ✅
***
``API`` = Application Programming Interface 

=> API-VAULT: A Databselist where you get the largest collection of free APIs categorized for easy search! [CLICK HERE](https://apivault.dev/)

_**What is an API?**_

* API is the acronym for Application Programming Interface ("Programmierschnittstelle"), which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API (an external Server)
* EXAMPLES AT: 01_Week_FetchAndAPI

_**How does an API interact?**_

* APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau's software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

<br />
<br />

***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/8be26d91eb231fec0b8856359979ac09f27173fd/topics/ajax/ajax.png" /> 

## &nbsp;AJAX - Useful Assistance ✅
***
``AJAX`` = Asynchronous* Javascript and XML 

_**Means:**_

* Asynchronous Request (Fetch = Vanilla, JQuery Ajax = JQuery, etc) and Responses.
XML = Obsolete, actually works like HTML. Through Json (text version of JS)

_**Used for:**_

 * Injecting content from a database / server (localhost e.g.) without refreshing the website every time
 * Loading content into a web page from time to time. (Example: chatbots = refresh happens automatically)
 * Load webpage content when a button is clicked (e.g. "Show more" in a webshop)

 _**Advantages:**_

 * Much more confortable for the user (take Youtube for example where we can watch a video and browse at the same time 
 through the site)
 * Reduces traffic because only the used data is going to be sent (take Instagram for example to show only the first 8 posts and reload some more if necessary)
 * Reduces loading time. Images and bigger data aren't necesessary for an instant load

 _**Disadvantages:**_

 * Return Button can cause problems
 * Ajax is always dependent on Javascript. Keep that in mind

_**Combined with:**_

 * Javascript or JQuery

_**Each browser has its own JS engine:**_

 * Engine: The engine that executes Javascript in the browser, in Chrome e.g. "V8"

_**AJAX IS: Stack Functionable / Single threaded / Never blocking / Asynchronous:**_
 * Each function is stacked (stacked) step by step = Javascript goes step by step through them all from the first function to the next 
* JS is single threaded = There is only one stack
* Never-Blocking = It is constantly looped through step by step
* Asynchronous = We have to wait until the process is executed. This varies depending on the content
(With Ajax we can work side by side, making requests while processes are happening)

_**What is a FETCH?**_

* With "fetch" you can download a content, a command or an API, which can be executed with .then , async or JQuery
* EXAMPLES AT: 01_Week_FetchAndAPI

_**What is JSON()?**_

* Json is a data format to be able to read out the content and save the data
* To load and save the data from the API or save configurations: you are doing that as a JSON-Format!

_**How does it look like to ASYNC a function, FETCH an API and read the content with JSON() IN YOUR BROWSER'S CONSOLE ?**_

```js
/* ---- BASIC EXAMPLE ---- */

async function load() {
      try { // OPT: mit try{} und catch{} fehler abfangen
      let response = await fetch('https://catfact.ninja/fact');
      let result = await response.json();
      console.log(result.fact);
      } catch (e) {
            console.log('A mistake has been occured', e);
      }
}

load()


/* ---- EXTENDED EXAMPLE ---- */
<script> // Eingebunden ins HTML
    // async vor die Funktion setzen, damit sie asynchron läuft:
    async function displayData() {
      let response = await fetch('../00_data/data.json'); // await ist equivalent zu .then / .then
      let data = await response.json();

      console.log(data);
    }

    // Am Ende nicht vergessen: Funktion ausgeben!
    displayData()
</script>
```
<br>

_**How does it look like to ASYNC a function, FETCH an API and read the content with JSON() IN YOUR WEBSITE ?**_

```js

```

<br />
<br />


***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />

## &nbsp;Node.js - Useful Assistance ✅
***

_**WHAT IS NODE.JS?**_

- Node.js is a runtime environment for Javascript (Laufzeitumgebung)
- Scripts are performed directly via our computer and not only via the web browser


_**What does "SERVERSEITIG" mean here?**_
- We swap the roles. When we work SERVERSEITIG, we are "inside the server".
- We create and start the server (server.js file) and receive requests.
- That means WE are now the waiters (server) and not the client. We OPERATE the client!
- Node.js has no access to the DOM because there is no client (no document being built)
- Node.js is Javascript that is executed server-side on the SERVER.

_**GETTING STARTED:**_

1) Open Bash (Windows) or CMD and write in your terminal:
2) $ node --version
3) Version should be displayed (Successful Installation)
4) $ npm --version
5) Version of NODE PACKAGE MANAGER should be displayed too (Successful Installation)

_**OPEN TERMINAL, CHECK THE RIGHT PATH AND EXECUTE THE SERVER:**_

6) Look at the appropriate folder in VSC, for example: "01_node-server" > right click > "Open in integrated terminal"
7) Path MUST be correct*. Please check with: `$ pwd` , which shows the path (pwd = path working directory) * => FAST FORWARD: Open the right path directly in your Terminal with VSC while RIGHT CLICK on the desired folder and click `OPEN IN INTEGRATED TERMINAL` - Over here you can handle it manually: <br />
7.1) If path is FALSE: `$ ls` (gives information about the path tree), then:<br />
7.2) `$ cd` and TAB through the path (TIP: manually enter first characters, end with TAB, which is like an AUTOCOMPLETE) > Enter <br />
7.3) If path is COMPLETELY WRONG: `$ cd ../bla bla`
8) `$ node` and name of JS-file, for example "server.js" and execute: `$ node server.js`.


_**Why restart the server after EVERY CHANGE?**_

* ctrl c in the terminal STOPS THE SERVER RUNNING - the server must always be restarted (it is not a live server).


_**Why is NODEMON as a SUPERFAST SOLUTION?**_

0) Nodemon is part of the Node Packing Manager (npm) which is also going to be installed after a successful instalation of node...
1) Nodemon starts the server automatically with every change. (ctrl c is kinda superfluous now)
2) Write `$ npm install -g nodemon` in your terminal to run NODEMON
3) At first start do NOT write `$ node` but `$ nodemon (*)` to address Nodemon like: (`$ nodemon 03_ejs_basics.js`)
4) The update applies ONLY to the corresponding (*)-JS file, for example "03_ejs_basics.js" THAT MEANS: If you do changes on an involved .ejs file or other files, always go back to your JS-File and safe it with ctrl + s
5) (Server can still be stopped with ctrl c if desired).
6) `Ctrl enter` on the port to open it directly in the Google Chrome browser (Important: Port must be initialized as in the example of "03_ejs_basics.js")

<br />
<br />

***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />

## &nbsp;Expressjs and EJS - Useful Assistance ✅
***

_**[Expressjs = Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web ]**_
1) In terminal: `$ npm i express` to load package
2) On successful completion, additional folders are placed in this path (dependency folders)

_**[EJS - The Template Engine enables you to use static template files in your application]**_

1) In terminal: `$ npm install ejs`
2) Index.html was yesterday, write "index.ejs" for example and add your HTML there
3) Put .ejs-files (like "index.ejs") into a "views"-folder. The name HAS TO BE "VIEWS"
4) Put included .ejs-files (as we know it in PHP) into a "partials"-folder (for ecample "footer.ejs")
5) Download the extension "EJS Language Support" so that VSC can read EJS. <br />
      *  INCLUDE with `<%- %>` for example: `<%- include('partials/footer') %>`
      *  ECHO with `<%= %>` for example: `<h2><%= message  %></h2>`
      *  CONTROL FLOW (like "for each") with `<% %>` for example: `<% students.forEach(student => {  %>` bla bla `<% }) %>`

<br />
<br />

***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/d92924b1d925bb134e308bd29c9de6c302ed3beb/topics/terminal/terminal.png" />

## &nbsp;TERMINAL COMMANDS I USED HERE ✅
***

| COMMAND | EFFECT  | 
|:--------------| :--------------|
| $ node --version | Checks the node.js version (None if you havent installed it) |
| $ npm --version | Checks the NPM Version (Node Package Manager) |
| $ npm init | !OPTIONAL AT THE BEGINNING: Setting up the nodemodule with additional information |
| $ pwd | Print Work Directory (checks your path) |
| $ ls | Show Contents of a Directory |
| $ cd TAB (TAB as Autocomplete) | Navigate forward through Content Directory |
| $ cd .. | Navigate backwards of the Content Directory |
| $ node (...) | Using NODE to start the serverside workingspace |
| $ nodemon (...)  | Using NODEMON to start the serverside workingspace |
| $ npm install -g nodemon  | Install Nodemon (This is the version to Install it once globally) |
| $ npm i express  | Install Express (You can also write "install", "i" is shortcut) |
| $ npm i ejs  | Install EJS (You can also write "install", "i" is shortcut) |
| $ npm i ndeb  | Install NEDB, a lightweight Javascript Database |
| $ npm i node-fetch@2  | Install Node-Fetch Vers.2, a lightweight module that brings Fetch API to Node.js. |
| $ npm i request  | (Deprecated!) Fetch is CLIENT-SIDE, to load APIs on server-side we need packages like this => AXIOS :) |


<br />
<br />


***
## Collaboration ✅
***
> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)


<br />
<br />

***
## FAQs ✅
***
0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
|:--------------|:-------------:|--------------:|
| 0 | 0 | 0 |


