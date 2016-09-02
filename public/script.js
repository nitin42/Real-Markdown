window.onload = function() {

    var converter = new showdown.Converter(); // Initialise the showdown converter
    var pad = document.getElementById('pad'); // get the element 
    var markdownArea = document.getElementById('markdown');    

    // Function to convert the text to markdown
    var convertTextAreaToMarkdown = function(){
        var markdownText = pad.value; // Get the value from the mardown area
        html = converter.makeHtml(markdownText); // Conver the text using showdown
        markdownArea.innerHTML = html; // Assign the html property of the element
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();

    sharejs.open('home', 'text', function(error, doc) {
        doc.attach_textarea(pad);
    });

};
