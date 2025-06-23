# EdgeQR - Offline Door Access System

A React Native/Expo application for secure door access control using QR code scanning. This app works completely offline, storing all data locally on the device.

## 🚀 Features

- **Offline Operation**: No internet connection required - all data stored locally
- **QR Code Scanning**: Fast and reliable QR code scanning using device camera
- **Door Selection**: Choose from multiple doors before scanning
- **Access Control**: Role-based access with admin, staff, and visitor levels
- **Real-time Feedback**: Immediate success/failure notifications with haptic feedback
- **Access Logging**: Complete history of all access attempts with timestamps
- **Responsive Design**: Works on both iOS and Android devices
- **Clean UI**: Modern interface with consistent theming

## 📱 Screenshots

The app includes:
- Door selection screen with picker
- QR code scanner with camera permissions
- Success/failure result screens
- Access log with filterable history
- Menu system for easy navigation

## 🛠 Tech Stack

- **React Native** with Expo SDK 53
- **TypeScript** for type safety
- **React Navigation** for screen navigation
- **Expo Camera** for QR code scanning
- **AsyncStorage** for local data persistence
- **Styled Components** for styling
- **Expo Haptics** for tactile feedback

## 📋 Prerequisites

- Node.js (v16 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)
- Physical device recommended for camera testing

## 🚀 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd edgeqr-door-access
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npx expo start
   \`\`\`

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app for physical device testing

## 📊 Data Structure

### Users
\`\`\`json
[
  {
    "uid": "EMP001",
    "name": "Alice",
    "level": "admin",
    "doors": ["D1", "D2", "D3"]
  }
]
\`\`\`

### Doors
\`\`\`json
[
  {
    "id": "D1",
    "name": "Reception"
  }
]
\`\`\`

### Access Levels
- **Admin**: Access to all doors
- **Staff**: Access to specific doors based on role
- **Visitor**: Limited access (typically reception only)

## 🔧 Configuration

### Adding New Users
Edit the user data in `src/services/access.ts` in the `initializeData()` function:

\`\`\`typescript
const users: User[] = [
  { uid: "EMP004", name: "New Employee", level: "staff", doors: ["D1", "D2"] },
  // ... existing users
]
\`\`\`

### Adding New Doors
Add doors in the same `initializeData()` function:

\`\`\`typescript
const doors: Door[] = [
  { id: "D4", name: "Conference Room" },
  // ... existing doors
]
\`\`\`

### Customizing Access Rules
Modify the `checkAccess()` function in `src/services/access.ts` to implement custom access logic.

## 📱 Usage

1. **Select Door**: Choose which door you want to access from the dropdown
2. **Enable Camera**: Grant camera permissions when prompted
3. **Scan QR Code**: Point camera at employee QR code
4. **View Result**: See immediate feedback on access granted/denied
5. **Check History**: View access logs through the menu or success screen

## 🔒 Security Features

- **Local Storage**: All data stored securely on device
- **Role-based Access**: Different permission levels for different user types
- **Access Logging**: Complete audit trail of all access attempts
- **Offline Operation**: No network vulnerabilities

### Test QR Codes
Create QR codes with these values for testing:
- `EMP001` - Admin access (all doors)
- `EMP002` - Staff access (limited doors)
- `EMP003` - Visitor access (reception only)
- `INVALID` - Unknown user test

## 🚀 Deployment

### Building for Production

**iOS:**
\`\`\`bash
npx expo build:ios
\`\`\`

**Android:**
\`\`\`bash
npx expo build:android
\`\`\`
