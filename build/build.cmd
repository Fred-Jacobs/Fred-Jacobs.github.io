@echo off
cls

set templatePath=http://localhost/fred/cv/template/cv.html

phantomjs generate.js "%templatePath%?lang=fr" "../pdf/Fred-Jacobs.dotNet.(fr).pdf" "../cv/fr/Fred-Jacobs.dotNet.pdf" "../cv/fr/index.html"

phantomjs generate.js "%templatePath%?lang=en" "../pdf/Fred-Jacobs.dotNet.(en).pdf" "../cv/en/Fred-Jacobs.dotNet.pdf" "../cv/en/index.html"