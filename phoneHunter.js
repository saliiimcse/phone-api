const loadPhone = async (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displyPhone(data.data)
    // console.log(data.data);
    
}
const displyPhone = phone => {
    const phoneDiv = document.getElementById('phone-div');
    phoneDiv.textContent = '';
    // disply phone quantity
    phone = phone.slice(0,20);
    // show and hide error message
    const nophone = document.getElementById('phone-not-found');
    if(phone.length === 0){
        nophone.classList.remove('d-none');
    }
    else{
        nophone.classList.add('d-none');
    }
    phone.forEach(phone => {
        const creatDiv = document.createElement('div');
        creatDiv.classList.add('col');
        creatDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.slug}</p>
                </div>
            </div>
        `;
        phoneDiv.appendChild(creatDiv);
    });
    loader(false);
}
// search section
document.getElementById('submit-btn').addEventListener('click',function(){
    loader(true);
    const inputText = document.getElementById('serch-text').value;
    loadPhone(inputText);
})
// loder or spinner section
const loader = isLoding =>{
    const loderDiv = document.getElementById('loader');
    if(isLoding){
        loderDiv.classList.remove('d-none')
    }
    else{
        loderDiv.classList.add('d-none')
    }
}



// loadPhone();