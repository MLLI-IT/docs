# SPEC User Guide - LAB Role
## Laboratory Technician (Specimen Reception & Validation)

---

## Overview

As a **LAB TECHNICIAN** in SPEC, your role is to:
1. Monitor incoming specimens arriving via LSR
2. Record compartment temperature verification (check & balance)
3. Receive or reject specimens per patient (based on quality)
4. Record exam/procedure information
5. Process all patients in STF (Sample Transmittal Form)
6. Complete STF processing

Your workflow: **Receiving Tab → Monitor IN_TRANSIT → Record Temps → Accept/Reject Per Patient → Complete STF**

---

## 🔑 Login to SPEC

1. Open the SPEC application in your browser
2. Enter your **email or username**
3. Enter your **password**
4. Click **"Sign In"** button
5. You'll be taken to your LAB dashboard

---

## 📊 Dashboard Overview

Your dashboard displays:
- **Incoming Specimens** - Bookings in transit to lab
- **Pending Reception** - Ready for receiving
- **Received Today** - Already processed
- **Rejected** - Specimens not accepted
- **Quick Stats** - Your daily performance

---

## 🎯 Step 1: Access Receiving Tab

### Navigate to Receiving Module
1. From the main dashboard, look at the **left sidebar**
2. Click on **"Receiving"** tab
3. You'll see the **Receiving Dashboard**

### Receiving Tab View

In the Receiving tab, you see two categories:

**1. IN_TRANSIT Bookings:**
- Bookings currently on their way to you
- Sent from dispatcher to LSR to your lab
- Status: **IN_TRANSIT** or **OUT_OF_DELIVERY**
- Shows which LSR is delivering
- Expected arrival time
- **Action**: Click to receive when they arrive

**2. COMPLETE/RECEIVED Bookings:**
- Bookings you've already received and processed
- Status: **RECEIVED** or **COMPLETED**
- Historical record of what you've done
- Can view details if needed

---

## 🚚 Step 2: Monitor & Wait for LSR Arrival

### Watch for Incoming Bookings
1. In the Receiving tab, monitor **IN_TRANSIT** section
2. You'll see:
   - **Booking ID** - STF reference number
   - **LSR Name** - Who's delivering
   - **Origin Facility** - Where specimens came from
   - **Patient Count** - How many patients in this STF
   - **Specimen Count** - Total procedures/tests
   - **Expected Arrival** - Estimated time
   - **Status** - IN_TRANSIT or OUT_OF_DELIVERY

### Prepare for Arrival
When you see booking approaching:
1. Prepare receiving area
2. Have thermometer ready to verify compartment temperatures
3. Verify your lab location and receiving procedures
4. Alert staff that specimens arriving

### LSR Arrives with Specimens
1. LSR brings compartmentalized delivery container
2. LSR already recorded ARRIVAL TEMP (their reading)
3. You will verify/record ACTUAL TEMP (your check & balance)

---

## 🌡️ Step 3: Record Temperature Verification

### Upon LSR Arrival
1. Click on the arriving booking in IN_TRANSIT section
2. **Booking Details Panel** opens
3. Navigate to **"Compartment Temperature Recording"** section

### Record Actual Temperatures (Your Verification)
As a quality check (check & balance), you independently verify:

1. **Refrigerated Compartment:**
   - Use your thermometer to check actual temperature inside ref compartment
   - **LSR ARRIVAL TEMP** - Shows what LSR recorded (e.g., 4°C)
   - **LAB ACTUAL TEMP** - Your reading (record actual measurement)
   - Field: **REF TEMP LAB VERIFICATION**
   - Note: Should be between 2-8°C acceptable range

2. **Freezer Compartment:**
   - Use thermometer on freezer compartment
   - **LSR ARRIVAL TEMP** - Shows what LSR recorded (e.g., -18°C)
   - **LAB ACTUAL TEMP** - Your reading (record measurement)
   - Field: **FREEZER TEMP LAB VERIFICATION**
   - Note: Should be -20°C or below acceptable range

3. **Room Temperature Compartment:**
   - Check room temp compartment temperature
   - **LSR ARRIVAL TEMP** - Shows what LSR recorded (e.g., 22°C)
   - **LAB ACTUAL TEMP** - Your reading (record measurement)
   - Field: **ROOM TEMP LAB VERIFICATION**
   - Note: Should be 20-25°C acceptable range

### Document Temperature Status
1. All temperatures acceptable? → **PASS** (click button)
2. Any temperature out of range? → **REJECT** (click button)
   - Add note: "REF temp too warm (9°C)"
   - May affect specimen validity
   - Supervisor review recommended

3. Click **"Save Temperature Recording"**

---

## 📦 Step 4: View Specimens in STF

