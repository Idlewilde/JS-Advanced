function extractText() {
    
    let items = document.querySelectorAll("#items li");
    let resultText=document.getElementById('result');

    const result = [];

    for (const item of items) {
        result.push(item.textContent);
    }

    resultText.textContent=result.join('\n');
    console.log(result)

}