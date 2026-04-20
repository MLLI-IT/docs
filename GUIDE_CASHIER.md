# SPEC User Guide - CASHIER Role
## Patient Billing & Charge Management

---

## Overview

As a **CASHIER** user in SPEC, your role is to:
1. Create new patient records
2. Register patient information
3. Add charges (postcharge) to patient accounts
4. Apply discounts (senior, etc.)
5. Process payments
6. Manage guaranteed charges (postcharge)
7. View comprehensive billing summary

Your workflow: **Create Patient → Register Patient → View Patient → Add Charges → Apply Discount → Process Payment → View Summary**

---

## 🔑 Login to SPEC

1. Open the SPEC application in your browser
2. Enter your **email or username**
3. Enter your **password**
4. Click **"Sign In"** button
5. You'll be taken to the main dashboard

---

## 👥 Step 1: Create a New Patient

### Navigate to Patient Section
1. From the main dashboard, look at the **left sidebar**
2. Click on **"Patient"** or **"CMS"** section
3. You'll see the **Patient List** page showing all existing patients

### Create New Patient
1. Click the **"+ Create Patient"** button located in the **top-right corner**
2. A **patient creation form** will appear with the following fields:

**Patient Information Fields:**
- **Patient First Name** * - Patient's first name
- **Patient Last Name** * - Patient's last name
- **Patient ID/Medical Record Number** (Optional) - Unique patient identifier
- **Date of Birth** (Optional) - Patient's date of birth
- **Age** (Optional) - Patient's age
- **Gender** (Optional) - Male / Female / Other
- **Contact Number** (Optional) - Patient's phone number
- **Email** (Optional) - Patient's email address
- **Address** (Optional) - Patient's residential address

3. Fill in at least the **First Name** and **Last Name** (required fields marked with *)
4. Add other information as available
5. Click **"Register"** or **"Create Patient"** button
6. **Success message** appears confirming patient creation
7. Patient is now registered in the system

---

## ✅ Step 2: View Patient Details

### Access Patient Details
1. From the **Patient List**, find the newly created patient
2. Click **"View Patient"** button or link in the **Action** column for that patient
3. **Patient Details** page opens showing:
   - Patient information (name, ID, DOB, contact, etc.)
   - **4 Action Buttons**: 
     - **Postcharge** - Add charges to patient account
     - **Discount** - Apply discounts
     - **Payment** - Process payments
     - **Guaranteed Postcharge** - Add guaranteed charges
   - **Billing Summary Table** - Shows all transactions

---

## 💰 Step 3: Add Charges (Postcharge)

### Access Postcharge Modal
1. From the **Patient Details** page, click the **"Postcharge"** button
2. A **modal dialog** appears with:
   - **Available Items** list - Shows all chargeable items/services
   - **Item Selection** section
   - **Quantity/Amount** fields (if applicable)
   - **Apply** button

### Select Items to Charge
1. Browse the **Available Items** list showing:
   - **Item Name** - Name of service or product
   - **Unit Price** - Price per unit
   - **Description** - Item details (if available)

2. Click on the **item** you want to charge
3. Item is **selected and highlighted**
4. Specify **quantity** if applicable (default is usually 1)
5. Review the **total charge** amount for that item

### Apply Charges
1. Click the **"Apply"** button on the modal
2. **Success message** appears: "Charge added successfully"
3. Modal closes automatically
4. Charge appears in the **Billing Summary Table** showing:
   - Item name
   - Unit price
   - Quantity
   - Total amount
   - Transaction type: "Charge"

### Add Multiple Charges
1. Repeat the **"Add Charges"** steps for each additional item
2. Click **"Postcharge"** button again
3. Select the next item and apply
4. All charges accumulate in the summary table

---

## 🏷️ Step 4: Apply Discount

### Access Discount Modal
1. From the **Patient Details** page, click the **"Discount"** button
2. A **modal dialog** appears with:
   - **Available Items** list - Shows items eligible for discount
   - **Discount Type** dropdown selection
   - **Discount Amount/Percentage** field
   - **Apply** button

### Select Item and Discount Type
1. Browse the **Available Items** list showing items that can be discounted
2. Click on the **item** you want to apply discount to
3. Item is **selected and highlighted**
4. Click the **"Discount Type"** dropdown to select discount category:
   - **Senior** - Senior citizen discount
   - **PWD** - Person with disability discount
   - **Student** - Student discount
   - **Employee** - Employee discount
   - **Other** - Other applicable discounts

5. Enter or verify the **discount percentage/amount** automatically calculated for the selected type
6. Review the **discounted amount** that will be deducted

