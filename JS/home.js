// Fetch Categories 
let loadCategories = () => {
    url = "https://openapi.programming-hero.com/api/peddy/categories";
    fetch(url).
        then(response => response.json()).
        then(data => displayCategories(data.categories)).
        catch(error => console.error());
}


// show Categories 
let displayCategories = (data) => {
    let categories = document.getElementById('categories');

    data.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `
        <button id="btn-${element.category}" onclick="loadCategoriesVideos('${element.category}')" class="btn rounded-3xl border-gray-400 px-4 hover:bg-blue-200 category-btn">
            <img class="w-8 h-8 object-cover bg-transparent" src="./images/${element.category}.webp" alt="">
            <h4 class="px-2">${element.category}</h4>
        </button>
        `;
        categories.append(div);
    });
}

// fetch in category type videos 
let loadCategoriesVideos = (category) => {
    const url = `https://openapi.programming-hero.com/api/peddy/category/${category}`;
    fetch(url).
        then(response => response.json()).
        then(info => {
            console.log(info.data);
            removeActiveBtn();
            const activeBtn = document.getElementById(`btn-${category}`);
            activeBtn.classList.add("active");
            displayAllPets(info.data)
        }).
        catch(error => console.error());
}

// fetch All Pets 
let loadAllPets = async () => {
    // For 2s Loading Start
    const loader = document.getElementById("loader");
    const petCard = document.getElementById("pet-card");
    const likeContents = document.getElementById("like-contents");

    loader.classList.remove("hidden");
    setTimeout(() => {
        loader.classList.add("hidden");
        petCard.classList.remove("hidden");
        likeContents.classList.remove("hidden");
    }, 2000);
    // For 2s Loading End

    let url = "https://openapi.programming-hero.com/api/peddy/pets";
    let response = await fetch(url);
    let data = await response.json();

    // const myTimeout = setTimeout(displayAllPets(data.pets), 1000);
    displayAllPets(data.pets);
}

// Display All Pets
let displayAllPets = (data) => {
    let petCard = document.getElementById("pet-card");
    petCard.innerHTML = "";

    if (data.length === 0) {
        let div = document.createElement("div");
        div.classList = "flex flex-col justify-center items-center text-center p-8 gap-8 bg-[#edf6f7] rounded-xl";
        div.innerHTML = `
            <div>
                <img class="items-center object-cover" src="./images/error.webp" alt="">
            </div>
            <h2 class="text-4xl font-bold">No Information Available</h2>
            <p class="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
        `;
        petCard.classList.remove("grid");
        petCard.append(div);
    } else {
        petCard.classList.add("grid");
    }
    data.forEach(item => {
        // console.log(item);
        let div = document.createElement("div");
        div.classList = "space-y-2 p-4 border border-blue-100 rounded-xl text-start";
        div.innerHTML = `
            <img class="rounded-xl w-full object-cover" src=${(item.image) ? item.image : "Not Found"} alt="">
            <h2 class="text-xl font-bold">${(item.pet_name) ? item.pet_name : "Not Found"}</h2>
            <p><i class="fa-solid fa-clover"></i> Breed: ${(item.breed) ? item.breed : "Not Found"}</p>
            <p><i class="fa-solid fa-venus-mars"></i> Birth: ${(item.date_of_birth) ? item.date_of_birth : "Not Found"}</p>
            <p><i class="fa-solid fa-calendar-week"></i> Gendar: ${(item.gender) ? item.gender : "Not Found"}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${(item.price) ? item.price : "Not Found"}</p>
            <div class="divider"></div>
            <div class="flex justify-between items-center">
                <button onclick="showLikeContent('${item.image}')" class="border border-blue-100 py-1 px-3 btn bg-white"><i class="fa-regular fa-heart"></i></button>
                <button onclick="adoptModal('${item.petId}')" id="adopt-btn-${item.petId}" class="border border-blue-100 py-1 px-3 btn bg-white">Adopt</button>
                <button onclick="loadPetDetails('${item.petId}')" class="border border-blue-100 py-1 px-3 btn bg-white">Details</button>
            <div>
        `;
        petCard.append(div);
    })
}

