# EmailJS Integration Setup Guide

## 📧 Current Configuration

Your EmailJS integration is **90% complete**! Here's what's already set up:

✅ EmailJS package installed (`@emailjs/browser`)
✅ Service ID configured: `service_z2g6ohj`
✅ Template ID configured: `template_ura4rus`
⚠️ **Public Key needed** (see step 1 below)

---

## 🚀 Quick Setup (2 Steps)

### Step 1: Get Your Public Key

1. Go to https://dashboard.emailjs.com/admin/account
2. Find your **Public Key** (should look like: `abc123XYZ_-`)
3. Open the file: `/workspaces/Guptas-Travels/client/lib/emailjs-config.ts`
4. Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_z2g6ohj',
  templateId: 'template_ura4rus',
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY', // ← Paste here
};
```

### Step 2: Configure Email Template Variables

Make sure your EmailJS template (`template_ura4rus`) includes these variables:

```
{{from_name}}      - Customer's name
{{from_email}}     - Customer's email
{{phone}}          - Customer's phone number
{{travel_date}}    - Travel date selected
{{guests}}         - Number of guests
{{destination}}    - Selected destination name
{{message}}        - Special requirements
{{to_email}}       - Admin email (hardcoded: admin@guptatravels.com)
```

**Example Email Template:**
```
Subject: New Booking Request - {{destination}}

Hello Admin,

You have received a new booking request:

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Booking Details:
- Destination: {{destination}}
- Travel Date: {{travel_date}}
- Number of Guests: {{guests}}

Special Requirements:
{{message}}

---
Reply to: {{from_email}}
```

---

## ✨ Features Implemented

### 1. **Loading State**
- Submit button shows spinner while sending
- Button disabled during submission
- Text changes to "Sending..."

### 2. **Toast Notifications**
- ✅ Success: "Booking Request Sent! We will contact you soon."
- ❌ Error: "Sending Failed. Please try again."
- ⚠️ Validation: "Please fill in all required fields"

### 3. **Form Validation**
- Required fields: Name, Email, Phone
- Optional fields: Date, Guests, Message
- Validates before sending

### 4. **Auto-close Modal**
- Form closes automatically after successful submission (1.5s delay)
- Form resets to blank state

### 5. **Error Handling**
- Network errors caught and displayed
- Console logs error details for debugging
- User-friendly error messages

---

## 🧪 Testing the Integration

### Test Checklist:
1. ✅ Add your public key to the config file
2. ✅ Open the website: http://localhost:8081
3. ✅ Click on any destination card's "Explore Destination" button
4. ✅ Click "Contact Us" in the details modal
5. ✅ Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 9876543210
6. ✅ Click "Submit Booking Request"
7. ✅ Watch for:
   - Button shows "Sending..." with spinner
   - Success toast appears
   - Modal closes automatically
   - Email arrives in your inbox

### Troubleshooting:

**If you see "Sending Failed" toast:**
1. Check browser console for error details
2. Verify public key is correct
3. Ensure template ID matches in EmailJS dashboard
4. Check that service is active in EmailJS

**If email doesn't arrive:**
1. Check EmailJS dashboard → "Email Logs" section
2. Verify recipient email in EmailJS template settings
3. Check spam folder
4. Ensure EmailJS service is connected properly

---

## 🎨 What Happens When User Submits?

```
User fills form → Clicks Submit
       ↓
Button shows "Sending..." with spinner
       ↓
EmailJS sends email with form data
       ↓
✅ Success: Toast notification + Auto-close modal
❌ Error: Error toast + Form stays open
```

---

## 📝 Email Data Sent

When a user submits the form, this data is sent to EmailJS:

```json
{
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "phone": "+91 9876543210",
  "travel_date": "2025-12-25",
  "guests": "4",
  "destination": "Tirupati Temples",
  "message": "Need vegetarian meals",
  "to_email": "admin@guptatravels.com"
}
```

---

## 🔒 Security Notes

- Public key is safe to expose in frontend code
- No API keys or secrets are exposed
- EmailJS handles rate limiting
- Consider adding reCAPTCHA for production

---

## 📞 Support

If you need help:
1. EmailJS Docs: https://www.emailjs.com/docs/
2. Check browser console for errors
3. Verify all IDs match your EmailJS dashboard

---

**Ready to test? Just add your public key and try submitting a form!** 🚀
