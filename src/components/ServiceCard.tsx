import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  benefits: string[];
  description?: string;
  embedUrl?: string;
}

export default function ServiceCard({
  image,
  imageAlt,
  icon,
  title,
  benefits,
  description,
  embedUrl,
  mapUrl,
}: ServiceCardProps & { mapUrl?: string }) {
  const clickable = !!mapUrl;
  const handleClick = () => {
    if (mapUrl) {
      window.open(mapUrl, "_blank");
    }
  };
  const cardContent = (
    <>
      {embedUrl ? (
        <div className="relative w-full h-60 bg-white">
          <iframe
            title={`${title} Map`}
            src={`https://maps.google.com/maps?q=${embedUrl}&z=16&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ) : (
        <div className="relative w-full h-60 bg-white">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-amber-400">
            {title}
          </h3>
        </div>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
            {description}
          </p>
        )}
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-light">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-amber-400">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
  return clickable ? (
    <div
      className="bg-card dark:bg-card rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 hover:shadow-md hover:border-blue-300 dark:hover:border-amber-500/40 transition-all cursor-pointer"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Open map for ${title}`}
    >
      {cardContent}
    </div>
  ) : (
    <div className="bg-card dark:bg-card rounded-xl overflow-hidden shadow-sm border border-blue-100/50 dark:border-amber-500/20 hover:shadow-md hover:border-blue-300 dark:hover:border-amber-500/40 transition-all">
      {cardContent}
    </div>
  );
}