// click sort buttton, then sorted pets according to price 
let flag = true;
document.getElementById('btn-sort').
    addEventListener("click", async function () {
        let url = "https://openapi.programming-hero.com/api/peddy/pets";
        let response = await fetch(url);
        let data = await response.json();

        // Descending or Asscending 
        if (flag) {
            flag = false;
            data.pets.sort(function (a, b) {
                return a.price - b.price;
            })
        } else {
            flag = true;
            data.pets.sort(function (a, b) {
                return b.price - a.price;
            })
        }
        displayAllPets(data.pets);
    })

// Click Adopt button show congrats msg then button disable 
let timer;
function adoptModal(id) {
    countdownValue = 3;
    document.getElementById("countdown").innerText = countdownValue;
    const modal = document.getElementById("myModal");
    modal.classList.remove("hidden");

    // Clear any existing timer
    clearInterval(timer);

    timer = setInterval(() => {
        countdownValue--;
        document.getElementById("countdown").innerText = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(timer);
            closeModal();
        }
    }, 750);

    // console.log(`adopt-btn-${id}`)
    document.getElementById(`adopt-btn-${id}`).disabled = true;
}

function closeModal() {
    document.getElementById("myModal").classList.add("hidden");
}

// Fetch Pet Details by pet ID
let loadPetDetails = (id) => {
    let url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
    fetch(url).
        then(res => res.json()).
        then(data => displayPetDetails(data.petData)).
        catch(error => console.log(error));
}
// display pet details as modal 
let displayPetDetails = (data) => {
    // console.log(data)
    let modelData = document.getElementById("model-data");
    modelData.innerHTML = `
    <div class="mx-auto max-w-2xl p-6 flex flex-col gap-4 justify-center text-left" >
        <div>
            <img class="max-w-full rounded-xl object-cover items-center" src=${(data.image) ? data.image : "Not Found"} alt="">
        </div>
        <h2 class="text-2xl font-bold">${(data.pet_name) ? data.pet_name : "Not Found"}</h2>
        <div class="grid grid-cols-2 gap-x-4 gap-y-2 ">
            <p><i class="fa-solid fa-clover"></i> Breed: ${(data.breed) ? data.breed : "Not Found"}</p>
            <p><i class="fa-solid fa-venus-mars"></i> Birth: ${(data.date_of_birth) ? data.date_of_birth : "Not Found"}</p>
        </div>
        <div class="grid grid-cols-2 gap-x-4 gap-y-2">
            <p><i class="fa-solid fa-calendar-week"></i> Gendar: ${(data.gender) ? data.gender : "Not Found"}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${(data.price) ? data.price : "Not Found"}</p>
        </div>
        <p><i class="fa-solid fa-syringe"></i> Vaccinated status: ${(data.vaccinated_status) ? data.vaccinated_status : "Not Found"}</p>
        <div class="divider"></div>
        <h2 class="text-xl font-bold">Details Information</h2>
        <p class="max-w-full">${data.pet_details}</p>

        <div class="">
            <form class="" method="dialog">
                <button class="w-full btn bg-blue-200">Close</button>
            </form>
        </div>
    </div>    
    `;

    document.getElementById('petDetailsBtnModal').showModal();
}


// Right side photo show, click like button 
let showLikeContent = (image) => {
    let likeContents = document.getElementById("like-contents");

    let div = document.createElement("div");
    div.innerHTML = `
        <div class="w-full h-24 overflow-hidden rounded-lg shadow border">
            <img src="${image}" class="w-full h-full object-cover" />
        </div> 
    `;
    likeContents.appendChild(div);
};

// removeActiveBtn from all btn, then add active class in target btn 
const removeActiveBtn = () => {
    const buttons = document.getElementsByClassName("category-btn");
    for (btn of buttons) {
        btn.classList.remove("active");
    }
}

loadCategories();
loadAllPets();

