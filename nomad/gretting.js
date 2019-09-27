const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = 'name',
    SHOWING_CN = "showing";

const paintGreeting = (text) =>{
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`
}

const askForName = () =>{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", (event)=>{
        console.log(event);
        if( input.value !== "" || input.value !== null || input.value !== undefined)
        {
            localStorage.setItem(USER_LS, input.value);
            paintGreeting(input.value);
        }else{
            event.preventDefault();
        }
        
    })
}

const loadName = () =>
{
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //men is not
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}
const grettingInit = () =>
{
    loadName();
}

grettingInit();