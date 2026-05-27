# SPEC User Guide - CMS Role
## Patient Registration & Transaction Management

---

## Overview

As a **CMS** (Cashier/Case Management System) user in SPEC, your role is to:
1. Register new patients and manage existing patient records
2. Add charges, payments, discounts, and guarantees to patient accounts
3. Process payments from walk-in patients (cash, credit card, debit card, QR code)
4. Manage corporate account guarantees

Your workflow: **Patient Registration → View Transactions → Manage Charges/Payments/Discounts/Guarantees**

---

## 👤 Step 1: Patient Registration

### Register a New Patient
1. From the CMS dashboard, click on **"Register Patient"** button
2. A patient registration form will appear with fields to fill

### If Patient Has Existing Record
1. As you fill in the patient details, the system automatically searches existing records in **TASS** (Treatment And Specimen System)
2. If a matching patient record is found, it will **auto-populate** the form with existing data
3. Review the auto-populated information and verify it's correct
4. To proceed, simply click **"Add Case"** button to associate a new case with this patient
5. Click **"Save"** to complete

### If Patient is New
1. Fill in all required patient details:
   - **Patient First Name** * (required)
   - **Patient Last Name** * (required)
   - **Date of Birth** (optional)
   - **Age** (optional)
   - **Gender** (optional)
   - **Contact Number** (optional)
   - **Email** (optional)
   - **Address** (optional)
   - Other relevant fields

2. After filling all details, click **"Save"** button
3. Patient record is created and saved in the system
4. You'll be taken to the patient's record page

---

## 📊 Step 2: View & Manage Patient Transactions

### Access Patient Transactions
1. After patient registration, click **"View"** button or link for the patient record
2. The **Patient Transactions** page opens
3. You'll see **four tabs** at the top:
   - **Charges** - Medical charges/procedures added
   - **Payment** - Payments received
   - **Discount** - Discounts applied
   - **Guarantee** - Guarantee/Corporate billing

### Transaction View
- Each tab displays the respective transactions for this patient
- The transactions shown depend on what has been processed
- View details of each transaction in the corresponding tab

---

## 💰 Step 3: Manage Charges

### Charges Tab Overview
Under the **Charges** tab, you'll see **four action buttons**:
1. **Post Charge** - Add new charges/procedures
2. **Discount** - Apply discount to charges
3. **Guarantee** - Add corporate/guarantee billing
4. **Payment** - Process payment for charges

### Adding a New Charge (Post Charge)
1. Click **"Post Charge"** button
2. A form or modal will appear to add charges
3. **Select Procedure:**
   - Click on the procedure selection field
   - Browse and select the applicable procedure (e.g., Lab test, Consultation, etc.)
4. **Select Code:**
   - Select the corresponding code for the procedure
5. **Add & Create:**
   - Click **"Add"** button to add the procedure
   - Click **"Create"** button to finalize and save the charge
6. The charge now appears in the **Charges** tab

---

## 💳 Step 4: Payment Processing

### Payment Process Overview
This function is **applicable to walk-in patients** who need to pay immediately with:
- **Cash**
- **Credit Card**
- **Debit Card**
- **QR Code PH (Philippines)**

### Process Payment
1. Click **"Payment"** button from the Charges tab
2. A payment form will appear showing:
   - List of charges/items to be paid
   - Total amount due
3. **Select Items to Pay:**
   - Check the items/charges that the patient will pay for
   - You can select all items or partial payment
4. **Select Payment Method:**
   - Choose the payment method: Cash, Credit Card, Debit Card, or QR Code PH
5. **Process Payment:**
   - Confirm the payment amount
   - Click **"Confirm Payment"** or **"Pay"** button
6. Payment is recorded and the charge status updates to **Paid**

---

## 🎁 Step 5: Apply Discount

### Discount Application
This function is **applicable when giving discounts** to:
- Senior Citizens
- PWD (Persons with Disability)
- Indigent patients
- Other eligible categories

### Apply Discount to Charges
1. Click **"Discount"** button from the Charges tab
2. A discount form or modal will appear
3. **Select Applicable Discount:**
   - Click on the discount selection field
   - Browse available discount categories (Senior, PWD, Indigent, etc.)
   - Select the appropriate discount type
4. **Verify Discount Amount:**
   - System will show the discount percentage or amount
   - Review the discounted total
5. Click **"Save"** button to apply the discount
6. The discount is recorded in the **Discount** tab

---

## 🏢 Step 6: Guarantee/Corporate Billing

### Guarantee Overview
This function is **applicable to corporate accounts** where:
- The **Corporate Company** will be billed (not the patient)
- The patient may not pay immediately
- The company guarantees payment for employee/member charges

### Add Guarantee to Charges
1. Click **"Guarantee"** button from the Charges tab
2. A guarantee form will appear
3. **Select Procedure:**
   - Click on the procedure selection field
   - Select the applicable procedure
4. **Configure Corporate Billing:**
   - Select the corporate account/company
   - Verify the guarantee terms
5. Click **"Save"** button to add guarantee
6. The guarantee is recorded in the **Guarantee** tab
7. The corporate company will receive a bill for this charge

---

## 🗑️ Step 7: How to Delete Charges

### Deletion Rules
The system has specific rules about when charges can be deleted:

### ✅ Can Delete
- Charges that have **NOT been paid yet**
- Charges with **NO discount** applied
- Charges with **NO guarantee** applied
- Only delete if transaction is in initial/open status

### ❌ Cannot Delete Directly
- Charges that have been **PAID** (payment received)
- Charges with **DISCOUNT** applied
- Charges with **GUARANTEE** applied

### Procedure to Delete Protected Charges
1. If a charge has Payment, Discount, or Guarantee applied:
   - You **MUST first VOID the transaction**
   - Click **"Void Transaction"** button
   - Confirm the void action
2. After voiding, the charge reverts to initial status
3. Now you can click **"Delete"** button to remove the charge
4. Confirm the deletion

### Summary
- **No payment/discount/guarantee?** → Delete directly
- **Has payment/discount/guarantee?** → Void first, then delete

---

## ✨ Quick Reference

| Action | Walk-in? | Corporate? | Notes |
|--------|----------|-----------|-------|
| Register Patient | Yes | Yes | Fill new details or use existing record |
| Post Charge | Yes | Yes | Required first step |
| Payment | Yes | No | Walk-in patients pay immediately |
| Discount | Yes | Yes | For eligible categories (Senior, PWD, etc.) |
| Guarantee | No | Yes | For corporate employees/members |
| Delete Charge | Yes* | Yes* | Cannot delete if paid/discounted/guaranteed |

*Can delete only if no payment, discount, or guarantee applied

---

## 📌 Tips & Best Practices

1. **Always verify patient information** before registering a new patient
2. **Check existing records first** - System auto-populates for known patients
3. **Add charges first** - All other operations (payment, discount, guarantee) depend on charges
4. **Process payments immediately** - For walk-in patients to complete transaction
5. **Review discount eligibility** - Only apply discounts to qualified categories
6. **Void before deleting** - If a charge has payment/discount/guarantee, void it first
7. **Keep records accurate** - Proper documentation ensures billing correctness
