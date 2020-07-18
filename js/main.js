const QOUTEBANK = [
            {
                qoute: "Death and life are in the power of the tongue.",

                author: "Prov.18:21"
            }, {
                qoute: "Being now justified by His blood, we shall be saved from wrath through Him.",

                author: " Rom.5:9"
            }, {
                qoute: "The salvation of the righteous is of the LORD: He is their strength in the time of trouble.",

                author: "Ps.37:39"

            }, {
                qoute: "That ye… may abound to every good work",

                author: " 2Cor.9:8"

            }, {
                qoute: "Leaving the principles of the doctrine of Christ, let us go on unto perfection",

                author: "Heb.6:1"

            }
        ];

        window.onload = init;
        function init() {
            generateQoute()
        };

        function generateQoute() {
            let qouteSize = QOUTEBANK.length;
            let randomIndex = Math.floor(Math.random() * qouteSize); 
            let randomQouteData = QOUTEBANK[randomIndex];

            let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes "
            
            //Add the Qoute 
            let qouteInApiFormat = randomQouteData.qoute.replace(/ /g, "%20")

            twitterLink += qouteInApiFormat;

            // Add the Author 
            let authorInApiFormat = randomQouteData.author.replace(/ /g, "%20")
            
            twitterLink += " - " + authorInApiFormat;

            document.getElementById ("tweet-quote").href = twitterLink;
            document.getElementById("text").innerText = randomQouteData.qoute;
            document.getElementById("author").innerText = randomQouteData.author;
        };