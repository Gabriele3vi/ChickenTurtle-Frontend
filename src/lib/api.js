export function getData(){
    const data = {
        timeSeries: {
            dates: [1,2,3,4,5,6,7,8,9,10],
            Neutral: [15, 5, 10, 20, 25, 5, 6, 35, 40, 38],
            Positive: [40, 80, 20, 50, 10, 80, 12, 35, 40, 38],
            Negative: [30, 15, 30, 10, 5, 5, 30, 18, 40, 38],
            Sarcastic: [15, 0, 40, 20, 70, 10, 76, 35, 40, 38],
        },

        Total: {
            "Neutral": 5434,
            "Positive": 19034,
            "Negative": 1000,
            "Sarcastic": 5000
        },

        related: [
            {
                url: "50graHf0Wis",
                title:"Tesla CYBERTRUCK | L’ho PROVATA!",
                channelName: 'Channel1',
                views: 1234,
                likes: 124134,
                comments: 145234,
                sent: {
                    "Neutral": 5434,
                    "Positive": 19034,
                    "Negative": 1000,
                    "Sarcastic": 5000
                }
            },
            {
                url: "CQzYhMDNLPA",
                title:"James May finally drives the Tesla...",
                channelName: 'Channel2',
                views: 1234,
                likes: 124134,
                comments: 145234,
                sent: {
                    "Neutral": 5434,
                    "Positive": 19034,
                    "Negative": 1000,
                    "Sarcastic": 5000
                }
            },
            {
                url: "DsonSEllPmU",
                title:"Cybertruck",
                channelName: 'Channel3',
                views: 1234,
                likes: 124134,
                comments: 145234,
                sent: {
                    "Neutral": 10,
                    "Positive": 2,
                    "Negative": 7,
                    "Sarcastic": 2
                }
            }
        ] 
      };
      
    return data
}

export function dataToPieChartData(rawData){
    console.log(rawData)
    let pieValues = []
    for (const v of Object.values(rawData)) {
        pieValues.push(v)
    }
    let pieData = {
        labels: Object.keys(rawData),  // Labels for the segments
        datasets: [{
        data: pieValues,  // Data values corresponding to the segments
        backgroundColor: ['#FAB12F', '#FA812F', '#FA4032', '#cc632f'],  // Colors for each segment
        //borderColor: '#ffffff',  // Color of the border of the segments
        borderWidth: 1
        }]
    }

    return pieData
}