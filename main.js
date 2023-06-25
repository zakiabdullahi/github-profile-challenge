let button = document.querySelector("#btn");
let image = document.querySelector("img");
let Name = document.querySelector("#name");
let Username = document.querySelector("#username");
let joined = document.querySelector("#joined");
let following = document.querySelector("#following");
let followers = document.querySelector("#followers");
let icon = document.querySelector("#icon");

const getUser = async () => {

    let input = document.querySelector("input").value;


    let response = await fetch(`https://api.github.com/users/${input}`);
    let data = await response.json()

        .then((res) => {


            console.log(res);
            image.style.display = "block";
            icon.style.display = "none";
            image.src = res.avatar_url

            Name.innerHTML = res.name;
            Username.innerHTML = `@${res.login}`
            joined.innerHTML = `joined:${res.created_at.substring(0, 4)}`;

            following.innerHTML = res.following;

            followers.innerHTML = res.followers;

        })

        .catch((err) => console.log(err))

    // let data= await  


}





button.addEventListener('click', getUser);