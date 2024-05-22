import { Heading } from './Component/Heading'
import { Carousel } from './Component/Carousel'
import { Category } from './Component/Category'
import { BestSelling } from './Component/BestSelling'
import { FeaturedBook } from './Component/FeaturedBook'
import { DealOfTheWeek } from './Component/DealOfTheWeek'
import { NewReleases } from './Component/NewReleases'
import { FavoriteAuthors } from './Component/FavoriteAuthors'
import { Footer } from './Component/Footer'

export const App = () => {
  return (
    <div>
      <Heading/>
      <Carousel/>
      <Category/>
      <BestSelling/>
      <FeaturedBook/>
      <DealOfTheWeek/>
      <NewReleases/>
      <FavoriteAuthors/>
      <Footer/>
    </div>
  )
}
