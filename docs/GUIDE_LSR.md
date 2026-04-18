# SPEC User Guide - LSR Role
## Logistics Service Representative (Rider/Courier)

---

## Overview

As an **LSR (Logistics Service Representative)** in SPEC, you are a **rider/courier** responsible for:
1. Accept bookings dispatched by the dispatcher
2. Pick up specimens from origin facility
3. Record compartment temperatures and arrival/departure times
4. Accept or reject specimens based on quality
5. Transport specimens to destination facility
6. Record delivery information and temperatures
7. Complete delivery documentation

Your workflow: **Accept Booking → Go to Origin → Record & Accept Specimens → Transport → Deliver at Destination**

---

## 🔑 Login to SPEC

1. Open the SPEC application in your browser
2. Enter your **email or username**
3. Enter your **password**
4. Click **"Sign In"** button
5. You'll be taken to your LSR dashboard

---

## 📊 Dashboard Overview

Your dashboard displays:
- **Incoming Bookings** - Dispatcher assigned to you
- **Pending Acceptance** - New bookings waiting for your response
- **In Progress** - Bookings you're currently working on
- **Delivered** - Completed deliveries
- **Quick Stats** - Your daily performance

---

## 🎯 Step 1: View Incoming Bookings

### Navigate to Your Bookings
1. From the main dashboard, look at the **left sidebar**
2. Click on your **LSR section** or **"My Bookings"**
3. You'll see the **Incoming Bookings List**

### Understand Booking List

The list shows bookings dispatcher assigned to you:
- **Booking ID** - Unique transmittal reference
- **Origin Facility** - Where you'll pick up specimens
- **Destination Facility** - Where you'll deliver
- **Patient Count** - Number of patients in this booking
- **Status** - Current state (Pending Acceptance, etc.)
- **Assigned Date/Time** - When dispatcher assigned to you
- **Action Buttons** - Accept/View options

---

## ✅ Step 2: Accept Booking

### Review Booking Details
1. From the incoming bookings list, click on a booking to view details
2. See:
   - **Booking ID** - Reference number
   - **Origin Facility** - Pickup address & contact
   - **Destination Facility** - Delivery address & contact
   - **Patients** - Who the specimens are from
   - **Procedures** - What tests are ordered
   - **Special Notes** - Any special instructions from dispatcher

### Accept the Booking
1. Click the **"Accept Booking"** button
2. System confirms acceptance
3. Booking status changes to **"Booking Accepted"**
4. You're now ready to proceed to origin facility

---

## 🚗 Step 3: Travel to Origin Facility

### Before You Leave
1. Ensure you have your **delivery vehicle** with compartments:
   - **Refrigerated Compartment** (ref temperature, typically 2-8°C)
   - **Freezer Compartment** (freezer temperature, typically -20°C or lower)
   - **Room Temperature Compartment** (room temp, typically 20-25°C)
2. Check that each compartment is working properly
3. Record initial temperatures of each compartment

### Drive to Origin Facility
- Navigate to **Origin Facility address** shown in booking
- Allow time for parking and facility check-in
- Bring your **LSR ID** for identification

---

## 📋 Step 4: Record at Origin Facility - Temperatures & Times

### Upon Arrival at Origin Facility
1. Open the booking in SPEC app or system
2. Navigate to **"Origin Facility Recording"** section

### Record Compartment Temperatures
Record the current temperature of each compartment you brought:

1. **Refrigerated Compartment Temperature**
   - Current temperature (should be 2-8°C)
   - Record in: **REF TEMP**

2. **Freezer Compartment Temperature**
   - Current temperature (should be -20°C or lower)
   - Record in: **FREEZER TEMP**

3. **Room Temperature Compartment Temperature**
   - Current temperature (should be 20-25°C)
   - Record in: **ROOM TEMP**

### Record Arrival & Departure Times
1. **PICKUP ARR** (Pickup Arrival) - Click and record time you arrived
2. **PICKUP DEP** (Pickup Departure) - To be filled when you leave

---

## 📦 Step 5: Accept or Reject Specimens

### View Specimen List
In the same booking screen, you'll see a **table below showing specimens** to pick up:

