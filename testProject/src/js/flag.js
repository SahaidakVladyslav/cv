export function changeFlag() {
    
        
document.querySelector('body').addEventListener('click',(event) => {
    if (!event.target.classList.contains('btn__lang')) return;
    const flagEl = document.querySelector('#flag')
    flagEl.classList.toggle("btn--flag--uk")

if (flagEl.innerText === "dk") {
    flagEl.classList.add("btn--flag--dk")
    flagEl.classList.remove("btn--flag--uk")
} else { 
    console.log(' ne pracya');
    flagEl.classList.remove("btn--flag--dk")
    flagEl.classList.add("btn--flag--uk")
}

})
}
