let global = 0;
const pages = [
    {
        page:"home",
        navigate: homePage
    },
    {
        page:"about",
        navigate: about
    },
    {
        page:"interact",
        navigate: interact
    }
]

function navButton(pg, pr, nv)
{
    let button = document.createElement("button");
    button.innerHTML = pg;
    button.addEventListener("click", function ()
    {
        document.body.querySelector(".wrapper").innerHTML = " "
        nv();
    })
    pr.appendChild(button);
}

function navigation()
{
    let nav = document.createElement("nav");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height = "80px";
    nav.style.backgroundColor = "blue";
    for(obj of pages)
    {
        console.log(obj.name);
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage()
{
    let home = document.createElement("h1");
    home.innerHTML = "home page";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about()
{
    let about = document.createElement("h1");
    let name = document.createElement("h3");
    about.innerHTML = "about";
    name.innerHTML = "hayden";
    document.body.querySelector(".wrapper").appendChild(about);
    document.body.querySelector(".wrapper").appendChild(name);
}


function interact()
{

    let button = document.createElement("button");
    button.innerHTML = "click me" + " " + global;

    button.addEventListener("click", function(){
        global = global + 1;
        button.innerHTML = "click me" + " " + global;
    })

    let interact = document.createElement("h1");
    interact.innerHTML = "interact";
    document.body.querySelector(".wrapper").appendChild(interact);

    document.body.appendChild(button);
}

navigation();
homePage();
