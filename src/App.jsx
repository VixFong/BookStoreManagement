import { Navbar } from './Component/Navbar'
import { Carousel } from './Component/Carousel'
import { Category } from './Component/Category'
import { BestSelling } from './Component/BestSelling'
import { FeaturedBook } from './Component/FeaturedBook'
import { DealOfTheWeek } from './Component/DealOfTheWeek'
import { NewReleases } from './Component/NewReleases'
import { FavoriteAuthors } from './Component/FavoriteAuthors'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Category/>
      <BestSelling/>
      <FeaturedBook/>
      <DealOfTheWeek/>
      <NewReleases/>
      <FavoriteAuthors/>
    </div>
  )
}
