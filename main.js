const mainPage = document.getElementById("container")
const aboutPage = document.getElementById("aboutPage")
const aboutButton = document.getElementById("about")

const dipsplayNone = (page) => {
    // page.style.display = "none"
    alert("hi")
}

aboutButton.addEventListener("click", () => {
    
    
    mainPage.classList.add("introAbout")
    aboutPage.classList.add("aboutIn")
    aboutPage.style.display="inline"
    setTimeout(() => {
        mainPage.style.display="none"
        
    }, 500)
    
})