# SPEC User Guide - DISPATCHER Role
## Booking Management & Sample Dispatch

---

## Overview

As a **DISPATCHER** user in SPEC, your role is to:
1. Monitor all STF (Sample Transmittal Form) bookings from clients
2. Manage specimen delivery: Dispatch to LSR (riders/couriers), Transfer between LSR, or Reroute to different destinations
3. Track booking status throughout the delivery lifecycle
4. Ensure specimens reach the correct destination

Your workflow: **View Bookings → Select Booking → Dispatch/Transfer/Reroute → Monitor Status**

---

## 🔑 Login to SPEC

1. Open the SPEC application in your browser
2. Enter your **email or username**
3. Enter your **password**
4. Click **"Sign In"** button
5. You'll be taken to the Dispatcher dashboard

---

## 📊 Dashboard Overview

Your dashboard displays:
- **Total Bookings** - All bookings in the system
- **Pending Dispatch** - Bookings waiting for dispatch assignment
- **In Transit** - Bookings currently being delivered
- **Delivered** - Completed deliveries
- **Quick Stats** - Overview of daily activity

---

## 🎯 Step 1: Access Booking Management

### Navigate to Dispatching Module
1. From the main dashboard, look at the **left sidebar**
2. Click on **"Dispatching"** section
3. You'll see the **Booking Management List** page

### Understand the Booking List

The list displays all STF bookings from clients with columns:
- **Booking ID** - Unique transmittal identifier (STF-2026-04-18-001)
- **Origin Facility** - Where specimens are coming from
- **Patient Count** - Number of patients in this booking
- **Procedure Count** - Number of procedures/tests booked
- **Status** - Current state of booking (see Status section below)
- **Booking Date** - When client created the booking
- **Actions** - View button to manage booking

### Booking Statuses (BookingTransactionStatus)

| Status | Meaning | Your Action |
|--------|---------|-------------|
| **DRAFT** | Booking not yet finalized | Waiting for client to book |
| **BOOKED** | Client confirmed booking | Ready for dispatch assignment |
| **DISPATCHED** | Assigned to LSR/rider | Rider picking up specimen |
| **IN_TRANSIT** | Specimen in delivery | Monitor progress |
| **PENDING_PICKUP** | Waiting for rider pickup | Follow up with LSR |
| **BOOKING_ACCEPTED** | LSR accepted booking | Rider confirmed |
| **FORWARDED** | Forwarded to different destination | Transferred to another LSR |
| **PARTIALLY_DELIVERED** | Some specimens delivered | Verify remaining items |
| **COMPLETED** | Successfully delivered | Archive booking |
| **REJECTED** | Booking rejected by LSR | Review and reassign |
| **RETURNED** | Specimens returned to origin | Investigate issue |
| **CANCELLED** | Booking cancelled | Document reason |
| **DAMAGED** | Specimens damaged in transit | Mark as damaged |
| **LOST** | Specimens lost in transit | Alert facility immediately |
| **ON_HOLD** | Delivery on hold | Resolve blocking issue |
| **SUSPENDED** | Delivery suspended | Check for compliance issues |

---

## ✅ Step 2: Assign Booking to LSR

### Select a Pending Booking
1. From the **Booking List**, look for **"Pending"** status bookings
2. Click on the **booking row** or **"View"** button
3. **Booking Details** panel opens showing:
   - **Patient Information** (Name, Age, Contact)
   - **Requesting Facility** (Where request came from)
   - **Procedures Required** (Lab tests needed)
   - **Specimen Types** (What will be collected)
   - **Clinical Notes** (Reason for test, relevant history)
   - **Priority** (Normal/Urgent)
   - **Created Date & Time**

### Review Before Assignment
1. Carefully read all booking details
2. Note any special instructions from clinic
3. Check if urgent flag is set
4. Verify all procedures and specimens are listed
5. Review clinical notes for context

### Assign to LSR Facility
1. Click **"Assign to LSR"** button
2. An assignment modal appears with:

**Select LSR Facility:**
- **LSR Facility** dropdown *
  - Shows list of available LSR facilities
  - Select based on:
    - Geographic proximity to requesting facility
    - LSR availability/workload
    - Specialization (if applicable)
    - Equipment capabilities

**Set Processing Date:**
- **Scheduled Date** * (calendar picker)
  - Click calendar icon
  - Select date when LSR should process 
  - Generally: Today or next 1-2 business days
  - Avoid weekends if not 24hr facility
  - For urgent: Same day if possible

**Set Priority:**
- **Priority Level** - Confirm or change:
  - **Normal** - Standard queue
  - **Urgent** - Expedited processing

**Add Notes:**
- **Special Instructions** (optional)
  - Any special handling needed
  - Equipment preferences
  - Result delivery instructions
  - Facility-specific requirements
  - Example: "Patient has anxiety, needs quick turnaround"

