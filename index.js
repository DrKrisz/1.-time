fetch('https://httpbin.org/ip')
.then(response => response.json())
.then(data => {
const publicIP = data.origin;
console.log('Public IP:', publicIP);

alert("Your ip is " + publicIP);
})
.catch(error => {
console.error('Error:', error);
});
