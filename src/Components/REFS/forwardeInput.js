import React from "react";

// function ForwardeInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const ForwardeInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardeInput;
