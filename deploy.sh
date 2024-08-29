# scp -i ~/.ssh/psi_jara -P 22 -r --exclude ./team.html --exclude ./template.html --exclude ./.gitignore --exclude ./README.md --exclude ./deploy.sh --exclude ./.vscode ./ psi@www.jara.or.jp:2023university

# scp -i ~/.ssh/psi_jara -P 22 -r ./ psi@www.jara.or.jp:2023university

# rsync -p 22 -i ~/.ssh/psi_jara --exclude="./deploy.sh" --exclude=".*/" --exclude="" --exclude="./template.html" --exclude="./team.html" -r ./ psi@www.jara.or.jp:2023university

# rsync -e "ssh -i ~/.ssh/psi_jara" -avz --exclude '.*/,./README.md,./template.html,./team.html,./deploy.sh' -r ./ psi@www.jara.or.jp:2023university

# これで本来できるが、エラーでダメだった
# rsync -e "ssh -p 22 -i ~/.ssh/psi_jara" -avz --exclude={'.*','README.md','template.html','team.html','deploy.sh'} -r ./ psi@www.jara.or.jp:2023university

scp -i ~/.ssh/psi_jara -r `ls | grep -Ev "README|deploy|team|template"` ./ psi@www.jara.or.jp:2024university
