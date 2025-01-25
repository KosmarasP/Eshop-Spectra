import { Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSectionProps {
  reviews: Review[];
}

export const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={star <= averageRating ? "fill-accent" : "fill-muted"}
              size={20}
            />
          ))}
        </div>
        <span className="text-secondary">
          {averageRating.toFixed(1)} out of 5
        </span>
      </div>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-muted pb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={star <= review.rating ? "fill-accent" : "fill-muted"}
                    size={16}
                  />
                ))}
              </div>
              <span className="text-sm text-secondary">{review.date}</span>
            </div>
            <p className="font-medium mb-1">{review.author}</p>
            <p className="text-secondary">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};