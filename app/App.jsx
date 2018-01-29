import React from 'react';
import Header from './components/header/header.component';
import AppRouter from './components/app-router/app-router.component';
import Footer from './components/footer/footer.component';
import './app.scss';

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