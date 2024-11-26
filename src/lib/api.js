export function getData(){
    const data = {
        geneneral: {
            dates: [
            '2024-11-01', '2024-11-02', '2024-11-03', '2024-11-04', '2024-11-05',
            '2024-11-06', '2024-11-07', '2024-11-08', '2024-11-09', '2024-11-10'
            ],
            values: [15, 20, 18, 25, 22, 19, 30, 35, 40, 38]
        },

        type: {
            "Neutral": 5434,
            "Positive": 19034,
            "Negative": 1000,
            "Sarcastic": 50
        }
      };
      
    return data
}