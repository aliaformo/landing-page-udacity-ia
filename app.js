// Creating nav sections lists
const navbarList = document.querySelector('#navbar__list')
const allSections = document.querySelectorAll('section')

function createNavSectionsItemsList() {
    for (let section of allSections) {
        const navLi = document.createElement('li');
        navLi.innerHTML = `<a href='#${section.id}' data-nav='${section.id}'  class="menu__link">${section.dataset.nav}</a>`;
        navbarList.appendChild(navLi);
    }
};

// Calling previous function createNavSectionsItemsList
createNavSectionsItemsList();



// Active section (Guide Udacity class materials and code example)
// check if in view
function inView(sec) {
    const boundClient = sec.getBoundingClientRect();
    return (
        boundClient.top >= 0 &&
        boundClient.left >= 0 &&
        boundClient.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        boundClient.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// show active section on screen
function showActive() {
    for (let section of allSections) {
        if (inView(section)) {
            section.classList.add("your-active-class");
        } else {
            section.classList.add("your-active-class");
        }
    }
}

document.addEventListener('scroll', function () {
    showActive();
});


// Guide from https://codepen.io/dbilanoski/pen/LabpzG, credit to this site.
// show active nav link while scrolling
window.addEventListener("scroll", showActiveLink);

function showActiveLink() {

    // current vertical position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    allSections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 350;
        sectionId = section.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navbar__menu a[href*=" + sectionId + "]").classList.add("active-li");
        } else {
            document.querySelector(".navbar__menu a[href*=" + sectionId + "]").classList.remove("active-li");
        }
    });
}

// Back to top
// get button
let toTop = document.querySelector('#btn-to-top');

// when user scrolls down 50px from the top, show button
window.onscroll = function () {
    scrollFunction();
};


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

// When user clicks on button, scroll to top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


// -------------------------------Date footer---------------------
const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();
