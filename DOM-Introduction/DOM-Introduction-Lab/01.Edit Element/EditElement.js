function editElement(initialText, match, replacer) {
    
    const text = initialText.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = text.replace(matcher, replacer);
    initialText.textContent = edited;

}