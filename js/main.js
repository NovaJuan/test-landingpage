window.onload = function(){

    //SETTING STATIC HEADER HEIGHT
    var header = document.querySelector('header');
    var heightCalc = Math.floor((window.innerHeight / 100) * 90)
    header.style.height = heightCalc + 'px';

    //LOADER
    var loader = document.getElementById('loader');
    loader.style.transform = 'translateX(100%)';
    setTimeout(()=>{
        loader.style.display = 'none';
    },600);

    //NAV BACKGROUND
    if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
        navBG();
    }

    document.addEventListener('scroll',navBG);
    function navBG(){
        var navbg = document.getElementById('nav-bg');
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 0){
            navbg.style.opacity = '.8';
        }else{
            navbg.style.opacity = '0';
        }
    }

    //SECOND NAV
    var togglebtn = document.getElementById('toggle-nav');
    var closebtn = document.getElementById('close-nav');
    var secondNav = document.getElementById('second-nav');

    var isToggle = false;

    togglebtn.addEventListener('click',toggleNavbar);
    closebtn.addEventListener('click',toggleNavbar);

    function toggleNavbar(){
        if(!isToggle){
            secondNav.style.transform = 'translateX(0%)'; 
        }else{
            secondNav.style.transform = 'translateX(100%)'
        }

        isToggle = !isToggle;
    }

    //ANCHOR TAG SCROLL
    $(".scroller").click(function(){
        var section = '#' + this.getAttribute('data-section');
        console.log(section);
        $("html,body").animate({
            scrollTop:$(section).offset().top - 80
        },500);
        return false;
    });

}