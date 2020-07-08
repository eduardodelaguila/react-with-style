import React from 'react';

import './LoadingSkeleton.less';

const LoadingSkeleton = () => {
    return (
        <div className="LoadingSkeleton">
            <div className="LoadingSkeleton__photo-container">
                <i className="fad fa-user-shield photo"></i>
            </div>
            <div className="LoadingSkeleton__data-container">
                {/* 2 Lazy to keep using BEM :v */}
                <p className="name"></p>
                <div className="value-container" />
                <div className="value-container" />
            </div>
        </div>
    );
};

export default LoadingSkeleton;
