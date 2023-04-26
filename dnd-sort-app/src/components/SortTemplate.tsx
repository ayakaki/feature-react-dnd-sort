import { Card } from "@/models/CardItem";
import { SortArea } from "./SortArea";
import { useState } from "react";

export const SortTemplate: React.FC = () => {

  const cardsDefault: Card[] = [{
    id: "A",
    title: "アイテムA"
  },
  {
    id: "B",
    title: "アイテムB"
  },
  {
    id: "C",
    title: "アイテムC"
  },
  {
    id: "D",
    title: "アイテムD"
  },
]

  const [cards, setCards] = useState(cardsDefault);


  return(
        <div className="flex justify-center items-center h-screen w-screen flex-col">
          <div className="w-100 mx-auto mb-12">
            <p>■順番</p>
            {cards.map((card, index)=>{
              return index === cards.length - 1? `${card.id}` : `${card.id} → `
            })}
          </div>
          <div className="w-100 mx-auto">
            <p>■入れ替えエリア</p>
            <SortArea cards={cards} setCards={setCards}/>
          </div>
        </div>
    ) 
}