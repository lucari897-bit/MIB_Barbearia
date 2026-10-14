(function(){
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  function set(o){menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');}
  btn.addEventListener('click',function(){set(!menu.classList.contains('open'));});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();
(function(){var h=document.querySelector('.header');function f(){h.classList.toggle('scrolled',window.scrollY>40);}f();window.addEventListener('scroll',f,{passive:true});})();
(function(){var c=document.querySelector('.float-cta'),hero=document.querySelector('.hero');function f(){c.classList.toggle('show',window.scrollY>hero.offsetHeight*.6);}f();window.addEventListener('scroll',f,{passive:true});})();
