# SSH KEYS HOW TO

1. Go in the user folder (gmaggi), hence just open the terminal
2. create the folder .ssh with the command `mkdir .ssh`
3. create the file id_rsa `touch id_rsa`
4. open the file id_rsa `open id_rsa` and paste inside the the private key of the SSH
5. create the file config with `touch config` and add the following lines

```
# GitHub
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/rsa_github

# Azure DevOps
Host ssh.dev.azure.com
  IdentityFile ~/.ssh/rsa_deloitte
  IdentitiesOnly yes
  HostkeyAlgorithms +ssh-rsa
  PubkeyAcceptedKeyTypes +ssh-rsa
```
6. then secure the `id_rsa` file with the comand `chmod 400 ~/.ssh/id_rsa;`
7. finally add the ssh key to the keychain with the command `ssh-add --apple-use-keychain ~/.ssh/id_rsa`
7. * sometimes github loose the access to the RSA key, launch this to solve the problem `ssh-add --apple-use-keychain ~/.ssh/id_rsa_github` -> I think that is NETSKOPE
8. the step 7 needs to be repeated with all the ssh keys 

Use Comand `ssh-add --apple-use-keychain ~/.ssh/id_rsa_github` for adding github ssh