---
sidebar_position: 3
---

# Architecture

## Vision

Monitor, control and automate devices from anywhere.

## Components

### JES Agent

Runs on Linux devices.

Responsibilities:

- System Monitoring
- Docker Monitoring
- Remote Command Execution
- Realtime Communication

### JES Cloud API

Central coordination layer.

Responsibilities:

- Authentication
- Device Registry
- Device Pairing
- Notifications

### JES Mobile App

Flutter application.

Responsibilities:

- Monitoring
- Device Management
- Remote Actions

## Data Flow

```text
Phone
  ↓
Cloud API
  ↓
Agent
```

## Future

JES will support:

- Multiple Devices
- Plugins
- Automation
- Notifications
