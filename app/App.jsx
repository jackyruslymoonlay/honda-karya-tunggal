import React from 'react';
import Header from "./components/Header.Component";
import AppRouter from "./components/AppRouter.Component";
import Footer from "./components/Footer.Component";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AppRouter />
                <Footer />
            </div>
        );
    }
}
export default App;