---
sidebar_position: 6
---

# Offline Detection

The Cloud API checks device activity every minute.

## Rules

- Heartbeat every 30 seconds
- Device marked offline after 90 seconds without heartbeat

## Fields Updated

- isOnline
- lastSeen

This allows JES to accurately track active devices.

## Logic

```text
lastSeen > 90 seconds
        ↓
isOnline = false
```
