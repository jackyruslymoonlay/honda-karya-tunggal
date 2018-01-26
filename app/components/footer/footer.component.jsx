import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="top-footer"></div>
                <div className="bottom-footer">
                    <label>Copyright &copy; 2018 Honda Karya Tunggal</label>
                </div>
            </div>
        );
    }
}
export default Footer;