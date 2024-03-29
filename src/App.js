import React from "react";
import { Route } from "react-router-dom";
import DogsListContainer from "./components/DogsListContainer";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <main>
                <Route exact path="/" component={DogsListContainer} />{" "}
                <Route
                    path="/dog-breeds/:breed"
                    component={DogBreedImagesContainer}
                />
            </main>
        </div>
    );
}

export default App;
