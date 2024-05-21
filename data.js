

function callskill(){
    return fetch('https://raw.githubusercontent.com/Cyber-Programer/mySelf/main/skill.json')
        .then( res => {
            if (res.ok){
                return res.json();
            }
            else{
                throw new Error("Problem");
            }
        })
        .catch(error =>{
            console.log(error);
        })
}


callskill().then(data =>{
    const contaner = document.querySelector('.section3 > .box')
    data.forEach(element => {
        elm = `
        <div class="skillBox">
            <img src="${element['ico']}" alt="md sifat islam">
            <div class="layer">
                <h4>${element['name']}</h4>
            </div>
        </div>
        `
        contaner.innerHTML += elm
    });

    
})

