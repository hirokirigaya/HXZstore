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
        category: "computer",
        img: '/imgs/pc1.png',
        price: 1300,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 20
      },
      {
        id: 2,
        slug: 'carbon',
        title: 'Cobault',
        category: "computer",
        img: '/imgs/pc2.png',
        price: 1899,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40
      },
      {
        id: 3,
        slug: 'carbon',
        title: 'Carbon',
        category: "computer",
        img: '/imgs/pc3.png',
        price: 1899,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40
      },
      {
        id: 4,
        slug: 'hero',
        title: 'Hero',
        category: "peripherals",
        img: '/imgs/mouse.png',
        price: 134,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40
      },
      {
        id: 5,
        slug: 'eagle',
        title: 'Eagle',
        category: "peripherals",
        img: '/imgs/phone1.png',
        price: 199,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40
      },
      {
        id: 6,
        slug: 'howk',
        title: 'Howk',
        category: "peripherals",
        img: '/imgs/phone2.png',
        price: 199,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        illo facere deserunt delectus maxime sit aliquam nihil a architecto
        veritatis saepe repellat quae ut perferendis tempore quisquam
        tenetur nemo illum?`,
        discount: 40
      }
    ]),
    this.get('/computersvitrine', () => [
      {
        id: 1,
        title: 'Cobault',
        img: '/imgs/pc1.png',
        price: 1300,
      },
      {
        id: 2,
        title: 'Carbon',
        img: '/imgs/pc2.png',
        price: 1899,

      },
      {
        id: 3,
        title: 'Kronos',
        img: '/imgs/pc3.png',
        price: 1899,
      }
    ]),
    this.get('/peripheralsvitrine', () => [
      {
        id: 1,
        title: 'Hero',
        img: '/imgs/mouse.png',
        price: 134,
      },
      {
        id: 2,
        title: 'Eagle',
        img: '/imgs/phone1.png',
        price: 199,

      },
      {
        id: 3,
        title: 'Howk',
        img: '/imgs/phone2.png',
        price: 199,
      }
    ])
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