Each row shows:
- **Specimen ID** - Unique identifier
- **Patient Name** - Who it's from
- **Procedure** - What test it's for
- **Specimen Type** - E.g., Whole Blood, Serum, Urine
- **Required Compartment** - Where it should go (Ref/Freezer/Room Temp)
- **Quantity** - How much is needed
- **Condition** - Requested specimen condition (Collected, Ready, etc.)
- **Action Buttons** - ACCEPT or REJECT

### Inspect Each Specimen
For each specimen, physically check:
1. **Label Integrity** - Is label legible and intact?
2. **Container** - Is container appropriate for specimen type?
3. **Quantity** - Is there sufficient volume?
4. **Color/Appearance** - Does it look normal for that specimen type?
5. **Temperature** - Has it been stored properly?
6. **Expiration** - If applicable, is it still valid?

### ACCEPT Specimen
1. Click the **"ACCEPT"** button for that specimen
2. A **Remarks Modal** appears with two options:

   **Option 1: Add Remarks (Optional)**
   - Add any notes about the specimen
   - E.g., "Specimen in good condition", "Minor label damage but readable"
   - Click **"Add Remarks"** field and type notes

   **Option 2: Select Compartment Assignment**
   - Choose which compartment to place this specimen:
     - **Refrigerated Compartment** (2-8°C)
     - **Freezer Compartment** (-20°C or lower)
     - **Room Temperature Compartment** (20-25°C)
   - System default may suggest based on specimen type
   - You can override if needed

3. Click **"Confirm Accept"** button
4. Specimen status changes to **ACCEPTED**
5. Modal closes and returns to specimen list

### REJECT Specimen
1. Click the **"REJECT"** button for that specimen
2. A **Rejection Modal** appears asking:
   - **Reason for Rejection** (dropdown):
     - "Damaged/Leaked"
     - "Insufficient Volume"
     - "Wrong Specimen Type"
     - "Label Illegible"
     - "Contaminated"
     - "Improper Storage"
     - "Other"
   - **Detailed Notes** - Explain the issue
3. Click **"Confirm Rejection"** button
4. Specimen status changes to **REJECTED**
5. Notification sent to dispatcher

### Repeat for All Specimens
Continue accepting/rejecting each specimen in the table until all are reviewed

---

## 📍 Step 6: Record Departure Time

### Before Leaving Origin Facility
1. Ensure all accepted specimens are properly placed in assigned compartments
2. Close and secure all compartment lids
3. In the booking details, record **PICKUP DEP** (Pickup Departure):
   - Click time field and select current time
   - Confirm you're leaving origin facility

### Document as "Out of Delivery"
1. After all specimens accepted and packed, click **"Mark as Out of Delivery"** button
2. Or status may auto-change to **"OUT_OF_DELIVERY"** or **"IN_TRANSIT"**
3. System records that specimens are now in transport

---

## 🚗 Step 7: Transport to Destination Facility

### During Transport
- Drive safely to destination facility address
- Maintain proper temperature in compartments
- Avoid temperature fluctuations
- Monitor vehicle dashboard for warnings
- Keep specimens secure during transport

### Track Time
- Note departure time from origin
- Monitor travel time (typical 30 min to several hours depending on distance)

---

## 📍 Step 8: Arrive at Destination Facility

### Upon Arrival
1. Verify you're at correct **Destination Facility address**
2. Check-in with receiving staff
3. Notify dispatcher if any issues during transit
4. Prepare to offload specimens

### Record Delivery Information
1. Open the booking in SPEC app
2. Navigate to **"Destination Facility Recording"** section

### Record Delivery Temperatures
Record the current temperature of each compartment as you arrive:

1. **DELIVERY ARR Temperatures:**
   - **REF TEMP** - Current refrigerator temperature
   - **FREEZER TEMP** - Current freezer temperature  
   - **ROOM TEMP** - Current room temperature compartment

2. **DELIVERY ARR** (Delivery Arrival Time)
   - Record time you arrived at destination facility

### Document Delivery Details
1. **Condition Upon Arrival** - Any issues with specimens?
2. **Temperature Status** - All compartments in acceptable range?
3. **Any Spillage or Damage** - Problems during transit?
4. Click **"Save Delivery Recording"** button

---

## ✅ Step 9: Complete Delivery at Destination

### Hand Over Specimens
1. With destination facility staff, verify specimen count and IDs
2. Show specimens in proper compartments
3. Ensure all specimens accounted for

### Get Confirmation
1. Destination facility staff should confirm receipt
2. You may need signature/timestamp from receiving staff
3. Keep proof of delivery for your records

