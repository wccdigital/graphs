function toggle_visibility(cl){
   var els = document.getElementsByClassName(cl);
   for(var i=0; i<els.length; ++i){
      var s = els[i].style;
      s.display = s.display==='none' ? 'block' : 'none';
   };
}

function ToggleA(){
  toggle_visibility('clsA');
  }


function ToggleB(){
  toggle_visibility('clsB');
  }
  

function ToggleC(){
  toggle_visibility('clsC');
  }
