import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, closestCorners, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortedItem } from "./SortedItem";
import { Card } from "@/models/CardItem";
import { useCallback } from "react";

type Props = {
  cards: Card[];
  setCards: any;
}

export const SortArea: React.FC<Props> = (props: Props) => {

// === センサー(DndContextに渡すことでセンサーで定義した操作で処理実行できる) ===
const sensors = useSensors(
  useSensor(PointerSensor), // マウスやタッチスクリーン操作に対応するセンサー
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
  }) // キーボード操作に対応するセンサー
);

const handleDragEnd = useCallback((event: DragEndEvent) => {
  const { active, over } = event; // active: ドラッグされたアイテム情報 over: ドラック先の情報

  if (active.id && over && over.id) {
    const oldIndex = props.cards.findIndex((card) => card.id === active.id); // ドラッグされたアイテムの要素番号を取得
    const newIndex = props.cards.findIndex((card) => card.id === over.id); // ドラッグ先のアイテム

    const updatedItems = [...props.cards];
    updatedItems.splice(oldIndex, 1); // oldIndex番目の要素から1つだけ削除する
    updatedItems.splice(newIndex, 0, props.cards[oldIndex]); // newIndex番目の要素から0つだけ削除し、newIndex版目の位置にprops.cards[oldIndex]を差し込む

    props.setCards(updatedItems); // 上記で編集した配列をセットする
  }
}, [props.cards]);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <SortableContext items={props.cards} strategy={verticalListSortingStrategy}>
        <div>
          {props.cards.map((card) => (
            <SortedItem key={card.id} id={card.id} title={card.title} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );

}