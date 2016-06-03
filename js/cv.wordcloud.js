(function($j){
    $j.finished["cloud"] = false;
    
    $j.wordcloud = function(cloud) {
        var wordWeights = [50, // 0 : big 
                    35, // 1
                    30, // 2
                    25, // 3
                    20, // 4
                    15, // 5
                    12, // 6
                    10, // 7
                        8, // 8
                        6, // 9
                        5, // 10
                    ];
        
        WordCloud(cloud, { 
            list: [
                [".Net", wordWeights[0], -90], 
                ["<HTML>", wordWeights[3], -75], 
                ["css", wordWeights[2], 75], 
                ["Javascript", wordWeights[3], 90], 
                ['Visual Studio', wordWeights[6], 45],  
                ['VS Code', wordWeights[7]],  
                ['<XML>', wordWeights[6]], 
                ['dotPeek', wordWeights[8]], 
                ['T4', wordWeights[8]], 
                ['WPF', wordWeights[6]], 
                ['SQL', wordWeights[6]], 
                ['MVC', wordWeights[6]], 
                ['WCF', wordWeights[6]], 
                ["C#", wordWeights[1], 90], 
                ['Windows', wordWeights[8]], 
                ['Linux', wordWeights[8]], 
                ['WebAPI', wordWeights[6]], 
                ['jQuery', wordWeights[6]], 
                ['Bootstrap', wordWeights[6]],  
                ['W3C', wordWeights[6]], 
                ['TFS', wordWeights[6]], 
                ['Github', wordWeights[6]], 
                ['BAZINGA', 5], 
                ['Office', wordWeights[6]], 
                ['GIS', wordWeights[8]], 
                ['SSIS', wordWeights[7]], 
                ['SSRS', wordWeights[7]], 
                ["Ajax", wordWeights[8]], 
                ['Modernizr', wordWeights[9]],
                ['Humanizer', wordWeights[8]],
                ['Raphaël', wordWeights[9]],
                ['WinForm', wordWeights[9]],
                ['Open Source', wordWeights[9], 90], 
                ['SOAP', wordWeights[10]], 
            ] ,
            drawMask: false,
            shuffle: false,
            rotateRatio: 1,
            gridSize: 10,
            weightFactor: 2,
            fontFamily: 'Calibri, cursive, sans-serif',
            // fontFamily: 'Calibri, Finger Paint, cursive, sans-serif',
            // color: function(word, weight, fontSize, distance, theta){
            //     return 'blue';
            // },
            color: null,
            hover: window.drawBox,
            // click: function(item) {
            //     alert(item[0] + ': ' + item[1]);
            // },
            clearCanvas: true,
            backgroundColor: 'transparent' //'#EEE'
        });
        
        cloud.addEventListener("wordcloudstop", function(evt) {
            $j.finished.cloud = true;
            console.log("Cloud generated");
        });
    };
})($j = $j || {finished:{}})