### Confirm Assignment
1. Review all selected information
2. Click **"Confirm Assignment"** button
3. You'll see **success message**
4. Booking status changes to **"Assigned"**
5. LSR facility receives notification

---

## 🔄 Step 3: Monitor Assigned Bookings

### View All Assignments
1. In **Dispatching** module, use **Status filter**
2. Select **"Assigned"** status
3. Shows all bookings you've assigned but not yet completed


## 🎯 Step 2: View Booking Details (STF)

### Click View Button

1. From the **Booking Management List**, locate the booking you want to manage
2. Click the **"View"** button on the right side of the booking row
3. The **Booking Details Panel** opens on the right side

### Booking Details Panel

You'll see:
- **Booking ID** - Unique booking reference
- **Origin Facility** - Where specimens come from
- **Destination Facility** - Where specimens go (Lab/testing facility)
- **Booking Date & Time** - When client booked
- **Current Status** - Booking status with timestamp
- **Patient Information Table** (at bottom) showing:
  - Patient Name
  - Age/DOB
  - Gender
  - Contact (if available)
- **Specimens/Procedures Table** showing:
  - Procedure Name (e.g., Complete Blood Count)
  - Test Code
  - Specimen Type (e.g., Whole Blood, Serum)
  - Extraction Date
  - Quantity
  - Status

### Three Action Buttons

The booking details panel shows three primary action buttons:

1. **DISPATCH** 
2. **TRANSFER**
3. **REROUTE**

---

## 🎯 Step 3: DISPATCH - Assign to LSR (Rider/Courier)

### What is an LSR?

**LSR = Logistics Service Representative** (Rider/Courier)
- Person responsible for picking up and delivering specimens
- Travels from origin facility to destination facility
- Follows specimen handling requirements
- Reports delivery status

### How to Dispatch a Booking

**Step 1: Click the DISPATCH button**
1. In the booking details panel, click **"DISPATCH"** button
2. A **dropdown list of LSR users** appears showing available riders/couriers:
   - LSR Name

**Step 2: Select LSR from Dropdown**
1. Review the list of available LSR users
2. Look for LSR with:
   - Available status (not busy)
   - Service area covering origin → destination route
3. Click on the LSR name you want to assign

**Step 3: Click "Assign to This LSR" Button**
1. After selecting LSR, click **"Assign to This LSR"** button
2. System confirms the assignment
3. Booking details updated with assigned LSR name

**What happens immediately after:**
- Booking status changes to **DISPATCHED**
- LSR receives notification of new assignment
- LSR begins pickup process from origin facility
- You'll see confirmation message

### Best Practice
- Select LSR closest to origin facility (shorter pickup time)
- Verify LSR status is "Available" (not already busy)
- Check service area covers your route
- Pick LSR with highest performance rating when possible

---

## 🎯 Step 4: TRANSFER - Reassign to Different LSR

### When to Use TRANSFER

Use TRANSFER when:
- Original LSR becomes unavailable
- LSR has mechanical issues
- Route needs optimization
- Performance issues with current LSR

### How to Transfer a Booking

**Click the TRANSFER button:**
1. In the booking details panel, click **"TRANSFER"** button
2. A **Select New LSR** modal appears
3. Current LSR is highlighted (cannot select again)
4. Available LSRs are listed below

**Select New LSR:**
1. Review available LSRs
2. Click the new LSR you want
3. System prompts for confirmation
4. Optional: Add reason for transfer (e.g., "LSR unavailable")
5. Click **"Confirm Transfer"** button

**What happens:**
- Original LSR is removed from booking
- New LSR is assigned
- Booking status may change to **FORWARDED**
- New LSR receives notification
- Old LSR is notified of removal

### Audit Trail
- All transfers are logged with timestamp
- Reason for transfer is recorded
- Both LSRs are notified

---

## 🎯 Step 5: REROUTE - Change Destination Facility

### When to Use REROUTE

Use REROUTE when:
- Destination facility is unavailable
- Need to send to different lab for specific test
- Client requests different destination
- Destination has longer processing time

### How to Reroute a Booking

**Click the REROUTE button:**
1. In the booking details panel, click **"REROUTE"** button
2. A **Select Destination Facility** modal appears
3. Current destination is shown (highlighted)
4. Available destination facilities are listed

**Select New Destination:**
1. Review available destination facilities
2. Ensure facility can perform required tests
3. Click the new destination
4. System calculates new delivery route/distance

**Confirm Reroute:**
1. Review new route details
2. Optional: Add reason for reroute
3. Check if LSR can deliver to new location
4. Click **"Confirm Reroute"** button

**What happens:**
- Destination facility changes
- Route is recalculated
- LSR is updated with new destination
- Booking status may change to **REROUTED** or stay same
- New destination facility is notified

### Important Notes
- Ensure new destination can handle specimen type
- Verify new route doesn't exceed acceptable time
- Check if additional costs apply
- Document reason for audit trail