### Mark Delivery Complete
1. In SPEC app, click **"Mark Delivery Complete"** button
2. Or **"Confirm Delivery"** button
3. Status changes to **DELIVERED** or **COMPLETED**
4. Booking is now closed

---

## 📋 Common Tasks for LSR

### Task 1: Check Your Daily Bookings
1. Go to dashboard
2. Click **"My Bookings"** or **"Today's Deliveries"**
3. See all bookings assigned for today
4. Accept those you're ready to handle

### Task 2: Reject Specimen Quickly
1. In specimen list, click **"REJECT"** button
2. Select reason from dropdown
3. Type brief note
4. Click "Confirm Rejection"
5. Specimen marked rejected and dispatcher notified

### Task 3: Add Remarks While Accepting
1. Click **"ACCEPT"** button for specimen
2. In modal, click **"Add Remarks"** field
3. Type your notes (e.g., "Small crack in tube but sealed")
4. Select compartment
5. Click "Confirm Accept"

### Task 4: If Compartment Temperature Wrong
1. Record compartment temperature at origin
2. If temperature is out of range:
   - Document in notes
   - Notify dispatcher immediately
   - May need to refuse booking or delay pickup
   - Don't accept specimens if conditions unsafe

### Task 5: Handle Emergency/Problem During Transport
1. If vehicle breaks down:
   - Try to maintain temperature
   - Contact dispatcher ASAP
   - Get replacement vehicle if needed
   - Document delay in app

2. If specimen leaks/damages:
   - Isolate damaged specimen
   - Note in app remarks
   - Contact dispatcher
   - May need to return to origin

---

## 📱 Notifications You May Receive

| Notification | Meaning | Your Action |
|--------------|---------|-------------|
| **Booking Assigned** | Dispatcher sent you a booking | Review and accept |
| **Accept Reminder** | Booking waiting for your acceptance | Accept ASAP |
| **Navigate to Origin** | Accepted booking, time to go pick up | Go to origin facility |
| **Record Temperatures** | At origin, record compartment temps | Fill in temperature fields |
| **Accept Specimens** | Physical specimens arrived | Review and accept/reject |
| **Out of Delivery** | Specimens packed and ready | Mark as out of delivery |
| **Delivery Complete** | Arrived at destination | Record delivery temps & confirm |
| **Delivery Confirmed** | Destination accepted specimens | Booking is complete |

---


## 📊 Performance Metrics You're Measured On

Track your performance:

| Metric | Target | What It Means |
|--------|--------|--------------|
| **Bookings Accepted Per Day** | 8-12 | How many deliveries you complete |
| **On-Time Delivery** | 95%+ | Deliveries completed by scheduled time |
| **Specimen Rejection Rate** | < 2% | Lower is better (fewer quality rejections) |
| **Temperature Compliance** | 100% | All compartments maintained properly |
| **Zero Damage Rate** | 100% | No specimens lost/damaged in transit |
| **Customer Satisfaction** | 4.5+/5 | Feedback from facilities |

---

## 💡 LSR Tips

✅ **DO:**
- Accept bookings only when ready to leave immediately
- Inspect ALL specimens carefully
- Record ALL temperatures accurately
- Communicate with dispatcher about any issues
- Keep compartments sealed during transport
- Document everything in app
- Drive safely and follow traffic rules
- Confirm receipt with destination facility

❌ **DON'T:**
- Accept booking then delay going to origin
- Accept damaged/questionable specimens
- Leave compartments open during transport
- Skip temperature recordings
- Drive recklessly with specimens
- Forget to record times (PICKUP ARR/DEP, DELIVERY ARR)
- Deliver to wrong facility
- Leave without confirmation from destination

---


## 👤 Need More Help?

- **Dispatcher Guide**: See GUIDE_DISPATCHER.md (understand how you got assigned)
- **CLIENT Guide**: See GUIDE_CLIENT.md (understand origin of bookings)
- **LAB Guide**: See GUIDE_LAB.md (understand where specimens go)
- **System Overview**: See GUIDE_OVERVIEW.md
- **Quick Reference**: See QUICK_REFERENCE.md
- **System Support**: Contact your LSR supervisor or administrator

---

**For Questions or Feedback:**
- Contact: lsr-support@spec-system.com
- Internal Chat: #spec-lsr-support
- Documentation: /guide/

---
