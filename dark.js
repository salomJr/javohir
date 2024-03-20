const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

// localStorage.setItem("malumot","1234")
// let item = localStorage.getItem("malumot")
// console.log(item);

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
const userTheme = localStorage.getItem("theme")
// console.log(systemTheme);

const iconToggle = () => {
    moon.classList.toggle("hidden")
    sun.classList.toggle("hidden")
}
// console.log(document.documentElement);

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")
        moon.classList.add("hidden")
        iconToggle()
        return;
    }
    sun.classList.add("hidden")
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
        iconToggle()
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    iconToggle()
}

sun.addEventListener("click", ()=>{
    themeSwitch()
})
moon.addEventListener("click", ()=>{
    themeSwitch()
})

themeCheck()