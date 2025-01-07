import LeftArrow from './../../../assets/icons/left-arrow-bg.svg';
import RightArrow from './../../../assets/icons/right-arrow-bg.svg';

const PreviousSneaker = () => {
    return (
        <button>
            <img src={LeftArrow} className="" alt="previous sneaker" />
        </button>
    )
}

const NextSneaker = () => {
    return (
        <button>
            <img src={RightArrow} className="" alt="next sneaker" />
        </button>
    )
}


export {PreviousSneaker, NextSneaker}