### See All Specimens by Patient
In the same booking detail view, scroll down to see **Specimens Table** showing:

For each patient in the STF:
- **Patient Name** - Who the specimen is from
- **Specimen Type** - E.g., Whole Blood, Serum, Urine
- **Procedure/Exam** - What test will be performed
- **Compartment** - Where it was stored (Ref/Freezer/Room)
- **Status** - PENDING, RECEIVED, REJECTED
- **Action Buttons** - RECEIVE or REJECT

---

## ✅ Step 5: Receive Specimen Per Patient

### For Each Specimen - Click RECEIVE Button
1. In the specimens table, find a **PENDING** specimen
2. Click the **"RECEIVE"** button for that specimen
3. A **Receive Modal** appears with fields:

**Step 1: Record Specimen Information**
- **Patient Name** - Confirmed
- **Specimen Type** - Already filled
- **Procedure/Exam** - Already filled (what test this is for)
- **Compartment Location** - Where you found it

**Step 2: Quality Check**
Physically inspect the specimen:
- ☐ Label legible and intact?
- ☐ Container appropriate for type?
- ☐ Sufficient volume?
- ☐ Color/appearance normal?
- ☐ No leakage/damage?
- ☐ Temperature maintained?

**Step 3: Add Remarks (OPTIONAL)**
- Click **"Add Remarks"** field if desired
- Add optional notes:
  - "Specimen in excellent condition"
  - "Minor label smudge but readable"
  - "Small air bubble but acceptable"
  - Or leave blank if no remarks

**Step 4: Confirm Receipt**
1. Click **"Confirm Receive"** button
2. Specimen status changes to **RECEIVED**
3. Timestamp recorded
4. Modal closes

### Repeat for All Specimens
Continue receiving each specimen in the table:
- Process all patients one by one
- For each patient, their specimen gets received
- Record remarks if any quality notes needed

---

## ❌ Step 6: Reject Specimen Per Patient

### Click REJECT Button (if Quality Issue)
1. In specimens table, click **"REJECT"** button for problematic specimen
2. A **Rejection Modal** appears

### Select Standard Rejection Reason
From the dropdown, choose the standard rejection criteria:

| Rejection Reason | Description |
|------------------|-------------|
| **MISLABELED** | Label does not match patient |
| **UNLABELED** | No label on specimen |
| **INSUFFICIENT (QNS)** | Not enough volume for test |
| **OVERFILLED** | Too much in container |
| **HEMOLYZED** | Blood cells broken down (unacceptable) |
| **IMPROPER_COLLECTION** | Not collected per protocol |
| **WRONG_SPECIMEN_TYPE** | Wrong type for the test |
| **WRONG_PRESERVATIVE** | Wrong additive/preservative |
| **TIME_LAPSE** | Collected too long ago |
| **DELAYED_TRANSPORT** | Took too long to deliver |
| **CONTAMINATED** | Specimen contaminated/dirty |
| **WRONG_CONTAINER** | Wrong tube/container used |
| **IMPROPER_HANDLING** | Not stored/handled properly |
| **WRONG_TEMPERATURE** | Temperature not maintained |
| **DAMAGED_ACCIDENT** | Lab accident, unsalvageable |
| **DAMAGED_CONTAINER** | Broken/leaked container |

### Add Detailed Remarks
1. Click **"Remarks"** field (REQUIRED)
2. Provide specific details:
   - Example: "Label illegible - patient name cannot be read"
   - Example: "Serum tube only 0.5mL, minimum 2mL needed"
   - Example: "Specimen shows hemolysis - red tint indicates cell breakdown"
   - Example: "Collection tube missing - delivered in wrong container"

3. Click **"Confirm Rejection"** button
4. Specimen status changes to **REJECTED**
5. Timestamp recorded
6. Notification sent to dispatcher and LSR

### Dispatcher Action
After rejection:
- Dispatcher notified
- May contact origin facility for recollection
- New specimen may be sent
- You'll receive notification when new one arrives

---

## 📋 Step 7: Process All Patients in STF

### Receive or Reject Each Patient's Specimen
Continue in the table until all patients processed:

**Example STF with 3 Patients:**
- Patient 1: John Smith - Blood, CBC → **RECEIVE** (good condition)
- Patient 2: Mary Jones - Urine, Urinalysis → **RECEIVE** (good condition, remarks: "clear sample")
- Patient 3: Bob Wilson - Serum, Chemistry Panel → **REJECT** (hemolyzed, too dark)

After processing:
- John's specimen: Status = **RECEIVED**
- Mary's specimen: Status = **RECEIVED**  
- Bob's specimen: Status = **REJECTED**

---

## ✅ Step 8: Complete STF

### All Specimens Processed
After you've received or rejected all specimens in the STF:

1. Look for **"COMPLETE"** button
   - Located in **upper right corner** of booking details panel
   - Or in the **action buttons area**
   - Usually shows as: "Complete STF" or "Finish Receiving"

2. Click the **"COMPLETE"** button
3. System confirms:
   - All specimens have been reviewed (received or rejected)
   - All temperatures recorded
   - All remarks/reasons documented
4. Booking status changes to **COMPLETED**
5. STF is now closed and sent to archives

---

## 📱 Notifications You May Receive

| Notification | Meaning | Your Action |
|--------------|---------|-------------|
| **New IN_TRANSIT** | Booking on way to you | Monitor for arrival |
| **LSR Arrived** | Rider at your facility | Go receive specimens |
| **Temperature Alert** | Compartment out of range | Record and investigate |
| **Specimen Rejected** | You marked as rejected | Awaiting new specimen from origin |
| **STF Complete** | All processing done | Move to next STF |

---

## 📊 Standard Rejection Criteria Reference

Keep these handy for quick reference:

**Label Issues:**
- MISLABELED (patient name doesn't match)
- UNLABELED (completely missing label)

**Specimen Volume:**
- INSUFFICIENT (not enough - QNS)
- OVERFILLED (too much in container)

**Specimen Quality:**
- HEMOLYZED (red tinted, cells broken down)
- CONTAMINATED (visible contamination/dirt)

**Collection/Handling Issues:**
- IMPROPER_COLLECTION (not collected per protocol)
- IMPROPER_HANDLING (dropped, shaken, mishandled)
- WRONG_SPECIMEN_TYPE (wrong type for test)
- WRONG_CONTAINER (wrong tube/vial used)
- WRONG_PRESERVATIVE (wrong additive inside)

**Timing/Temperature:**
- TIME_LAPSE (too old, beyond acceptable window)
- DELAYED_TRANSPORT (took too long to deliver)
- WRONG_TEMPERATURE (stored at wrong temp)

**Damage:**
- DAMAGED_CONTAINER (broken/leaked tube)
- DAMAGED_ACCIDENT (lab accident, unsalvageable)

---


## 💡 LAB Tips

✅ **DO:**
- Always verify temperatures independently (check & balance)
- Physically inspect every specimen
- Use standard rejection criteria when rejecting
- Add clear remarks for context
- Process all patients before completing STF
- Click COMPLETE to finalize
- Document everything

❌ **DON'T:**
- Accept specimens with questionable conditions
- Skip temperature verification
- Leave remarks blank for rejections
- Process incomplete STFs
- Forget to click COMPLETE button
- Use non-standard rejection reasons
- Accept if can't verify patient identity

---

## 🔐 Important Notes

### Specimen Integrity
- Temperature critical for test validity
- Any out-of-range = quality concern
- Never ignore temperature discrepancies
- Always document findings

### Quality Control
- Your role is quality gate for lab
- Reject anything questionable
- It's better to ask for new specimen
- Don't compromise on quality

### Accuracy
- Verify patient identity carefully
- Double-check specimen types
- Confirm procedure/exam matches
- Labels must be legible

### Documentation
- All recordings are audit trail
- Remarks are permanent record
- Rejection reasons required
- Timestamps automatically recorded

---

## 👤 Need More Help?

- **LSR Guide**: See GUIDE_LSR.md (understand what LSR does before delivery)
- **Dispatcher Guide**: See GUIDE_DISPATCHER.md (understand booking assignment)
- **CLIENT Guide**: See GUIDE_CLIENT.md (understand origin of specimens)
- **System Overview**: See GUIDE_OVERVIEW.md
- **Quick Reference**: See QUICK_REFERENCE.md
- **Supervisor**: Contact for guidance on quality decisions

---


## 📞 When to Escalate to Supervisor

| Situation | Action |
|-----------|--------|
| **Critical abnormal result** | Notify supervisor immediately |
| **Specimen integrity issue** | Don't process - escalate |
| **Equipment malfunction** | Stop - report immediately |
| **Patient ID mismatch** | Stop - escalate |
| **Unsure about result** | Ask before approving |
| **Quality concern** | Flag and escalate |
| **Unable to complete test** | Document and escalate |

---

## Performance Metrics

| Metric | Target | What It Means |
|--------|--------|--------------|
| **Average Test Time** | Per test spec | Efficiency indicator |
| **QC Pass Rate** | 100% | Quality control effectiveness |
| **Result Accuracy** | > 99.5% | Minimal errors |
| **On-Time Completion** | > 95% | Meeting turnaround goals |
| **Approval Rate** | > 98% | Most results approved (not rejected) |

---

**Version:** 1.0  
**Last Updated:** April 18, 2026  
**User Email:** lab@sample.com  
**User Role:** LAB
