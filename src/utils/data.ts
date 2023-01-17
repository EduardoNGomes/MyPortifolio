interface dataProps {
  id: number
  img: string
  title: string
  deploy: string
  github: string
}

export const data: dataProps[] = [
  {
    id: 1,
    title: 'Food Explorer',
    github: 'https://github.com/EduardoNGomes/Front_end_Explorer_Food',
    deploy: 'https://foodexplorereduardo.netlify.app/',
    img: './src/assets/images/FoodExplorer.png',
  },
  {
    id: 2,
    title: 'Coffee Delivery',
    github: 'https://github.com/EduardoNGomes/CoffeeDelivery',
    deploy: 'https://coffeedelivery-eduardo.netlify.app/',
    img: './src/assets/images/coffeedelivery.png',
  },
  {
    id: 3,
    title: 'GitHub Blog',
    github: 'https://github.com/EduardoNGomes/Github_Blog',
    deploy: 'https://blogeduardogithub.netlify.app/',
    img: './src/assets/images/github-blog.png',
  },
]
