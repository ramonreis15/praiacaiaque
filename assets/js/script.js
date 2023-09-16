import { Cards } from './js/Cards'
import { Icones } from './js/Icones'
import { Footer } from './js/Footer'

window.onload = () => {

    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();

}