#!/bin/sh
git add .
git commit -am "$1"
echo "Commit Done"
git push
echo "Push Done"
ng build --prod --base-href "https://sv2423.github.io/speechRecognition/"
echo "Build Done"
ngh
echo "Publish Done"