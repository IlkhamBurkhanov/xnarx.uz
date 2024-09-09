// import React, { useState } from "react";

// const ProductDetails = ({ product }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { characteristics } = product;

//   // Parsing the details from the product data
//   const details = JSON.parse(characteristics.details);

//   const toggleExpand = () => setExpanded(!expanded);

//   return (
//     <div className="max-w-5xl mx-auto mt-8 p-4 border rounded-lg bg-white shadow">
//       {/* Product Title */}
//       <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>

//       {/* Expand/Collapse Button */}
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         onClick={toggleExpand}
//       >
//         {expanded ? "Collapse" : "Expand"} Details
//       </button>

//       {/* Characteristics Table */}
//       {expanded && (
//         <div className="mt-4">
//           <table className="table-auto  w-full text-left text-sm">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-red-600 text-lg font-bold">
//                   Category
//                 </th>
//                 <th className="px-4 py-2"></th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {Object.keys(details).map((category, index) => (
//                 <React.Fragment key={index} className="">
//                   {/* Category Header */}
//                   <div className="">
//                     <tr className="border-b">
//                       <td className="px-4 py-2 font-bold text-red-600 uppercase">
//                         {category}
//                       </td>
//                       <td></td>
//                     </tr>

//                     {/* Category Details */}
//                     {Object.keys(details[category]).map((key, idx) => (
//                       <tr key={idx} className="border-b">
//                         <td className="px-4 py-2 text-gray-600 font-medium">
//                           {key}
//                         </td>
//                         <td className="px-4 py-2 text-gray-700">
//                           {details[category][key]}
//                         </td>
//                       </tr>
//                     ))}
//                   </div>{" "}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useState } from "react";

// const ProductDetails = ({ product }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { characteristics } = product;

//   // Parsing the details from the product data
//   const details = JSON.parse(characteristics.details);

//   const toggleExpand = () => setExpanded(!expanded);

//   return (
//     <div className="max-w-5xl mx-auto mt-8 p-4 border rounded-lg bg-white shadow">
//       {/* Product Title */}
//       <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>

//       {/* Expand/Collapse Button */}
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         onClick={toggleExpand}
//       >
//         {expanded ? "Collapse" : "Expand"} Details
//       </button>

//       {/* Characteristics Table */}
//       {expanded && (
//         <div className="mt-4">
//           <table className="table-auto w-full text-left text-sm border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-red-600 text-lg font-bold">
//                   Category
//                 </th>
//                 <th className="px-4 py-2 text-red-600 text-lg font-bold">
//                   Key
//                 </th>
//                 <th className="px-4 py-2 text-red-600 text-lg font-bold">
//                   Details
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {Object.keys(details).flatMap((category) =>
//                 Object.keys(details[category]).map((key, idx) => (
//                   <tr key={idx} className="border-b">
//                     <td className="px-4 py-2 text-gray-600 font-medium">
//                       {category}
//                     </td>
//                     <td className="px-4 py-2 text-gray-600 font-medium">
//                       {key}
//                     </td>
//                     <td className="px-4 py-2 text-gray-700">
//                       {details[category][key]}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [expanded, setExpanded] = useState(true);
  const { characteristics } = product;

  // Parsing the details from the product data
  const details = JSON.parse(characteristics.details);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 border rounded-lg bg-white shadow">
      {/* Product Title */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>

        {/* Expand/Collapse Button */}
        <button
          className="px-4 py-1 text-orange-500 text-sm  rounded hover:text-orange-600 transition"
          onClick={toggleExpand}
        >
          {expanded ? "Collapse" : "Expand"} Details
        </button>
      </div>

      {/* Characteristics Table */}
      {expanded && (
        <div className="mt-4">
          <table className="table-auto w-full text-left text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="hidden lg:block">
              {Object.keys(details).map((category, index) => (
                <React.Fragment className="flex" key={index}>
                  <div className="flex">
                    <tr className="border-b">
                      <td className="px-4 min-w-[240px] py-2 font-bold text-[#FA7426] text-2xl uppercase">
                        {category}
                      </td>
                      <td></td>
                    </tr>

                    <div>
                      {Object.keys(details[category]).map((key, idx) => (
                        <tr key={idx} className="border-b block">
                          <td className="px-4 py-2 min-w-[200px] text-[#333333] text-xl font-semibold">
                            {key}
                          </td>
                          <td className="px-4 py-2 text-gray-600">
                            {details[category][key]}
                          </td>
                        </tr>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </tbody>
            <tbody className="lg:hidden">
              {Object.keys(details).map((category, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b">
                    <td
                      className="
            px-4 py-2 font-bold text-[#FA7426] text-lg md:text-2xl 
            uppercase min-w-[180px] md:min-w-[240px]"
                    >
                      {category}
                    </td>
                    <td></td>
                  </tr>

                  {Object.keys(details[category]).map((key, idx) => (
                    <tr key={idx} className="border-b">
                      <td
                        className="
              flex flex-col md:flex-row px-4 py-2 min-w-[160px] 
              text-[#333333] text-sm md:text-xl font-semibold"
                      >
                        {/* Key */}
                        <span className="w-full md:w-1/2">{key}</span>

                        {/* Value */}
                        <span className="text-gray-600 w-full md:w-1/2">
                          {details[category][key]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
