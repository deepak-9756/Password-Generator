let inputSlider = document.querySelector('#inputSlider')
let sliderValue = document.querySelector('#sliderValue')
let passBox = document.querySelector('#passBox')
let gntbtn = document.querySelector('#gntbtn')
let lowercase = document.querySelector("#lowercase")
let Symbol = document.querySelector("#Symbol")
let digit = document.querySelector("#digit")
let uppercase = document.querySelector("#uppercase")
let copy = document.querySelector("#copy")



// showing input slider.....
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value
})

gntbtn.addEventListener("click",()=>{
    passBox.value = generatePassword()
})

copy.addEventListener("click",()=>{
    if(passBox.value!="")
    {
        navigator.clipboard.writeText(passBox.value)
        copy.textContent = "check"
        copy.title = "Password Copied"
        setTimeout(()=>{
            copy.textContent = "content_copy"
            copy.title = ""
        },1000)
    }
})
//generate password

let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "0123456789"
let symbol = "~!@#$%^&*"
let generatePassword=()=>{
    let genPassword=""
    let allChars = ""
    allChars += lowercase.checked ? lowerChars:""
    allChars += Symbol.checked ? symbol:""
    allChars += digit.checked ? number:""
    allChars += uppercase.checked ? upperChars:""
    // genPassword = number.charAt(Math.floor(Math.random()*upperChars.length))
    //genPassword = allChars.charAt(Math.floor(Math.random()*allChars.length))

    for(let i = 1;i<=inputSlider.value ; i++)
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length))
    return genPassword
}