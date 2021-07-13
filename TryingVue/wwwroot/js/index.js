const app = new Vue({ 
    el: '#app',
    data: {
        adverts: [
            { 
                id: 1, 
                title: "2 bedroom luxury apartment",
                distance: '20 miles', 
                description: 'Beautiful apartment, its great. Buy it. Fantastic views, futuristic kitchen. Fully furnished!',
                price: '200,000',
                img: '../img/property1.jpg',
                agent: 'Alex Wzorek',
                displayAd: false
            },
            {
                id: 2,
                title: "4 bedroom house",
                distance: '4 miles',
                description: 'Incredible fully furnished mansion with underfloor heating, basement pool, 6 car garage and cinema!',
                price: '1,340,000',
                img: '../img/property2.jpg',
                agent: 'Alex Wzorek',
                displayAd: false
            },
            {
                id: 3,
                title: "1 bedroom apartment",
                distance: '12 miles',
                description: 'Simple luxurious apartment with beautiful views and huge windows allowing for a tonne of natural light.',
                price: '150,000',
                img: '../img/property3.jpg',
                agent: 'Alex Wzorek',
                displayAd: false
            }
        ],
        infoBox: {
            title: 'Test info box',
            text: 'This is an info box displaying random information wherever i want. I need to add an image to this next.'
        }
    },
    methods: {
        displayAd() {
            this.adverts.forEach(x => {
                let rand = Math.floor(Math.random() * 10);
                x.displayAd = rand > 7
            })
        }
    }
})

app.displayAd()

