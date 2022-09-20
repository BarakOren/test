import { PureComponent } from 'react';
import Line from './components/line/line';
import "./progressBar.style.scss";
import Circle from './components/circle/circle';

export class ProgressBar extends PureComponent {

    render() {
        
        const {steps, currentStepId} = this.props
        
        return ( 
            <div block="procces-bar-container">
                {steps.map((step, index) => {
                return (
                    <React.Fragment key={step.title}>
                        <Line filled={index <= currentStepId} />
                        <Circle
                        currentStepOrHigher={index <= currentStepId}
                        done={index < currentStepId}
                        stepNumber={step.id + 1}
                        stepTitle={step.title}
                        />
                    </React.Fragment>
                    );
                })}
                <Line filled={currentStepId > steps.length} />
            </div>
        );
    }
}

export default ProgressBar;