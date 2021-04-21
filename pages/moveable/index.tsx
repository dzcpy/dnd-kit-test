import { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
import MoveableHelper from './moveable-helper';

export default function TestPage() {
  const [helper] = useState(() => {
    return new MoveableHelper();
  });
  const [targets, setTargets] = useState<HTMLElement[]>([]);

  useEffect(() => {
    setTargets(Array.prototype.slice.call(document.querySelectorAll('.target')));
  }, []);

  return (
    <div className="container">
      <div className="target target1">Target1</div>
      <div className="target target2">Target2</div>
      <div className="target target3">Target3</div>
      <Moveable
        target={targets}
        keepRatio={true}
        throttleScale={0}
        renderDirections={['nw', 'ne', 'sw', 'se']}
        edge={false}
        zoom={1}
        origin={false}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
        draggable={true}
        onDragStart={helper.onDragStart}
        onDrag={helper.onDrag}
        onDragGroupStart={helper.onDragGroupStart}
        onDragGroup={helper.onDragGroup}
        resizable={true}
        onResizeStart={helper.onResizeStart}
        onResize={helper.onResize}
        onResizeGroupStart={helper.onResizeGroupStart}
        onResizeGroup={helper.onResizeGroup}
        rotatable={true}
        onRotateStart={helper.onRotateStart}
        onRotate={helper.onRotate}
        onRotateGroupStart={helper.onRotateGroupStart}
        onRotateGroup={helper.onRotateGroup}
        // scalable={true}
        // onScaleGroupStart={({ events }) => {
        //   events.forEach((ev, i) => {
        //     ev.set(frames[i].scale);
        //     ev.dragStart && ev.dragStart.set(frames[i].translate);
        //   });
        // }}
        // onScaleGroup={({ events }) => {
        //   events.forEach((ev, i) => {
        //     frames[i].translate = ev.drag.beforeTranslate;
        //     frames[i].scale = ev.scale;

        //     ev.target.style.transform =
        //       `translate(${ev.drag.beforeTranslate[0]}px, ${ev.drag.beforeTranslate[1]}px)` +
        //       ` scale(${ev.scale[0]}, ${ev.scale[1]})`;
        //   });
        // }}
      />
      <style>
        {`
          html,
          body {
            position: relative;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          .description {
            padding: 10px;
          }
          .target {
            position: absolute;
            width: 100px;
            height: 100px;
            top: 150px;
            left: 100px;
            line-height: 100px;
            text-align: center;
            background: #ee8;
            color: #333;
            font-weight: bold;
            border: 1px solid #333;
            box-sizing: border-box;
          }

          .target1 {
            left: 120px;
            top: 120px;
          }

          .target2 {
            left: 250px;
            top: 150px;
          }

          .target3 {
            left: 200px;
            top: 250px;
          }
        `}
      </style>
    </div>
  );
}