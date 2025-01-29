import React from 'react';
import PropTypes from 'prop-types';

const testimonials = {
  Cultivators: [
    { quote: "Upstart Fridge has connected me with local markets!", author: "Farmer Joe" },
    { quote: "A great platform for sustainable farming.", author: "Farmer Jane" },
  ],
  Producers: [
    { quote: "Our products reached more customers thanks to Upstart Fridge.", author: "Chef Mike" },
    { quote: "A fantastic way to promote local produce.", author: "Baker Lisa" },
  ],
  Connectors: [
    { quote: "Bringing fresh food to the community has never been easier.", author: "Driver Tom" },
    { quote: "A wonderful initiative to support local food distribution.", author: "Volunteer Sarah" },
  ],
};

const SectionTestimonials = ({ section }) => {
  return (
    <div className="testimonials mt-4">
      {testimonials[section].map((testimonial, index) => (
        <div key={index} className="testimonial p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <p className="quote text-lg italic">"{testimonial.quote}"</p>
          <p className="author text-sm text-right">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

SectionTestimonials.propTypes = {
  section: PropTypes.oneOf(['Cultivators', 'Producers', 'Connectors']).isRequired,
};

export default SectionTestimonials;
