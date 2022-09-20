import { PureComponent } from 'react';
import './line.scss';

export class Line extends PureComponent {


    render() {
        const {filled} = this.props
        
        return (
            <div block="line-container">
                <div block={`filled-line ${filled && "filled-line__filled"}`} />
            </div>
        );
    }
}

export default Line;    