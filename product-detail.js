document.addEventListener('DOMContentLoaded', function (e) {
    
   //  js cho phần chi tiết sản phẩm
   var productImg = document.getElementById('productImg');
   var smallImg = document.getElementsByClassName('smallimg');

       smallImg[0].onclick = function(){
           productImg.src = smallImg[0].src;
       }
       
       smallImg[1].onclick = function(){
           productImg.src = smallImg[1].src;
       }

       smallImg[2].onclick = function(){
           productImg.src = smallImg[2].src;
       }

       smallImg[3].onclick = function(){
           productImg.src = smallImg[3].src;
       }



},false);