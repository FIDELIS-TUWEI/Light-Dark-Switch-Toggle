// Dark Mode Switch
// Theme Switch Container
const themeContainer = document.createElement('div');
themeContainer.setAttribute('class', 'theme_switch_container');
document.body.append(themeContainer);

// Toggle Icon
const toggle = document.createElement('input');
toggle.setAttribute('class', 'checkbox');
toggle.setAttribute('id', 'checkbox');
toggle.setAttribute('type', 'checkbox');
themeContainer.appendChild(toggle);

const label = document.createElement('label')
label.setAttribute('for', 'checkbox');
label.setAttribute('class', 'label');
themeContainer.appendChild(label);

const moonIcon = document.createElement('i');
moonIcon.setAttribute('class', 'fa-solid fa-moon');
moonIcon.setAttribute('aria-hidden', 'true');
label.appendChild(moonIcon);

const sunIcon = document.createElement('i');
sunIcon.setAttribute('class', 'fa-solid fa-sun');
sunIcon.setAttribute('aria-hidden', 'true');
label.appendChild(sunIcon);

const ball = document.createElement('div');
ball.setAttribute('class', 'ball');
label.appendChild(ball);

// Toggle Text
const toggleText = document.createElement('span');
toggleText.innerHTML = `Light`;
toggleText.setAttribute('class', 'toggle__text');
toggle.appendChild(toggleText);

// Navigation bar
const navBar = document.createElement('nav');
navBar.setAttribute('id', 'nav');
themeContainer.appendChild(navBar);

// Anchor tags
const home = document.createElement('a');
home.setAttribute('href', '#home');
home.innerHTML = `Home`;
navBar.appendChild(home);

const about = document.createElement('a');
about.setAttribute('href', '#about');
about.innerHTML = `About`;
navBar.appendChild(about);

const projects = document.createElement('a');
projects.setAttribute('href', '#projects');
projects.innerHTML = `Projects`;
navBar.appendChild(projects);

const contact = document.createElement('a');
contact.setAttribute('href', '#contact');
contact.innerHTML = `Contact`;
navBar.appendChild(contact);


// Home Section
const homeSection = document.createElement('section');
homeSection.setAttribute('id', 'home');
document.body.append(homeSection);

const homeDiv = document.createElement('div');
homeDiv.setAttribute('class', 'title__group');
homeSection.appendChild(homeDiv);

const homeHeader = document.createElement('h1');
homeHeader.innerHTML = `Hello! Welcome to my website`;
homeDiv.appendChild(homeHeader);

// About Section
const aboutSection = document.createElement('section');
aboutSection.setAttribute('id', 'about');
document.body.append(aboutSection);

// Add a header
const aboutHeader = document.createElement('h1');
aboutHeader.innerHTML = `Undraw Illustrations`;
aboutSection.appendChild(aboutHeader);

// Create about div
const aboutDiv = document.createElement('div');
aboutDiv.setAttribute('class', 'about__container');
aboutSection.appendChild(aboutDiv);

// create image div
const imageDiv = document.createElement('div');
imageDiv.setAttribute('class', 'image__container');
aboutDiv.appendChild(imageDiv);

// Add h2 
const imageDivHeader = document.createElement('h2');
imageDivHeader.innerHTML = `Web Innovation`;
imageDiv.appendChild(imageDivHeader);

// Insert  image1
const image1 = document.createElement('img');
image1.setAttribute('src', '/myProject/assets/undraw_proud_coder_light.svg');
image1.setAttribute('width', '300px');
imageDiv.appendChild(image1);

// create image2 div
const image2Div = document.createElement('div');
image2Div.setAttribute('class', 'image__container');
aboutDiv.appendChild(image2Div);

// Add h2 
const image2DivHeader = document.createElement('h2');
image2DivHeader.innerHTML = `Building Websites`;
imageDiv.appendChild(image2DivHeader);

// Insert  image2
const image2 = document.createElement('img');
image2.setAttribute('src', '/myProject/assets/undraw_building_websites_light.svg');
image2.setAttribute('width', '300px');
imageDiv.appendChild(image2);

