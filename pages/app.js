import { useState } from 'react'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
    touchAction: 'none',
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    background: isOver ? 'green' : undefined,
    height: 200,
    border: '1px solid #000',
    margin: 40,
  }

  return (
    <div ref={setNodeRef} style={{ ...props.style, ...style }}>
      {props.children}
    </div>
  )
}

export default function App() {
  const [parent, setParent] = useState(null)
  const draggableMarkup = (
    <Draggable id="draggable">
      <div>Drag me!</div>
    </Draggable>
  )
  const [active, setActive] = useState()

  return (
    <DndContext
      onDragStart={(event) => {
        console.log(event.active.rect)
        setActive(event.active)
      }}
    >
      {parent === null ? draggableMarkup : null}

      <Droppable id="A">
        <div>{parent === 'A' ? draggableMarkup : 'Drop here'}</div>
      </Droppable>
      <Droppable id="B">
        <div>{parent === 'B' ? draggableMarkup : 'Drop here'}</div>
      </Droppable>
      <pre>
        event:
        {JSON.stringify(active, null, 2)}
      </pre>
    </DndContext>
  )
}
