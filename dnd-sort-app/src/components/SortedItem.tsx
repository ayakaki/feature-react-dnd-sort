import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities'; 

type Props = {
  id: string;
  title: string;
}

export const SortedItem:React.FC<Props> = (props: Props) => {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id
  });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div id={props.id}>
        <p className="mb-2 border-2 rounded-sm p-2 bg-white">≡ {props.title}</p>
      </div>
    </div>
  )
}