// create image3 div
const image3Div = document.createElement('div');
image3Div.setAttribute('class', 'image__container');
aboutDiv.appendChild(image3Div);

// Add h2 
const image3DivHeader = document.createElement('h2');
image3DivHeader.innerHTML = `Web devices`;
imageDiv.appendChild(image3DivHeader);

// Insert  image3
const image3 = document.createElement('img');
image3.setAttribute('src', '/myProject/assets/undraw_web_devices_light.svg');
image3.setAttribute('width', '300px');
imageDiv.appendChild(image3);


// Projects Section
const projectSection = document.createElement('section');
projectSection.setAttribute('id', 'projects');
document.body.append(projectSection);

// Projects H1
const projectH1 = document.createElement('h2');
projectH1.innerHTML = `Buttons`;
projectSection.appendChild(projectH1);

// Project Buttons div
const buttonDiv = document.createElement('div');
buttonDiv.setAttribute('class', 'buttons');
projectSection.appendChild(buttonDiv);

// color buttons
const button1 = document.createElement('button');
button1.setAttribute('class', 'primary');
button1.innerText = `Primary`;
buttonDiv.appendChild(button1)

const button2 = document.createElement('button');
button2.setAttribute('class', 'secondary');
button2.innerText = `Secondary`;
buttonDiv.appendChild(button2);

const button3 = document.createElement('button');
button3.setAttribute('class', 'primary');
button3.setAttribute('onclick', 'disabled');
button3.innerText = `Disabled`;
buttonDiv.appendChild(button3);

const button4 = document.createElement('button');
button4.setAttribute('class', 'outline');
button4.innerText = `Outline`;
buttonDiv.appendChild(button4);

const button5 = document.createElement('button');
button5.setAttribute('class', 'secondary outline');
button5.innerText = `Alt Outline`;
buttonDiv.appendChild(button5);

const button6 = document.createElement('button');
button6.setAttribute('class', 'outline');
button6.setAttribute('onclick', 'disabled');
button6.innerText = `Disabled`;
buttonDiv.appendChild(button6);

// Project paragraph div
const paragraphDiv = document.createElement('div');
paragraphDiv.setAttribute('class', 'text__box');
paragraphDiv.setAttribute('id', 'text__box');
projectSection.appendChild(paragraphDiv);

// Paragraph
const divParagraph = document.createElement('p');
divParagraph.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellat autem totam voluptate similique ex veniam voluptatibus vero illo ipsa. Eos quae ullam totam ipsa repellat excepturi architecto illum magni.`;
paragraphDiv.appendChild(divParagraph);


// Contact Section
const contactSection = document.createElement('section');
contactSection.setAttribute('id', 'contact');
document.body.append(contactSection);

// Contact div
const contactDiv = document.createElement('div');
contactDiv.setAttribute('class', 'social__icons');
contactSection.appendChild(contactDiv);

// Social Icons
const icon1 = document.createElement('i');
icon1.setAttribute('aria-hidden', 'true');
icon1.setAttribute('class', 'fa-brands fa-github');
contactDiv.appendChild(icon1);

const icon2 = document.createElement('i');
icon2.setAttribute('aria-hidden', 'true');
icon2.setAttribute('class', 'fa-brands fa-twitter');
contactDiv.appendChild(icon2);

const icon3 = document.createElement('i');
icon3.setAttribute('aria-hidden', 'true');
icon3.setAttribute('class', 'fa-brands fa-linkedin');
contactDiv.appendChild(icon3);

const icon4 = document.createElement('i');
icon4.setAttribute('aria-hidden', 'true');
icon4.setAttribute('class', 'fa-brands fa-whatsapp');
contactDiv.appendChild(icon4);

const icon5 = document.createElement('i');
icon5.setAttribute('aria-hidden', 'true');
icon5.setAttribute('class', 'fa-brands fa-telegram');
contactDiv.appendChild(icon5);

