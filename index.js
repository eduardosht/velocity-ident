window.onload = function() {
    
    document.querySelector('#exec').addEventListener("click", exec);

    let keyWords = [
        "#if",
        "#foreach"
    ];

    let endKeyWords = [
        "#end"
    ];

    function exec() {
        let text = document.querySelector('#template-string').value;
        let finalTextHTML = '';
        let textFilter = text.split('\n');

        textFilter.forEach(element => {

            if (element.length == 0) return;

            let lastString = '';
            let dataID = 0;

            for (let i = 0; i < keyWords.length; i++) {
                if(element.includes(keyWords[0])) {
                    finalTextHTML += '<div id="'+dataID+'">';
                    finalTextHTML += `<strong>${element.trim()}</strong> <br />`;
                    return true;
                } else if(element.includes(keyWords[1])) {
                    finalTextHTML += '<div  id="'+dataID+'">';
                    finalTextHTML += `<strong>${element.trim()}</strong> <br />`;
                    return true;
                } else {
                    if (lastString != (element.trim()+'<br />') ) {
                        finalTextHTML += element.trim()+'<br />';
                        lastString = element.trim()+'<br />';
                    }
                }
            }

            endKeyWords.some(function(contains) {
                if(element.includes(contains)) {
                    finalTextHTML += '</div>';
                    return true;
                }
            });
        });

        console.log(finalTextHTML);

        document.querySelector('#wrapper').innerHTML = finalTextHTML;
    };
}