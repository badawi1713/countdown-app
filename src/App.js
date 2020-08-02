import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // our app is extending base class (React.Component)
  //   this.state = {
  //     latitude: null,
  //     errorMessage: "",
  //     errorState: false,
  //     month: "",
  //   };
  // }

  // getPositionHandler = () => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         errorState: false,
  //       });
  //     },
  //     (error) => {
  //       console.log(error.message);
  //       this.setState({ errorMessage: error.message, errorState: true });
  //     }
  //   );
  // };

  // getMonthHandler = () => {
  //   let date = new Date();
  //   let getMonth = date.getMonth() + 1;
  //   this.setState({ month: getMonth });
  // };

  // componentDidMount() {
  //   this.getPositionHandler();
  //   this.getMonthHandler();
  // }

  render() {
    //   const { latitude, errorMessage, errorState, month } = this.state;
    //   if (latitude !== null && !errorState) {
    //     return <SeasonDisplay month={month} latitude={latitude} />;
    //   } else if (latitude === null && errorState) {
    //     return <div>Error : {errorMessage}</div>;
    //   } else {
    //     return (
    //       <div>
    //         Loading{" "}
    //         <span>
    //           <i className="spinner loading icon"></i>
    //         </span>
    //       </div>
    //     );
    //   }
    // }
    return (
      <div>
        <div className="flipdown-container">
          <div id="flipdown" className="flipdown " />
        </div>

        <SeasonDisplay month={8} latitude={1} />
      </div>
    );
  }
}

export default App;
