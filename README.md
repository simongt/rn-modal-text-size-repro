# Text inside a Modal ignores a live text size change (iOS, Fabric)

Minimal repro for a React Native 0.88.0 regression. On iOS with the New Architecture, `Text` inside a `<Modal>` keeps its old size after the system text size changes while the app is open. The `TextInput`s update, and relaunching the app fixes everything. The same `App.tsx` on a 0.86.3 template updates correctly.

## Steps

1. `npm install`, then `cd ios && bundle install && bundle exec pod install`.
2. Build and install a Release build on an iOS simulator, for example `npx react-native run-ios --mode Release`.
3. Run `scripts/capture.sh <simulator-udid>`, or by hand:
   1. Launch the app at the default text size.
   2. With the app open, run `xcrun simctl ui <simulator-udid> content_size extra-extra-extra-large` (or change Settings > Accessibility > Display & Text Size > Larger Text).
   3. Relaunch the app at that size and compare.

## Expected

After the live change, the screen matches a fresh launch at the same size.

## Actual on 0.88.0

Every `Text` stays at the default size. Only the two `TextInput`s grow.

| Version | Default size | Live change to XXXL | Relaunch at XXXL |
| --- | --- | --- | --- |
| 0.88.0 | ![](captures/0.88.0/1-default.png) | ![](captures/0.88.0/2-live-xxxl.png) | ![](captures/0.88.0/3-relaunch-xxxl.png) |
| 0.86.3 | ![](captures/0.86.3/1-default.png) | ![](captures/0.86.3/2-live-xxxl.png) | ![](captures/0.86.3/3-relaunch-xxxl.png) |

Captured on an iPhone 17 Pro simulator, iOS 26.5, Release builds with the default prebuilt core.
