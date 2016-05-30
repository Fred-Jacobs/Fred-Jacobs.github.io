@echo off
cls

phantomjs generate.cloud.js "http://localhost/fred/cv/template/cv.html?cloud=1" "../cv/template/cv.html" "../css/cloud.css"
