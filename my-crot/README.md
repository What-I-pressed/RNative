# PD211 React Native

```
npm start
```

## Add Tailindcss
```
npx expo install nativewind tailwindcss
npx tailwindcss init
```
## Add code tailwindcss.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add file global.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Add file babel.config.js
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

## Add file metro.config.js
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
```
## Import your CSS file app\_layout.tsx
```
import "../global.css"
```

## Test tailwind css
```
<Text className = "text-color-red">Hello!<Text>
```

## Clear cache
```
npm start -- --reset-cache
npx expo start --clear
```

## Add Query Login
```
npm i react-redux
npm i @reduxjs/toolkit
npm i jwt-decode

npm install react-native-dotenv

npx expo install expo-secure-store
```

## Add working images
```
npx expo install expo-image-picker
npx expo install expo-file-system
npm i object-to-formdata
```

