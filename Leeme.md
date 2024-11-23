Esta es la la secuencia en la terminal de Visual Code Studio

PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>

PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>


PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>

PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images>
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git config --global user.name "lmsu"
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git config --global user.email "lsalinasuban@hotmail.com"
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git config --global push.default "matching"              
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git init
Initialized empty Git repository in C:/Users/LUIS SALINAS/Desktop/Desarrollos web/proyectos/43-rotating images/.git/
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git add .
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git commit -m "configuración inicial 06/11/2024"
[master (root-commit) 7a3f255] configuración inicial 06/11/2024
 7 files changed, 75 insertions(+)
 create mode 100644 .vscode/settings.json
 create mode 100644 fotos/graf1.jpg
 create mode 100644 fotos/graf2.jpg
 create mode 100644 fotos/graf3.jpg
 create mode 100644 fotos/graf4.jpg
 create mode 100644 index.html
 create mode 100644 styles.css
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git log
commit 7a3f255405911d4389b2542b11341dd3a1398dde (HEAD -> master)
Author: lmsu <lsalinasuban@hotmail.com>
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git log
commit 7a3f255405911d4389b2542b11341dd3a1398dde (HEAD -> master)
Author: lmsu <lsalinasuban@hotmail.com>
commit 7a3f255405911d4389b2542b11341dd3a1398dde (HEAD -> master)
Author: lmsu <lsalinasuban@hotmail.com>
Date:   Wed Nov 6 16:49:07 2024 +0100

Date:   Wed Nov 6 16:49:07 2024 +0100

    configuración inicial 06/11/2024

    configuración inicial 06/11/2024
    configuración inicial 06/11/2024
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git remote add origin https://github.com/lmsu/rotacion-img.git
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git remote add origin https://github.com/lmsu/rotacion-img.git
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git branch -M main
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git push -u origin main
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git push -u origin main
Enumerating objects: 11, done.
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (11/11), 295.56 KiB | 26.87 MiB/s, done.
Total 11 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Total 11 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/lmsu/rotacion-img.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git push
To https://github.com/lmsu/rotacion-img.git
 ! [rejected]        repo -> repo (non-fast-forward)
error: failed to push some refs to 'https://github.com/lmsu/rotacion-img.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\43-rotating images> git push -u origin repo
To https://github.com/lmsu/rotacion-img.git
 ! [rejected]        repo -> repo (non-fast-forward)
error: failed to push some refs to 'https://github.com/lmsu/rotacion-img.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.