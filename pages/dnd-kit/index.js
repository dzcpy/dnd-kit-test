import { useState } from 'react';

import { DndContext } from '@dnd-kit/core';

import { Draggable } from './draggable';
import { Droppable } from './droppable';

export default function App() {
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <div>Drag me</div>
    </Draggable>
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      <Droppable id="A">
        <div>{parent === 'A' ? draggableMarkup : 'Drop here'}</div>
      </Droppable>
      <Droppable id="B">
        <div>{parent === 'B' ? draggableMarkup : 'Drop here'}</div>
      </Droppable>
    </DndContext>
  );

  function handleDragStart(event) {
    console.log(event);
  }

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}
