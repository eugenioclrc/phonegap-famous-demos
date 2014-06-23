To sign apk;

keytool -genkey -v -keystore famousapp.keystore -alias FamousDemos -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore famousapp.keystore bin/FamousDemos-release-unsigned.apk FamousDemos

jarsigner -verify -verbose -certs bin/FamousDemos-release-unsigned.apk

zipalign -v 4 bin/FamousDemos-release-unsigned.apk FamousDemos.apk