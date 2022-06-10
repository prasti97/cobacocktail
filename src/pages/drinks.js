import './drinks.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ListDrinks from '../components/drinkList/listDrink';
import Footer from '../components/footer/footer';
import { Form, Button } from 'react-bootstrap';

const Drinks = () => {
  const [state, setState] = useState({
    searchDrink: [],
    cocktails: [],
  });

  const handleChange = (e) => {
    setState({ searchDrink: e.target.value, cocktails: state.cocktails });
  };

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail').then((res) => {
      console.log(res.data.drinks);
      setState({ cocktails: res.data.drinks });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.searchDrink);
    if (state.searchDrink) {
      Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.searchDrink}`).then((res) => {
        console.log(res.data.drinks);
        setState({ cocktails: res.data.drinks, searchDrink: state.searchDrink });
      });
    } else {
      Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail').then((res) => {
        console.log(res.data.drinks);
        setState({ cocktails: res.data.drinks });
      });
    }
  };

  const sAlcohol = (e) => {
    e.preventDefault();
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic').then((res) => {
      console.log(res.data.drinks);
      setState({ cocktails: res.data.drinks, searchDrink: state.searchDrink });
    });
  };

  const sNonAlcohol = (e) => {
    e.preventDefault();
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then((res) => {
      console.log(res.data.drinks);
      setState({ cocktails: res.data.drinks, searchDrink: state.searchDrink });
    });
  };

  const item = state.cocktails;

  return (
    <div className="drink d-flex flex-column justify-content-center">
      <div className="bulat"></div>
      <h1>Recipe Drink's</h1>
      <Form className="form-search">
        <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
          <Form.Label className="col-sm-12 col-md-auto col-lg-auto label">Find Drink Recipes</Form.Label>
          <div className="col-sm-12 col-md d-flex">
            <Form.Control type="text" id="search" placeholder="input cocktail name" onChange={handleChange} required />
            <Button type="submit" onClick={handleSubmit}>
              Search
            </Button>
          </div>
        </Form.Group>
      </Form>

      <div className="btn-group d-flex" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn " onClick={sAlcohol}>
          Alcoholic
        </button>
        <button type="button" className="btn " onClick={sNonAlcohol}>
          Non Alcoholic
        </button>
      </div>

      <ListDrinks data={item} />

      <Footer />
    </div>
  );
};

export default Drinks;
