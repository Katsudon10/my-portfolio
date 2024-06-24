import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
    const maxRating = 5;
    return (
        <div className="flex">
            {[...Array(maxRating)].map((_, index) => {
                return index<rating ? (
                    <FaStar key={index} />
                ): (
                    <FaRegStar key={index} />
                )
            })}
        </div>
    );
};

export default Rating;