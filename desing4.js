
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
let changedtext = document.querySelector(`.changed-text`);
function changingtext ()
{
    setTimeout(() =>
    {
        changedtext.textContent = ` Studio`;
    }, 0);
    setTimeout(() =>
{
        changedtext.innerHTML = `<span class="changed-text colormain"> Team</span>`;
    }, 2000);
    setTimeout(() =>
    {
        changedtext.textContent = ` Minds`;
    }, 4000);
}
changingtext();
setInterval(() =>
{
    changingtext();
}, 4000);
