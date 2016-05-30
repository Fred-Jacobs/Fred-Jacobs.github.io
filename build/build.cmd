@echo off
cls

set templatePath=http://localhost/fred/cv/template/clouded.html

phantomjs generate.js "%templatePath%?lang=fr" "../cv/fr/Fred-Jacobs.dotNet.pdf" "../cv/fr/index.html"

phantomjs generate.js "%templatePath%?lang=en" "../cv/en/Fred-Jacobs.dotNet.pdf" "../cv/en/index.html"