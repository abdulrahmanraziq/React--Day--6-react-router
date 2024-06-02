import React from 'react'
import Card from 'react-bootstrap/Card';

function AllImage({AllData}) {
  return <>
  <section>
    <div className="container">
      <div className="col-md-12">
        <div className="row">
        {AllData.map((item, index) => {
          return (
            <div className="col-md-4 mb-3 mt-3" key={index}>
              <Card>
                <Card.Img variant="top" src={item.image} className="custom-card-img" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        </div>
       
      </div>
    </div>
  </section>
</>
}

export default AllImage
