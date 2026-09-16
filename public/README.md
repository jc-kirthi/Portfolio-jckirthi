# Portfolio — Public Assets

This directory contains static assets served at the root URL.

## Directory Structure

```
public/
├── images/          # General images (avatar, og-image, etc.)
├── certificates/    # Certificate images (referenced in data/certifications.ts)
└── projects/        # Project screenshots (referenced in data/projects.ts)
```

## Usage

Files in `public/` are served from the root:
- `public/images/avatar.jpg` → accessible at `/images/avatar.jpg`
- `public/certificates/cert.png` → accessible at `/certificates/cert.png`
