const mainPage = document.getElementById("container")
const aboutPage = document.getElementById("aboutPage")
const aboutButton = document.getElementById("about")
const aboutReturnButton = document.getElementById("aboutReturn")
const projectPage = document.getElementById("projectPage")
const projectButton = document.getElementById("project")
const projectReturnButton = document.getElementById("projectReturn")
const contactPage = document.getElementById("contactPage")
const contactButton = document.getElementById("contact")
const contactReturnButton = document.getElementById("contactReturn")

const dipsplayNone = (page) => {
    // page.style.display = "none"
    alert("hi")
}

aboutButton.addEventListener("click", () => {
    mainPage.classList.add("introAbout")
    aboutPage.classList.remove("aboutIn")
    aboutPage.style.display="grid"
    setTimeout(() => {
        mainPage.style.display="none"
    }, 500)
})

aboutReturnButton.addEventListener("click", () => {
    mainPage.classList.remove("introAbout")
    aboutPage.classList.add("aboutIn")
    mainPage.style.display="grid"
    setTimeout(() => {
        aboutPage.style.display="none"
    }, 500)
})

projectButton.addEventListener("click", () => {
    mainPage.classList.add("introProject")
    projectPage.classList.remove("projectIn")
    projectPage.style.display="grid"
    setTimeout(() => {
        mainPage.style.display="none"
    }, 500)
})

projectReturnButton.addEventListener("click", () => {
    mainPage.classList.remove("introProject")
    projectPage.classList.add("projectIn")
    mainPage.style.display="grid"
    setTimeout(() => {
        projectPage.style.display="none"
    }, 500)
})

contactButton.addEventListener("click", () => {
    mainPage.classList.add("introContact")
    contactPage.classList.remove("contactIn")
    contactPage.style.display="grid"
    setTimeout(() => {
        mainPage.style.display="none"
    }, 500)
})

contactReturnButton.addEventListener("click", () => {
    mainPage.classList.remove("introContact")
    contactPage.classList.add("contactIn")
    mainPage.style.display="grid"
    setTimeout(() => {
        contactPage.style.display="none"
    }, 500)
})