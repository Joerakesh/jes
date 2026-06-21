# JES Architecture

## Vision

Monitor, control and automate devices from anywhere.

## Components

### JES Agent

Runs on devices.

Responsibilities:

- System Monitoring
- Docker Monitoring
- Command Execution
- WebSocket Communication

### JES Cloud API

Central coordination service.

Responsibilities:

- Authentication
- Device Registry
- Pairing
- Notifications

### JES Mobile App

Flutter application.

Responsibilities:

- Monitoring
- Device Management
- Remote Actions

## Data Flow

Mobile App
↓
JES Cloud API
↓
JES Agent

## Version

Current Version: 0.1.0-alpha
