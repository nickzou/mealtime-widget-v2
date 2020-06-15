import React from 'react';
import './ProgressBar.scss';

const ProgressBar = props => {
    return(
        <div className="progress-bar">
            {props.steps.map((step) => <div key={step.step} className={`step${step.step < props.currentStep ? ' fulfilled' : '' }${step.step === props.currentStep ? ' current' : ''}`}>{step.name}</div>)}
        </div>
    );
}

export default ProgressBar;