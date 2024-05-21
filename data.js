
const originalTitel = 'Md SiFaT IsLaM'
const hiddenTitle = "come back to root_lovs"
const weblogo = document.querySelector('#favicon')
const originalFavicon = './img/webLogo.png';
const hiddenFavicon = './img/favhand.png';
const description = document.querySelector('.half1 > p')
const abdescription = document.querySelector('.left > p')

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


function callData(){
    return fetch('https://raw.githubusercontent.com/Cyber-Programer/mySelf/main/data.json')
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                throw new Error('Problem With data fatching');
            }
        })

        .catch(error => {
            console.log(error);
        })
}


callData().then(data => {
    description.innerHTML  = data['descripttion'];
    abdescription.innerHTML = data['aboutDescription'];
} )


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


document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
        document.title = hiddenTitle;
        weblogo.href = hiddenFavicon;
    }
    else{
        document.title = originalTitel;
        weblogo.href = originalFavicon;
    }
})