### Apply Discount
1. Click the **"Apply"** button on the modal
2. **Success message** appears: "Discount applied successfully"
3. Modal closes automatically
4. Discount appears in the **Billing Summary Table** showing:
   - Item name
   - Discount type (Senior, PWD, etc.)
   - Discount amount
   - Remaining amount after discount
   - Transaction type: "Discount"

### Add Multiple Discounts
1. Repeat the **"Apply Discount"** steps for other items
2. Click **"Discount"** button again
3. Select different item or discount type and apply
4. All discounts accumulate and are reflected in the summary

---

## 💳 Step 5: Process Payment

### Access Payment Modal
1. From the **Patient Details** page, click the **"Payment"** button
2. A **modal dialog** appears with:
   - **Available Items** list - Shows items that can be paid
   - **Payment Amount** field
   - **Payment Method** options (if applicable)
   - **Apply** button

### Select Item to Pay
1. Browse the **Available Items** list showing:
   - Item name
   - Current outstanding balance
   - Amount due

2. Click on the **item** you want to process payment for
3. Item is **selected and highlighted**
4. The **payment amount** is automatically populated with the item's balance
5. You can modify the amount if:
   - Making a **partial payment** - Enter desired payment amount
   - Making a **full payment** - Amount is auto-filled

### Apply Payment
1. Review the **payment amount** to be processed
2. Select **payment method** if available (Cash, Check, Credit Card, etc.)
3. Click the **"Apply"** button on the modal
4. **Success message** appears: "Payment processed successfully"
5. Modal closes automatically
6. Payment appears in the **Billing Summary Table** showing:
   - Item name
   - Payment amount
   - Remaining balance (if partial payment)
   - Payment method
   - Transaction type: "Payment"

### Process Multiple Payments
1. Repeat the **"Process Payment"** steps for other items
2. Click **"Payment"** button again
3. Select different item and payment amount
4. All payments are recorded in the summary

---

## 📌 Step 6: Add Guaranteed Postcharge

### Access Guaranteed Postcharge Modal
1. From the **Patient Details** page, click the **"Guaranteed Postcharge"** button
2. A **modal dialog** appears similar to the Postcharge modal:
   - **Available Items** list - Shows chargeable items
   - **Item Selection** section
   - **Apply** button

### Select Guaranteed Items to Charge
1. Browse the **Available Items** list
2. Click on the **item** you want to add as guaranteed charge
3. Item is **selected and highlighted**
4. Review the **charge amount**

### Apply Guaranteed Charge
1. Click the **"Apply"** button on the modal
2. **Success message** appears: "Guaranteed charge added successfully"
3. Modal closes automatically
4. Charge appears in the **Billing Summary Table** showing:
   - Item name
   - Charge amount
   - Transaction type: "Guaranteed Postcharge"

**Note:** Guaranteed postcharges are recorded separately and may have different processing or collection procedures.

---

## 📊 Step 7: View Billing Summary

### Summary Table Display
After performing any of the above actions (charges, discounts, payments), the **Billing Summary Table** displays:

**Columns in Summary Table:**
- **Transaction Date** - Date when charge/discount/payment was processed
- **Item Name** - Name of the item or service
- **Transaction Type** - Type of transaction (Charge, Discount, Payment, Guaranteed Postcharge)
- **Amount** - Amount for each transaction
- **Balance** - Running balance after transaction
- **Notes** - Any additional information

### Monitor Patient Account
The summary table allows you to:
1. **Track all transactions** - See complete history of charges, discounts, and payments
2. **Calculate current balance** - View remaining amount due
3. **Identify outstanding items** - See which items still need payment
4. **Verify transactions** - Confirm all charges and adjustments are correct

### Account Status
1. Review the **Total Charges** - Sum of all postcharges
2. Review the **Total Discounts** - Sum of all discounts applied
3. Review the **Total Payments** - Sum of all payments received
4. Calculate **Final Balance Due** - Total charges - discounts - payments

---

## ✨ Quick Tips

✓ **Always verify patient information** before adding charges
✓ **Apply discounts immediately** after charges if patient qualifies
✓ **Record payments** promptly to keep account updated
✓ **Check billing summary regularly** to ensure accuracy
✓ **Use guaranteed postcharge** for charges that will be billed later
✓ **Keep transaction records** for audit and customer service purposes

---

## 📞 Support

For additional assistance or questions about the CASHIER role, contact:
- **System Administrator** - For system-related issues
- **Supervisor** - For billing policy questions
- **Support Team** - For technical assistance
