call git checkout develop
call git add .
call git commit -am %1
echo "Commit Done"
call git push
echo "Push Done"
call ng build --prod --base-href "https://sv2423.github.io/speechRecognition/"
echo "Build Done"
call ngh
echo "Publish Done"