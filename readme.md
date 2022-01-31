![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-AJAX-and-Node.js?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-AJAX-and-Node.js?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-AJAX-and-Node.js?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-AJAX-and-Node.js?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-AJAX-and-Node.js?color=yellow&style=for-the-badge)


***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/8be26d91eb231fec0b8856359979ac09f27173fd/topics/ajax/ajax.png" /> 

<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />

# &nbsp;- ALL ABOUT AJAX and Node.js - ✔

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
| Week&nbsp;01 |  XML HTTP Request (_01 , 02_) // FETCH with: `.then` or `ASYNC` or `JQUERY` (_03 , 04 , 05_)  // API FETCH with: `ASYNC` or `JQUERY` (_06 , 07 , 08_)  |
| Week&nbsp;02 | PHP AJAX SIMPLE (_01_) // CONTACT FORM and LOGIN (_02 , 03_) // Amiibo API (_04_) |
| Week&nbsp;03 | Node.js => `Node Server`, `Express Server` (_01 , 02_) // More Express with `ROUTING` (_03-01_),  `MIDDLEWARE` (_03-02_), `EJS`-Template Engine + `Nodemon` (_03-03_), WeatherAPI (_04_) |
| Week&nbsp;04 |  |

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
<br />
<br />

***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/8be26d91eb231fec0b8856359979ac09f27173fd/topics/ajax/ajax.png" /> 

## &nbsp;AJAX - Useful Assistance ✅
***
``AJAX`` = Asynchronous* Javascript and XML 

_**Means:**_

*Asynchronous Request (Fetch = Vanilla, JQuery Ajax = JQuery, etc) and Responses.
XML = Obsolete, actually works like HTML. Through Json (text version of JS).

_**Used for:**_

 * Injecting content from a database / server (localhost e.g.) without refreshing the website every time.

 * Loading content into a web page from time to time. (Example: chatbots = refresh happens automatically)

 * Load webpage content when a button is clicked (e.g. "Show more" in a webshop).

_**Combined with:**_

 * Javascript or JQuery

_**Each browser has its own JS engine:**_

 * Engine: The engine that executes Javascript in the browser, in Chrome e.g. "V8".

_**AJAX IS: Stack Functionable / Single threaded / Never blocking / Asynchronous:**_
 * Each function is stacked (stacked) step by step = Javascript goes step by step through them all from the first function to the next.
to the next. 

* JS is single threaded = There is only one stack

* Never-Blocking = It is constantly looped through step by step

* Asynchronous = We have to wait until the process is executed. This varies depending on the content!
(With Ajax we can work side by side, making requests while processes are happening).


<br />
<br />


***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />

## &nbsp;Node.js - Useful Assistance ✅
***
What does "SERVERSEITIG" mean here?
- We swap the roles. When we work SERVERSEITIG, we are "inside the server".
- We create and start the server (server.js file) and receive requests.
- That means WE are now the waiters (server) and not the client. We OPERATE the client!
- Node.js has no access to the DOM because there is no client (no document being built)
- Node.js is Javascript that is executed server-side on the SERVER.

_**GETTING STARTED:**_

1) Open Bash (Windows) and write in your terminal:
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
| $ pwd | Print Work Directory (checks your path) |
| $ ls | Show Contents of a Directory |
| $ cd /TAB (TAB as Autocomplete) | Navigate through Content Directory |
| $ cd ../ | A step back of the Content Directory |
| $ npm init | Optional AT THE BEGINNING: Setting up the nodemodule with additional information |
| $ node (...) | Using NODE to start the serverside workingspace |
| $ nodemon (...)  | Using NODEMON to start the serverside workingspace |
| $ npm install -g nodemon  | Install Nodemon (This is the version to Install it once globally) |
| $ npm i express  | Install Express (You can also write "install", "i" is shortcut) |
| $ npm i ejs  | Install EJS (You can also write "install", "i" is shortcut) |
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


