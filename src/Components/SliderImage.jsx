import PropTypes from 'prop-types';


const SliderImage = ({slide}) => {
    const { photo } = slide;
    return (
        <div>
            <img className="w-full" src={photo} alt="" />
        </div>
    );
};

export default SliderImage;

SliderImage.propTypes ={
    slide: PropTypes.node,

}
