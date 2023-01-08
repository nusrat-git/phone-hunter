const loadPhone = async (searchPhones) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhones}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const spinnerValue = document.getElementById('spinner');
const loadSpinner = isLoading => {
    if (isLoading) {
        spinnerValue.classList.remove('d-none');
    }
    else {
        spinnerValue.classList.add('d-none');
    }
}

document.getElementById('btn').addEventListener('click', function () {
    loadSpinner(true);
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    loadPhone(inputText);
    inputField.value = '';
})

document.getElementById('input-field').addEventListener('keypress', function (e) {
if(e.key == 'Enter'){
    loadSpinner(true);
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    loadPhone(inputText);
    inputField.value = '';
}
})

const displayPhones = phones => {
    const phonesContainer = document.getElementById('div-container');
    phonesContainer.innerText = '';
    phones = phones.splice(0, 4);
    const noFoundMsg = document.getElementById('no-found-text');
    if (phones.length === 0) {
        noFoundMsg.classList.remove('d-none');
    }
    else {
        noFoundMsg.classList.add('d-none');
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        
        <div class="col">
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>

        `
        phonesContainer.appendChild(phoneDiv);
    });
    loadSpinner(false);
};



// loadPhone();