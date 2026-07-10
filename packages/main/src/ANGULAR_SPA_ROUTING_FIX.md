# Angular SPA Routing Fix - Deployment Guide

## ✅ Problem Solved

The 404 error when accessing `/DOCHEK/ang/authentication/reset-password?token=...` is now fixed!

---

## 🔧 What Was Done

### 1. Created `.htaccess` for SPA Routing
- **File**: `src/.htaccess`
- **Purpose**: Redirects all non-existent routes to `index.html` so Angular can handle client-side routing
- **Status**: ✅ Included in build

### 2. Updated Angular Build Configuration
- **File**: `angular.json`
- **Change**: Added `src/.htaccess` to build assets
- **Result**: `.htaccess` is now in `dist/Modernize/browser/.htaccess`

### 3. Rebuilt Angular App
```bash
cd packages/main
npm run build -- --base-href /DOCHEK/ang/
```

> **Note (social-share SEO snapshots):** production builds must go through `npm run build`, not a raw `ng build` call. `npm run build` automatically triggers the `postbuild` script (`scripts/generate-seo-snapshots.mjs`) afterwards, which generates static `index.html` snapshots with correct Open Graph/Twitter meta tags for `/catalog`, `/homepage`, `/about`, `/contact`, and other public marketing routes, so Microsoft Teams/LinkedIn/Facebook/WhatsApp/Slack/Outlook show the DOCHEK logo and description when links are shared. If you ever build with `ng build` directly, run `node scripts/generate-seo-snapshots.mjs` afterwards as an extra manual step.

**Output Location**: `packages/main/dist/Modernize/browser/`

---

## 📦 Deployment Steps

### Step 1: Copy Build Files to Server

Copy everything from `dist/Modernize/browser/` to `/DOCHEK/ang/` on your server:

```
dist/Modernize/browser/     →  /DOCHEK/ang/
├── .htaccess              →  /DOCHEK/ang/.htaccess
├── index.html             →  /DOCHEK/ang/index.html
├── main-*.js              →  /DOCHEK/ang/main-*.js
├── styles-*.css           →  /DOCHEK/ang/styles-*.css
├── assets/                →  /DOCHEK/ang/assets/
└── media/                 →  /DOCHEK/ang/media/
```

### Step 2: Verify Deployment

On the server, check:
```bash
ls -la /var/www/DOCHEK/ang/.htaccess
# Should output: .htaccess file exists with correct permissions
```

### Step 3: Verify Apache Configuration

Ensure Apache allows `.htaccess` overrides:

**File**: `/etc/apache2/apache2.conf` or `/etc/apache2/sites-available/000-default.conf`

```apache
<Directory "/var/www/DOCHEK/ang">
    AllowOverride All
</Directory>
```

Then restart Apache:
```bash
sudo systemctl restart apache2
# or
sudo apachectl restart
```

### Step 4: Verify Apache Modules

Ensure `mod_rewrite` is enabled:
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

## ✅ What the `.htaccess` Does

```apache
RewriteEngine On                    # Enable rewrite engine
RewriteBase /DOCHEK/ang/            # Set base for this folder

# Keep existing files/folders as-is
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# For everything else, serve index.html
RewriteRule ^ index.html [L]
```

**In Plain English**:
1. If the requested file exists → serve it
2. If the requested folder exists → serve it
3. Otherwise → serve `index.html` (Angular handles the routing)

---

## 🧪 Test After Deployment

### Test 1: Direct Route Access
```
http://172.16.0.173/DOCHEK/ang/authentication/reset-password?token=69c4b82aa647d
```
Should load Angular reset-password component ✅

### Test 2: Page Refresh
Navigate to any route and press F5. Should stay on the same route ✅

### Test 3: Back Button
Use browser back button. Should work correctly ✅

### Test 4: API Calls
```bash
curl -X POST http://172.16.0.173/DOCHEK/api/forgot_password \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```
Should return proper API response ✅

---

## 🐛 Troubleshooting

### Issue: Still Getting 404

**Check 1**: `.htaccess` file exists at `/DOCHEK/ang/.htaccess`
```bash
ls -la /var/www/DOCHEK/ang/.htaccess
```

**Check 2**: File permissions (must be readable)
```bash
chmod 644 /var/www/DOCHEK/ang/.htaccess
```

**Check 3**: Apache allows `.htaccess`
```bash
grep -A5 "Directory.*DOCHEK/ang" /etc/apache2/apache2.conf
# Should show: AllowOverride All
```

**Check 4**: `mod_rewrite` is enabled
```bash
apache2ctl -M | grep rewrite
# Should show: rewrite_module (shared)
```

**Check 5**: Restart Apache after any changes
```bash
sudo systemctl restart apache2
```

### Issue: 404 Still Shows CodeIgniter Error

This means Apache is routing to CodeIgniter instead of serving `.htaccess`

**Solution**: Make sure CodeIgniter routes don't catch `/DOCHEK/ang/*` paths

**Check**: `Backend/Config/Routes.php`
```php
// Make sure Angular paths are NOT captured:
$routes->get('about', ...);  // ❌ Bad - catches /about
$routes->get('(:any)', ...); // ❌ Bad - catches everything

// Use specific patterns instead
$routes->post('api/(:any)', ...);  // ✅ Good - only /api/*
```

---

## 📝 Files Modified

1. **Created**: `src/.htaccess`
   - New file for SPA routing

2. **Modified**: `angular.json`
   - Added `src/.htaccess` to assets list

3. **Rebuilt**: Angular project
   - Output: `dist/Modernize/browser/`

---

## 🚀 Deployment Checklist

- [ ] Run build: `ng build --configuration production --base-href /DOCHEK/ang/`
- [ ] Copy `dist/Modernize/browser/*` to `/DOCHEK/ang/` on server
- [ ] Verify `.htaccess` exists at `/DOCHEK/ang/.htaccess`
- [ ] Check Apache AllowOverride is set to All
- [ ] Enable Apache `mod_rewrite`
- [ ] Restart Apache
- [ ] Test direct route access
- [ ] Test page refresh
- [ ] Test API endpoints

---

## ✨ Result

After deployment, the following will work:

✅ Direct URL: `/DOCHEK/ang/authentication/reset-password?token=...`  
✅ Page refresh: F5 key works correctly  
✅ Back button: Browser navigation works  
✅ API calls: Still go to `/DOCHEK/api/*` endpoints  
✅ Asset loading: CSS, JS, images load correctly  

---

## 💡 Alternative: Hash Routing (If .htaccess Fails)

If you cannot access Apache configs, you can use hash routing instead:

**File**: `app/app.config.ts`

```typescript
provideRouter(
  routes,
  // Add this:
  withHashLocation(),  // ← Enable hash routing
  withInMemoryScrolling({...})
)
```

URLs will become: `#/authentication/reset-password` instead of `/authentication/reset-password`

Trade-off: URLs look less clean but work without `.htaccess`

---

