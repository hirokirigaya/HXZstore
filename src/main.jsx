import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createServer } from "miragejs"

const server = createServer({
  routes() {
    this.namespace = 'api'
    this.get('/products', () => [
      {
        id: 1,
        slug: 'cobault',
        title: 'Cobault',
        slogan: 'The best config',
        category: "computer",
        img: '/imgs/pc1.png',
        price: 1300,
        stars: 5,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 20,
        thead: ['Processor', 'Operating System', 'Memory', 'Storage', 'Graphics', 'Power Supply'],
        specifications: ['Intel Core i7','Windows 10','16GB','1TB', 'NVIDIA GeForce GTX 1660', '500W']
      },
      {
        id: 2,
        slug: 'carbon',
        title: 'Carbon',
        slogan: 'The best config',
        category: "computer",
        img: '/imgs/pc2.png',
        price: 1899,
        stars: 4,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40,
        thead: ['Processor', 'Operating System', 'Memory', 'Storage', 'Graphics', 'Power Supply'],
        specifications: ['Intel Core i7','Windows 10','16GB','1TB', 'NVIDIA GeForce GTX 1660', '500W']
      },
      {
        id: 3,
        slug: 'kronos',
        title: 'Kronos',
        slogan: 'The best config',
        category: "computer",
        img: '/imgs/pc3.png',
        price: 1899,
        stars: 4,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40,
        thead: ['Processor', 'Operating System', 'Memory', 'Storage', 'Graphics', 'Power Supply'],
        specifications: ['Intel Core i7','Windows 10','16GB','1TB', 'NVIDIA GeForce GTX 1660', '500W']
      },
      {
        id: 4,
        slug: 'hero',
        title: 'Hero',
        slogan: 'The best mouse',
        category: "peripherals",
        img: '/imgs/mouse.png',
        price: 134,
        stars: 5,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40,
        thead: ['Buttons', 'Dpi', 'Color', 'Weight'],
        specifications: ['7', '20000','black','0.5kg']
      },
      {
        id: 5,
        slug: 'eagle',
        title: 'Eagle',
        slogan: 'The best headset',
        category: "peripherals",
        img: '/imgs/phone1.png',
        price: 199,
        stars: 5,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40,
        thead: ['Frequency Response', 'Impendace', 'Sensitivy', 'Driver Size'],
        specifications: [ '20Hz - 20kHz','32(1 kHz)','96dB','50mm']
      },
      {
        id: 6,
        slug: 'howk',
        title: 'Howk',
        slogan: 'The best headset',
        category: "peripherals",
        img: '/imgs/phone2.png',
        price: 199,
        stars: 5,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40,
        thead: ['Frequency Response', 'Impendace', 'Sensitivy', 'Driver Size'],
        specifications: ['20Hz - 20kHz','32(1 kHz)','96dB','50mm']
      }
    ]),
    this.get('/computersvitrine', () => [
      {
        id: 1,
        slug: 'cobault',
        title: 'Cobault',
        img: '/imgs/pc1.png',
        price: 1300,
        discount: 20,
      },
      {
        id: 2,
        slug: 'carbon',
        title: 'Carbon',
        img: '/imgs/pc2.png',
        price: 1899,
        discount: 40,
      },
      {
        id: 3,
        slug: 'kronos',
        title: 'Kronos',
        img: '/imgs/pc3.png',
        price: 1899,
        discount: 40,
      }
    ]),
    this.get('/peripheralsvitrine', () => [
      {
        id: 1,
        slug: 'hero',
        title: 'Hero',
        img: '/imgs/mouse.png',
        price: 134,
        discount: 40,
      },
      {
        id: 2,
        slug: 'eagle',
        title: 'Eagle',
        img: '/imgs/phone1.png',
        price: 199,
        discount: 40,
      },
      {
        id: 3,
        slug: 'howk',
        title: 'Howk',
        img: '/imgs/phone2.png',
        price: 199,
        discount: 40,
      }
    ])
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
