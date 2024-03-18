const input = document.getElementById('age')
const errorspan = document.getElementById('errorspan') 
const button = document.getElementById('mybutton')

input.addEventListener('keyup', checkage)


    


function checkage(){
    
    const input = age.value

    if (input === '') {
        // Clear the error message when the input field is empty
        errorspan.innerHTML = '';
}

else if (input <=0){

       errorspan.innerHTML = 'Age cannot be zero or less than zero'
}

else if (input >120){
    errorspan.innerHTML = 'Age is beyond the limit'
}
else {
    // Clear any existing error messages if age is valid
    errorspan.innerHTML = ''

}
}