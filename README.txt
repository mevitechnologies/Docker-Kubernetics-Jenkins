MEVI TECHNOLOGIES — DEVOPS LEARNING GUIDE

CONTENTS
- index.html: detailed practical explanations and step-by-step instructions
- style.css: responsive layout, fixed desktop navigation, colors, and diagrams
- script.js: copy buttons, search, progress checklist, quiz, and print/PDF

HOW TO OPEN
1. Extract the ZIP.
2. Keep index.html, style.css, script.js, and this README in the same folder.
3. Open index.html in Chrome, Edge, or Safari.
4. Internet access is needed for Bootstrap, Bootstrap Icons, Google Fonts, and the Mevi logo hosted on the Mevi Technologies website.
5. Visual reference links open Google Images searches for Jenkins, Kubernetes, Docker, Git, GitHub, and Nginx. They are links rather than embedded image files.

IMPORTANT LAB NOTES
- Replace YOUR-USERNAME with your own GitHub username.
- Run commands from the project folder unless an instruction says otherwise.
- The Jenkins Docker socket mount gives Jenkins powerful access to the host Docker daemon. Use only on a trusted, disposable lab machine; never run untrusted pipeline code with this access.
- Docker Desktop Kubernetes behavior and local image availability vary by version. If a Pod cannot find an image, inspect Pod Events and follow the relevant image-loading instructions.
- localhost means the current computer; this local lab does not publish the website to the public internet.
- Never commit credentials, access tokens, or passwords to Git or include them in Docker images/Jenkinsfiles.
