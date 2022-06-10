import './listDrink.css';
import React from 'react';

const ListDrinks = (props) => {
  const items = props.data;

  if (!items) {
    return (
      <div className="no-data text-center">
        <h3>No Data Found</h3>
        <a href="/">Go Back To Home</a>
      </div>
    );
  }
  return (
    <div className="cocktailsku">
      
      <div className="cards row justify-content-between">
        {items.length === 0 && (
          <div className="spiner d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {items.length > 0 &&
          items.map((item) => {
            return (
              <div className="card col-12 col-sm-6 col-md-4 col-lg-3 ">
                <a href={`/detailDrink/${item.idDrink}`}>
                  <img className="card-img" src={item.strDrinkThumb} alt="..." />
                  <p className="card-body">{item.strDrink}</p>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListDrinks;
