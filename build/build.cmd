@echo off
cls

phantomjs generate.js "http://localhost/fred/cv/template/cv.html?lang=fr" "../cv/fr/Fred-Jacobs.dotNet.pdf" "../cv/fr/index.html"

phantomjs generate.js "http://localhost/fred/cv/template/cv.html?lang=en" "../cv/en/Fred-Jacobs.dotNet.pdf" "../cv/en/index.html"