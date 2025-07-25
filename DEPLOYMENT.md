# 🚀 Deployment Guide - Render

This guide will help you deploy both the frontend and backend of your portfolio website to Render for free.

## 📋 Prerequisites

1. **GitHub Account** - Your code needs to be on GitHub
2. **Render Account** - Sign up at [render.com](https://render.com)
3. **Gmail App Password** - Already configured ✅

## 🔄 Step 1: Push Code to GitHub

First, initialize git and push your code to GitHub:

```bash
# In the root directory (portfolio-website)
git init
git add .
git commit -m "Initial commit - Portfolio website with backend"

# Create a new repository on GitHub named "portfolio-website"
# Then connect and push:
git remote add origin https://github.com/Vraj006/portfolio-website.git
git branch -M main
git push -u origin main
```

## 🖥️ Step 2: Deploy Backend to Render

### 2.1 Create Web Service
1. Go to [render.com](https://render.com) and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Select your `portfolio-website` repository

### 2.2 Configure Backend Service
- **Name**: `vraj-portfolio-backend`
- **Environment**: `Node`
- **Region**: `Oregon (US West)` or closest to you
- **Branch**: `main`
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: `Free`

### 2.3 Add Environment Variables
In the Environment section, add these variables:

```
NODE_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=vrajprajapati28506@gmail.com
EMAIL_PASS=pfqd famh ebjk bjct
EMAIL_FROM=vrajprajapati28506@gmail.com
EMAIL_TO=vrajprajapati28506@gmail.com
FRONTEND_URL=https://vraj-portfolio-2025.onrender.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 2.4 Deploy Backend
- Click **"Create Web Service"**
- Wait for deployment (5-10 minutes)
- Note your backend URL: `https://vraj-portfolio-backend.onrender.com`

## 🌐 Step 3: Deploy Frontend to Render

### 3.1 Create Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect the same GitHub repository
3. Select your `portfolio-website` repository

### 3.2 Configure Frontend Service
- **Name**: `vraj-portfolio-2025`
- **Branch**: `main`
- **Root Directory**: `/` (leave empty)
- **Build Command**: `npm run build`
- **Publish Directory**: `build`

### 3.3 Add Environment Variables
```
REACT_APP_API_URL=https://vraj-portfolio-backend.onrender.com
```

### 3.4 Deploy Frontend
- Click **"Create Static Site"**
- Wait for deployment (5-10 minutes)
- Your site will be live at: `https://vraj-portfolio-2025.onrender.com`

## 🔧 Step 4: Update Backend CORS

After frontend deployment, update the backend environment variable:
- Go to your backend service on Render
- Update `FRONTEND_URL` to your actual frontend URL
- Redeploy the backend service

## ✅ Step 5: Test Everything

1. **Visit your live website**
2. **Test the contact form**
3. **Check email delivery**
4. **Verify all features work**

## 🔄 Step 6: Auto-Deploy Setup

Render automatically redeploys when you push to GitHub:
- **Frontend**: Redeploys on any change
- **Backend**: Redeploys on backend folder changes

## 📱 Your Live URLs

After deployment, you'll have:
- **Frontend**: `https://vraj-portfolio-2025.onrender.com`
- **Backend API**: `https://vraj-portfolio-backend.onrender.com`
- **Health Check**: `https://vraj-portfolio-backend.onrender.com/api/health`

## 🚨 Important Notes

### Free Tier Limitations:
- **Sleep Mode**: Services sleep after 15 minutes of inactivity
- **Cold Starts**: First request after sleep takes 30-60 seconds
- **Build Time**: 500 build minutes/month
- **Bandwidth**: 100GB/month

### Keep Services Active:
- Use a service like [UptimeRobot](https://uptimerobot.com) to ping your backend every 14 minutes
- Or upgrade to paid plan for always-on services

## 🔧 Troubleshooting

### Common Issues:
1. **Build Fails**: Check build logs for missing dependencies
2. **CORS Errors**: Verify FRONTEND_URL environment variable
3. **Email Not Working**: Check Gmail app password and environment variables
4. **404 Errors**: Ensure React Router redirects are configured

### Debug Commands:
```bash
# Test backend locally
npm run dev

# Test frontend locally
npm start

# Build frontend locally
npm run build
```

## 🎉 Success!

Your portfolio website is now live with:
- ✅ Professional frontend on Render
- ✅ Secure backend API on Render
- ✅ Working contact form with email
- ✅ Auto-deploy from GitHub
- ✅ Free hosting for both services

---

**Created by Vraj Prajapati** - Full-Stack Developer & AI/ML Enthusiast
