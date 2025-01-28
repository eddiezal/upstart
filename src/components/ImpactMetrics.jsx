import React, { useEffect, useState } from 'react';
import MetricCard from './MetricCard';
import metricsData from '../data/metrics.json';

const ImpactMetrics = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    setMetrics(metricsData);
  }, []);

  return (
    <section className="bg-cream py-12">
      <h2 className="text-center text-h2 font-playfair mb-8">Impact Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
