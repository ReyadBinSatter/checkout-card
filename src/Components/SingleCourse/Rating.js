import { Star, StarFill } from 'react-bootstrap-icons';
import './SingleCourse.css';
const Rating = ({ rating, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={style}>
          {rating > i ? (
            <StarFill className='star-color' />
          ) : (
            <Star className='star-color' />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;