---

## 📋 Common Tasks & Quick Steps

### Task 1: Dispatch Booking ASAP
1. See "BOOKED" booking in list
2. Click "View" button
3. Click "DISPATCH" button
4. Select best LSR for route
5. Click "Confirm Dispatch"
6. Booking now shows "DISPATCHED" status

### Task 2: Switch LSR Mid-Delivery
1. Open booking from list
2. Click "TRANSFER" button
3. Select different LSR
4. Click "Confirm Transfer"
5. New LSR receives booking

### Task 3: Change Destination Lab
1. Open booking details
2. Click "REROUTE" button
3. Select new destination facility
4. Click "Confirm Reroute"
5. Route updated for LSR

### Task 4: Check Booking Status
1. From list, look at Status column
2. Or click "View" to see full details
3. See patient names and procedures
4. See specimen types in bottom table

### Task 5: Monitor In-Transit Specimens
1. Filter by Status: "IN_TRANSIT"
2. Shows all specimens currently being delivered
3. Click any booking for details
4. Real-time location if GPS enabled

---

## ⏱️ Dispatcher Best Practices

### Route Optimization
- Assign to LSR closest to origin facility
- Reduces transit time
- Improves specimen quality
- Faster delivery to lab

### Balance Workload
- Check each LSR's current capacity
- Distribute assignments fairly
- Prevent bottlenecks
- Emergency dispatch to available LSR

### Specimen Handling
- Know specimen types and requirements
- Ensure LSR trained for specimen type
- Verify temperature requirements met
- Confirm special handling (biohazard, fragile)

### Communication
- Add clear notes for complex cases
- Flag any special requirements
- Explain any urgent requests
- Coordinate with LSR teams

### Quality Control
- Verify patient info accuracy before dispatch
- Review procedure codes
- Check specimen types match procedures
- Confirm destination has required equipment

---


## 📱 Dashboard Status Overview

When you access Dispatching module, you see dashboard with:

**Key Metrics:**
- **Total Pending** - Bookings waiting for dispatch
- **Total Dispatched Today** - What you've sent out
- **In Transit** - Currently being delivered
- **Delivered Today** - Completed deliveries

**Quick Actions:**
- Dispatch new booking
- Transfer existing booking
- View recent activity

---

## 📞 Contact Information

**Get Help When You Need It:**

| Issue | Who to Contact | How |
|-------|----------------|-----|
| Booking not showing | System Admin | In-app support or email |
| LSR unavailable | Operations | Call or message |
| Destination facility issue | Lab Manager | Direct phone |
| Urgent reassignment | Senior Dispatcher | Escalation path |
| Technical problem | IT Support | Help desk |

---

## 📊 Key Performance Indicators (KPIs)

Track your performance:

- **Assignment Completion Rate** - % of bookings assigned
- **Average Assignment Time** - How long from receipt to dispatch
- **On-Time Delivery** - % delivered by scheduled time
- **Customer Satisfaction** - Feedback from facilities
- **Specimen Integrity** - % without damage/contamination

---

## 🎓 Training Checklist

Before dispatching independently, ensure you can:

- [ ] Log into SPEC system
- [ ] Access Dispatching module from sidebar
- [ ] View booking list and understand all columns
- [ ] Click View to open booking details
- [ ] Identify all three action buttons (Dispatch, Transfer, Reroute)
- [ ] Select LSR for dispatch
- [ ] Confirm dispatch action
- [ ] Transfer booking to different LSR
- [ ] Reroute to different destination
- [ ] Understand all booking statuses
- [ ] Read patient info and procedures
- [ ] Respond to LSR notifications
- [ ] Handle rejected bookings
- [ ] Escalate when needed

---

## 🔐 Important Notes

### Data Accuracy
- Double-check patient names before dispatch
- Verify procedures match specimen types
- Confirm destination facility can process tests
- Don't assume - always verify

### Timeliness
- Dispatch BOOKED bookings within 1 hour
- Follow up on pending transfers
- Monitor in-transit specimens
- Expedite urgent cases

### Communication
- Keep LSR informed of changes
- Notify facilities of delays
- Document all actions
- Follow escalation procedures

### Specimen Integrity
- Know specimen storage requirements
- Assign appropriate LSR/vehicle
- Monitor temperature-sensitive shipments
- Track bio-hazard materials

---

## 👤 Need More Help?

- **User Guide Overview**: See GUIDE_OVERVIEW.md
- **CLIENT Role Guide**: See GUIDE_CLIENT.md
- **LSR Role Guide**: See GUIDE_LSR.md  
- **LAB Role Guide**: See GUIDE_LAB.md
- **Quick Reference**: See QUICK_REFERENCE.md
- **System Admin**: Contact your administrator

---

**Version:** 1.0  
**Last Updated:** April 18, 2026  
**User Email:** dispatcher@sample.com  
**User Role:** DISPATCHER
