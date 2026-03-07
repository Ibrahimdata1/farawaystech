# Mobile Release Checklist

Run this checklist manually before every release. Automated tests cover most items below — but real device checks are required too.

## Automated Tests

```bash
npm run test:mobile
```

All tests must pass before release.

---

## Manual Checks (Real Device)

Test on at least one Android device and one iOS device.

### Hamburger Menu
- [ ] Button is visible in top-right on mobile
- [ ] Tapping it opens the nav menu with animation
- [ ] Tapping it again closes the menu
- [ ] Tapping a menu link closes the menu and scrolls to the correct section
- [ ] Scroll on iOS Safari works correctly (no stuck scroll)

### Navigation
- [ ] All 6 sections reachable: Services, About, Process, Why Us, Tech Stack, Contact
- [ ] Active section highlights correctly in nav while scrolling
- [ ] Logo tap scrolls back to top

### Theme Toggle
- [ ] Sun/moon button visible on mobile
- [ ] Toggling changes theme immediately
- [ ] Theme persists on page reload

### Language Toggle
- [ ] EN/TH button visible on mobile
- [ ] Toggling switches all text correctly

### General
- [ ] No horizontal scroll on any screen size
- [ ] No overlapping elements
- [ ] All text is readable (not cut off)
- [ ] Buttons/links have adequate tap target size (44x44px minimum)
- [ ] Page loads without console errors

---

## Viewports to Check

| Device       | Width |
|--------------|-------|
| iPhone SE    | 375px |
| iPhone 13    | 390px |
| Pixel 5      | 393px |
| iPad (bonus) | 768px |

---

## Sign-off

Before merging/deploying, confirm:

- [ ] Automated tests passed (`npm run test:mobile`)
- [ ] Manual check done on real iOS device
- [ ] Manual check done on real Android device
- [ ] Reviewer: _______________  Date: _______________
