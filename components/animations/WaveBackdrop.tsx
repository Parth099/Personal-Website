import React from "react";
import { ReactFCWithChildren } from "types/ReactTypes";

const WaveBackdrop: React.FC<ReactFCWithChildren> = ({ children }) => {
    return (
        <section className="bg-body">
            <>{children}</>
            <svg
                width="100%"
                height="350px"
                id="svg"
                viewBox="0 0 1440 600"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300 ease-in-out delay-150"
                preserveAspectRatio="none"
            >
                <path
                    d="M 0,600 C 0,600 0,300 0,300 C 154,288.1333333333333 308,276.2666666666667 453,297 C 598,317.7333333333333 734,371.06666666666666 897,377 C 1060,382.93333333333334 1250,341.4666666666667 1440,300 C 1440,300 1440,600 1440,600 Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="#fff"
                    fillOpacity="1"
                    className="transition-all ease-in-out delay-150 path-0"
                ></path>
            </svg>
        </section>
    );
};

export default WaveBackdrop;
