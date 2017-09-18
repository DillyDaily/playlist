$(document).ready(function () {
  
      $.get('https://lit-fortress-6467.herokuapp.com/object', function (data) {
          let container = document.getElementsByClassName('row');

          for (let i=0; i<data.results.length; i++){
              if (data.results[i].cover_art !== ""){    
              let div = document.createElement('div'); 
              
              var cardAlb = document.createElement('IMG');
              $(cardAlb).addClass('album');
              cardAlb.src = "../images/"+data.results[i].cover_art;
              $(div).append(cardAlb)[i];
              $(container).append(div)[i];
              }

              if (data.results[i].artist !== ""){
              cardAlb.id = data.results[i].id;
              }
            }
        
          // let newObj = {};
          // for(let j=0; j<data.results.length; j++){
          // console.log(data.results[j].artist);
          // newObj[data.results[j].artist] = data.results[j].title;
          // }
        
        $('.row').on('click', '#55', function(){
          let playListContain = document.getElementsByClassName('playlist');
          let albumInfo = $("<p></p>");
          $(albumInfo).text([data.results[4].artist]+ ": " + data.results[4].title);
          $(playListContain).append(albumInfo);
        })
        $('.row').on('click', '#18', function(){
          let playListContain = document.getElementsByClassName('playlist');
          let albumInfo = $("<p></p>");
          $(albumInfo).text([data.results[3].artist]+ ": " + data.results[3].title);
          $(playListContain).append(albumInfo);
        })
        $('.row').on('click', '#6', function(){
          let playListContain = document.getElementsByClassName('playlist');
          let albumInfo = $("<p></p>");
          $(albumInfo).text([data.results[1].artist]+ ": " + data.results[1].title);
          $(playListContain).append(albumInfo);
        })
        $('.row').on('click', '#22', function(){
          let playListContain = document.getElementsByClassName('playlist');
          let albumInfo = $("<p></p>");
          $(albumInfo).text([data.results[2].artist]+ ": " + data.results[2].title);
          $(playListContain).append(albumInfo);
        })
        $('.row').on('click', '#2', function(){
          let playListContain = document.getElementsByClassName('playlist');
          let albumInfo = $("<p></p>");
          $(albumInfo).text([data.results[0].artist]+ ": " + data.results[0].title);
          $(playListContain).append(albumInfo);
        })
        let playlistDiv = document.getElementsByClassName('playlist');
        let clear = document.getElementById('B1');
        clear.addEventListener('click', function () {
         $(playlistDiv).empty();  
        })
     })    
  });


  /*I know this isn't doing what it should - I need to spend 
      some time on post requests*/
        document.getElementById('B2');
        $('B2').click(function(){
          $.post("https://lit-fortress-6467.herokuapp.com/post", function(){
              alert("My New Playlist");
          });
      });
      