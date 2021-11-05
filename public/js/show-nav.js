var btn = document.querySelector('div.btn_bars');
var nav = document.querySelector('nav.nav_mobile');

btn.addEventListener('click', function(e){
    e.preventDefault();
    nav_classes = nav.classList;
    btn_classes = btn.classList;
    if(nav_classes.contains('hidden')){
        nav.classList.remove('hidden');
        nav.classList.add('block');

        if(btn_classes.contains('not-active')){
            console.log('test test')
            btn.classList.remove('not-active');
            btn.classList.add('active');
            document.documentElement.style.overflow = 'hidden';
        }
    }else{
        nav.classList.remove('block');
        nav.classList.add('hidden');

        if(btn_classes.contains('active')){
            btn.classList.remove('active');
            btn.classList.add('not-active');
            document.documentElement.style.overflow = 'visible';
        }
    }
})