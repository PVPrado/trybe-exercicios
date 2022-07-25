import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, image, averageWeight } = pokemon

    return (
      <section>
        <div>
          <h3>{ name} </h3>
          <h3>{ type }</h3>
          <h3>{`${averageWeight.value}${averageWeight.measurementUnit}`}</h3>
        </div>
        <div>
          <img src={ image } alt="Pokemon" />
        </div>
      </section>
    )
  }
}

export default Pokemon;
