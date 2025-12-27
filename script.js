    function clickNav(){
      alert('Anda sedang berada di halaman ini.');
      console.log('Anda sedang berada di halaman ini.');
    };
    if (window.innerWidth > 768){
      window.location.href = "desktop-block.html";
    } else {
      if (window.location.pathname.includes("desktop-block.html")){
        window.location.replace("index.html");
      };
    };