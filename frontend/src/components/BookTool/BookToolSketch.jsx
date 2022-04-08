import React, { useEffect, useRef, useState } from "react";
import { SketchField, Tools } from "../../libs/react-sketch";
import TextInputModal from "./TextInputModal";

const BookToolSketch = ({ bookTool, saveCanvasObjects, objects, newObjects = [] }) => {
  const sketchEl = useRef(null);
  const [fontSize, setFontSize] = useState(18);
  const [showTextInputModal, setShowTextInputModal] = useState(false);
  const [textPosition, setTextPosition] = useState({
    left: 0,
    top: 0,
  });

      // console.log("sendDataServerDashBoard", JSON.parse(dataGot))
const objects1 =  JSON.parse(`{\"type\":\"path\",\"version\":\"4.6.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":102.46,\"top\":131.82,\"width\":211.82,\"height\":299.94,\"fill\":null,\"stroke\":\"#4caf50\",\"strokeWidth\":2,\"strokeDashArray\":null,\"strokeLineCap\":\"round\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"round\",\"strokeUniform\":false,\"strokeMiterLimit\":10,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"skewX\":0,\"skewY\":0,\"path\":[[\"M\",235.11328125,169.02934375],[\"Q\",235.11328125,169.02734375,234.990234375,168.814453125],[\"Q\",234.8671875,168.6015625,234.8671875,167.185546875],[\"Q\",234.8671875,165.76953125,234.8671875,162.4453125],[\"Q\",234.8671875,159.12109375,235.33984375,156.197265625],[\"Q\",235.8125,153.2734375,237.515625,149.8125],[\"Q\",239.21875,146.3515625,241.41015625,143.439453125],[\"Q\",243.6015625,140.52734375,246.541015625,138.3515625],[\"Q\",249.48046875,136.17578125,251.32421875,135.248046875],[\"Q\",253.16796875,134.3203125,254.8046875,133.927734375],[\"Q\",256.44140625,133.53515625,259.765625,133.17578125],[\"Q\",263.08984375,132.81640625,266.080078125,132.81640625],[\"Q\",269.0703125,132.81640625,273.89453125,132.81640625],[\"Q\",278.71875,132.81640625,284.193359375,133.37890625],[\"Q\",289.66796875,133.94140625,295.40625,137.154296875],[\"Q\",301.14453125,140.3671875,303.87890625,142.384765625],[\"Q\",306.61328125,144.40234375,308.6171875,146.65625],[\"Q\",310.62109375,148.91015625,311.6953125,150.748046875],[\"Q\",312.76953125,152.5859375,313.2421875,153.96875],[\"Q\",313.71484375,155.3515625,314.2265625,157.203125],[\"Q\",314.73828125,159.0546875,315.009765625,160.943359375],[\"Q\",315.28125,162.83203125,315.28125,165.033203125],[\"Q\",315.28125,167.234375,315.28125,171.46484375],[\"Q\",315.28125,175.6953125,315.28125,180.962890625],[\"Q\",315.28125,186.23046875,314.728515625,192.322265625],[\"Q\",314.17578125,198.4140625,312.373046875,204.494140625],[\"Q\",310.5703125,210.57421875,308.734375,215.048828125],[\"Q\",306.8984375,219.5234375,305.16796875,222.498046875],[\"Q\",303.4375,225.47265625,301.322265625,227.642578125],[\"Q\",299.20703125,229.8125,295.486328125,232.787109375],[\"Q\",291.765625,235.76171875,287.361328125,238.484375],[\"Q\",282.95703125,241.20703125,275.85546875,244.783203125],[\"Q\",268.75390625,248.359375,259.916015625,251.77734375],[\"Q\",251.078125,255.1953125,239.828125,257.01171875],[\"Q\",228.578125,258.828125,209.78125,260.263671875],[\"Q\",190.984375,261.69921875,177.203125,261.75390625],[\"Q\",163.421875,261.80859375,148.134765625,260.453125],[\"Q\",132.84765625,259.09765625,125.974609375,256.53515625],[\"Q\",119.1015625,253.97265625,114.09765625,251.6796875],[\"Q\",109.09375,249.38671875,106.84765625,247.603515625],[\"Q\",104.6015625,245.8203125,104.029296875,244.501953125],[\"Q\",103.45703125,243.18359375,103.45703125,241.65234375],[\"Q\",103.45703125,240.12109375,103.45703125,237.962890625],[\"Q\",103.45703125,235.8046875,103.45703125,234.173828125],[\"Q\",103.45703125,232.54296875,103.45703125,231.11328125],[\"Q\",103.45703125,229.68359375,103.45703125,227.3671875],[\"Q\",103.45703125,225.05078125,104.32421875,223.01953125],[\"Q\",105.19140625,220.98828125,109.6484375,215.576171875],[\"Q\",114.10546875,210.1640625,122.216796875,202.990234375],[\"Q\",130.328125,195.81640625,137.466796875,190.630859375],[\"Q\",144.60546875,185.4453125,150.439453125,182.466796875],[\"Q\",156.2734375,179.48828125,159.689453125,178.42578125],[\"Q\",163.10546875,177.36328125,165.34375,177.361328125],[\"Q\",167.58203125,177.359375,169.376953125,177.37890625],[\"Q\",171.171875,177.3984375,172.755859375,178.5625],[\"Q\",174.33984375,179.7265625,176.927734375,183.193359375],[\"Q\",179.515625,186.66015625,182.193359375,191.05078125],[\"Q\",184.87109375,195.44140625,188.53125,201.990234375],[\"Q\",192.19140625,208.5390625,195.470703125,216.173828125],[\"Q\",198.75,223.80859375,202.76953125,234.138671875],[\"Q\",206.7890625,244.46875,210.400390625,258.03515625],[\"Q\",214.01171875,271.6015625,217.685546875,285.69140625],[\"Q\",221.359375,299.78125,223.697265625,313.84765625],[\"Q\",226.03515625,327.9140625,227.001953125,336.705078125],[\"Q\",227.96875,345.49609375,228.78515625,351.1875],[\"Q\",229.6015625,356.87890625,229.68359375,359.84765625],[\"Q\",229.765625,362.81640625,229.765625,364.029296875],[\"Q\",229.765625,365.2421875,229.765625,365.796875],[\"Q\",229.765625,366.3515625,229.765625,366.650390625],[\"Q\",229.765625,366.94921875,229.765625,367.900390625],[\"Q\",229.765625,368.8515625,229.765625,375.857421875],[\"Q\",229.765625,382.86328125,230.208984375,392.447265625],[\"Q\",230.65234375,402.03125,231.126953125,409.19140625],[\"Q\",231.6015625,416.3515625,231.958984375,421.2109375],[\"Q\",232.31640625,426.0703125,232.3984375,428.533203125],[\"Q\",232.48046875,430.99609375,232.80078125,431.875],[\"L\",233.12309375,432.75590625]]}`)

// console.log(objects);
// console.log(objects1);
  useEffect(() => {
    console.log("newObjects", newObjects)
      // sketchEl.current._fc?.add(newObjects);
      // sketchEl.current.fromJSON(JSON.stringify(newObjects))
  }, [newObjects])

  const handleClose = () => setShowTextInputModal(false);
  const handleShow = () => setShowTextInputModal(true);

  const saveObjects = (_objects) => {
    // const objects = _objects || sketchEl.current._fc?.getObjects();
    // console.log("object", sketchEl.current.fromJSON(_objects))
    // saveCanvasObjects(objects);
    const _objs = sketchEl.current._fc?.getObjects()
    const lastObj = _objs[_objs.length - 1]
    saveCanvasObjects(lastObj)
    // console.log(lastObj)
  };

  const addText = (text) => {
    if (text) {
      sketchEl.current?.addText(text, {
        left: textPosition.left - 10,
        top: textPosition.top - 10,
        fontSize,
        fill: bookTool.lineColor,
      });
      saveObjects();
    }
  };

  const addLink = (link) => {
    if (link) {
      sketchEl.current?.addLink(link, {
        left: textPosition.left - 10,
        top: textPosition.top - 10,
        fontSize,
        link,
      });
      saveObjects();
    }
  };


  return (
    <>
      <SketchField
        ref={sketchEl}
        width="100%"
        height="100%"
        tool={bookTool.drawType || Tools.Pencil}
        lineColor={bookTool.lineColor}
        lineWidth={bookTool.lineWidth}
        defaultValue={{ objects }}
        // value={{objects:newObjects}}
        // forceValue
        cursor="crosshair"
        onMouseUp={(e) => {
          if (
            [
              Tools.Pencil,
              Tools.Highlight,
              Tools.Line,
              Tools.Rectangle,
              Tools.Circle,
              Tools.HideOfPart,
              Tools.IsoPartOfScreen,
            ].includes(bookTool.drawType)
          ) {
            saveObjects(e);
          }
          if ([Tools.Text, Tools.Link].includes(bookTool.drawType)) {
            setTextPosition({
              left: e.pointer?.x,
              top: e.pointer?.y,
            });
            if (!e.target?.text) handleShow();
          }
          if (bookTool.drawType === Tools.EraserAll) {
            saveObjects([]);
          }
          if (e.target?.text && e.target?.text.indexOf("http") !== -1) {
            window.open(e.target?.text, "_blank");
          }
        }}
        onObjectRemoved={() => {
          saveObjects();
        }}
      />
      {showTextInputModal && (
        <TextInputModal
          show={showTextInputModal}
          onHide={handleClose}
          onSubmit={bookTool.drawType === Tools.Link ? addLink : addText}
          setFontSize={setFontSize}
        />
      )}
    </>
  );
};

export default BookToolSketch;
