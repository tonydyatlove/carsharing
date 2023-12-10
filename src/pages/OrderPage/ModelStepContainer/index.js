import React from 'react';
import { connect } from 'react-redux';

import ModelStep from '../ModelStep';
import { setCategoryData, setCarData } from '../../../store/order/actions';
import { setCategories, setCarsByCategory } from '../../../store/data/actions';

function ModelStepContainer(props) {
  const {
    categoryData,
    setCategoryData,
    carData,
    setCarData,
    categories,
    setCategories,
    carsByCategory,
    setCarsByCategory,
  } = props;
  return (
    <ModelStep
      categoryData={categoryData}
      setCategoryData={setCategoryData}
      carData={carData}
      setCarData={setCarData}
      categories={categories}
      setCategories={setCategories}
      carsByCategory={carsByCategory}
      setCarsByCategory={setCarsByCategory}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    categoryData: state.order.categoryData,
    carData: state.order.carData,
    categories: state.data.categoriesData,
    carsByCategory: state.data.carsByCategory,
  };
};

const mapDispatchToProps = {
  setCategoryData,
  setCarData,
  setCategories,
  setCarsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelStepContainer);
