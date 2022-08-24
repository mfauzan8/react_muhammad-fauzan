## GIT

Merupakan salah satu *version control system* populer yang digunakan para developer dalam mengembangkan software secara bersama-sama. Git track every file changes.

#### Version Control System
- single user
- centralized
- distributed

#### Setting Up
- git init = membuat repository di file lokal
- git clone = untuk mensinkronisasi with existing project di github
- git config = melakukan configurasi git

#### Saving Changes
- git status = akan menampilkan branch dan perubahan yg terjadi ada project
- git add = menjadikan file dari working directory menjadi staging area
contoh :    git add .
            git add test.js
- git commit = siap dikirimkan ke server git
contoh  : git commit -m "pesan"
- git diff = menginspeksi perubahan yang kita lakukan ketika bekerja pada suatu repositori Git
- git stash = untuk membuat penyimpanan sementara dari perubahan yg ada
- git ignore = membuat file 
tidak di upload ke server
#### Syncing 
- git remote    
- git push = mengirim file yang telah di commit ke remote repository.
- git pull = mengambil perubahan data yang ada di master dan di merge ke branch
- git fetch = hanya mengambil perubaan data