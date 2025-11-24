# CultureCheck – Test Cases

---

## TC-001: Add Story with Valid Data
**Steps**
1. Enter a title.
2. Enter a description.
3. Click Save Story.

**Expected Result**
Story card appears below with correct text.

**Priority:** High  
**Severity:** Major  

---

## TC-002: Missing Title
**Steps**
1. Leave title empty.
2. Enter description.
3. Click Save Story.

**Expected Result**
Validation error: "Title and description are required."

**Priority:** High  
**Severity:** Major  

---

## TC-003: Missing Description
**Expected Result**
Same validation error.

---

## TC-004: Delete Story
**Steps**
1. Add a story.
2. Click Delete.

**Expected Result**
Story disappears.

---

## TC-005: Multiple Story Support
**Expected**
All stories appear and delete independently.