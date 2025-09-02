function generateParagraph(topic, length) {
    const sentences = [];
    const words = topic.split(' ');
    const sentenceCount = Math.max(1, Math.floor(length / 10)); 
    for (let i = 0; i < sentenceCount; i++) {
        const sentenceLength = Math.max(5, Math.floor(Math.random() * 15)); 
        let sentence = [];
        for (let j = 0; j < sentenceLength; j++) {
            const word = words[Math.floor(Math.random() * words.length)];
            sentence.push(word);
        }
        sentences.push(sentence.join(' ') + '.');
    }
    return sentences.join(' ');
}
const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');
generateBtn.addEventListener('click', () => {
    const numParagraphs = parseInt(document.getElementById('numParagraphs').value);
    output.innerHTML = '';
    output.innerHTML = `<p>${generateParagraph("The quick brown fox jumps over the lazy dog", numParagraphs)}</p>`;

})
