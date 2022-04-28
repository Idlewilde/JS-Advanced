function solve() {

  let textInput = document.getElementById('text');
  let text = [];
  text = (textInput.value).toLowerCase().split(' ');

  let namingConventionInput = document.getElementById("naming-convention");
  let namingConvention = namingConventionInput.value;
  let result = 'Error!';

  if (namingConvention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    result = text.join('');
  }

  else if (namingConvention === 'Camel Case') {
    for (let i = 1; i < text.length; i++) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    result = text.join('');
  }

  document.getElementById('result').textContent = result;

}