import React from "react";


class SavedCities extends React.Component {
  render() {
    return (
      <>
        {this.props.savedResults.length ? (
          this.props.savedResults.map((city) => (
            <div key={city._id}>
              <p>{city.city}</p>
              <p>{city.col_idx}</p>
              <p>{city.rent_index}</p>
              <p>{city.col_plus_idx}</p>
              <p>{city.groceries_idx}</p>
              <p>{city.restaurant_idx}</p>
              <p>{city.local_purchasing_pwr_idx}</p>
            </div>
          ))
        ) : this.props.errorMessage ? (
          <p>{this.props.errorMessage}</p>
        ) : (
          <p>No cities saved</p>
        )}
      </>
    );
  }
}

export default SavedCities;
