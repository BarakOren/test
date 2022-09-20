import { PureComponent } from 'react';
import './circle.scss';

export class Circle extends PureComponent {

    render() {
        
        const {currentStepOrHigher, done, stepNumber, stepTitle} = this.props
      
        return (
            <div block={`circle-container ${currentStepOrHigher && "circle-container__filled"}`}>
                <div block={`number ${currentStepOrHigher && "number__filled"}`}>
                    {done ? "✓" : stepNumber}
                </div>
                <div block={`title ${currentStepOrHigher && "title__filled"}`}>
                    {stepTitle}
                </div>
            </div>
        );
        };
    }

export default Circle;    