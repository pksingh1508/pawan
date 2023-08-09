const themeSwap_moon = document.getElementById('moon');
const themeSwap_sun = document.getElementById('sun');
const themeSwap_moon1 = document.getElementById('moon1');
const themeSwap_sun1 = document.getElementById('sun1');
const Body = document.body;
const getResume = document.getElementById('getResume');

const openCloseBtn = document.getElementById('openClose');
const openCloseBtn1 = document.getElementById('openClose1');
const openCloseBtn2 = document.getElementById('openClose2');
const skillInfoContainer = document.querySelector('.skill_info');
const skillInfoContainer1 = document.querySelector('.skill_info1');
const skillInfoContainer2 = document.querySelector('.skill_info2');


themeSwap_moon.addEventListener('click', () => {
    themeSwap_moon.classList.add("hide");
    themeSwap_sun.style.visibility = "visible";
    Body.classList.add("dark-theme");
})

themeSwap_sun.addEventListener('click', () => {
    themeSwap_sun.style.visibility = "hidden";
    themeSwap_moon.classList.remove("hide");
    Body.classList.remove("dark-theme");
})

themeSwap_moon1.addEventListener('click', () => {
    themeSwap_moon1.classList.add("hide");
    themeSwap_sun1.style.visibility = "visible";
    Body.classList.add("dark-theme");
})

themeSwap_sun1.addEventListener('click', () => {
    themeSwap_sun1.style.visibility = "hidden";
    themeSwap_moon1.classList.remove("hide");
    Body.classList.remove("dark-theme");
})

getResume.addEventListener('click', () => {
    // const url = "https://res.cloudinary.com/dbym760el/image/upload/v1691062294/PawanSingh/Pawan_Kumar_eosbrz.pdf";
    const url = "https://res.cloudinary.com/dbym760el/image/upload/v1691555738/Resume/PawanKumar_qwvb99.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded-pdf.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

const closeOpenContainer = () => {
    skillInfoContainer.classList.toggle('active');
}
const closeOpenContainer1 = () => {
    skillInfoContainer1.classList.toggle('active1');
}
const closeOpenContainer2 = () => {
    skillInfoContainer2.classList.toggle('active2');
}

openCloseBtn.addEventListener('click', closeOpenContainer);
openCloseBtn1.addEventListener('click', closeOpenContainer1);
openCloseBtn2.addEventListener('click', closeOpenContainer2);

const closeModal = () => {
    modal.style.scale = 0;
}


const bar = document.querySelector('.bar');
const modal = document.querySelector('.modal');

bar.addEventListener('click', () => {
    modal.style.scale = 1;
})
