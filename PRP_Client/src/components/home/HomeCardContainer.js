import { HomeCardItem } from "./HomeCardItem"

export const HomeCardContainer = ({ items }) => {
  return (

    <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2">
      {
        items.map((item) => (
          <HomeCardItem
            key={item.title}
            { ...item }
          />
        ))
      }
    </div>
  )
}