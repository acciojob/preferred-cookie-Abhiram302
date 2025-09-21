//your JS code here. If required.
const button = document.querySelector("input[type = submit]")
const size = document.getElementById("fontsize")
const color = document.getElementById("fontcolor")
button.addEventListener("click",()=>{
	document.cookie = `fontsize=${size.value}px; path=/;`
	document.cookie = `fontcolor=${color.value}; path=/;`
	// document.documentElement.style.setProperty("--fontsize",size.value+"px")
	// document.documentElement.style.setProperty("--fontcolor",color.value)
})
window.addEventListener("load",()=>{
	let fs = getCookie("fontsize")
	let fc = getCookie("fontcolor")
	if(fs) document.documentElement.style.setProperty("--fontsize",fs)
	if(fc) document.documentElement.style.setProperty("--fontcolor",fc)
	size.value = parseInt(fs)
	color.value = fc
})

function getCookie(cookieName){
	let cookies = document.cookie.split(";")
	let result = null
	cookies.forEach((cookie)=>{
		let trimmedCookie = cookie.trim()
		if(trimmedCookie.includes(cookieName)){
			result = trimmedCookie.substring(cookieName.length+1)
		}
	})
	return result
}