#!/usr/bin/env bash
# Usage: scripts/capture.sh <simulator-udid> [out-dir]
# Shoots the app at the default text size, after a live change to XXXL, and
# after a relaunch at XXXL. Compare 2-live-xxxl.png with 3-relaunch-xxxl.png.
set -euo pipefail

UDID=$1
OUT=${2:-captures}
BUNDLE=${BUNDLE:-org.reactjs.native.example.FontScaleRepro}

shot() { xcrun simctl io "$UDID" screenshot "$OUT/$1.png" >/dev/null 2>&1; }
relaunch() {
  xcrun simctl terminate "$UDID" "$BUNDLE" 2>/dev/null || true
  xcrun simctl launch "$UDID" "$BUNDLE" >/dev/null
  sleep 6
}

mkdir -p "$OUT"
xcrun simctl status_bar "$UDID" override --time 9:41
xcrun simctl ui "$UDID" content_size large
relaunch
shot 1-default

xcrun simctl ui "$UDID" content_size extra-extra-extra-large
sleep 4
shot 2-live-xxxl

relaunch
shot 3-relaunch-xxxl
xcrun simctl ui "$UDID" content_size large

echo "Compare $OUT/2-live-xxxl.png with $OUT/3-relaunch-xxxl.png"
