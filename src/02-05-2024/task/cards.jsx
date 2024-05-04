import React, { Component } from "react";
import "./cards.css";

class DisplayCards extends Component {
  // Arrayofobject state creation

  state = {
    products: [
      {
        id: 1,
        title: "Speaker",
        src: "https://m.media-amazon.com/images/I/61B1bGAbh3L._AC_UY327_FMwebp_QL65_.jpg",
        count: 0,
      },
      {
        id: 2,
        title: "Earphones",
        src: "https://rukminim2.flixcart.com/image/416/416/l4ei1e80/headphone/b/j/w/bullets-wireless-z2-oneplus-original-imagfaww7ga6nshz.jpeg?q=70&crop=false",
        count: 0,
      },
      {
        id: 3,
        title: "Smart phone",
        src: "https://m.media-amazon.com/images/I/81HaKFx7EGL._AC_UL480_FMwebp_QL65_.jpg",
        count: 0,
      },
      {
        id: 4,
        title: "Earphones",
        src: "https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL480_FMwebp_QL65_.jpg",
        count: 0,
      },
      {
        id: 5,
        title: "Ear buds",
        src: "https://m.media-amazon.com/images/I/51Q3PHZCWXL._AC_UL480_FMwebp_QL65_.jpg",
        count: 0,
      },
      {
        id: 6,
        title: "Honor",
        src: "https://m.media-amazon.com/images/I/41fbozUvk-L._AC_SR320,320_.jpg",
        count: 0,
      },
      {
        id: 7,
        title: "Laptop",
        src: "https://m.media-amazon.com/images/I/618qhNo1BOL._AC_UL480_FMwebp_QL65_.jpg",
        count: 0,
      },
    ],

    // products1 : "product1"
  };

  useraction = (Modify, id) => {
    switch (Modify) {
      case "Increase":
        //  console.log(id)

        const result = this.state.products.map((eachobject) => {
          if (eachobject.id == id) {
            eachobject.count += 1;
            return eachobject;
          } else {
            return eachobject;
          }
        });

        this.setState({
          products: result,
          // ...this.state,products : result
        });

        break;

      case "Decrease":
        const resultdecrease = this.state.products.map((eachobjects) => {
          if (eachobjects.id == id) {
            if (eachobjects.count > 0) {
              eachobjects.count -= 1;
              return eachobjects;
            } else {
              return eachobjects;
            }
          } else {
            return eachobjects;
          }
        });

        this.setState({
          products: resultdecrease,
        });
        break;
    }
  };

  render() {
    return (
      <div className="flexcards">
        {this.state.products.map((arrobjects) => {
          console.log(arrobjects);
          const { id, title, count, src } = arrobjects;
          return (
            <React.Fragment key={id}>
              <div className="flexcards1">
                <img src={src} height={"60%"} width={"60%"} />

                <p
                  style={{
                    fontSize: "150%",
                  }}
                >
                  {title}
                </p>
                <div className="butons">
                  <button
                    onClick={() => this.useraction("Increase", id)}
                    style={{
                      width: "33%",
                    }}
                  >
                    +
                  </button>
                  <button
                    style={{
                      width: "34%",
                    }}
                  >
                    {count}
                  </button>

                  <button
                    style={{
                      width: "33%",
                    }}
                    onClick={() => this.useraction("Decrease", id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default DisplayCards;
