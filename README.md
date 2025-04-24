## template-playwright

[![playwright.webp](playwright.webp)](https://playwright.dev)

### usage

```console
$ corepack pnpm run-script version

> @gbernard/template-playright@0.0.1 version /home/user/git/template-playright
> echo $npm_package_version

0.0.1

$ corepack pnpm install

dependencies:
+ eslint 8.57.0
+ playwright 1.43.0

Done in 1.6s

$ corepack pnpm exec playwright install chromium
...

$ corepack pnpm start

> @gbernard/template-playright@0.0.1 start /home/user/git/template-playwright
> node server.js

https://playwright.dev/
https://playwright.dev/js/redirection.js
https://playwright.dev/assets/css/styles.51270126.css
https://playwright.dev/assets/js/runtime~main.d31bdc19.js
https://playwright.dev/assets/js/main.6173e52f.js
https://playwright.dev/img/playwright-logo.svg
https://playwright.dev/img/logos/Browsers.png
https://playwright.dev/img/logos/VSCode.png
https://playwright.dev/img/logos/Bing.png
https://playwright.dev/img/logos/Outlook.png
https://playwright.dev/img/logos/DHotstar.jpg
https://playwright.dev/img/logos/MUI.png
https://playwright.dev/img/logos/ING.png
https://playwright.dev/img/logos/Adobe2.png
https://playwright.dev/img/logos/ReactNavigation.png
https://playwright.dev/img/logos/accessibilityinsights.png
https://playwright.dev/assets/js/1df93b7f.50a7fe1e.js
https://playwright.dev/assets/js/68b9bced.7dc7168a.js
https://playwright.dev/assets/js/5e95c892.f7d0b467.js
https://playwright.dev/assets/js/04005ac5.b017dc93.js
https://playwright.dev/assets/js/a7bd4aaa.fd6fe558.js
https://playwright.dev/assets/js/1fb8e72b.442f2b8e.js
https://playwright.dev/assets/js/a94703ab.483a4b0d.js
https://playwright.dev/assets/js/17896441.e06a126c.js
https://playwright.dev/assets/js/4cf51b27.529a7224.js
https://playwright.dev/assets/js/e7d7f994.434adc7b.js
https://playwright.dev/assets/js/306a8c6c.09b4b7ad.js
https://playwright.dev/assets/js/083f60f3.28101563.js
https://playwright.dev/assets/js/90f396e5.be25fc17.js
https://playwright.dev/assets/js/1df93b7f.50a7fe1e.js
https://playwright.dev/assets/js/68b9bced.7dc7168a.js

$ identify capture.png
capture.png PNG 1024x3493 1024x3493+0+0 8-bit sRGB 474296B 0.000u 0:00.000

$ corepack pnpm run-script lint

> @gbernard/template-playright@0.0.1 lint /home/user/git/template-playwright
> eslint --max-warnings=0 server.js

$ make clean

/!\ cleaning...
rm --force capture.png
rm --force --recursive node_modules
...done
```

> MIT License  
> ghislain.bernard@gmail.com
