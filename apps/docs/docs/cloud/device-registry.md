---
sidebar_position: 4
---

# Device Registry

The Device Registry is responsible for tracking all JES Agents connected to the JES ecosystem.

Each device running the JES Agent receives a unique identifier and registers itself with the JES Cloud API.

## Purpose

The registry enables JES to:

- Identify devices uniquely
- Track online and offline status
- Store device metadata
- Associate devices with users
- Enable remote management

## Device Identity

Each JES Agent generates a unique device identifier.

Example:

```json
{
  "id": "d511873d-3d2c-4ca4-8b5b-ee364d49505f",
  "name": "Joe Laptop",
  "hostname": "archlinux",
  "platform": "linux",
  "arch": "x64",
  "version": "0.1.0-alpha"
}
```

The device ID remains constant throughout the lifetime of the device.

## Registration Flow

```text
JES Agent
    ↓
POST /devices/register
    ↓
JES Cloud API
    ↓
PostgreSQL
```

When the agent starts:

1. The agent gathers device information.
2. The agent sends a registration request.
3. The cloud checks whether the device already exists.
4. If the device exists, its information is updated.
5. If the device does not exist, a new record is created.

## Online Status

The registry stores the current state of each device.

Possible states:

- Online
- Offline

Future versions will automatically update device status using heartbeat events and WebSocket connections.

## Last Seen

Every device stores a timestamp indicating when it last communicated with the cloud.

Example:

```json
{
  "lastSeen": "2026-06-21T04:31:59.094Z"
}
```

This allows JES to determine whether a device is currently active.

## Future Enhancements

Planned improvements:

- Heartbeat monitoring
- Automatic offline detection
- Device grouping
- Device tags
- Device health monitoring
- Multi-user support

## Related Components

- JES Agent
- JES Cloud API
- Authentication
- Device Pairing
