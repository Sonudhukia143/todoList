const navbar = document.querySelector('#nav--bar');
const bottombar = document.querySelector('#bottom--bar');

/*creation of additional elements of the page has been handeled here */
export default function additionalElements () {
    const h1 = document.createElement('h1');

    h1.textContent = 'TODO TASK REMINDER';
    navbar.appendChild(h1);
    
}