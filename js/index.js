const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};




// Example: Update the img src for the logo

///NAV - HEADER
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let topNav = document.querySelectorAll("nav a")
topNav[0].textContent = siteContent.nav["nav-item-1"]
topNav[1].textContent = siteContent.nav["nav-item-2"]
topNav[2].textContent = siteContent.nav["nav-item-3"]
topNav[3].textContent = siteContent.nav["nav-item-4"]
topNav[4].textContent = siteContent.nav["nav-item-5"]
topNav[5].textContent = siteContent.nav["nav-item-6"]



let head1 = document.getElementsByTagName("h1");
head1[0].innerHTML = "DOM<br>Is<br>Awesome"

let btn = document.querySelector("button");
btn.textContent = "Get Started"


let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])


//MIDDLE

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let textheaders = document.querySelectorAll(".text-content h4");
textheaders[0].textContent = siteContent["main-content"]["features-h4"]
textheaders[1].textContent = siteContent["main-content"]["about-h4"]
textheaders[2].textContent = siteContent["main-content"]["services-h4"]
textheaders[3].textContent = siteContent["main-content"]["product-h4"]
textheaders[4].textContent = siteContent["main-content"]["vision-h4"]


let toptext = document.querySelectorAll(".text-content p");
toptext[0].textContent = siteContent["main-content"]["features-content"]
toptext[1].textContent = siteContent["main-content"]["about-content"]
toptext[2].textContent = siteContent["main-content"]["services-content"]
toptext[3].textContent = siteContent["main-content"]["product-content"]
toptext[4].textContent = siteContent["main-content"]["vision-content"]


//CONTACT

let contactH = document.querySelector(".contact h4");
contactH.textContent = siteContent["contact"]["contact-h4"]

let contactinfo = document.querySelectorAll(".contact p");
contactinfo[0].innerHTML = "123 Way 456 Street <br>Somewhere, USA"
contactinfo[1].textContent = siteContent["contact"]["phone"]
contactinfo[2].textContent = siteContent["contact"]["email"]

let footer1 = document.querySelectorAll("footer p");
footer1[0].textContent = siteContent["footer"]["copyright"]