	
		
          $(document).ready(function(){
          	$('#btn_radio').click(function(){
            $('#contenedor').toggleClass('full');
          })
      });
      





      

      jQuery('div').click(function(){
        jQuery(this).toggleClass('active');
  });


 let pause=document.getElementById('pause')
 let play=document.getElementById('play')
 let audio=document.getElementById('audio')

let canciones=['cancion/cancion.mp3']






let BarraProgreso=document.getElementById('BarraPogre')
let music=audio
let contador=0
music.setAttribute("src",canciones[0])




function playMusic(){ 
    music.src=canciones[contador]
    music.play()
    
}

function bar1() {{
    let bar=document.querySelectorAll('.largo, .mediano')

for(let i of bar)
{
    i.classList.add('bar1')
}
}   
}

function eliminarBar() {{
let bar=document.querySelectorAll('.largo, .mediano')
for(let i of bar)
{i.classList.remove('bar1')}
}}

play.addEventListener('click',()=>{
music.play()
  pause.style.display='inline-block'
  play.style.display='none'
    bar1()
    parlante.classList.add('bibrar')
})


pause.addEventListener('click',()=>{
    music.pause()
    eliminarBar()
    pause.style.display='none'
    play.style.display='inline-block'
    parlante.classList.remove('bibrar')
})

music.addEventListener('timeupdate',()=>{
  let position=music.currentTime / music.duration
  BarraProgreso.style.width=position * 100 + '%'
})



