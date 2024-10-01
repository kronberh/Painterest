import React from "react";
import "./Gallery.css";
import { waitForImages } from "./waitForImages";

function Gallery(): JSX.Element {
    React.useEffect(() => {
        waitForImages();
    }, []);
    
    return (
        <>
            <div className="masonry">
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/800?image=1" alt="Masonry Brick #1" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/600?image=2" alt="Masonry Brick #2" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/500?image=4" alt="Masonry Brick #4" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/700?image=5" alt="Masonry Brick #5" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/400?image=3" alt="Masonry Brick #3" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/300?image=6" alt="Masonry Brick #6" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/500?image=7" alt="Masonry Brick #7" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/650?image=8" alt="Masonry Brick #8" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/350?image=9" alt="Masonry Brick #9" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/420?image=10" alt="Masonry Brick #10" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/300?image=11" alt="Masonry Brick #11" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/500?image=12" alt="Masonry Brick #12" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/550?image=13" alt="Masonry Brick #13" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/900?image=14" alt="Masonry Brick #14" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/800?image=15" alt="Masonry Brick #15" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/400?image=16" alt="Masonry Brick #16" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/500?image=17" alt="Masonry Brick #17" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/650?image=18" alt="Masonry Brick #18" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/550?image=19" alt="Masonry Brick #19" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/440?image=20" alt="Masonry Brick #20" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/480?image=21" alt="Masonry Brick #21" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/680?image=22" alt="Masonry Brick #22" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/920?image=23" alt="Masonry Brick #23" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/650?image=24" alt="Masonry Brick #24" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/350?image=25" alt="Masonry Brick #25" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/425?image=26" alt="Masonry Brick #26" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/500?image=27" alt="Masonry Brick #27" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/450?image=28" alt="Masonry Brick #28" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/350?image=29" alt="Masonry Brick #29" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/900?image=30" alt="Masonry Brick #30" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/520?image=31" alt="Masonry Brick #31" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/650?image=32" alt="Masonry Brick #32" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/750?image=33" alt="Masonry Brick #33" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/800?image=34" alt="Masonry Brick #34" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/900?image=35" alt="Masonry Brick #35" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/420?image=36" alt="Masonry Brick #36" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/350?image=37" alt="Masonry Brick #37" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/600?image=38" alt="Masonry Brick #38" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/480?image=39" alt="Masonry Brick #39" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/640?image=40" alt="Masonry Brick #40" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/350?image=41" alt="Masonry Brick #41" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/380?image=42" alt="Masonry Brick #42" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/420?image=43" alt="Masonry Brick #43" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/500?image=44" alt="Masonry Brick #44" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/640?image=45" alt="Masonry Brick #45" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/680?image=46" alt="Masonry Brick #46" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/700?image=47" alt="Masonry Brick #47" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/350?image=48" alt="Masonry Brick #48" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/400?image=49" alt="Masonry Brick #49" className="masonry-content" />
                </div>
                <div className="masonry-item">
                    <img src="https://unsplash.it/700/800?image=50" alt="Masonry Brick #50" className="masonry-content" />
                </div>
            </div>
        </>
    );
}

export { Gallery }
