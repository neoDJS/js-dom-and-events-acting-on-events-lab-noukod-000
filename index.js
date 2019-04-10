const app = "I don't do much."
function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  const val = document.querySelector('input').value; //$("input[name='name']").text('try it');
  document.querySelector('input').value = "" //$("input[name='name']").text("");
  return val;
}

function addNewElementAsLi(){
  document.querySelector('ul.employee-list').append('<li>'+retrieveEmployeeInformation()+'</li>');
}

function addNewLiOnClick(){
  preventRefreshOnSubmit()
  addNewElementAsLi();
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('ul.employee-list').innerHTML = "";
}
