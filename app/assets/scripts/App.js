import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var modal = new Modal();
new RevealOnScroll($(".gallery"), "65%");
new RevealOnScroll($(".about-business__routine"), "60%");
var stickyHeader = new StickyHeader();

