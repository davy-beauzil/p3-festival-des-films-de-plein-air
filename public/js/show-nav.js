var btn = document.querySelector('div.btn_bars').classList;
var nav = document.querySelector('nav.nav_mobile').classList;
var newsletter = document.querySelector('.newsletter_form').classList;

function barsButton(){

    if(newsletterIsShowed()){
        newsletter.remove('flex');
        newsletter.add('hidden');
        btn.remove('active');
        btn.add('not-active');
        btn.add('lg:hidden');
        document.documentElement.style.overflow = 'visible';
    }else if (mobileNavigationIsShowed()){
        nav.remove('block');
        nav.add('hidden');
        btn.remove('active');
        btn.add('not-active');
        document.documentElement.style.overflow = 'visible';
    }else{
        nav.add('block');
        nav.remove('hidden');
        btn.add('active');
        btn.remove('not-active');
        document.documentElement.style.overflow = 'hidden';
    }
}

function showNewsletterForm(){

    if(!newsletterIsShowed()){
        newsletter.remove('hidden');
        newsletter.add('flex');
        btn.remove('not-active');
        btn.remove('lg:hidden');
        btn.add('active');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.documentElement.style.overflow = 'hidden';
    }
}

function newsletterIsShowed(){

    if(newsletter.contains('hidden')){
        return false;
    } else {
        return true;
    }
}

function mobileNavigationIsShowed(){

    if(nav.contains('hidden')){
        return false;
    } else {
        return true;
    }
}