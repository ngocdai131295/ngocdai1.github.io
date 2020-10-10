document.addEventListener('DOMContentLoaded', function () {
    var MenuItems = document.getElementById("MenuItems");
    // console.log(MenuItems);
    MenuItems.style.maxHeight = "0px";
    // click vào menu icon thì thằng kìa xổ ra- tức là thêm css thằng menu
    var menuicon = document.querySelector('.menu-icon');
    // console.log(menuicon);

    //click vào icon cái kia nở ra
    menuicon.onclick = function(){
        console.log('bạn đã click vào đây');
        MenuItems.classList.toggle('menura');
     }

    // ---------- cái này là onclick trong html mà bị lỗi chưa sửa dc nên dùng tạm cách trên-------------
    //      console.log(MenuItems);
        // MenuItems.style.maxHeight = "0px";
    
        // function myFunction(){
        //     if (MenuItems.style.maxHeight == "0px") {
        //        MenuItems.style.maxHeight = "200px";
        //     }else{
        //        MenuItems.style.maxHeight = "0px";
        //     }
        // }
    // --------------------------------------------------------------------------------------------------------

    //  js cho phần chi tiết sản phẩm đã chuyển sang trang produc-detail.js
    // var productImg = document.getElementById('productImg');
    // var smallImg = document.getElementsByClassName('smallimg');

    //     smallImg[0].onclick = function(){
    //         productImg.src = smallImg[0].src;
    //     }

    //     smallImg[1].onclick = function(){
    //         productImg.src = smallImg[1].src;
    //     }

    //     smallImg[2].onclick = function(){
    //         productImg.src = smallImg[2].src;
    //     }

    //     smallImg[3].onclick = function(){
    //         productImg.src = smallImg[3].src;
    //     }



// ============js cho form đăng nhập=======================
        var login = document.getElementById('login');
        var register = document.getElementById('register');
        var LoginForm = document.getElementById('LoginForm');
        var RegForm = document.getElementById('RegForm');
        var Indicator = document.getElementById('Indicator');

        

       login.onclick = function(){
           RegForm.style.transform = "translate(300px)";
           LoginForm.style.transform = "translate(300px)";
            Indicator.style.transform = "translate(0px)";
       }

       register.onclick = function(){
        RegForm.style.transform = "translate(0px)";
        LoginForm.style.transform = "translate(0px)";
        Indicator.style.transform = "translate(100px)";
    }


 },false);