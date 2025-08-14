# Cloudflare R2 Storage Setup Directions
## Complete Guide for HTML Tools Store System

This document provides comprehensive, step-by-step directions for setting up Cloudflare R2 storage to fully support the HTML Tools Store system. Follow these instructions carefully to ensure your storage infrastructure aligns perfectly with the system design.

---

## Table of Contents
1. [System Storage Requirements Overview](#system-storage-requirements-overview)
2. [Cloudflare Account Setup](#cloudflare-account-setup)
3. [R2 Storage Buckets Configuration](#r2-storage-buckets-configuration)
4. [Cloudflare Images Setup](#cloudflare-images-setup)
5. [API Tokens and Access Control](#api-tokens-and-access-control)
6. [Storage Architecture and Naming](#storage-architecture-and-naming)
7. [CORS and Security Configuration](#cors-and-security-configuration)
8. [Lifecycle Rules and Cost Optimization](#lifecycle-rules-and-cost-optimization)
9. [Testing and Verification](#testing-and-verification)
10. [Integration with Application](#integration-with-application)

---

## System Storage Requirements Overview

Based on the comprehensive system design, your HTML Tools Store requires:

### Storage Types Needed:
1. **Product Files** - ZIP packages containing HTML/CSS/JS tools
2. **Product Images** - Cover images, screenshots, thumbnails
3. **Asset Storage** - Blog images, user avatars, OG images
4. **License Files** - Generated license documents
5. **Temporary Files** - Upload staging area
6. **Demo Files** - Interactive demo assets

### Key Requirements:
- Secure signed URLs with short TTL (≤ 5 minutes)
- Watermarking capability for license injection
- High availability for global customers
- Cost-effective storage with lifecycle management
- Image optimization and variant generation
- CORS support for frontend access

---

## Cloudflare Account Setup

### Step 1: Create Cloudflare Account
1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Enter your email and create a strong password
3. Verify your email address
4. Complete the initial setup wizard

### Step 2: Enable R2 Storage
1. From the Cloudflare dashboard, click on "R2" in the left sidebar
2. If not enabled, click "Enable R2"
3. Accept the terms and conditions
4. Note: R2 has a generous free tier (10GB storage, 1M Class A operations, 10M Class B operations per month)

### Step 3: Set Up Billing (Important)
1. Go to Billing → Payment Info
2. Add a payment method (required for R2 usage beyond free tier)
3. Set up usage alerts:
   - Click "Notifications" → "Create"
   - Set alerts at 80% and 100% of expected usage

---

## R2 Storage Buckets Configuration

### Bucket Naming Convention and Purpose

| Environment | Bucket Name | Purpose | Access Level |
|-------------|-------------|---------|--------------|
| Development | `htmltools-dev-assets` | Development testing | Private |
| Staging | `htmltools-staging-assets` | Pre-production testing | Private |
| Production | `htmltools-prod-assets` | Live customer assets | Private |

### Step-by-Step Bucket Creation

#### Create Development Bucket:
1. Navigate to R2 → Create bucket
2. **Bucket name**: `htmltools-dev-assets`
3. **Location hint**: Choose "Automatic" for global distribution
4. **Default storage class**: Standard
5. Click "Create bucket"

#### Create Staging Bucket:
1. Navigate to R2 → Create bucket
2. **Bucket name**: `htmltools-staging-assets`
3. **Location hint**: Choose "Automatic" for global distribution
4. **Default storage class**: Standard
5. Click "Create bucket"

#### Create Production Bucket:
1. Navigate to R2 → Create bucket
2. **Bucket name**: `htmltools-prod-assets`
3. **Location hint**: Choose "Automatic" for global distribution
4. **Default storage class**: Standard
5. Click "Create bucket"

### Bucket Folder Structure

For each bucket, create the following folder structure:

```
bucket-root/
├── products/
│   ├── {product_id}/
│   │   ├── {version}/
│   │   │   ├── package.zip
│   │   │   └── changelog.md
│   │   └── images/
│   │       ├── cover.webp
│   │       ├── screenshot-1.webp
│   │       └── thumbnail.webp
├── licenses/
│   └── {license_id}/
│       └── license.txt
├── assets/
│   ├── avatars/
│   │   └── {user_id}/
│   │       └── avatar.webp
│   ├── blog/
│   │   └── {post_id}/
│   │       ├── hero.webp
│   │       └── content-{n}.webp
│   └── pages/
│       └── {page_id}/
│           └── {asset}.webp
├── temp/
│   └── {upload_id}/
│       └── {timestamp}-{filename}
└── demos/
    └── {product_id}/
        ├── index.html
        └── assets/
```

---

## Cloudflare Images Setup

Cloudflare Images provides automatic optimization and variant generation for all image assets.

### Step 1: Enable Cloudflare Images
1. From dashboard, navigate to "Images"
2. Click "Enable Images"
3. Choose subscription plan (pay-as-you-go recommended for start)

### Step 2: Configure Image Variants

Create the following variants for different use cases:

#### Variant 1: Product Cover
- **Name**: `product_cover`
- **Width**: 800px
- **Height**: 600px
- **Fit**: Cover
- **Quality**: 85
- **Format**: Auto (WebP/AVIF with fallback)

#### Variant 2: Product Thumbnail
- **Name**: `product_thumb`
- **Width**: 400px
- **Height**: 300px
- **Fit**: Cover
- **Quality**: 80
- **Format**: Auto

#### Variant 3: Blog Hero
- **Name**: `blog_hero`
- **Width**: 1200px
- **Height**: 630px
- **Fit**: Cover
- **Quality**: 85
- **Format**: Auto

#### Variant 4: Avatar
- **Name**: `avatar`
- **Width**: 200px
- **Height**: 200px
- **Fit**: Cover
- **Quality**: 90
- **Format**: Auto

#### Variant 5: OG Image
- **Name**: `og_image`
- **Width**: 1200px
- **Height**: 630px
- **Fit**: Cover
- **Quality**: 90
- **Format**: JPEG (for compatibility)

### Step 3: Configure Direct Creator Upload
1. Go to Images → Direct Creator Upload
2. Enable "Allow direct creator uploads"
3. Set maximum upload size: 10MB
4. Set allowed formats: JPEG, PNG, WebP, GIF

---

## API Tokens and Access Control

### Token Requirements

You need different tokens for different purposes:

| Token Name | Purpose | Permissions | Environment |
|------------|---------|-------------|-------------|
| `r2-dev-fullaccess` | Development full access | R2:Edit | Development |
| `r2-staging-app` | Staging app access | R2:Edit (specific bucket) | Staging |
| `r2-prod-app` | Production app access | R2:Edit (specific bucket) | Production |
| `r2-prod-readonly` | Production monitoring | R2:Read | Production |
| `cf-images-upload` | Image uploads | Cloudflare Images:Edit | All |

### Step-by-Step Token Creation

#### Create Development Token:
1. Go to My Profile → API Tokens → Create Token
2. Click "Create Custom Token"
3. **Token name**: `r2-dev-fullaccess`
4. **Permissions**:
   - Account → Cloudflare R2 → Edit
5. **Account resources**: Include → Your account
6. **IP filtering**: (Optional) Add your development IPs
7. **TTL**: No expiry for development
8. Click "Continue to summary" → "Create Token"
9. **SAVE THE TOKEN IMMEDIATELY** (shown only once)

#### Create Staging Application Token:
1. Create Custom Token
2. **Token name**: `r2-staging-app`
3. **Permissions**:
   - Account → Cloudflare R2 → Edit
4. **Account resources**: Include → Your account
5. **Zone resources**: Specific zone (if applicable)
6. **IP filtering**: Add staging server IPs
7. **TTL**: 1 year (rotate annually)
8. Create and save token

#### Create Production Application Token:
1. Create Custom Token
2. **Token name**: `r2-prod-app`
3. **Permissions**:
   - Account → Cloudflare R2 → Edit
4. **Account resources**: Include → Your account
5. **Zone resources**: Specific zone (if applicable)
6. **IP filtering**: Add production server IPs (mandatory)
7. **TTL**: 90 days (rotate quarterly)
8. Create and save token

#### Create Monitoring Token:
1. Create Custom Token
2. **Token name**: `r2-prod-readonly`
3. **Permissions**:
   - Account → Cloudflare R2 → Read
   - Account → Analytics → Read
4. **Account resources**: Include → Your account
5. **TTL**: 1 year
6. Create and save token

#### Create Images Token:
1. Create Custom Token
2. **Token name**: `cf-images-upload`
3. **Permissions**:
   - Account → Cloudflare Images → Edit
4. **Account resources**: Include → Your account
5. **TTL**: 90 days (rotate quarterly)
6. Create and save token

### Token Storage Best Practices
```bash
# Never commit tokens to git
# Store in environment variables

# .env.development
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key_id
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_access_key
CLOUDFLARE_R2_TOKEN=your_r2_token
CLOUDFLARE_IMAGES_TOKEN=your_images_token
R2_BUCKET_NAME=htmltools-dev-assets

# .env.staging
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key_id
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_access_key
CLOUDFLARE_R2_TOKEN=your_r2_token
CLOUDFLARE_IMAGES_TOKEN=your_images_token
R2_BUCKET_NAME=htmltools-staging-assets

# .env.production
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key_id
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_access_key
CLOUDFLARE_R2_TOKEN=your_r2_token
CLOUDFLARE_IMAGES_TOKEN=your_images_token
R2_BUCKET_NAME=htmltools-prod-assets
```

---

## Storage Architecture and Naming

### File Naming Conventions

#### Product Files:
```
Pattern: products/{product_id}/{version}/package.zip
Example: products/550e8400-e29b-41d4-a716-446655440000/1.0.0/package.zip
```

#### Product Images:
```
Pattern: products/{product_id}/images/{type}.{ext}
Example: products/550e8400-e29b-41d4-a716-446655440000/images/cover.webp
```

#### License Files:
```
Pattern: licenses/{license_id}/license.txt
Example: licenses/6ba7b810-9dad-11d1-80b4-00c04fd430c8/license.txt
```

#### Blog Images:
```
Pattern: assets/blog/{post_id}/{image_name}.{ext}
Example: assets/blog/7c9e6679-7425-40de-944b-e07fc1f90ae7/hero.webp
```

#### User Avatars:
```
Pattern: assets/avatars/{user_id}/avatar.{ext}
Example: assets/avatars/f47ac10b-58cc-4372-a567-0e02b2c3d479/avatar.webp
```

#### Temporary Uploads:
```
Pattern: temp/{upload_id}/{timestamp}-{original_filename}
Example: temp/8a93c10b-58cc-4372-a567-0e02b2c3d479/1704355200-tool-preview.png
```

### Metadata Standards

For each uploaded file, store the following metadata:

```json
{
  "content-type": "application/zip",
  "uploaded-by": "user-uuid",
  "uploaded-at": "2024-01-15T10:30:00Z",
  "file-size": 1048576,
  "checksum": "sha256:abcdef123456...",
  "license-type": "commercial",
  "version": "1.0.0",
  "environment": "production"
}
```

---

## CORS and Security Configuration

### CORS Rules for Each Bucket

#### Development Bucket CORS:
```json
[
  {
    "AllowedOrigins": ["http://localhost:3000", "http://localhost:3001"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

#### Staging Bucket CORS:
```json
[
  {
    "AllowedOrigins": ["https://staging.yourdomain.com"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

#### Production Bucket CORS:
```json
[
  {
    "AllowedOrigins": ["https://yourdomain.com", "https://www.yourdomain.com"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 86400
  }
]
```

### Bucket Policies

#### Read Policy (for signed URLs only):
```json
{
  "Version": "2023-01-01",
  "Statement": [
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::htmltools-prod-assets/*",
      "Condition": {
        "StringNotLike": {
          "aws:userid": "AIDAI*"
        }
      }
    }
  ]
}
```

### Security Headers for R2 URLs

Configure Workers to add security headers:

```javascript
// security-headers-worker.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const newHeaders = new Headers(response.headers)
  
  // Security headers
  newHeaders.set('X-Content-Type-Options', 'nosniff')
  newHeaders.set('X-Frame-Options', 'DENY')
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Cache control for different file types
  const url = new URL(request.url)
  if (url.pathname.endsWith('.zip')) {
    newHeaders.set('Cache-Control', 'private, max-age=3600')
  } else if (url.pathname.includes('/images/')) {
    newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  })
}
```

---

## Lifecycle Rules and Cost Optimization

### Lifecycle Rules Configuration

#### Rule 1: Clean Temporary Files
- **Prefix**: `temp/`
- **Action**: Delete
- **Age**: 24 hours
- **Purpose**: Remove abandoned uploads

#### Rule 2: Archive Old Versions
- **Prefix**: `products/*/`
- **Condition**: Not latest version
- **Action**: Move to Infrequent Access
- **Age**: 90 days
- **Purpose**: Reduce storage costs

#### Rule 3: Demo Files Cleanup
- **Prefix**: `demos/*/preview-`
- **Action**: Delete
- **Age**: 7 days
- **Purpose**: Remove temporary demo files

### Cost Optimization Strategies

1. **Image Optimization**:
   - Use Cloudflare Images for automatic format conversion
   - Serve WebP/AVIF to supported browsers
   - Implement responsive images

2. **Caching Strategy**:
   - Set long cache headers for versioned assets
   - Use ETags for cache validation
   - Implement stale-while-revalidate

3. **Storage Tiering**:
   - Keep only latest 2 versions in Standard storage
   - Move older versions to Infrequent Access
   - Delete abandoned uploads after 24 hours

4. **Bandwidth Optimization**:
   - Enable Cloudflare CDN caching
   - Use Workers for edge caching
   - Implement bandwidth monitoring alerts

---

## Testing and Verification

### Bucket Access Testing

#### Test 1: Upload Test
```bash
# Test file upload
aws s3 cp test.txt s3://htmltools-dev-assets/test.txt \
  --endpoint-url https://<account-id>.r2.cloudflarestorage.com \
  --profile r2-dev

# Verify upload
aws s3 ls s3://htmltools-dev-assets/ \
  --endpoint-url https://<account-id>.r2.cloudflarestorage.com \
  --profile r2-dev
```

#### Test 2: Signed URL Generation
```javascript
// test-signed-url.js
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function testSignedUrl() {
  const command = new GetObjectCommand({
    Bucket: "htmltools-dev-assets",
    Key: "test.txt",
  });
  
  const url = await getSignedUrl(s3Client, command, { expiresIn: 300 });
  console.log("Signed URL:", url);
}
```

#### Test 3: CORS Verification
```javascript
// test-cors.js
async function testCORS() {
  const response = await fetch('https://your-r2-url.com/test.txt', {
    method: 'GET',
    headers: {
      'Origin': 'http://localhost:3000'
    }
  });
  
  console.log('CORS Headers:', response.headers);
}
```

### Performance Testing

#### Bandwidth Test:
```bash
# Test download speed
curl -o /dev/null -w "Time: %{time_total}s\nSpeed: %{speed_download} bytes/sec\n" \
  https://your-signed-url.com/large-file.zip
```

#### Concurrent Access Test:
```bash
# Test concurrent downloads
seq 1 10 | xargs -P 10 -I {} curl -s -o /dev/null -w "{}: %{time_total}s\n" \
  https://your-signed-url.com/test-file.zip
```

---

## Integration with Application

### Environment Configuration

#### Node.js Integration:
```javascript
// config/storage.js
const { S3Client } = require("@aws-sdk/client-s3");

const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
});

const bucketName = process.env.R2_BUCKET_NAME;

module.exports = { r2Client, bucketName };
```

#### Signed URL Service:
```javascript
// services/storage.service.js
const { GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { r2Client, bucketName } = require("../config/storage");

class StorageService {
  async generateDownloadUrl(key, expiresIn = 300) {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    
    return await getSignedUrl(r2Client, command, { expiresIn });
  }
  
  async generateUploadUrl(key, contentType, expiresIn = 3600) {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      ContentType: contentType,
    });
    
    return await getSignedUrl(r2Client, command, { expiresIn });
  }
}

module.exports = new StorageService();
```

### Cloudflare Images Integration:
```javascript
// services/images.service.js
class ImagesService {
  constructor() {
    this.accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    this.token = process.env.CLOUDFLARE_IMAGES_TOKEN;
  }
  
  async uploadImage(imageBuffer, id) {
    const formData = new FormData();
    formData.append('file', imageBuffer);
    formData.append('id', id);
    
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/images/v1`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
        body: formData,
      }
    );
    
    return await response.json();
  }
  
  getImageUrl(imageId, variant = 'public') {
    return `https://imagedelivery.net/${this.accountId}/${imageId}/${variant}`;
  }
}

module.exports = new ImagesService();
```

---

## Monitoring and Alerts Setup

### CloudWatch-style Monitoring

1. **Set up R2 Analytics**:
   - Go to R2 → Your Bucket → Analytics
   - Enable analytics collection
   - Set retention period

2. **Create Alerts**:
   - Storage usage > 80% of budget
   - Bandwidth usage > 80% of budget
   - Error rate > 1%
   - Unusual access patterns

3. **Dashboard Creation**:
   ```
   Metrics to track:
   - Total storage used
   - Bandwidth consumed
   - Request count by type
   - Error rates
   - Cache hit rates
   - Cost breakdown
   ```

---

## Troubleshooting Guide

### Common Issues and Solutions

1. **CORS Errors**:
   - Verify origin is in allowed origins list
   - Check preflight request handling
   - Ensure headers are properly exposed

2. **Authentication Failures**:
   - Verify token hasn't expired
   - Check IP restrictions
   - Ensure correct permissions

3. **Slow Downloads**:
   - Check CDN caching configuration
   - Verify geographic distribution
   - Monitor bandwidth limits

4. **Failed Uploads**:
   - Check file size limits
   - Verify content type restrictions
   - Ensure proper permissions

---

## Final Checklist

Before considering your R2 setup complete:

- [ ] All three buckets created (dev, staging, prod)
- [ ] Folder structure implemented
- [ ] Cloudflare Images configured with variants
- [ ] All API tokens created and stored securely
- [ ] CORS rules configured for each bucket
- [ ] Lifecycle rules implemented
- [ ] Security headers configured
- [ ] Integration code tested
- [ ] Monitoring and alerts set up
- [ ] Documentation updated with your specific values

---

## Next Steps

After completing this setup:

1. Test upload and download functionality in development
2. Implement watermarking service for licenses
3. Set up CDN caching rules
4. Create backup strategy
5. Plan for disaster recovery
6. Document operational procedures

Remember: This storage setup is designed to scale with your business while maintaining security and performance. Regular monitoring and optimization will ensure continued success.