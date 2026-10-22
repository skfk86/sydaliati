#!/usr/bin/env bash
# يضيف صلاحيات الموقع إلى AndroidManifest بعد "npx cap add android"
set -e
M=android/app/src/main/AndroidManifest.xml
for p in ACCESS_COARSE_LOCATION ACCESS_FINE_LOCATION; do
  grep -q "$p" "$M" || sed -i "s#</manifest>#    <uses-permission android:name=\"android.permission.$p\" />\n</manifest>#" "$M"
done
grep -q 'android.hardware.location.gps' "$M" || sed -i 's#</manifest>#    <uses-feature android:name="android.hardware.location.gps" android:required="false" />\n</manifest>#' "$M"
echo "permissions ok"
