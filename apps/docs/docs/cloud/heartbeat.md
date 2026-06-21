---
sidebar_position: 5
---

# Heartbeat

JES Agents send heartbeat events every 30 seconds.

## Purpose

- Update lastSeen
- Maintain online status
- Detect disconnected devices

## Endpoint

```http
POST /devices/:id/heartbeat
```

## Response

```json
{
  "success": true
}
```
