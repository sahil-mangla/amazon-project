const xhr = new XMLHttpRequest();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

//different URLs different backend response
xhr.open('GET','https://supersimplebackend.dev/hello');
xhr.open('GET','https://supersimplebackend.dev');
xhr.open('GET','https://supersimplebackend.dev/products/first');
// xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
// xhr.open('GET','https://supersimplebackend.dev/not-supported');  URL path not supported
xhr.send();
// xhr.response

