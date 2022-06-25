import React from 'react'

export default function Functioanal({data}) {
  console.log(data);
  return (
    <div>
      {
        data.map((item,index) => {
          return (
            <React.Fragment key={index}>
              <h1>
                Sabab: {item.title}
              </h1>
              <h3>
                Narx: {item.amount}$  
              </h3>
              <h6>
                Date: {item.date.toString()}
              </h6>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
