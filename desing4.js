
function scrrol ()
{
    if (document.documentElement.scrollTop > 20)
    {
        document.querySelector(`.header-landing`).classList.add(`fixedheader`);
    } else
    {
        document.querySelector(`.header-landing`).classList.remove(`fixedheader`);
    }
}
window.onscroll = function () { scrrol(); };

let togele = document.querySelector(`.fa-bars-staggered `);
togele.addEventListener(`click`, () =>
{
    let ulheader = document.querySelector(`.ul-links-header`);
    ulheader.classList.toggle(`toggel-ul-links-header`);
});
let ulheaderitems = document.querySelectorAll(`.ul-links-header .li-links-header a`);
ulheaderitems.forEach(e =>
{
    e.addEventListener(`click`, () =>
    {
        document.querySelector(`.ul-links-header`).classList.remove(`toggel-ul-links-header`);
    });
});

window.addEventListener(`scroll`, () =>
{
    document.querySelector(`.top`).classList.toggle(`d-block`,window.scrollY > 400)
})
// change the text
let changedtext = document.querySelector(`.changed-text`);
const wordschanging = [ ` Minds`, ` Studio`, ` Team` ];
let wordindex = 0;
let charindex = 0;
let isdelat = false;
function changetext ()
{
    let currntword = wordschanging[ wordindex ];
    let currntchar = currntword.substring(0, charindex);
    changedtext.textContent = currntchar;
    changedtext.classList.add(`blink`)
    if (!isdelat && charindex < currntword.length)
    {
        charindex++;
        setTimeout(changetext, 200);
    }
    else if (isdelat && charindex > 0)
    {
        charindex--;
        setTimeout(changetext, 100);
    }
    else
    {
        changedtext.classList.remove(`blink`)
        isdelat = !isdelat;
        wordindex = !isdelat ? (wordindex + 1) % wordschanging.length : wordindex;
        setTimeout(changetext, 1200);
    }
}
changetext();
