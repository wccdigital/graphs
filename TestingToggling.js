function toggle_visibility(cl){
   var els = document.getElementsByClassName(cl);
   for(var i=0; i<els.length; ++i){
      var s = els[i].style;
      s.display = s.display==='none' ? 'block' : 'none';
   };
}

function make_invisibile(cl){
   var els = document.getElementsByClassName(cl);
   for(var i=0; i<els.length; ++i){
      var s = els[i].style;
      s.display = 'none';
   };
}

function ToggleA(){
  toggle_visibility('clsA');
  make_invisibile('clsB');
  make_invisibile('clsC');
  }


function ToggleB(){
  toggle_visibility('clsB');
  make_invisibile('clsA');
  make_invisibile('clsC');
  }
  

function ToggleC(){
  toggle_visibility('clsC');
  make_invisibile('clsA');
  make_invisibile('clsB');

  }
