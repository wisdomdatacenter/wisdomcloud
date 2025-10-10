// app/lib/constants.ts
export const IMG = {
  // Hero & Featured (Unsplash – link ổn định)
  hero:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600",
  featured:
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=1400",

  services: {
    wp:     "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80&w=800",
    shared: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    vps:    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800",
    linux:  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
  },

  // Logo đối tác (vectorlogo.zone – rất bền)
  brands: [
    "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",            // AWS
    "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg",            // Cloudflare
    "https://www.vectorlogo.zone/logos/github/github-icon.svg",                    // GitHub
    "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",                    // Docker
    "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",        // Google Cloud
  ],
} as const;
