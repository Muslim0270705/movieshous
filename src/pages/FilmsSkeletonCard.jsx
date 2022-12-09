import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const FilmsSkeletonCard = ({card}) => {
    return (
        Array(card).fill(0).map((item,idx) => (
            <div className="films__card">
                <Skeleton className="skeleton__card-img"/>
                <Skeleton count={1} width="50%"/>
                <Skeleton count={1} width="40%"/>
            </div>
        ))
    );
};

export default FilmsSkeletonCard;