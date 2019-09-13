
## git push error github publickey error

如果你的电脑只有一个git环境，那么极大多数情况是由于 GitHub 账号没有设置 ssh 公钥信息所致。 
前往 GitHub 网站的"account settings"依次点击"Setting -> SSH Keys"->"New SSH key"Title处填写“id_rsa.pub”或其他任意信息。 
key处原样拷贝下面命令的打印 ~/.ssh/id_rsa.pub 
文件的内容：cat ~/.ssh/id_rsa.pub

如没有则按下述方法生成： ssh-keygen -t rsa输入文件名的地方输入可以输入自定义文件名，默认是id_rsa，然后一路回车...... 
注意如果自定义文件名的话，需要加一个config文件，下文有介绍。
最后，输入ssh -T git@github.com如果没有报错，再尝试输出就应该有了cat ~/.ssh/id_rsa.pub如果报错了，或者说设置了 sshkey 还是 permission denied 怎么回事?回到如下命令，检查当前配置的SSH对应的git账号；ssh -T git@github.com然后用如下命令(id_rsa对应目标账户的私钥)命令，制定目标Git账号ssh-add -K ~/.ssh/id_rsa